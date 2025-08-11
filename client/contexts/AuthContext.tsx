import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
  register: (userData: RegisterData) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
  loading: boolean;
}

interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role?: 'patient' | 'provider';
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing token on app load
    const storedToken = localStorage.getItem('rehabai_token');
    if (storedToken) {
      setToken(storedToken);
      fetchUserProfile(storedToken);
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUserProfile = async (authToken: string) => {
    try {
      const response = await fetch('/api/auth/profile', {
        headers: {
          'Authorization': `Bearer ${authToken}`,
        },
      });

      // Check if response is ok
      if (!response.ok) {
        console.warn('Profile fetch failed:', response.status);
        localStorage.removeItem('rehabai_token');
        setToken(null);
        return;
      }

      // Check if response has JSON content
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        console.warn('Profile response not JSON:', contentType);
        localStorage.removeItem('rehabai_token');
        setToken(null);
        return;
      }

      const data = await response.json();

      if (data.success && data.user) {
        setUser(data.user);
      } else {
        // Invalid token, remove it
        localStorage.removeItem('rehabai_token');
        setToken(null);
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
      localStorage.removeItem('rehabai_token');
      setToken(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      // Check content type first before reading body
      const contentType = response.headers.get('content-type');
      const isJson = contentType && contentType.includes('application/json');

      // Read response body only once
      let responseData;
      if (isJson) {
        responseData = await response.json();
      } else {
        const responseText = await response.text();
        console.error('Login response not JSON:', contentType, responseText);
        return { success: false, message: 'Invalid server response' };
      }

      // Handle non-ok responses after reading the body
      if (!response.ok) {
        console.error('Login response error:', response.status, responseData);
        const errorMessage = responseData?.message || `Server error: ${response.status}`;
        return { success: false, message: errorMessage };
      }

      // Process successful response
      if (responseData.success && responseData.token) {
        setToken(responseData.token);
        setUser(responseData.user);
        localStorage.setItem('rehabai_token', responseData.token);
        return { success: true, message: responseData.message };
      } else {
        return { success: false, message: responseData.message || 'Login failed' };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'Network error occurred' };
    }
  };

  const register = async (userData: RegisterData) => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      // Check content type first before reading body
      const contentType = response.headers.get('content-type');
      const isJson = contentType && contentType.includes('application/json');

      // Read response body only once
      let responseData;
      if (isJson) {
        responseData = await response.json();
      } else {
        const responseText = await response.text();
        console.error('Register response not JSON:', contentType, responseText);
        return { success: false, message: 'Invalid server response' };
      }

      // Handle non-ok responses after reading the body
      if (!response.ok) {
        console.error('Register response error:', response.status, responseData);
        const errorMessage = responseData?.message || `Server error: ${response.status}`;
        return { success: false, message: errorMessage };
      }

      // Process successful response
      if (responseData.success && responseData.token) {
        setToken(responseData.token);
        setUser(responseData.user);
        localStorage.setItem('rehabai_token', responseData.token);
        return { success: true, message: responseData.message };
      } else {
        return { success: false, message: responseData.message || 'Registration failed' };
      }
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, message: 'Network error occurred' };
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('rehabai_token');
  };

  const value = {
    user,
    token,
    login,
    register,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
