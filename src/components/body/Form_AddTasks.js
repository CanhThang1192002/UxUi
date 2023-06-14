import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { closeAddTasks } from "../../store/actions/ShowForm_AddTasks";
import { addTaskMylife } from '../../store/actions/MyLife_action';
import { addTaskWorkspace } from '../../store/actions/Workspace_action';

function Example() {
    const [task_name, setTask_name] = useState("");
    const [description, setDescription] = useState("");
    const [deadline, setDeadline] = useState('');
    const [status, setStatus] = useState("UnComplete");
    const [member, setMember] = useState(1);

    const show = useSelector(state => state.ShowForm_AddTasks.show);
    const Page = useSelector(state => state.Page.Page);
    const [Page_calendar, setPage_calendar] = useState('');
    const [show_calendar, setShow_calendar] = useState(false);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(closeAddTasks());
    };

    const tasksname = (e) => {
        setTask_name(e.target.value);
    }
    const tasksdescription = (e) => {
        setDescription(e.target.value);
    }
    const inputdate = (e) => {
        setDeadline(e.target.value);
    }
    const clickWorkspace = () => {
        setPage_calendar('workspace');
        setShow_calendar(false);
    }
    const clickMylife = () => {
        setPage_calendar('mylife');
        setShow_calendar(false);
    }
    const add = () => {
        if (Page === 'mylife' || (Page === 'calendar' && Page_calendar === 'mylife')) {
            let task = { Task_name: task_name, Description: description, Deadline: deadline, Status: status, Member: member };
            dispatch(addTaskMylife(task));
            dispatch(closeAddTasks());
        }
        else {
            if (Page === 'workspace' || (Page === 'calendar' && Page_calendar === 'workspace')) {
                let task = { Task: "OOP", Task_name: task_name, Description: description, Deadline: deadline, Status: status, Member: member };
                dispatch(addTaskWorkspace(task));
                dispatch(closeAddTasks());
            }
        }
    }

    return (
        <>
            <Modal show={show} >
                <Modal.Header >
                    <Modal.Title>Add Tasks</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        (Page === 'calendar') ?
                            <>
                                <input placeholder="workspace or mylife" onClick={() => { setShow_calendar(true) }} value={Page_calendar} />
                                <Modal show={show_calendar}>
                                    <div onClick={() => clickWorkspace()}>Workspace</div>
                                    <div onClick={() => clickMylife()}>MyLife</div>
                                </Modal>

                            </>
                            : null
                    }
                    <input className='tasksname' placeholder='tasks name' onChange={(e) => tasksname(e)}></input>
                    <input className='tasksdescription ' placeholder='tasks description ' onChange={(e) => tasksdescription(e)}></input>
                    <input type="date" id="myDate" value={deadline} onChange={(e) => inputdate(e)} />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => add()}>ADD</Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example;