import { atom, atomFamily, selector, selectorFamily } from "recoil";
import { TODOS } from "../../todos";
import axios from "axios";
//asynchronous data queries
export const notificationAtom = atom({
    key: "notificationAtom",
    default: selector({
        key: "notificationAtom/Default",
        get: async () => {
            const res = await fetch("https://sum-server.100xdevs.com/notifications");
            return res.json();
        },
    }),
});

//selector
export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({ get }) => {
        const notificationNotCount = get(notificationAtom);
        return (
            notificationNotCount.network +
            notificationNotCount.jobs +
            notificationNotCount.notifications +
            notificationNotCount.messaging
        );
    },
});

//atom Family
export const todosAtomFamily = atomFamily({
    key: "todosAtomFamily",
    default: selectorFamily({
        key: "todosAtomFamily/Default",
        get:
            (id) =>
            async ({ get }) => {
                await new Promise((resolve) => setTimeout(resolve, 2000));
                const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
                return res.data.todo;
            },
    }),
});
