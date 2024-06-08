/** @type {import('next').NextConfig} */

const nextConfig = {
    pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
    env: {
        SUPABASE_URL: process.env.SUPABASE_URL,
        SUPABASE_KEY: process.env.SUPABASE_KEY,
    },
};

export default nextConfig;
