import { Outlet } from 'react-router-dom';
import '../../../styles/sidebar/calendar/calendar.scss';
import Header from '../../body/Header';
import Titlecontainer from '../../body/Titlecontainer';
import Navbar from '../../body/Navbar';
const Calendar = () => {
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