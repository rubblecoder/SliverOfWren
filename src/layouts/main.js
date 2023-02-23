import { Outlet } from 'react-router-dom';
import MyNavBar from '../components/myNavbar';

const Main = () => {
    return(
        <>
            <MyNavBar />
            <Outlet />
        </>
    )
};

export default Main;