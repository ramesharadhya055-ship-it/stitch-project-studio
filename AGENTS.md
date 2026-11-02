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

- The home route renders the imported SUNWAY design as one raw HTML document
  (`src/site-import/sunway-home.html` imported with `?raw` and injected on
  mount in `src/routes/index.tsx`). Edit page content there, not in JSX; its
  inline scripts are IIFE-wrapped with `window.*` exports and re-executed after
  injection, so keep any new interactive logic in that same script style.
- The design's Tailwind CDN config (solar/sunblue palettes, marquee and
  pulse-glow animations) is registered as `@theme` tokens in `src/styles.css`;
  captured theme variables and forms-plugin base styles live in
  `src/styles/site.css`.
