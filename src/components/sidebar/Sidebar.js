import { Routes, Route } from "react-router-dom";
import Navsidebar from "./Navsidebar";
import Favourite from "./config/Favourite";
import Setting from "./config/Setting";
import Notice from "./config/Notice";
import Calendar from "./calendar/Calendar";
import Mylife from "./mylife/Mylife";
import Bystatus from "../body/Bystatus";
import Mytasks from "../body/Mytasks";
import Alltasks from "../body/Alltasks";
import Bydate from "../body/Bydate";
import Workspace from "./workspace/Workspace";

const Sidebar = () => {
    return (
        <>
            <Navsidebar />
            <Routes>
                {/* <Route path="/" element={} /> */}
                <Route path="/favourite" element={<Favourite />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/notice" element={<Notice />} />
                <Route path="/calendar" element={<Calendar />} >
                    <Route path="bystatus" element={<Bystatus />} />
                    <Route path="mytasks" element={<Mytasks />} />
                    <Route path="alltasks" element={<Alltasks />} />
                    <Route path="bydate" element={<Bydate />} />
                </Route>
                <Route path="/workspace" element={<Workspace />} >
                    <Route path="bystatus" element={<Bystatus />} />
                    <Route path="mytasks" element={<Mytasks />} />
                    <Route path="alltasks" element={<Alltasks />} />
                    <Route path="bydate" element={<Bydate />} />
                </Route>
                <Route path="/mylife" element={<Mylife />} >
                    <Route path="bystatus" element={<Bystatus />} />
                    <Route path="mytasks" element={<Mytasks />} />
                    <Route path="alltasks" element={<Alltasks />} />
                    <Route path="bydate" element={<Bydate />} />
                </Route>

            </Routes>


        </>
    )
}

export default Sidebar;