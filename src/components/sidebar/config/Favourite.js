import '../../../styles/sidebar/config/favourite.scss';
import Header from '../../body/Header';
import { useState, useEffect } from 'react';
import Tasksdetails from "../../body/Tasksdetails";
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { showTasksdetails } from "../../../store/actions/ShowTasksdetails";
import { deleteTaskWorkspace } from '../../../store/actions/Workspace_action';
import { deleteTaskMylife } from '../../../store/actions/MyLife_action';
import moment from 'moment/moment';
const Favourite = () => {
    const newday = new Date();
    const dispatch = useDispatch();
    const MyLife = useSelector(state => state.MyLifeRedux.MyLifeRedux);
    const Workspaces = useSelector(state => state.WorkspaceRedux.WorkspaceRedux);
    const [data, setData] = useState(MyLife.concat(Workspaces));
    const [data_favourite, setdata_favourite] = useState(data.filter(item => item.favourite === true));
    const [data_myday, setdata_myday] = useState(data.filter(item => item.deadline === moment(newday).format('DD/MM/YYYY')));
    // const data = MyLife.concat(Workspaces);
    // const data_favourite = data.filter(item => item.favourite === true);
    // const [data_mytasks, setdata_mytasks] = useState([]);

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
        setData(MyLife.concat(Workspaces));
    }, [MyLife, Workspaces]);
    useEffect(() => {
        setdata_favourite(data.filter(item => item.favourite === true));
        setdata_myday(data.filter(item => item.deadline === moment(newday).format('DD/MM/YYYY')));
    }, [data]);

    return (
        <>
            <Tasksdetails />
            <div className='favoutite'>
                <Header />
                <div className='favoutite_body'>
                    <div className='favoutite_container'>
                        <h1 id='favoutite_title'>Favourite</h1>
                        <div className='favoutite_data'>
                            {
                                data_favourite && data_favourite.length > 0 && data_favourite.map((item, index) => {
                                    if (item.status === 'Completed') {
                                        return (
                                            <div key={index} className='mytasks_container_item' id='Completed_mytasks' >
                                                <span className="deadline_mytasks" id='Completed_deadline' onClick={() => dispatch(showTasksdetails(item))} >{item.deadline}</span>
                                                <span className="tasksname_mytasks" onClick={() => dispatch(showTasksdetails(item))} >{item.task_name}</span>
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

                    <div className='myday_container'>
                        <h1 id='myday_title'>My day</h1>
                        <div className='myday_data'>
                            {
                                data_myday && data_myday.length > 0 && data_myday.map((item, index) => {
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
                </div>
            </div>
        </>
    )
}

export default Favourite;