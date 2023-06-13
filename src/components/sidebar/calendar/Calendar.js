import { Outlet } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setpage } from "../../../store/actions/Page";
import '../../../styles/sidebar/calendar/calendar.scss';
import Header from '../../body/Header';
import Titlecontainer from '../../body/Titlecontainer';
import Navbar from '../../body/Navbar';
const Calendar = () => {
    const dispatch = useDispatch();
    dispatch(setpage('calendar'));
    return (
        <>
            <div className="calendar">
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

export default Calendar;