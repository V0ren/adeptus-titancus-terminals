import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export into `out/`, which is what GitHub Pages serves.
  output: "export",
  // Set by the deploy workflow from the `configure-pages` action, so the
  // sub-path (`/adeptus-titancus-terminals`) never has to be hardcoded.
  basePath: process.env.PAGES_BASE_PATH,
  // The default image loader needs a server, which a static export has not.
  images: { unoptimized: true },
};

export default nextConfig;
