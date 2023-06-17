import '../../styles/body/navbar.scss';
import { HiPencilSquare } from "react-icons/hi2";
import { BsFileEarmarkCheck } from "react-icons/bs";
import { MdEventNote } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import {
    NavLink
} from "react-router-dom";
import { useSelector } from 'react-redux';


const Navbar = () => {
    let title = useSelector(state => state.Page.Page);
    if (title === 'calendar') {
        return (
            <>
                <div className="navbar">
                    <HiPencilSquare id='HiPencilSquare' className='navbar_icon' />
                    <NavLink to='/bystatus'>By status</NavLink>
                    <BsFileEarmarkCheck className='navbar_icon' />
                    <NavLink to='/mytasks'>My tasks</NavLink>
                    <CgNotes className='navbar_icon' />
                    <NavLink to='/alltasks'>All tasks</NavLink>
                    <MdEventNote className='navbar_icon' />
                    <NavLink to='/bydate'>By date</NavLink>
                </div>

                <hr />
            </>
        )
    }
    return (
        <>
            <div className="navbar">
                <HiPencilSquare id='HiPencilSquare' className='navbar_icon' />
                <NavLink to={`/${title}/bystatus`}>By status</NavLink>
                <BsFileEarmarkCheck className='navbar_icon' />
                <NavLink to={`/${title}/mytasks`}>My tasks</NavLink>
                <CgNotes className='navbar_icon' />
                <NavLink to={`/${title}/alltasks`}>All tasks</NavLink>
                <MdEventNote className='navbar_icon' />
                <NavLink to={`/${title}/bydate`}>By date</NavLink>
            </div>

            <hr />
        </>
    )
}

export default Navbar;