import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import { deleteTaskMylife } from '../../store/actions/MyLife_action';
import { deleteTaskWorkspace } from '../../store/actions/Workspace_action';
import '../../styles/body/mytasks.scss';
const Mytasks = () => {
    const dispatch = useDispatch();
    const MyLifeRedux = useSelector(state => state.MyLifeRedux.MyLifeRedux);
    const WorkspaceRedux = useSelector(state => state.WorkspaceRedux.WorkspaceRedux);
    const title = useSelector(state => state.Page.Page);
    const titleworkspace = useSelector(state => state.Page.PageWorkspace);
    const [data, setData] = useState([]);
    const [data_mytasks, setdata_mytasks] = useState([]);

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

    useEffect(() => {
        if (data && data.length > 0) {
            setdata_mytasks(data.filter(item => item.member === 1));
        }
    }, [data]);

    const deleteTask = (task) => {
        let size = Object.keys(task).length;
        if (size === 5) {
            dispatch(deleteTaskMylife(task.task_name));
        }
        else {
            if (size === 6) {
                dispatch(deleteTaskWorkspace(task.task_name));
            }
        }
        toast.success('Delete task successfully');
    }

    return (
        <>
            <div className="mytasks">
                <div className='month'> tháng </div>
                <hr />
                <div className='mytasks_container'>
                    {
                        data_mytasks && data_mytasks.length > 0 && data_mytasks.map((item, index) => {
                            if (item.status === 'Completed') {
                                return (
                                    <div key={index} className='mytasks_container_item' id='Completed_mytasks'>
                                        <span className="deadline_mytasks" id='Completed_deadline'>{item.deadline}</span>
                                        <span className="tasksname_mytasks">{item.task_name}</span>
                                        <button className="btn_mytasks" onClick={() => deleteTask(item)}>Delete</button>
                                    </div>
                                )
                            } else {
                                if (item.status === 'UnComplete') {
                                    return (
                                        <div key={index} className='mytasks_container_item' id='UnComplete_mytasks'>
                                            <span className="deadline_mytasks" id='UnComplete_deadline'>{item.deadline}</span>
                                            <span className="tasksname_mytasks">{item.task_name}</span>
                                            <button className="btn_mytasks" onClick={() => deleteTask(item)}>Delete</button>
                                        </div>
                                    )
                                }
                                else {
                                    return (
                                        <div key={index} className='mytasks_container_item' id='Stopped_mytasks'>
                                            <span className="deadline_mytasks" id='Stopped_deadline'>{item.deadline}</span>
                                            <span className="tasksname_mytasks">{item.task_name}</span>
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

export default Mytasks;