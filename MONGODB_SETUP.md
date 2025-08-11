# MongoDB Setup for RehabAI

## Quick Start

The app will run without MongoDB for development purposes. Authentication features will show friendly error messages when the database is not available.

## Option 1: Local MongoDB (Recommended for Development)

### Install MongoDB locally:

**macOS (using Homebrew):**
```bash
brew install mongodb-community
brew services start mongodb-community
```

**Ubuntu/Debian:**
```bash
sudo apt-get install mongodb
sudo systemctl start mongod
sudo systemctl enable mongod
```

**Windows:**
Download from [MongoDB website](https://www.mongodb.com/try/download/community)

### Verify connection:
```bash
mongosh # Should connect to mongodb://localhost:27017
```

## Option 2: MongoDB Atlas (Cloud)

1. Create free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a cluster
3. Get connection string
4. Set environment variable:
   ```bash
   export MONGODB_URI="mongodb+srv://username:password@cluster.mongodb.net/rehabai"
   ```

## Option 3: Docker MongoDB

```bash
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

## Environment Variables

Create a `.env` file in the root directory:

```env
MONGODB_URI=mongodb://localhost:27017/rehabai
JWT_SECRET=your-super-secret-jwt-key
```

## Verification

Once MongoDB is running, restart the dev server:
```bash
npm run dev
```

You should see: "✅ Connected to MongoDB" in the logs.
