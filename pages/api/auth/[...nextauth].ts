import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'

export default NextAuth({
  providers: [
    GoogleProvider({
      // eslint-disable-next-line turbo/no-undeclared-env-vars
      clientId: '408604892889-ubtj08mj20ictiglp7anm9tuf74v82ip.apps.googleusercontent.com',
      // eslint-disable-next-line turbo/no-undeclared-env-vars// 440452191635509
      clientSecret: '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'
    }),
    GitHubProvider({
      // eslint-disable-next-line turbo/no-undeclared-env-vars
      clientId: `${process.env.GIT_CLIENT_ID}`,
      // eslint-disable-next-line turbo/no-undeclared-env-vars
      clientSecret: `${process.env.GIT_CLIENT_SECRET}`
    })
  ]
})
