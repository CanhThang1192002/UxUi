import '../../styles/body/bydate.scss';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import Tasksdetails from "./Tasksdetails";
import { showTasksdetails } from "../../store/actions/ShowTasksdetails";
import { showAddTasks } from "../../store/actions/ShowForm_AddTasks";
const Bydate = () => {
    const dispatch = useDispatch();
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
    const [show, setShow] = useState(false);

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

    const clickdayitem = (item) => {
        let data = checkday(item);
        // let date = moment(`${item}/${month}/${year}`, 'DD/MM/YYYY').format('DD/MM/YYYY');
        if (data.length > 0) {
            dispatch(showTasksdetails(data[0]));
        }
        else {
            setShow(true);
        }
    }
    const clickcreateatask = () => {
        dispatch(showAddTasks());
        setShow(false);
    }
    const checkday = (item) => {
        let date = moment(`${item}/${month}/${year}`, 'DD/MM/YYYY').format('DD/MM/YYYY');
        let mylifeandworkspace = [...WorkspaceRedux, ...MyLifeRedux];
        let data1 = mylifeandworkspace.filter(item => moment(item.deadline, 'DD/MM/YYYY').format('DD/MM/YYYY') === date);
        return data1
    }

    useEffect(() => {
        let day_of_month = get_day_of_month(year, month);
        let Day_of_month = [];
        for (let i = 0; i < day_of_month; i++) {
            Day_of_month[i] = i + 1;
        }
        setDay(Day_of_month);
    }, [month, year])

    return (
        <>
            <Modal id='bydate_modal' show={show} onHide={() => setShow(false)}>
                <Modal.Header id='bydate_header' closeButton>
                    <Modal.Title id='bydate_title'>No Task</Modal.Title>
                </Modal.Header>
                <Modal.Body id='bydate_body'>
                    <Button id='bydate_body_createtasks' onClick={() => clickcreateatask()}>Create a task</Button>
                </Modal.Body >
                <Modal.Footer id='bydate_footer'>
                    <Button id="bydate_close" onClick={() => setShow(false)}>
                        CLOSE
                    </Button>
                </Modal.Footer>
            </Modal >
            {/* <Form_AddTasks /> */}
            <Tasksdetails />
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
                                            <li className='bydate_day_item' key={index} onClick={() => clickdayitem(item)}>
                                                <span>{item}</span>
                                                <div className='bydate_day_item_content'>
                                                    {
                                                        (checkday(item).length > 0) ? checkday(item).map((item1, index1) => {
                                                            return (
                                                                <div className='bydate_day_item_content_item' key={index1}>
                                                                    {item1.task_name}
                                                                </div>
                                                            )
                                                        }) : null
                                                    }
                                                </div>
                                            </li>
                                        )
                                    }) : null
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Bydate;