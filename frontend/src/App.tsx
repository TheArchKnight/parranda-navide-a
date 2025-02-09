
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Home from './pages/home'
import AuthForm from './components/AuthForm'
import { ProtectedRoute } from './components/ProtectedRoute'

function App() {

  return (
    <>
      <AuthProvider>
        <Router>
          <Routes >
            <Route path="/login" element={<AuthForm />} />
            <Route path="/" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  )
}

export default App
