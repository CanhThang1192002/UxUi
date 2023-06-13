import { useSelector } from "react-redux";
import '../../styles/body/bystatus.scss'
const Bystatus = () => {
    const MyLifeRedux = useSelector(state => state.MyLifeRedux.MyLifeRedux);
    const WorkspaceRedux = useSelector(state => state.WorkspaceRedux.WorkspaceRedux);
    const title = useSelector(state => state.Page.Page);

    const data = (title === 'mylife') ? MyLifeRedux : WorkspaceRedux;

    const UnComplete = data && data.length > 0 ? data.filter(item => item.status === 'UnComplete') : [];
    const Completed = data && data.length > 0 ? data.filter(item => item.status === 'Completed') : [];
    const Stopped = data && data.length > 0 ? data.filter(item => item.status === 'Stopped') : [];
    return (
        <>
            <div className="bystatus">
                <div className='month'> tháng </div>
                <hr />
                <div className='category_colum'>
                    <div className='UnComplete'>
                        <div className="UnComplete_title">UnComplete</div>
                        <hr />
                        <div className='UnComplete_data'>
                            {
                                UnComplete && UnComplete.length > 0 && UnComplete.map((item, index) => {
                                    return (
                                        <div key={index} className='category_colum_item'>
                                            <span>{item.task_name}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='Completed'>
                        <div className='Completed_title'>Completed</div>
                        <hr />
                        <div className='Completed_data'>
                            {
                                Completed && Completed.length > 0 && Completed.map((item, index) => {
                                    return (
                                        <div key={index} className='category_colum_item'>
                                            <span>{item.task_name}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='Stopped'>
                        <div className='Stopped_title'>Stopped</div>
                        <hr />
                        <div className='Stopped_data'>
                            {
                                Stopped && Stopped.length > 0 && Stopped.map((item, index) => {
                                    return (
                                        <div key={index} className='category_colum_item'>
                                            <span>{item.task_name}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bystatus;