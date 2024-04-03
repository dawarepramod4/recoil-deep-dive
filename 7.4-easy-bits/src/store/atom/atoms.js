import { atom, selector } from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default: 104,
});

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 99,
});

export const notificationAtom = atom({
    key: "notificationAtom",
    default: 0,
});

export const meAtom = atom({
    key: "meAtom",
    default: 1,
});

//selector
export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({ get }) => {
        const networkNotCount = get(networkAtom);
        const jobsNotCount = get(jobsAtom);
        const notificationNotCount = get(notificationAtom);
        const meNotCount = get(meAtom);
        return networkNotCount + jobsNotCount + notificationNotCount + meNotCount;
    },
});
