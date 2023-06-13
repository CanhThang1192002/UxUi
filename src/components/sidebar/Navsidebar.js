import {
    NavLink
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showAddWorkspace } from "../../store/actions/ShowForm";
import { AiFillClockCircle, AiFillCalendar, AiOutlinePlus, AiFillStar, AiFillSetting, AiFillBell } from "react-icons/ai";
import '../../styles/sidebar/Navsidebar.scss';
import Form_AddWorkspace from '../body/Form_AddWorkspace';

const Navsidebar = () => {
    const dispatch = useDispatch();
    const WorkspaceRedux = useSelector(state => state.WorkspaceRedux.WorkspaceRedux);
    return (
        <>
            <Form_AddWorkspace />
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
                        <AiOutlinePlus className="AiOutlinePlus" onClick={() => dispatch(showAddWorkspace())} />
                        <div>
                            {
                                (WorkspaceRedux && WorkspaceRedux.length > 0) &&
                                WorkspaceRedux.map((item, index) => {
                                    return (
                                        <div key={index} className='workspace_header_item'>
                                            {/* <span>{item.task}</span> */}
                                            <NavLink to="/workspace">{item.task}</NavLink>
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