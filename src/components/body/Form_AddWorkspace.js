import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { closeAddWorkspace } from "../../store/actions/ShowForm";
import { addTaskWorkspace } from "../../store/actions/Workspace_action";
import { addTaskMylife } from "../../store/actions/MyLife_action";

function Example() {
    const [task, setTask] = useState("");
    const [task_name, setTask_name] = useState("");
    const [description, setDescription] = useState("");
    const [Deadline, setDeadline] = useState('');
    const [status, setStatus] = useState("UnComplete");
    const [member, setMember] = useState(1);

    const show = useSelector(state => state.ShowForm.show);
    // const Page = useSelector(state => state.Page.Page);
    const WorkspaceRedux = useSelector(state => state.WorkspaceRedux.WorkspaceRedux);
    const MylifeRedux = useSelector(state => state.MyLifeRedux.MyLifeRedux);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(closeAddWorkspace());
    };

    const projectname = (e) => {
        setTask(e.target.value);
    }
    const tasksname = (e) => {
        setTask_name(e.target.value);
    }
    const tasksdescription = (e) => {
        setDescription(e.target.value);
    }
    const inputdate = (e) => {
        setDeadline(e.target.value);
    }
    const add = () => {
        // if (Page === "Workspace") {
        //     let tasks = {
        //         task: task,
        //         task_name: task_name,
        //         description: description,
        //         Deadline: Deadline,
        //         status: status,
        //         member: member
        //     }
        //     dispatch(addTaskWorkspace(tasks));
        // }
        // if (Page === "MyLife") {
        //     let tasks = {
        //         task_name: task_name,
        //         description: description,
        //         Deadline: Deadline,
        //         status: status,
        //         member: member
        //     }
        //     dispatch(addTaskMylife(tasks));
        // }
    }
    return (
        <>
            <Modal show={show} >
                <Modal.Header closeButton>
                    <Modal.Title>Add Workspace</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input className='projectname' placeholder='subject title or project name' onChange={(e) => projectname(e)}></input>
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