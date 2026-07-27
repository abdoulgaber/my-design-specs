/**
 * Minimal, dependency-free HTML shown when the app fails to render on the
 * server. Deliberately inline-styled: at this point the asset pipeline is
 * exactly what we cannot rely on.
 */
export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>This page didn't load</title>
  </head>
  <body style="margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#060606;color:#fff;font-family:Helvetica,Arial,sans-serif">
    <main style="max-width:28rem;padding:0 1rem;text-align:center">
      <h1 style="margin:0;font-size:1.25rem;font-weight:600">This page didn't load</h1>
      <p style="margin:0.5rem 0 1.5rem;font-size:0.875rem;color:rgba(255,255,255,0.6)">
        Something went wrong on our end. You can try refreshing or head back home.
      </p>
      <a
        href="/"
        style="display:inline-flex;align-items:center;justify-content:center;padding:0.5rem 1rem;font-size:0.875rem;font-weight:500;color:#10090a;background:#f6b03c;border-radius:999px;text-decoration:none"
        >Go home</a
      >
    </main>
  </body>
</html>
`;
}
