import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const useAuthForm = () => {
  const { login,loading,register } = useAuth();
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const navigate  = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      if (isLogin) {
        await login(formData.email, formData.password)
        navigate('/');
      } else {
         await register(formData.name, formData.email, formData.password)
      }
    } catch (error) {
      console.error(error)
    }
    
  }

  return { isLogin, setIsLogin, loading, formData, handleChange, handleSubmit }
}



export default useAuthForm;
