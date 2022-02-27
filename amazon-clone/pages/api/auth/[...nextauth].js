import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";


export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
    }),
    
    // ...add more providers here
  ],
  secret: process.env.SECRET,
  
  jwt:{
    encryptions:true,
  
  },
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
  
    // redirect: async (url, _baseUrl) => {
    //   return Promise.resolve(url)
    // }

  },
  debug:true

})