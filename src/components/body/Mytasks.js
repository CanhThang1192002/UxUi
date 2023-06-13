import { useSelector } from "react-redux";
import '../../styles/body/mytasks.scss';
const Mytasks = () => {
    const MyLifeRedux = useSelector(state => state.MyLifeRedux.MyLifeRedux);
    const WorkspaceRedux = useSelector(state => state.WorkspaceRedux.WorkspaceRedux);
    const title = useSelector(state => state.Page.Page);

    const data = (title === 'mylife') ? MyLifeRedux : WorkspaceRedux;

    const data_mytasks = data && data.length > 0 ? data.filter(item => item.member === 1) : [];
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
                                        <span className="deadline_mytasks" id='Completed_deadline'>{item.Deadline}</span>
                                        <span className="tasksname_mytasks">{item.task_name}</span>
                                        <button className="btn_mytasks">Delete</button>
                                    </div>
                                )
                            } else {
                                if (item.status === 'UnComplete') {
                                    return (
                                        <div key={index} className='mytasks_container_item' id='UnComplete_mytasks'>
                                            <span className="deadline_mytasks" id='UnComplete_deadline'>{item.Deadline}</span>
                                            <span className="tasksname_mytasks">{item.task_name}</span>
                                            <button className="btn_mytasks">Delete</button>
                                        </div>
                                    )
                                }
                                else {
                                    return (
                                        <div key={index} className='mytasks_container_item' id='Stopped_mytasks'>
                                            <span className="deadline_mytasks" id='Stopped_deadline'>{item.Deadline}</span>
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

export default Mytasks;