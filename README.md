# Smart Study Space App

This Next.js repository is a prototype. The tracked `.env.local` contained a Canvas access token. The file is removed from the current tree and ignored going forward, but the token remains exposed in prior Git history until the owner revokes it in Canvas.

Do not put Canvas tokens in `NEXT_PUBLIC_*` variables: Next.js exposes those values to browser code. If Canvas integration is added, use a server-side authentication flow and keep credentials in private server-side configuration. No Canvas credential is required to run the current code in this repository.

## Local setup

This checkout contains package/configuration files but no `app` or `pages` directory.
`npm run build` therefore cannot build an application. Restore the intended source
before attempting to run or deploy it; this security change does not invent it.

Use Node 20.9 or newer and `npm ci --ignore-scripts` for the reviewed lockfile.
`npm test` checks Tailwind utility generation with the patched CSS parser.
Next.js is updated from 13 to patched 15.5.28, retaining React 18; PostCSS and
selector-parser overrides remove the remaining parser advisories. A clean package
audit and this focused test do not establish application compatibility. The Next.js
major migration needs a complete build and integration tests after source recovery.

Copy `.env.example` to a private local environment file only if server-side
configuration is later needed. Do not commit local env files.

The owner should revoke the exposed token in Canvas Account > Settings > Approved Integrations, review its recent use, and enter any replacement privately after a server-side integration is designed.
