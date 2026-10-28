<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture rules

- Keep `vite.config.ts` extending `@lovable.dev/vite-tanstack-config` (defineConfig). Replacing it with a bare Vite config drops the TanStack Start SSR plugin and Tailwind plugin, breaking all routes (404) and styles. Custom `server.allowedHosts` stays inside its `vite.server` option.
