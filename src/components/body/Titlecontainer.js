import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { showAddTasks } from "../../store/actions/ShowForm_AddTasks";
import '../../styles/body/titlecontainer.scss';
import Form_AddTasks from './Form_AddTasks';


const Titlecontainer = () => {
    const Page = useSelector(state => state.Page);
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    useEffect(() => {
        if (Page.Page === 'mylife') {
            setTitle('My Life');
        }
        else {
            if (Page.Page === 'calendar') {
                setTitle('All Calendar');
            }
            else {
                if (Page.Page === 'workspace') {
                    setTitle(Page.PageWorkspace);
                }
            }
        }
    }, [Page.PageWorkspace]);
    const clickaddtask = () => {
        dispatch(showAddTasks());
    }
    return (
        <>
            <Form_AddTasks />
            <div className="titlecontainer">
                <h1 className='title'>{title}</h1>
                <button className='bt_addtask' onClick={() => clickaddtask()}>Add Task</button>
            </div>
        </>
    )
}

export default Titlecontainer;