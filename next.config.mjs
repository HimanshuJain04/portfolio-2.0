/** @type {import('next').NextConfig} */
const nextConfig = {
    turbopack: {
        root: import.meta.dirname,
    },
    async redirects() {
        return [
            {
                source: '/:path*',
                has: [
                    {
                        type: 'query',
                        key: 'q',
                    },
                ],
                destination: '/',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;