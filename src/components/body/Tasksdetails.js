import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import { deleteTaskMylife, editTaskMylife } from '../../store/actions/MyLife_action';
import { deleteTaskWorkspace, editTaskWorkspace } from '../../store/actions/Workspace_action';
import { closeTasksdetails } from "../../store/actions/ShowTasksdetails";
import '../../styles/body/tasksdetails.scss'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const Tasksdetails = () => {
    const dispatch = useDispatch();
    const show = useSelector(state => state.ShowTasksdetails.show);
    const data = useSelector(state => state.ShowTasksdetails.data);
    const [Status, setStatus] = useState(data.status);
    const [TaskName, setTaskName] = useState("data.taskname");
    const [Description, setDescription] = useState("data.description");
    const [Deadline, setDeadline] = useState(data.deadline);
    const [Favourite, setFavourite] = useState(data.favourite);
    const clickUncomoplete = () => {
        setStatus('UnComplete');
        document.getElementById('detail_text1').style.color = '#FFFFFF';
        document.getElementById('detail_text1').style.backgroundColor = '#F96651';
        document.getElementById('detail_text2').style.color = '#ced4da';
        document.getElementById('detail_text2').style.backgroundColor = '#ffffff';
        document.getElementById('detail_text3').style.color = '#ced4da';
        document.getElementById('detail_text3').style.backgroundColor = '#ffffff';
        document.getElementById('taskdetail_footer_oke').style.display = 'inline-block';
    }
    const clickCompleted = () => {
        setStatus('Completed');
        document.getElementById('detail_text2').style.color = '#FFFFFF';
        document.getElementById('detail_text2').style.backgroundColor = '#4D72D1';
        document.getElementById('detail_text1').style.color = '#ced4da';
        document.getElementById('detail_text1').style.backgroundColor = '#ffffff';
        document.getElementById('detail_text3').style.color = '#ced4da';
        document.getElementById('detail_text3').style.backgroundColor = '#ffffff';
        document.getElementById('taskdetail_footer_oke').style.display = 'inline-block';
    }
    const clickStopped = () => {
        setStatus('Stopped');
        document.getElementById('detail_text3').style.color = '#FFFFFF';
        document.getElementById('detail_text3').style.backgroundColor = '#F2C94C';
        document.getElementById('detail_text1').style.color = '#ced4da';
        document.getElementById('detail_text1').style.backgroundColor = '#ffffff';
        document.getElementById('detail_text2').style.color = '#ced4da';
        document.getElementById('detail_text2').style.backgroundColor = '#ffffff';
        document.getElementById('taskdetail_footer_oke').style.display = 'inline-block';
    }
    const clickedit = (data) => {
        document.getElementById('taskdetail_footer_oke').style.display = 'inline-block';
        document.getElementById('taskdetail_footer_edit').style.display = 'none';
        document.getElementById('taskdetail_input_deadline').style.display = 'inline-block';
        document.getElementById('deadline_date').style.display = 'none';
        document.getElementById('taskdetail_input_task_name').disabled = false;
        document.getElementById('taskdetail_input_description').disabled = false;
        document.getElementById('taskdetail_input_task_name').style.border = '1px solid #ced4da';
        document.getElementById('taskdetail_input_description').style.border = '1px solid #ced4da';
        document.getElementById('taskdetail_footer_cancel').style.display = 'inline-block';
    }
    const clickdelete = (data) => {
        if (data.workspace === 'mylife') {
            dispatch(deleteTaskMylife(data.id))
        } else {
            dispatch(deleteTaskWorkspace(data.id))
        }
        dispatch(closeTasksdetails())
        toast.warning('Delete task successfully');
    }
    const editdeadline = (e) => {
        setDeadline(e.target.value);
    }
    const edittaskname = (e) => {
        setTaskName(e.target.value);
    }
    const editdescription = (e) => {
        setDescription(e.target.value);
    }
    const addfavourite = () => {
        if (!data.favourite) {
            document.getElementById('AiFillStar').style.display = 'inline';
        }
        else {
            document.getElementById('AiFillStar').style.display = 'none';
        }
        setFavourite(!data.favourite);
        document.getElementById('taskdetail_footer_oke').style.display = 'inline-block';
    }

    const clickoke = () => {
        document.getElementById('taskdetail_footer_oke').style.display = 'none';
        document.getElementById('taskdetail_footer_edit').style.display = 'inline-block';
        document.getElementById('taskdetail_input_deadline').style.display = 'none';
        document.getElementById('deadline_date').style.display = 'inline-block';
        document.getElementById('taskdetail_input_task_name').disabled = true;
        document.getElementById('taskdetail_input_description').disabled = true;
        document.getElementById('taskdetail_input_task_name').style.border = 'none';
        document.getElementById('taskdetail_input_description').style.border = 'none';
        document.getElementById('taskdetail_footer_cancel').style.display = 'none';
        let dataedit = {
            id: data.id,
            task_name: TaskName,
            description: Description,
            deadline: Deadline,
            status: Status,
            workspace: data.workspace,
            favourite: Favourite
        }
        if (data.workspace === 'mylife') {
            dispatch(editTaskMylife(dataedit))
        }
        else {
            dispatch(editTaskWorkspace(dataedit))
        }
        toast.success('Edit task successfully');
        setDeadline(0);
        setDescription('');
        setTaskName('');
        setStatus('');
    }
    const clickcancel = () => {
        document.getElementById('taskdetail_footer_oke').style.display = 'none';
        document.getElementById('taskdetail_footer_edit').style.display = 'inline-block';
        document.getElementById('taskdetail_input_deadline').style.display = 'none';
        document.getElementById('deadline_date').style.display = 'inline-block';
        document.getElementById('taskdetail_input_task_name').disabled = true;
        document.getElementById('taskdetail_input_description').disabled = true;
        document.getElementById('taskdetail_input_task_name').style.border = 'none';
        document.getElementById('taskdetail_input_description').style.border = 'none';
        document.getElementById('taskdetail_footer_cancel').style.display = 'none';
        setDeadline(0);
        setDescription('');
        setTaskName('');
        setStatus('');
    }
    useEffect(() => {
        setDeadline(data.deadline);
        setTaskName(data.task_name);
        setDescription(data.description);
        setStatus(data.status);
        setFavourite(data.favourite);
        console.log(data);
    }, [data]);
    return (
        <>
            <Modal id='taskdetail' show={show} onHide={() => dispatch(closeTasksdetails())}>
                <Modal.Header id='taskdetail_header' closeButton>
                    <Modal.Title id='taskdetail_title'>{data.workspace}</Modal.Title>
                    {
                        data.favourite ?
                            <>
                                <AiOutlineStar id='AiOutlineStar' onClick={() => addfavourite()} />
                                <AiFillStar id='AiFillStar' onClick={() => addfavourite()} />
                            </>
                            : <>
                                <AiOutlineStar id='AiOutlineStar' onClick={() => addfavourite()} />
                                <AiFillStar style={{ display: 'none' }} id='AiFillStar' onClick={() => addfavourite()} />
                            </>
                    }
                </Modal.Header>
                <Modal.Body id='taskdetail_body'>
                    <div className='taskdetail_status' >
                        {
                            data.status === 'UnComplete' ?
                                <>
                                    <div className='detail_text' id='detail_text1' style={{ color: "#FFFFFF", backgroundColor: '#F96651' }} onClick={() => clickUncomoplete()}>UnComplete</div>
                                    <div className='detail_text' id='detail_text2' onClick={() => clickCompleted()}>Completed</div>
                                    <div className='detail_text' id='detail_text3' onClick={() => clickStopped()}>Stopped</div>
                                </>
                                : data.status === 'Completed' ?
                                    <>
                                        <div className='detail_text' id='detail_text1' onClick={() => clickUncomoplete()}>UnComplete</div>
                                        <div className='detail_text' id='detail_text2' style={{ color: "#FFFFFF", backgroundColor: '#4D72D1' }} onClick={() => clickCompleted()}>Completed</div>
                                        <div className='detail_text' id='detail_text3' onClick={() => clickStopped()}>Stopped</div>
                                    </> :
                                    <>
                                        <div className='detail_text' id='detail_text1' onClick={() => clickUncomoplete()}>UnComplete</div>
                                        <div className='detail_text' id='detail_text2' onClick={() => clickCompleted()}>Completed</div>
                                        <div className='detail_text' id='detail_text3' style={{ color: "#FFFFFF", backgroundColor: '#F2C94C' }} onClick={() => clickStopped()}>Stopped</div>
                                    </>
                        }
                    </div>
                    <div className='taskdetail_data'>
                        <textarea disabled rows='2' name='taskdetai_task_name' id='taskdetail_input_task_name' onChange={(e) => edittaskname(e)}>{data.task_name}</textarea >
                        <textarea disabled rows='4' name='taskdetail_description' id='taskdetail_input_description' onChange={(e) => editdescription(e)}>{`Description: ${data.description}`}</textarea>
                        <span id='deadline_text'>Deadline:</span><span id='deadline_date'>{data.deadline}</span>
                        <input type='date' id='taskdetail_input_deadline' value={Deadline} onChange={(e) => editdeadline(e)} />
                    </div>
                </Modal.Body >
                <Modal.Footer id='taskdetail_footer'>
                    <Button id="taskdetail_footer_oke" onClick={() => clickoke()}>
                        OKE
                    </Button>
                    <Button id="taskdetail_footer_cancel" onClick={() => clickcancel()}>
                        CANCEL
                    </Button>
                    <Button id="taskdetail_footer_edit" onClick={() => clickedit(data)}>
                        EDIT
                    </Button>
                    <Button id="taskdetail_footer_delete" onClick={() => clickdelete(data)}>
                        DELETE
                    </Button>
                </Modal.Footer>
            </Modal >

        </>
    )
}

export default Tasksdetails