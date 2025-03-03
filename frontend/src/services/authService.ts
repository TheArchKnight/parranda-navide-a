import { jwtDecode } from "jwt-decode";
import { LoginCredentials, RegisterCredentials, User } from '../types/auth';
import  api  from "./api"
// Mock user for testing
const MOCK_USERS: User[] = [{
  id: "test123",
  email: "test@example.com",
  name: "Test User"
}];

export const authService = {
  login: async (credentials: LoginCredentials): Promise<{ user: User; token: string }> => {
    const response = await api.post("/login/", credentials);
    if(response.status === 400){
      throw new Error("Wrong credentials.");
    }
    console.log(response.data)
    const user: User = {
      id: response.data?.id,
      email: response.data?.email,
      name: response.data?.name
    }
    return { user, token: response.data?.token };
  },

  register: async (credentials: RegisterCredentials): Promise<{ user: User; token: string }> => {
    const responseRegister = await api.post("/register/", credentials);
    if(responseRegister.status === 400){
      throw new Error("User already exists");
    }    
    return authService.login(credentials);
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
