import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`${baseUrl}/users`);
        if (!res.ok) throw new Error("Failed to fetch users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [baseUrl]);

  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <p className="mb-3 font-mono text-sm text-blue-600">Practice</p>
      <h1 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        Users
      </h1>
      <p className="mt-4 text-base leading-relaxed text-slate-600">
        A small demo fetching dummy JSON data, with the API base URL read
        from an environment variable.
      </p>

      {loading && <p className="mt-6 text-sm text-slate-500">Loading...</p>}
      {error && <p className="mt-6 text-sm text-red-600">{error}</p>}

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {users.map((user) => (
          <div
            key={user.id}
            className="rounded-xl border border-slate-200 bg-slate-50 p-5"
          >
            <h2 className="font-display text-lg font-semibold text-slate-900">
              {user.name}
            </h2>
            <p className="mt-1 font-mono text-sm text-blue-600">
              @{user.username}
            </p>
            <p className="mt-2 text-sm text-slate-600">{user.email}</p>
            <p className="mt-1 text-sm text-slate-600">{user.company.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}