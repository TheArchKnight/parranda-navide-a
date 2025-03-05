
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Home from './pages/home'
import AuthForm from './components/AuthForm'
import  ProtectedRoute  from './components/ProtectedRoute'
import { useContext } from "react";
import { PlayerContext } from "./contexts/PlayerContextProvider";
import Player from './components/music/Player'

function App() {
  const context = useContext(PlayerContext);

    if (!context) {
        throw new Error("Biblioteca debe estar dentro de un <PlayerContextProvider>");
    }

    const { audioRef, track } = context;

  return (
    <>
      <AuthProvider>
          <Router>
            <Routes >
              <Route path="/login" element={<AuthForm />} />
              <Route path="*" element={
                <ProtectedRoute>
                  <div className="h-screen flex flex-col">
                    <div className="h-[90%]">
                      <Home />
                      <audio ref={audioRef} src={track.file} preload="auto"></audio>
                    </div>
                    <Player />
                </div>
                </ProtectedRoute>
              } />
            </Routes>
          </Router>
      </AuthProvider>
    </>
  )
}


export default App
