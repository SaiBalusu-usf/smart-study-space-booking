# Smart Study Space App

This Next.js repository is a prototype. The tracked `.env.local` contained a Canvas access token. The file is removed from the current tree and ignored going forward, but the token remains exposed in prior Git history until the owner revokes it in Canvas.

Do not put Canvas tokens in `NEXT_PUBLIC_*` variables: Next.js exposes those values to browser code. If Canvas integration is added, use a server-side authentication flow and keep credentials in private server-side configuration. No Canvas credential is required to run the current code in this repository.

## Local setup

Run `npm install` and `npm run dev`, then open `http://localhost:3000`. Copy `.env.example` to a private local environment file only if server-side configuration is later needed. Do not commit local env files.

The owner should revoke the exposed token in Canvas Account > Settings > Approved Integrations, review its recent use, and enter any replacement privately after a server-side integration is designed.
