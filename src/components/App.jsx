import { useState, useEffect } from 'react';
import './App.css';
import NavBar from './NavBar';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Questions from './Questions';
import Question from './Question';

function App() {
  const [user, setUser] = useState(true);
  const [questions, setQuestions] = useState([]);
  const baseURL = `http://localhost:8000`;

  // Fetch questions
  useEffect(() => {
    fetch(`${baseURL}/questions`)
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data);
        console.log(data);
      });
  }, []);

  return (
    <div className='App'>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Routes>
          <Route
            path='/login'
            element={<Login setUser={setUser} baseURL={baseURL} />}
          />
          <Route path='/register' element={<Register />} baseURL={baseURL} />
          <Route
            path='/questions'
            element={<Questions questions={questions} />}
          />
          <Route path='/' element={<Home />} />
          <Route
            path={`/questions/:q_id`}
            element={<Question baseURL={baseURL} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
