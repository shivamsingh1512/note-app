import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/login'
import Header from './components/header';
import Register from './components/register';
import CreateNote from './components/createnote';
import NotesList from './components/notelist';
import Welcome from './components/welcome';

function App(){
    return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100" style={{ backgroundImage: "url('/image.jpg')" }}>
      <BrowserRouter basename="/">
       <Header />
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> 
            <Route
              path="/notes"
              element={
                <>
                  <CreateNote />
                  <NotesList />
                </>
              }
            />
            

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;