import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/home'
import { About } from './Pages/about'
import { Contact } from './Pages/contact'
import { Blog } from './Pages/blog'
import { Now } from './Pages/now'
import { Layout } from './Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/now' element={<Now/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
