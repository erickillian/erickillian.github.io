// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx'

function App() {
    return (
        <div className="App">
            {/* <NavigationBar />
                <Jumbotron /> */}
            <Router>
                <Routes>
                    <Route exact path='/' element={<HomePage />} />
                    {/* <Route path='/about' component={About} />
                    <Route path='/service' component={Service} />
                    <Route path='/product' component={Product} />
                    <Route path='/contact' component={Contact} /> */}
                    <Route element={<HomePage />} />
                </Routes>
            </Router>
            {/* <Footer /> */}
        </div >
    );
}

export default App;
