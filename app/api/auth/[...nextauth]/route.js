// app/api/auth/[...nextauth]/route.js

import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '../../../util/mongodb';

const handler = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { username, password } = credentials;
        try {
          const client = await clientPromise;
          console.log('MongoDB client connected');
          const db = client.db('connex_academy'); 
          console.log('Connected to database:', db.databaseName);
          const user = await db.collection('users').findOne({ username, password });
          if (user) {
            console.log('User found:', user);
            return { id: user._id, name: user.username };
          } else {
            console.log('User not found');
            return null;
          }
        } catch (error) {
          console.error('Error connecting to MongoDB:', error);
          return null;
        }
      }
    }),
  ],
  pages: {
    signIn: '/forlogin',
  },
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 8, 
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
  debug: true, 
});

export { handler as GET, handler as POST };