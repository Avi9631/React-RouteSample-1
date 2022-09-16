import './App.css';
import Form from './components/Form'

import Result from './components/Result.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path='/' element={<Form />} />
      <Route path='/result/:id' element={<Result />} />
    </Routes>
</BrowserRouter>
  );
}


export default App;
