import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'demo-secret-key';

// Demo users for testing without database
const demoUsers = [
  {
    id: 'demo-patient-1',
    email: 'patient@demo.com',
    password: 'demo123',
    firstName: 'Demo',
    lastName: 'Patient',
    role: 'patient'
  },
  {
    id: 'demo-provider-1',
    email: 'provider@demo.com',
    password: 'demo123',
    firstName: 'Dr. Demo',
    lastName: 'Provider',
    role: 'provider'
  }
];

interface DemoAuthRequest {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  role?: 'patient' | 'provider';
}

interface DemoAuthResponse {
  success: boolean;
  message: string;
  user?: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
  };
  token?: string;
}

export const demoLogin: RequestHandler = async (req, res) => {
  try {
    const { email, password }: DemoAuthRequest = req.body;

    // Validate required fields
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required'
      } as DemoAuthResponse);
    }

    // Find demo user
    const user = demoUsers.find(u => u.email === email && u.password === password);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password. Try: patient@demo.com / demo123'
      } as DemoAuthResponse);
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    const response: DemoAuthResponse = {
      success: true,
      message: 'Demo login successful',
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role
      },
      token
    };

    res.json(response);
  } catch (error) {
    console.error('Demo login error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    } as DemoAuthResponse);
  }
};

export const demoRegister: RequestHandler = async (req, res) => {
  try {
    const { email, password, firstName, lastName, role = 'patient' }: DemoAuthRequest = req.body;

    // Validate required fields
    if (!email || !password || !firstName || !lastName) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      } as DemoAuthResponse);
    }

    // Check if demo user already exists
    const existingUser = demoUsers.find(u => u.email === email);
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'Demo user already exists with this email'
      } as DemoAuthResponse);
    }

    // Create new demo user
    const newUser = {
      id: `demo-${role}-${Date.now()}`,
      email,
      password,
      firstName,
      lastName,
      role
    };
    
    demoUsers.push(newUser);

    // Generate JWT token
    const token = jwt.sign(
      { userId: newUser.id, email: newUser.email, role: newUser.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    const response: DemoAuthResponse = {
      success: true,
      message: 'Demo user registered successfully',
      user: {
        id: newUser.id,
        email: newUser.email,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        role: newUser.role
      },
      token
    };

    res.status(201).json(response);
  } catch (error) {
    console.error('Demo registration error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    } as DemoAuthResponse);
  }
};

export const demoProfile: RequestHandler = async (req, res) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'No token provided'
      } as DemoAuthResponse);
    }

    const decoded = jwt.verify(token, JWT_SECRET) as any;
    const user = demoUsers.find(u => u.id === decoded.userId);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Demo user not found'
      } as DemoAuthResponse);
    }

    const response: DemoAuthResponse = {
      success: true,
      message: 'Demo profile retrieved successfully',
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role
      }
    };

    res.json(response);
  } catch (error) {
    console.error('Demo profile error:', error);
    res.status(401).json({
      success: false,
      message: 'Invalid token'
    } as DemoAuthResponse);
  }
};
