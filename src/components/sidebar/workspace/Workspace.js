import { Outlet } from 'react-router-dom';
import '../../../styles/sidebar/mylife/mylife.scss';
import Header from '../../body/Header';
import Titlecontainer from '../../body/Titlecontainer';
import Navbar from '../../body/Navbar';
const Workspace = () => {
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

export default Workspace;

