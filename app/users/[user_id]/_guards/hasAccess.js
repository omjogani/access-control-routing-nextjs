import {accessData} from "../../../../access_data/data";

const hasAccess = ({userRole, url}) => {
    const splitUrl = url.split('/');
    const path = splitUrl[splitUrl.length - 1];
    console.log("Path: ", path);

    if (accessData.hasOwnProperty(userRole)) {
        return accessData[userRole].includes(path);
    }

    return false; // no access
};

export {hasAccess};