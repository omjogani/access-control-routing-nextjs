import {hasAccess} from "./hasAccess";
import {usePathname} from "next/navigation";

const AuthorizationGuard = ({children, userRole}) => {
    const usePathName = usePathname();

    console.log("User Role: ", userRole);
    console.log("Path Name: ", usePathName);
    const permission = hasAccess({userRole, url: usePathName});
    if (!permission) return null;
    return children;

};

export default AuthorizationGuard;
