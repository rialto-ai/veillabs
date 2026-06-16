/** @type {import('next').NextConfig} */

// When deployed to GitHub Pages under a project path (e.g. /veillabs),
// set PAGES_BASE_PATH so assets and links resolve correctly. Empty for
// root/custom-domain hosting.
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
