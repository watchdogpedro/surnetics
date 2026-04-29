import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old WordPress contact page → new contact page
      { source: "/contacts", destination: "/contact", permanent: true },
      { source: "/contacts/", destination: "/contact", permanent: true },

      // Old WordPress blog posts → news page
      { source: "/surnetics-news/:slug*", destination: "/news", permanent: true },

      // Old surface coatings / technology pages → technology
      { source: "/gradient-coatings", destination: "/technology", permanent: true },
      { source: "/gradient-coatings/", destination: "/technology", permanent: true },
      { source: "/surface-gradient", destination: "/technology", permanent: true },
      { source: "/surface-coatings/:path*", destination: "/technology", permanent: true },
      { source: "/ivd-coating-services/:path*", destination: "/technology", permanent: true },

      // Old testimonials → about page
      { source: "/testimonial-view/:slug*", destination: "/about", permanent: true },

      // Old broken WordPress paths → home
      { source: "/surnetics/:path*", destination: "/", permanent: true },
      { source: "/working/:path*", destination: "/", permanent: true },
      { source: "/services/:path*", destination: "/", permanent: true },
      { source: "/wp-content/:path*", destination: "/", permanent: true },
      { source: "/wp-login.php", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
