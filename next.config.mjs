/** @type {import('next').NextConfig} */

import NextFederationPlugin from "@module-federation/nextjs-mf";

const isProduction = process.env.NODE_ENV === 'production';
const isPreview = process.env.VERCEL_ENV === 'preview';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    config.output.publicPath = isPreview ? 'https://structure-staging.vercel.app/_next/' : (isProduction ?  'https://structure-dusky.vercel.app/_next/' : 'http://localhost:3005/_next/');
    config.plugins.push(
      new NextFederationPlugin({
        name: "structure",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
           './Header': "./src/components/Header.tsx",
           './Footer': "./src/components/Footer.tsx",
        },
        remotes: {
          cart: isPreview ? 'cart@https://cart-staging.vercel.app/remoteEntry.js' : (isProduction ?  'cart@https://mf-cart.vercel.app/remoteEntry.js' : `cart@http://localhost:3009/remoteEntry.js`),
        },
        shared: {
          react: { singleton: true, requiredVersion: false },
          "react-dom": { singleton: true, requiredVersion: false },
        },
        extraOptions: {
          automaticAsyncBoundary: true,
        },
      })
    );
    return config;
  },
};

export default nextConfig;