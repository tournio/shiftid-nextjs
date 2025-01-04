/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import'],
  },
}

module.exports = nextConfig
