import mongoose from 'mongoose'

const MONGODB_URI = "mongodb+srv://nithish:nithish@pro.2uykwnp.mongodb.net/proweb?retryWrites=true&w=majority"

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment'
  )
}

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function ConnectDB() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose
    })
  }

  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    throw e
  }

  return cached.conn
}

export default ConnectDB
