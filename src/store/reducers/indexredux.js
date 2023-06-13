import { combineReducers } from "redux";
import WorkspaceRedux from "./WorkspaceRedux";
import MyLifeRedux from "./MyLifeRedux";
import ShowForm_AddTasks from "./ShowForm_AddTasks";
import Page from "./Page";

const rootReducer = combineReducers({
    WorkspaceRedux,
    MyLifeRedux,
    ShowForm_AddTasks,
    Page
})

export default rootReducer;