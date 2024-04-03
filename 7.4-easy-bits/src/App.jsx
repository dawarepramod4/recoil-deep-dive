import React from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import {
    networkAtom,
    jobsAtom,
    notificationAtom,
    meAtom,
    totalNotificationSelector,
} from "./store/atom/atoms";

export default function App() {
    return (
        <RecoilRoot>
            <MainApp />
        </RecoilRoot>
    );
}

function MainApp() {
    const networkNotCount = useRecoilValue(networkAtom);
    const jobsNotCount = useRecoilValue(jobsAtom);
    const notificationNotCount = useRecoilValue(notificationAtom);
    const meNotCount = useRecoilValue(meAtom);
    const totalNotification = useRecoilValue(totalNotificationSelector);

    function showCount(value) {
        if (value == 0) return "";
        return value > 99 ? "99+" : value;
    }
    return (
        <div>
            <button>Home </button>
            <button onClick={(e) => {}}>My Network {showCount(networkNotCount)}</button>
            <button>Jobs {showCount(jobsNotCount)} </button>
            <button>Notification{showCount(notificationNotCount)} </button>
            <button>Me{showCount(meNotCount)}</button>
            <button>TOtal{totalNotification}</button>
        </div>
    );
}
