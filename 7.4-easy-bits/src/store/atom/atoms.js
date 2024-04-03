
import { atom } from 'recoil';

export const networkAtom = atom({
    key: 'networkAtom',
    default: 104
});

export const jobsAtom = atom({
    key: 'jobsAtom',
    default: 99
});

export const notificationAtom = atom({  
    key: 'notificationAtom',
    default: 0
});

export const meAtom = atom({  
    key: 'meAtom',
    default: 1
});