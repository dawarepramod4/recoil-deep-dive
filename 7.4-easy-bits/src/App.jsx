import React, { useEffect } from "react";
import { RecoilRoot, useRecoilValue, useRecoilState } from "recoil";
import { notificationAtom, totalNotificationSelector } from "./store/atom/atoms";
import axios from "axios";

export default function App() {
    return (
        <RecoilRoot>
            <MainApp />
        </RecoilRoot>
    );
}

function MainApp() {
    const [notificationNotCount, setNotificationCount] = useRecoilState(notificationAtom);
    const totalCount = useRecoilValue(totalNotificationSelector);

    // useEffect(() => {
    //     axios.get("https://sum-server.100xdevs.com/notifications").then((res) => {
    //         setNotificationCount(res.data);
    //     });
    // }, []);

    function showCount(value) {
        if (value == 0) return "";
        return value > 99 ? "99+" : value;
    }
    return (
        <div>
            <button>Home </button>
            <button onClick={(e) => {}}>
                My Network {showCount(notificationNotCount.network)}
            </button>
            <button>Jobs {showCount(notificationNotCount.jobs)} </button>
            <button>Notification {showCount(notificationNotCount.notifications)} </button>
            <button>Me {showCount(notificationNotCount.messaging)}</button>
            <button>TOtal {totalCount}</button>
        </div>
    );
}
