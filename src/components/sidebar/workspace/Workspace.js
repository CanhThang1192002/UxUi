import { Outlet } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setpage } from "../../../store/actions/Page";
import '../../../styles/sidebar/mylife/mylife.scss';
import Header from '../../body/Header';
import Titlecontainer from '../../body/Titlecontainer';
import Navbar from '../../body/Navbar';
const Workspace = () => {
    const dispatch = useDispatch();
    dispatch(setpage('workspace'));
    return (
        <>
            <div className="mylife">
                <Header />
                <Titlecontainer title="Workspace" />
                <Navbar title="Workspace" />
                <div>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Workspace;

