import { Outlet } from "react-router-dom";
import Navbar from "../Components/Pages/Home/Navbar/Navbar";
import Footer from "../Components/Pages/Home/footer/Footer";

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;