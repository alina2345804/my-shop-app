import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        return config;
    },
    images: {
        // Убедитесь, что здесь правильный домен из вашего URL
        domains: ['cdn-bucket.hb.ru-msk.vkcs.cloud'],
    },
};

export default nextConfig; // Экспортируем ОДИН объект