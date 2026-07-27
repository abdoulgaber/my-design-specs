/**
 * Records the most recent unhandled server-side error so the request
 * handler can surface the real cause instead of the generic error h3
 * produces once it has swallowed the throw.
 *
 * Importing this module for its side effects installs the process-level
 * listeners; `consumeLastCapturedError()` reads and clears the slot.
 */
let lastCapturedError: unknown;

export function captureError(error: unknown): void {
  lastCapturedError = error;
}

export function consumeLastCapturedError(): unknown {
  const error = lastCapturedError;
  lastCapturedError = undefined;
  return error;
}

if (typeof process !== "undefined" && typeof process.on === "function") {
  process.on("uncaughtException", captureError);
  process.on("unhandledRejection", captureError);
}
