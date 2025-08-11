import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { register, login, getProfile } from "./routes/auth";
import { demoLogin, demoRegister, demoProfile } from "./routes/demo-auth";
import { connectDatabase, isDatabaseConnected } from "./config/database";

export function createServer() {
  const app = express();

  // Connect to MongoDB
  connectDatabase();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Debug endpoint
  app.get("/api/status", (_req, res) => {
    res.json({
      status: 'ok',
      database: connectDatabase ? 'configured' : 'not configured',
      timestamp: new Date().toISOString()
    });
  });

  // Authentication routes
  app.post("/api/auth/register", register);
  app.post("/api/auth/login", login);
  app.get("/api/auth/profile", getProfile);

  return app;
}
