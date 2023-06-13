import { Outlet } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setpage } from "../../../store/actions/Page";
import '../../../styles/sidebar/mylife/mylife.scss';
import Header from '../../body/Header';
import Titlecontainer from '../../body/Titlecontainer';
import Navbar from '../../body/Navbar';
const Mylife = () => {
    const dispatch = useDispatch();
    dispatch(setpage('mylife'));
    return (
        <>
            <div className="mylife">
                <Header />
                <Titlecontainer />
                <Navbar />
                <div>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Mylife;