"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type EventSignUpModalProps = {
  isOpen: boolean;
  onClose: () => void;
  eventTitle: string;
  eventDate: string;
  eventLocation: string;
};

export default function EventSignUpModal({
  isOpen,
  onClose,
  eventTitle,
  eventDate,
  eventLocation,
}: EventSignUpModalProps) {
  const [step, setStep] = useState<"pin" | "signup">("pin");
  const [pin, setPin] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handlePinSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/verify-pin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      if (data.valid) {
        setStep("signup");
        setStatus("idle");
      } else {
        setStatus("error");
        setErrorMsg("Incorrect PIN. Ask your run leader for the club PIN.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to verify PIN.");
    }
  }

  async function handleSignUpSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/event-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, eventTitle, eventDate }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setName("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to sign up. Please try again.");
    }
  }

  function handleClose() {
    setStep("pin");
    setPin("");
    setName("");
    setStatus("idle");
    setErrorMsg("");
    onClose();
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <div
              className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-brand-red p-5">
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-xl font-bold uppercase text-white">
                    {step === "pin" ? "Members Only" : "Sign Up"}
                  </h2>
                  <button
                    onClick={handleClose}
                    className="text-white/80 hover:text-white transition-colors"
                    aria-label="Close"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="mt-2 text-red-100 text-sm">
                  <p className="font-semibold text-white">{eventTitle}</p>
                  <p>{eventDate} &middot; {eventLocation}</p>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                {status === "success" ? (
                  <div className="text-center py-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-display text-lg font-bold uppercase text-brand-black mb-2">
                      You&apos;re signed up!
                    </h3>
                    <p className="text-brand-gray-600 text-sm">
                      See you at {eventTitle}. Check the WhatsApp group for any updates closer to the day.
                    </p>
                    <button
                      onClick={handleClose}
                      className="mt-6 bg-brand-red text-white font-display font-bold uppercase px-6 py-2 rounded-md hover:bg-brand-red-dark transition-colors text-sm"
                    >
                      Done
                    </button>
                  </div>
                ) : step === "pin" ? (
                  <form onSubmit={handlePinSubmit} className="space-y-4">
                    <div className="text-center mb-2">
                      <div className="w-12 h-12 bg-brand-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-brand-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <p className="text-brand-gray-600 text-sm">
                        Enter the 4-digit club PIN to continue.
                      </p>
                    </div>
                    <div>
                      <input
                        type="text"
                        inputMode="numeric"
                        pattern="\d{4}"
                        maxLength={4}
                        required
                        value={pin}
                        onChange={(e) => setPin(e.target.value.replace(/\D/g, "").slice(0, 4))}
                        className="w-full border border-brand-gray-200 rounded-md px-4 py-3 text-center text-2xl font-display tracking-[0.5em] focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                        placeholder="----"
                        autoFocus
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-red-600 text-sm bg-red-50 p-3 rounded-md text-center">{errorMsg}</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading" || pin.length !== 4}
                      className="w-full bg-brand-red text-white font-display font-bold uppercase py-3 rounded-md hover:bg-brand-red-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                    >
                      {status === "loading" ? "Verifying..." : "Continue"}
                    </button>
                  </form>
                ) : (
                  <form onSubmit={handleSignUpSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="signup-name" className="block text-sm font-medium text-brand-black mb-1">
                        Name
                      </label>
                      <input
                        id="signup-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border border-brand-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                        placeholder="Your full name"
                        autoFocus
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-red-600 text-sm bg-red-50 p-3 rounded-md">{errorMsg}</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full bg-brand-red text-white font-display font-bold uppercase py-3 rounded-md hover:bg-brand-red-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                    >
                      {status === "loading" ? "Signing up..." : "Confirm Sign-Up"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
