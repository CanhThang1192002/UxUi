import {
    NavLink
} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { addWorkspace } from "../../store/actions/Workspace_action";
import { setpageWorkspace, setpage } from "../../store/actions/Page";
import { AiFillClockCircle, AiFillCalendar, AiOutlinePlus, AiFillStar, AiFillSetting, AiFillBell } from "react-icons/ai";
import '../../styles/sidebar/Navsidebar.scss';

const Navsidebar = () => {
    const Workspaces = useSelector(state => state.WorkspaceRedux.Workspaces);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [show_menu, setShow_menu] = useState(false);
    const [workspace, setWorkspace] = useState({ Workspaces_name: '', Workspaces_type: '' });
    const ShowAddWorkspace = () => {
        setShow(true);
    }
    const clickSubject = () => {
        setWorkspace({ ...workspace, Workspaces_type: 'subject' });
        setShow_menu(false);
    }
    const clickProject = () => {
        setWorkspace({ ...workspace, Workspaces_type: 'project' });
        setShow_menu(false);
    }
    const input_workspace_name = (e) => {
        setWorkspace({ ...workspace, Workspaces_name: e.target.value });
    }
    const add = () => {
        if (!workspace.Workspaces_name || !workspace.Workspaces_type) {
            toast.error('Please fill in all fields');
            return;
        }
        dispatch(addWorkspace(workspace));
        setShow(false);
        setWorkspace({ Workspaces_name: '', Workspaces_type: '' });
        toast.success('Delete task successfully');
    }
    const click_workspace_name = (item) => {
        dispatch(setpage('workspace'));
        dispatch(setpageWorkspace(item.Workspaces_name))
    }
    return (
        <>
            <Modal show={show}>
                <Modal.Header>Add Workspace</Modal.Header>
                <Modal.Body>
                    <input placeholder="subject or project" value={workspace.Workspaces_type} onClick={() => setShow_menu(true)}></input>
                    <Modal show={show_menu}>
                        <div onClick={() => clickSubject()}> Subject</div>
                        <div onClick={() => clickProject()}>Project</div>
                    </Modal>
                    <input type="text" placeholder="Workspace name" value={workspace.Workspaces_name} onChange={(e) => input_workspace_name(e)} />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => add()}>Add</Button>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className="Navsidebar">
                <div className="nav_logo"> logo</div>
                <div className="nav_config">
                    <div className="nav_favourite">
                        <AiFillStar className="icon" />
                        <NavLink to="/favourite">Favourite</NavLink>
                    </div>
                    <div className="nav_setting">
                        <AiFillSetting className="icon" />
                        <NavLink to="/setting">Setting</NavLink>
                    </div>
                    <div className="nav_notice">
                        <AiFillBell className="icon" />
                        <NavLink to="/notice">Notice</NavLink>
                    </div>
                </div>
                <div className="nav_workspace">
                    <div className='workspace_header'>
                        <span>Workspace</span>
                        <AiOutlinePlus className="AiOutlinePlus" onClick={() => ShowAddWorkspace()} />
                        <div className="workspace_list">
                            {
                                Workspaces && Workspaces.length > 0 && Workspaces.map((item, index) => {
                                    if (item.Workspaces_type === "subject") {
                                        return (
                                            <div className="workspace_item" key={index}>
                                                <span>Subject</span>
                                                <NavLink to="/workspace" onClick={() => click_workspace_name(item)}>{item.Workspaces_name}</NavLink>
                                            </div>
                                        )
                                    }
                                    else {
                                        return (
                                            <div className="workspace_item" key={index}>
                                                <span>Project</span>
                                                <NavLink to="/workspace" onClick={() => click_workspace_name(item)}>{item.Workspaces_name}</NavLink>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="nav_calendar" onClick={() => dispatch(setpage('calendar'))}>
                    <NavLink to="/">Calendar</NavLink>
                    <AiFillCalendar />
                </div>
                <div className="nav_mylife" onClick={() => dispatch(setpage('mylife'))}>
                    <NavLink to="/mylife">Mylife</NavLink>
                    <AiFillClockCircle />
                </div>
            </div>
        </>
    )
}
export default Navsidebar;