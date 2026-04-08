// import { createContext } from 'react';
// export const UserDetailContext = createContext<any>(
//     {
//         userDetail:undefined,
//         setUserDetail:()=>{}
//     }

// )
//me
// //helps in storing user details globally and access it anywhere in the app without prop drilling

//sir
import { createContext } from 'react';
type UserDetailContextType = {
  userDetail: any;
  setUserDetail: React.Dispatch<React.SetStateAction<any>>;
};

export const UserDetailContext = createContext<UserDetailContextType>({
  userDetail: undefined,
  setUserDetail: () => {},
});