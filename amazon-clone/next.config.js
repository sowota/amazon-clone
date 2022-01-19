/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: false, // 追記
  images:{
    domains: ['links.papareact.com', 'fakestoreapi.com']
  },

  env:{
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY
  }
}
