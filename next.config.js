/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'website.waslafaq.net',
                port: '',
            },
        ],
    },
}

module.exports = nextConfig
