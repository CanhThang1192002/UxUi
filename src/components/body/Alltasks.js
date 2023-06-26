import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { deleteTaskMylife } from '../../store/actions/MyLife_action';
import { deleteTaskWorkspace } from '../../store/actions/Workspace_action';
import { showTasksdetails } from "../../store/actions/ShowTasksdetails";
import Tasksdetails from "./Tasksdetails";
import '../../styles/body/alltasks.scss';
import '../../styles/body/mytasks.scss';
const Alltasks = () => {
    const dispatch = useDispatch();
    const MyLifeRedux = useSelector(state => state.MyLifeRedux.MyLifeRedux);
    const WorkspaceRedux = useSelector(state => state.WorkspaceRedux.WorkspaceRedux);
    const title = useSelector(state => state.Page.Page);
    const titleworkspace = useSelector(state => state.Page.PageWorkspace);
    const [data, setData] = useState([]);
    const [month, setMonth] = useState(6);
    const [year, setYear] = useState(2023);
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
    const deleteTask = (task) => {
        if (task.workspace === 'mylife') {
            dispatch(deleteTaskMylife(task.id));
        }
        else {
            dispatch(deleteTaskWorkspace(task.id));
        }
        toast.warning('Delete task successfully');
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
                    setData(MyLifeRedux.concat(WorkspaceRedux));
                }
            }
        }
    }, [titleworkspace, WorkspaceRedux, MyLifeRedux]);

    return (
        <>
            <Tasksdetails />
            <div className="mytasks">
                <div className='date'>
                    <FaAngleLeft className='icon_left' onClick={() => clickleft()} />
                    <span className="month">{monthNames[month - 1]} </span>
                    <span className="year">{year}</span>
                    <FaAngleRight className='icon_right' onClick={() => clickright()} />
                </div>
                <div className='mytasks_container'>
                    {
                        data && data.length > 0 && data.map((item, index) => {
                            if (item.status === 'Completed') {
                                return (
                                    <div key={index} className='mytasks_container_item' id='Completed_mytasks'  >
                                        <span className="deadline_mytasks" id='Completed_deadline' onClick={() => dispatch(showTasksdetails(item))}>{item.deadline}</span>
                                        <span className="tasksname_mytasks" onClick={() => dispatch(showTasksdetails(item))}>{item.task_name}</span>
                                        <button className="btn_mytasks" onClick={() => deleteTask(item)}>Delete</button>
                                    </div>
                                )
                            } else {
                                if (item.status === 'UnComplete') {
                                    return (
                                        <div key={index} className='mytasks_container_item' id='UnComplete_mytasks'  >
                                            <span className="deadline_mytasks" id='UnComplete_deadline' onClick={() => dispatch(showTasksdetails(item))}>{item.deadline}</span>
                                            <span className="tasksname_mytasks" onClick={() => dispatch(showTasksdetails(item))}>{item.task_name}</span>
                                            <button className="btn_mytasks" onClick={() => deleteTask(item)}>Delete</button>
                                        </div>
                                    )
                                }
                                else {
                                    return (
                                        <div key={index} className='mytasks_container_item' id='Stopped_mytasks'  >
                                            <span className="deadline_mytasks" id='Stopped_deadline' onClick={() => dispatch(showTasksdetails(item))}>{item.deadline}</span>
                                            <span className="tasksname_mytasks" onClick={() => dispatch(showTasksdetails(item))}>{item.task_name}</span>
                                            <button className="btn_mytasks" onClick={() => deleteTask(item)}>Delete</button>
                                        </div>
                                    )
                                }
                            }
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Alltasks;