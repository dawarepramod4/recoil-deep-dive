import { atom, selector } from "recoil";
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
