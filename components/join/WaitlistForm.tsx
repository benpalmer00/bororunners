"use client";

import { useState } from "react";

const sessionOptions = ["Monday", "Wednesday", "Thursday", "Friday"];

const abilityOptions = [
  "Complete beginner",
  "Occasional runner",
  "Regular runner",
  "Competitive runner",
];

export default function WaitlistForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    sessions: [] as string[],
    ability: "",
    heardFrom: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function toggleSession(day: string) {
    setForm((prev) => ({
      ...prev,
      sessions: prev.sessions.includes(day)
        ? prev.sessions.filter((s) => s !== day)
        : [...prev.sessions, day],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || form.sessions.length === 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border-2 border-green-200 rounded-xl p-10 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-bold uppercase text-brand-black mb-2">You&apos;re on the list!</h3>
        <p className="text-brand-gray-600">
          Thanks {form.name.split(" ")[0]} — we&apos;ve received your request and Ben will be in touch as soon as a place becomes available.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 space-y-6">

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-brand-black mb-1">
            Full Name <span className="text-brand-red">*</span>
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            placeholder="Jane Smith"
            className="w-full border border-brand-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-brand-black mb-1">
            Email Address <span className="text-brand-red">*</span>
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            placeholder="jane@example.com"
            className="w-full border border-brand-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-brand-black mb-1">
          Phone Number <span className="text-brand-gray-400 font-normal">(optional)</span>
        </label>
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
          placeholder="07700 900000"
          className="w-full border border-brand-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-brand-black mb-3">
          Which sessions are you interested in? <span className="text-brand-red">*</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {sessionOptions.map((day) => {
            const active = form.sessions.includes(day);
            return (
              <button
                key={day}
                type="button"
                onClick={() => toggleSession(day)}
                className={`py-3 rounded-lg border-2 text-sm font-display font-bold uppercase transition-colors ${
                  active
                    ? "bg-brand-red border-brand-red text-white"
                    : "bg-white border-brand-gray-200 text-brand-black hover:border-brand-red"
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-brand-black mb-1">
          How would you describe your running? <span className="text-brand-gray-400 font-normal">(optional)</span>
        </label>
        <select
          value={form.ability}
          onChange={(e) => setForm((p) => ({ ...p, ability: e.target.value }))}
          className="w-full border border-brand-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red bg-white"
        >
          <option value="">Select an option</option>
          {abilityOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-bold text-brand-black mb-1">
          How did you hear about us? <span className="text-brand-gray-400 font-normal">(optional)</span>
        </label>
        <input
          type="text"
          value={form.heardFrom}
          onChange={(e) => setForm((p) => ({ ...p, heardFrom: e.target.value }))}
          placeholder="Facebook, friend, Google..."
          className="w-full border border-brand-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red"
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm">Something went wrong — please try again or email us directly.</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting" || !form.name || !form.email || form.sessions.length === 0}
        className="w-full bg-brand-red text-white font-display font-bold uppercase py-4 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-base tracking-wide"
      >
        {status === "submitting" ? "Submitting…" : "Join the Waiting List"}
      </button>

      <p className="text-xs text-brand-gray-400 text-center">
        Your details will only be used to contact you about joining Bororunners. We won&apos;t share them with anyone else.
      </p>
    </form>
  );
}
