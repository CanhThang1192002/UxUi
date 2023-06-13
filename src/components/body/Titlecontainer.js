import { useDispatch } from "react-redux";
import { showAddWorkspace } from "../../store/actions/ShowForm";
import '../../styles/body/titlecontainer.scss';
import Form_AddWorkspace from './Form_AddWorkspace';


const Titlecontainer = (props) => {
    const { title } = props;
    const dispatch = useDispatch();
    const clickaddtask = () => {
        dispatch(showAddWorkspace());
    }
    return (
        <>
            <Form_AddWorkspace />
            <div className="titlecontainer">
                <h1 className='title'>{title}</h1>
                <button className='bt_addtask' onClick={() => clickaddtask()}>Add Task</button>
            </div>
        </>
    )
}

export default Titlecontainer;