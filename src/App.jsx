import Home from './pages/Home/Home'
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyWorks from "./pages/MyWorks/MyWorks";
import MiniProjects from "./pages/MiniProjects/MiniProjects";
import Contacts from "./pages/Contacts/Contacts";
import './styles/global.scss'

function App() {
    return (
        <div className='page__wrapper'>
            <Router>
                <Header />
                <main className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/MyWorks" element={<MyWorks />} />
                        <Route path="/MiniProjects" element={<MiniProjects />} />
                        <Route path="/contacts" element={<Contacts />} />
                    </Routes>
                </main>

                <Footer />
            </Router>
        </div>

    )
}

export default App
