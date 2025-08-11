import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/rehabai';

let isConnected = false;

export const connectDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');
    isConnected = true;
  } catch (error) {
    console.warn('⚠️  MongoDB connection failed - running without database');
    console.warn('   To enable database features, ensure MongoDB is running or set MONGODB_URI');
    isConnected = false;
    // Don't exit the process - continue without database
  }
};

export const isDatabaseConnected = () => isConnected;

export default mongoose;
