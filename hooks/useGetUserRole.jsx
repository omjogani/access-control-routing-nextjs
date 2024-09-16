import React from 'react'


const roles = [
    'admin',
    'care-provider',
    'client-referred',
    'client-not-referred',
];


const useGetUserRole = () => {
    const [userRole, setUserRole] = React.useState(roles[0]);
    // Logic to maintain the user role

    return {userRole, setUserRole}
}
export default useGetUserRole
