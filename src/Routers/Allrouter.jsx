import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home'   
import About from '../pages/About'; 

function Allrouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    )
}

export default Allrouter