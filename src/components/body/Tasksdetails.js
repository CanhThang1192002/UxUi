// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { useDispatch, useSelector } from "react-redux";
// import { useState, useEffect } from "react";
// import { showTasksdetails, closeTasksdetails } from "../../store/actions/ShowTasksdetails";
// const tasksdetails = () => {
//     const [title, setTitle] = useState('');
//     const dispatch = useDispatch();
//     const Page = useSelector(state => state.Page);
//     const show = useSelector(state => state.ShowTasksdetails.show);
//     useEffect(() => {
//         if (Page.Page === 'mylife') {
//             setTitle('My Life');
//         }
//         else {
//             if (Page.Page === 'calendar') {
//                 setTitle('All Calendar');
//             }
//             else {
//                 if (Page.Page === 'workspace') {
//                     setTitle(Page.PageWorkspace);
//                 }
//             }
//         }
//     }, [Page.PageWorkspace]);
//     return (
//         <>
//             <Modal show={show} onHide={() => dispatch(closeTasksdetails())}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>{title}</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>

//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={() => dispatch(closeTasksdetails())}>
//                         Close
//                     </Button>
//                     <Button variant="primary" onClick={() => dispatch(closeTasksdetails())}>
//                         Save Changes
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     )
// }

// export default tasksdetails