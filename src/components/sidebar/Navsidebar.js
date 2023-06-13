import {
    NavLink
} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addWorkspace } from "../../store/actions/Workspace_action";
import { setpageWorkspace } from "../../store/actions/Page";
import { AiFillClockCircle, AiFillCalendar, AiOutlinePlus, AiFillStar, AiFillSetting, AiFillBell } from "react-icons/ai";
import '../../styles/sidebar/Navsidebar.scss';

const Navsidebar = () => {
    const Workspaces_name = useSelector(state => state.WorkspaceRedux.Workspaces_name);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [workspace, setWorkspace] = useState([]);
    const ShowAddWorkspace = () => {
        setShow(true);
    }
    const add = () => {
        dispatch(addWorkspace(workspace));
        setShow(false);
    }
    return (
        <>
            <Modal show={show}>
                <Modal.Header>Add Workspace</Modal.Header>
                <Modal.Body>
                    <input type="text" placeholder="Workspace name" onChange={(e) => setWorkspace(e.target.value)} />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => add()}>Add</Button>
                    <Button onClick={() => setShow(false)}>Close</Button>
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
                                Workspaces_name && Workspaces_name.length > 0 && Workspaces_name.map((item, index) => {
                                    return (
                                        <div className="workspace_item" key={index}>
                                            <NavLink to="/workspace" onClick={() => dispatch(setpageWorkspace(item))}>{item}</NavLink>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="nav_calendar">
                    <NavLink to="/calendar">Calendar</NavLink>
                    <AiFillCalendar />
                </div>
                <div className="nav_mylife">
                    <NavLink to="/mylife">Mylife</NavLink>
                    <AiFillClockCircle />
                </div>
            </div>
        </>
    )
}
export default Navsidebar;