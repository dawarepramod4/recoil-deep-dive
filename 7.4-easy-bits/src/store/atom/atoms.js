import { atom, selector } from "recoil";

export const notificationAtom = atom({
    key: "notificationAtom",
    default: {
        network: 10,
        jobs: 20,
        notification: 100,
        me: 0,
    },
});

//selector
export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({ get }) => {
        const notificationNotCount = get(notificationAtom);
        return (
            notificationNotCount.network +
            notificationNotCount.jobs +
            notificationNotCount.notification +
            notificationNotCount.me
        );
    },
});
