"use client";

import React from 'react'
import useGetUserRole from "../../../hooks/useGetUserRole";
import AuthorizationGuard from "./_guards/AuthorizationGuard";
import {useRouter} from "next/navigation";
import "../../globals.css";

const Layout = ({children}) => {
    const {userRole, setUserRole} = useGetUserRole();
    const router = useRouter();

    return (
        <div>
            <h1>Access Based Routing</h1>

            <table className="tg border-2">
                <thead>
                <tr>
                    <th className="tg-0pky">User Role</th>
                    <th className="tg-0pky">Accessible Pages</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="tg-0pky">Admin</td>
                    <td className="tg-0pky">
                        <ul>
                            <li>Intake</li>
                            <li>Patients</li>
                            <li>Overview</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td className="tg-0pky">Care Provider</td>
                    <td className="tg-0pky">
                        <ul>
                            <li>Intake</li>
                            <li>Patients</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td className="tg-0pky">Client - Referred</td>
                    <td className="tg-0pky">
                        <ul>
                            <li>Intake</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td className="tg-0pky">Client - Not Referred</td>
                    <td className="tg-0pky">
                        <ul>
                            <li>Details</li>
                        </ul>
                    </td>
                </tr>
                </tbody>
            </table>
            <p>Current Role: {userRole}</p>
            <div>
                <button onClick={() => setUserRole("admin")}>Choose Admin</button>
                <button onClick={() => setUserRole("care-provider")}>Choose Care-Provider</button>
                <button onClick={() => setUserRole("client-referred")}>Choose Client (Referred)</button>
                <button onClick={() => setUserRole("client-not-referred")}>Choose Client (Not Referred)</button>
            </div>
            <br/>
            <h3>Pages</h3>
            <div>
                <button onClick={() => router.replace("/users/userid987/intake")}>Intake</button>
                <button onClick={() => router.replace("/users/userid987/patients")}>Patients</button>
                <button onClick={() => router.replace("/users/userid987/overview")}>Overview</button>
                <button onClick={() => router.replace("/users/userid987/details")}>Details</button>
            </div>
            <AuthorizationGuard userRole={userRole}>
                {children}
            </AuthorizationGuard>
        </div>
    );
}
export default Layout
