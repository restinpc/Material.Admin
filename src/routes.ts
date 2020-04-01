/**
 * Material.App - Application router file.
 *
 * @ 19.12.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import Dashboard from "./views/Dashboard/Dashboard";
import ErrorList from "./views/ErrorList/ErrorList";
import Icons from "./views/Icons/Icons";

const appRoutes = [
    {
        path: "/dashboard",
        display: true,
        name: "Dashboard",
        icon: "pe-7s-graph",
        component: Dashboard,
        layout: process.env.REACT_APP_ROOT
    },
    {
        path: "/icons",
        display: true,
        name: "Icons",
        icon: "pe-7s-science",
        component: Icons,
        layout: process.env.REACT_APP_ROOT
    },
    {
        error: true,
        path: "/errors",
        display: true,
        name: "Errors",
        icon: "pe-7s-attention",
        component: ErrorList,
        layout: process.env.REACT_APP_ROOT
    }
];

export default appRoutes;
