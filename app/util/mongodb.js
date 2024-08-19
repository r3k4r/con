// util/mongodb.js

import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const clientPromise = client.connect().then((client) => {
  console.log('Connected to MongoDB');
  return client;
}).catch((error) => {
  console.error('Failed to connect to MongoDB', error);
});

export default clientPromise;