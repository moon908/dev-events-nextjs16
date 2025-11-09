import mongoose from 'mongoose';

// Define the connection object type
interface MongooseConnection {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Extend the NodeJS global type to include our mongoose cache
declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseConnection | undefined;
}

// Get MongoDB URI from environment variables
const MONGODB_URI = process.env.MONGODB_URI;

// Validate that MONGODB_URI is defined
if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

/**
 * Global cache to maintain a single Mongoose connection across hot reloads
 * in development. This prevents multiple connections during Next.js fast refresh.
 */
let cached: MongooseConnection = global.mongoose || {
  conn: null,
  promise: null,
};

// Ensure the cache is stored globally
if (!global.mongoose) {
  global.mongoose = cached;
}

/**
 * Establishes and returns a cached MongoDB connection using Mongoose.
 * Reuses existing connections to prevent connection pool exhaustion.
 * 
 * @returns {Promise<typeof mongoose>} The Mongoose instance
 */
async function connectDB(): Promise<typeof mongoose> {
  // Return cached connection if it exists
  if (cached.conn) {
    return cached.conn;
  }

  // Return cached promise if connection is in progress
  if (!cached.promise) {
    const options = {
      bufferCommands: false, // Disable buffering to fail fast if not connected
    };

    // Create new connection promise
    cached.promise = mongoose.connect(MONGODB_URI!, options).then((mongoose) => {
      console.log('✅ MongoDB connected successfully');
      return mongoose;
    });
  }

  try {
    // Await the connection promise and cache the result
    cached.conn = await cached.promise;
  } catch (error) {
    // Reset promise on error to allow retry
    cached.promise = null;
    console.error('❌ MongoDB connection error:', error);
    throw error;
  }

  return cached.conn;
}

export default connectDB;
