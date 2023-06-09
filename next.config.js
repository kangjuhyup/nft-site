/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // async rewrites() {
    //   return [
    //     {
    //       source: '/:path*',
    //       destination : `http://localhost:8000/:path*`,
    //     }
    //   ]
    // },
    swcMinify: true,
    experimental: {
      appDir: true,
    },
    env: {
      RPC_URL: process.env.RPC_URL,
      NFT_DEPLOYER: process.env.NFT_DEPLOYER,
      ERC20_DEPLOYER: process.env.ERC20_DEPLOYER,
      SERVER_URL: process.env.SERVER_URL,
    },
  
  };
  

module.exports = nextConfig
