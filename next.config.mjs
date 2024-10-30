/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: "media2.dev.to"
        }]
    }
};

export default nextConfig;
