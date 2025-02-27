import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types/auth';
import { authService } from '../services/authService';
import defaultPhoto from "../assets/images/perfil-defecto.png"

interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = authService.verifyToken(token);
      setUser({
        id: user?.id ?? "", 
        email: user?.email ?? "", 
        name: user?.name ?? "Usuario Anónimo", 
        photo: user?.photo || defaultPhoto, 
      });
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    console.log(email, password);
    const { user, token } = await authService.login({ email, password });
    localStorage.setItem('token', token);
    setUser({
      id: user?.id, 
      email: user?.email, 
      name: user?.name , 
      photo: user?.photo , 
    });
    setLoading(false);
  };

  const register = async (name: string, email: string, password: string) => {
    setLoading(true);
    const { user, token } = await authService.register({ name, email, password, photo: defaultPhoto });
    localStorage.setItem('token', token);
    setUser({
      id: user.id,
      email: user.email,
      name: user.name,
      photo: user.photo,
    });
    setLoading(false);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};