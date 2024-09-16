import useGetUserRole from "../../../../hooks/useGetUserRole";
import {hasAccess} from "./hasAccess";
import {usePathname} from "next/navigation";

const AdminGuard = ({children}) => {
    const {userRole} = useGetUserRole();
    const usePathName = usePathname();

    if (userRole === 'admin') {
        const permission = hasAccess({userRole, url: usePathName});
        if (!permission) return null;
        return children;
    }

    return null;
};

export default AdminGuard;
