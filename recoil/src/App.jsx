import React, { useEffect } from "react";
import { RecoilRoot, useRecoilValue, useRecoilState, useRecoilValueLoadable } from "recoil";
import { notificationAtom, todosAtomFamily, totalNotificationSelector } from "./store/atom/atoms";
import axios from "axios";

export default function App() {
    return (
        <RecoilRoot>
            <MainApp />
            <Todo id={1} />
            <Todo id={2} />
            <Todo id={2} />
            <Todo id={2} />
            <Todo id={2} />
            <Todo id={2} />
        </RecoilRoot>
    );
}

//asynchronous data queries
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

//atom Family
function Todo({ id }) {
    // const todo = useRecoilValue(todosAtomFamily(id));
    //to use the future i.e, loadable
    const todo = useRecoilValueLoadable(todosAtomFamily(id));
    if (todo.state === "loading") return <h1>Loading...</h1>;
    if (todo.state === "hasValue")
        return (
            <div>
                <h1>{todo.contents.title}</h1>
                <h2>{todo.contents.description}</h2>
            </div>
        );
    if (todo.state === "hasError") return <h1>Error</h1>;
}
