/**
 * Client-side error reporting hook-in.
 *
 * Referenced by the root route's error boundary. Kept dependency-free and
 * side-effect-safe so it can run on the server during SSR as well as in the
 * browser: it only logs, and forwards to a host-provided reporter when one
 * has been injected on `window`.
 */
type ErrorContext = Record<string, unknown>;

interface LovableErrorReporter {
  captureError?: (error: unknown, context?: ErrorContext) => void;
}

declare global {
  interface Window {
    __lovable?: LovableErrorReporter;
  }
}

export function reportLovableError(error: unknown, context: ErrorContext = {}): void {
  console.error("[lovable] unhandled error", error, context);

  if (typeof window === "undefined") return;

  try {
    window.__lovable?.captureError?.(error, context);
  } catch {
    // Never let the reporter itself break the error boundary.
  }
}
