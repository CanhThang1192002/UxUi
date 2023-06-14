import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import '../../styles/body/alltasks.scss';
import '../../styles/body/mytasks.scss';
const Alltasks = () => {
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
            setdata_mytasks(data.filter(item => item.member !== 1));
        }
    }, [data]);



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
                                        <button className="btn_mytasks">Delete</button>
                                    </div>
                                )
                            } else {
                                if (item.status === 'UnComplete') {
                                    return (
                                        <div key={index} className='mytasks_container_item' id='UnComplete_mytasks'>
                                            <span className="deadline_mytasks" id='UnComplete_deadline'>{item.deadline}</span>
                                            <span className="tasksname_mytasks">{item.task_name}</span>
                                            <button className="btn_mytasks">Delete</button>
                                        </div>
                                    )
                                }
                                else {
                                    return (
                                        <div key={index} className='mytasks_container_item' id='Stopped_mytasks'>
                                            <span className="deadline_mytasks" id='Stopped_deadline'>{item.deadline}</span>
                                            <span className="tasksname_mytasks">{item.task_name}</span>
                                            <button className="btn_mytasks">Delete</button>
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