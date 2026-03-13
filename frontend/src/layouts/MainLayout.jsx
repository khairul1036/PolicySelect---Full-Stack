import { Outlet } from 'react-router';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <main className='bg-gray-100 min-h-screen'>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;