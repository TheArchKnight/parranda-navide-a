import { jwtDecode } from "jwt-decode";
import { LoginCredentials, RegisterCredentials, User } from '../types/auth';
import  api  from "./api"
// Mock user for testing
const MOCK_USERS: User[] = [{
  id: "test123",
  email: "test@example.com",
  name: "Test User"
}];

const handleError = (error: any): never => {
  if (error.response) {
    const { status } = error.response;
    if (status === 400) {
      alert("Contraseña incorrecta.");
      throw new Error("Wrong credentials.");
    } else if (status === 404) {
      alert("Usuario no encontrado.");
      throw new Error("User not found.");
    } else if (status === 409) {
      alert("El usuario ya existe.");
      throw new Error("User already exists.");
    }
  }
  throw new Error("An unexpected error occurred.");
};

export const authService = {
  login: async (credentials: LoginCredentials, 
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ): Promise<{ user: User; token: string }> => {
    try {
      const response = await api.post("/login/", credentials);
      const { id, email, name, token } = response.data || {};
      return { user: { id, email, name }, token };
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setLoading(false);
    }
  },

  register: async (
    credentials: RegisterCredentials,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ): Promise<{ user: User; token: string }> => {
    try {
      await api.post("/register/", credentials);
      return authService.login(credentials, setLoading);
    } catch (error: any) {
      handleError(error);
      console.log(error.response.status);
      return Promise.reject(error);
    } finally {
      setLoading(false);
    }
  },

  verifyToken: (token: string): User | null => {
    try {
      const decoded = jwtDecode<{ userId: string }>(token);
      const user = MOCK_USERS.find(u => u.id === decoded.userId);
      return user || null;
    } catch {
      return null;
    }
  }
};
