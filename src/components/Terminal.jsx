import { useEffect, useState } from "react";

const LINES = [
  { prompt: "whoami", output: "Your Name — Web / Software Developer" },
  { prompt: "cat stack.txt", output: "React · Node.js · TypeScript · PostgreSQL" },
  { prompt: "status", output: "Open to new opportunities ✓" },
];

export default function Terminal() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showOutput, setShowOutput] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (lineIndex >= LINES.length) return;
    const current = LINES[lineIndex].prompt;

    if (charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 45);
      return () => clearTimeout(t);
    }
    if (!showOutput) {
      const t = setTimeout(() => setShowOutput(true), 300);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setHistory((h) => [...h, LINES[lineIndex]]);
      setLineIndex((i) => i + 1);
      setCharIndex(0);
      setShowOutput(false);
    }, 900);
    return () => clearTimeout(t);
  }, [charIndex, showOutput, lineIndex]);

  const typing = LINES[lineIndex]?.prompt.slice(0, charIndex);

  return (
    <div className="w-full max-w-md rounded-xl border border-slate-800 bg-slate-900 shadow-2xl">
      <div className="flex items-center gap-1.5 border-b border-slate-800 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
        <span className="ml-2 font-mono text-xs text-slate-500">terminal</span>
      </div>
      <div className="min-h-[168px] px-4 py-4 font-mono text-sm leading-relaxed">
        {history.map((line, i) => (
          <div key={i} className="mb-2">
            <p className="text-slate-500"><span className="text-green-400">➜</span> {line.prompt}</p>
            <p className="text-slate-200">{line.output}</p>
          </div>
        ))}
        {lineIndex < LINES.length && (
          <div>
            <p className="text-slate-500">
              <span className="text-green-400">➜</span> {typing}
              <span className="animate-pulse">▍</span>
            </p>
            {showOutput && <p className="text-slate-200">{LINES[lineIndex].output}</p>}
          </div>
        )}
      </div>
    </div>
  );
}