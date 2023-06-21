import '../../styles/body/bydate.scss';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
const Bydate = () => {
    const MyLifeRedux = useSelector(state => state.MyLifeRedux.MyLifeRedux);
    const WorkspaceRedux = useSelector(state => state.WorkspaceRedux.WorkspaceRedux);
    const title = useSelector(state => state.Page.Page);
    const titleworkspace = useSelector(state => state.Page.PageWorkspace);
    const [data, setData] = useState([]);
    const [month, setMonth] = useState(6);
    const [year, setYear] = useState(2023);
    const [day, setDay] = useState([]);
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const clickleft = () => {
        if (month > 1)
            setMonth(month - 1);
        else {
            setMonth(12);
            setYear(year - 1);
        }
    }
    const clickright = () => {
        if (month < 12)
            setMonth(month + 1);
        else {
            setMonth(1);
            setYear(year + 1);
        }
    }

    const get_day_of_month = (year, month) => {
        return new Date(year, month, 0).getDate();
    }

    useEffect(() => {
        if (title === 'mylife') {
            setData(MyLifeRedux);
        }
        else {
            if (title === 'workspace') {
                setData(WorkspaceRedux.filter(item => item.workspace === titleworkspace));
            }
            else {
                if (title === 'calendar') {
                    setData([...WorkspaceRedux, ...MyLifeRedux]);
                }
            }
        }
    }, [titleworkspace, WorkspaceRedux, MyLifeRedux]);

    useEffect(() => {
        let day_of_month = get_day_of_month(year, month);
        let Day_of_month = [];
        for (let i = 0; i < day_of_month; i++) {
            Day_of_month[i] = i + 1;
        }
        setDay(Day_of_month);
    }, [month, year])

    return (

        <div className="bydate">
            <div className='bydate_top'>
                <AiFillCaretLeft className='AiFillCaretLeft' onClick={() => clickleft()} />
                <span className='top_month'>{monthNames[month - 1]}</span>
                <span className='top_year'>{year}</span>
                <AiFillCaretRight className='AiFillCaretRight' onClick={() => clickright()} />

            </div>
            <div className='bydate_content'>
                <div className='bydate_weeks'>
                    <ul className='weeks'>
                        <li className='bydate_weeks_item'>Monday</li>
                        <li className='bydate_weeks_item'>Tuesday</li>
                        <li className='bydate_weeks_item'>Wednesday</li>
                        <li className='bydate_weeks_item'>Thursday</li>
                        <li className='bydate_weeks_item'>Friday</li>
                        <li className='bydate_weeks_item'>Saturday</li>
                        <li className='bydate_weeks_item'>Sunday</li>
                    </ul>
                </div>
                <div className='bydate_days'>
                    <ul className='days'>
                        {
                            (day && day.length > 0) ?
                                day.map((item, index) => {
                                    return (
                                        <li className='bydate_day_item' key={index}><span>{item}</span></li>
                                    )
                                }) : null
                        }
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Bydate;