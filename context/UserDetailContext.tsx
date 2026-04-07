import { createContext } from 'react';

export const UserDetailContext = createContext(
    {
        userDetail:undefined,
        setUserDetail:()=>{}
    }

);

//helps in storing user details globally and access it anywhere in the app without prop drilling