import { combineReducers } from "redux";
import WorkspaceRedux from "./WorkspaceRedux";
import MyLifeRedux from "./MyLifeRedux";
import ShowForm from "./ShowForm";
import Page from "./Page";

const rootReducer = combineReducers({
    WorkspaceRedux,
    MyLifeRedux,
    ShowForm,
    Page
})

export default rootReducer;