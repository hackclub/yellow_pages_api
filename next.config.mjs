/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: () => {
    return [
      {
        source: "/data",
        destination: "/api/data",
      },
      {
        source: "/search",
        destination: "/api/search",
      },
      {
        source: "/icons",
        destination: "/api/icons",
      },
      {
        source: "/icons/:path*",
        destination: "https://raw.githubusercontent.com/hackclub/yellow_pages/refs/heads/main/lib/assets/icons/:path*",
      },
    ]
  }
};

export default nextConfig;
