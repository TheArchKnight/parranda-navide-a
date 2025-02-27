import { jwtDecode } from "jwt-decode";
import { LoginCredentials, RegisterCredentials, User } from '../types/auth';

// Mock user for testing
const MOCK_USERS: User[] = [{
  id: "test123",
  email: "test@example.com",
  name: "Test User",
  photo: "/assets/images/perfil-defecto.png",
}];

function generateToken(userId: string): string {
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const payload = btoa(JSON.stringify({
    userId,
    exp: Math.floor(Date.now() / 1000) + (60 * 60) // 1 hour
  }));
  const signature = btoa('dummy-signature');
  
  return `${header}.${payload}.${signature}`;
}

export const authService = {
  login: async (credentials: LoginCredentials): Promise<{ user: User; token: string }> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // For testing purposes, accept any password for the test user
    const user = MOCK_USERS.find(u => u.email === credentials.email);
    if (!user || credentials.email !== "test@example.com" || credentials.password !== "password123") {
      throw new Error('Invalid credentials');
    }

    const token = generateToken(user.id);
    return { user, token };
  },

  register: async (credentials: RegisterCredentials): Promise<{ user: User; token: string }> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    if (MOCK_USERS.some(u => u.email === credentials.email)) {
      throw new Error('User already exists');
    }

    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email: credentials.email,
      name: credentials.name,
      photo: "../assets/images/perfil-defecto.png",
    };

    MOCK_USERS.push(newUser);
    const token = generateToken(newUser.id);
    return { user: newUser, token };
  },

  verifyToken: (token: string): User | null => {
    try {
      const decoded = jwtDecode<{ userId: string }>(token);
      const user = MOCK_USERS.find(u => u.id === decoded.userId);
      return user || null;
    } catch {
      return null;
    }
  },
  updateProfile: async (userId: string, data: { name?: string }) => {
    // Lógica para actualizar el nombre del usuario en la base de datos
  },

  updatePassword: async (userId: string, newPassword: string) => {
    // Lógica para actualizar la contraseña del usuario en la base de datos
  },

  updateProfilePicture: async (userId: string, formData: FormData) => {
    // Lógica para actualizar la foto de perfil en la base de datos
  },


};