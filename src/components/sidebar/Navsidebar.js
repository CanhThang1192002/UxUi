import {
    NavLink, Outlet
} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { addWorkspace, deleteWorkspace } from "../../store/actions/Workspace_action";
import { setpageWorkspace, setpage } from "../../store/actions/Page";
import { AiFillClockCircle, AiFillCalendar, AiOutlinePlus, AiFillStar, AiFillSetting, AiFillBell } from "react-icons/ai";
import { MdHelp } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import '../../styles/sidebar/Navsidebar.scss';
import iconProject from '../../assets/iconProject.jpg';
import iconSubject from '../../assets/iconSubject.jpg';

const Navsidebar = () => {
    const Workspaces = useSelector(state => state.WorkspaceRedux.Workspaces);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [workspace, setWorkspace] = useState({ Workspaces_name: '', Workspaces_type: '' });
    const ShowAddWorkspace = () => {
        setShow(true);
    }
    const clickSubject = () => {
        setWorkspace({ ...workspace, Workspaces_type: 'subject' });
        document.getElementById("sub_pro").style.display = "none";
    }
    const clickProject = () => {
        setWorkspace({ ...workspace, Workspaces_type: 'project' });
        document.getElementById("sub_pro").style.display = "none";
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
        toast.success('Add workspace successfully');
    }
    const click_workspace_name = (item) => {
        dispatch(setpage('workspace'));
        dispatch(setpageWorkspace(item.Workspaces_name))
    }
    const deleteWorkspaceName = (item) => {
        dispatch(deleteWorkspace(item.Workspaces_name))
        toast.warning('Delete workspace successfully');
    }

    return (
        <>
            <Modal className="formaddworkspace" show={show}>
                <Modal.Header ><span id="formaddworkspace_header">Add Workspace</span></Modal.Header>
                <Modal.Body>
                    <input className="input_sub_pro" placeholder="subject or project" value={workspace.Workspaces_type} onClick={() => document.getElementById("sub_pro").style.display = "block"}></input>
                    <div id="sub_pro" style={{ display: "none" }}>
                        <div className="subject" onClick={() => clickSubject()}> Subject</div>
                        <div className="project" onClick={() => clickProject()}>Project</div>
                    </div>
                    <input className="input_workspace_name" type="text" placeholder="Workspace name" value={workspace.Workspaces_name} onChange={(e) => input_workspace_name(e)} />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => add()}>Add</Button>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className="Navsidebar">
                <div className="nav_logo">
                    logo
                </div>
                <div className="nav_favourite">
                    <NavLink className="navfavourite" to="/home">Favourite</NavLink>
                    <AiFillStar className="icon_favourite" />
                </div>
                <div className="nav_workspace">
                    <span className="workspace_title">Workspace</span>s
                    <AiOutlinePlus className="AiOutlinePlus" onClick={() => ShowAddWorkspace()} />
                    <div className="workspace_list">
                        {
                            Workspaces && Workspaces.length > 0 && Workspaces.map((item, index) => {
                                if (item.Workspaces_type === "subject") {
                                    return (
                                        <div className="workspace_item" key={index}>
                                            <img className="icon" src={iconSubject} />
                                            <NavLink className="nav_workspace_item" to="/home/workspace" onClick={() => click_workspace_name(item)}>{item.Workspaces_name}</NavLink>
                                            <TiDelete className="TiDelete" onClick={() => deleteWorkspaceName(item)} />
                                        </div>
                                    )
                                }
                                else {
                                    return (
                                        <div className="workspace_item" key={index}>
                                            <img className="icon" src={iconProject} />
                                            <NavLink className="nav_workspace_item" to="/home/workspace" onClick={() => click_workspace_name(item)}>{item.Workspaces_name}</NavLink>
                                            <TiDelete className="TiDelete" onClick={() => deleteWorkspaceName(item)} />
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
                <div className="nav_calendar" onClick={() => dispatch(setpage('calendar'))}>
                    <NavLink className="navcalendar" to="/home/calendar">Calendar</NavLink>
                    <AiFillCalendar className="AiFillCalendar" />

                </div>
                <div className="nav_mylife" onClick={() => dispatch(setpage('mylife'))}>
                    <NavLink className="navmylife" to="/home/mylife">Mylife</NavLink>
                    <AiFillClockCircle className="AiFillClockCircle" />

                </div>
                <div className="setting_notice">
                    <div className="nav_help">
                        <NavLink to="/home/help">
                            <MdHelp className="icon" />
                            <span className="navhelp">Help</span>
                        </NavLink>
                    </div>
                    <div className="nav_notice">
                        <NavLink to="/home/notice">
                            <AiFillBell className="icon" />
                            <span className="navnotice">Notice</span>
                        </NavLink>
                    </div>
                    <div className="nav_setting">
                        <NavLink to="/home/setting">
                            <AiFillSetting className="icon" />
                            <span className="navsetting">Setting</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navsidebar;