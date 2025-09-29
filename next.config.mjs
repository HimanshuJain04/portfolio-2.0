/** @type {import('next').NextConfig} */
const nextConfig = {
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