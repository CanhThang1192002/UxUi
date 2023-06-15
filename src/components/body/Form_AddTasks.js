import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { closeAddTasks } from "../../store/actions/ShowForm_AddTasks";
import { addTaskMylife } from '../../store/actions/MyLife_action';
import { addTaskWorkspace } from '../../store/actions/Workspace_action';

function Example() {
    const [Task_name, setTask_name] = useState("");
    const [Description, setDescription] = useState("");
    const [Deadline, setDeadline] = useState('');
    const [Status, setStatus] = useState("UnComplete");
    const [Member, setMember] = useState(1);

    const Workspaces = useSelector(state => state.WorkspaceRedux.Workspaces);
    const show = useSelector(state => state.ShowForm_AddTasks.show);
    const Page = useSelector(state => state.Page.Page);
    const [Page_calendar, setPage_calendar] = useState('');
    const [show_calendar, setShow_calendar] = useState(false);
    const [show_workspacename, setShow_workspacename] = useState(false);
    const [workspace_name, setWorkspace_name] = useState('');
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
    const clickWorkspacename = (e) => {
        setWorkspace_name(e);
        setShow_workspacename(false);
    }
    const add = () => {
        if (!Task_name || !Description || !Deadline) {
            toast.error('Please fill in all fields');
            return;
        }
        if (Page === 'mylife' || (Page === 'calendar' && Page_calendar === 'mylife')) {
            let Task = { task_name: Task_name, description: Description, deadline: Deadline, status: Status, member: Member };
            dispatch(addTaskMylife(Task));
            dispatch(closeAddTasks());
        }
        else {
            if (Page === 'workspace' || (Page === 'calendar' && Page_calendar === 'workspace')) {
                let Task = { workspace: workspace_name, task_name: Task_name, description: Description, deadline: Deadline, status: Status, member: Member };
                dispatch(addTaskWorkspace(Task));
                dispatch(closeAddTasks());
            }
        }
        toast.success('Add task success');
        setWorkspace_name('');
        setPage_calendar('');
        setTask_name('');
        setDescription('');
        setDeadline('');
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

                    {
                        (Page === 'workspace' || (Page === 'calendar' && Page_calendar === 'workspace')) ?
                            <>
                                <input placeholder="Workspace Name" onClick={() => { setShow_workspacename(true) }} value={workspace_name} />
                                <Modal show={show_workspacename}>
                                    {
                                        (Workspaces && Workspaces.length > 0) ?
                                            Workspaces.map((item, index) => {
                                                return (
                                                    <div key={index} onClick={() => clickWorkspacename(item.Workspaces_name)}>{item.Workspaces_name}</div>
                                                )
                                            })
                                            : null
                                    }
                                </Modal>
                            </>
                            : null
                    }
                    <input className='tasksname' placeholder='tasks name' onChange={(e) => tasksname(e)}></input>
                    <input className='tasksdescription ' placeholder='tasks description ' onChange={(e) => tasksdescription(e)}></input>
                    <input type="date" id="myDate" value={Deadline} onChange={(e) => inputdate(e)} />
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