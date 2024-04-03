import React from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import { notificationAtom, totalNotificationSelector } from "./store/atom/atoms";

export default function App() {
    return (
        <RecoilRoot>
            <MainApp />
        </RecoilRoot>
    );
}

function MainApp() {
    const notificationNotCount = useRecoilValue(notificationAtom);
    const totalCount = useRecoilValue(totalNotificationSelector);

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
            <button>Notification{showCount(notificationNotCount.notification)} </button>
            <button>Me{showCount(notificationNotCount.me)}</button>
            <button>TOtal{totalCount}</button>
        </div>
    );
}
