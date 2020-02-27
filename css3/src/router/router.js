import border from "../components/border";
import background from "../components/background";
import vh from "../components/vh";
import gradient from "../components/gradient";
import textstyle from "../components/textstyle";
import twod from "../components/twod";
import threed from "../components/threed";
import transition from "../components/transition";
export default [
    {
        name:"border",
        path:"/border",
        component:border
    },
    {
        name: "bg",
        path: "/bg",
        component: background
    },
    {
        name: "vh",
        path: "/vh",
        component: vh
    },
    {
        name: "gradient",
        path: "/gradient",
        component: gradient
    },
    {
        name: "textstyle",
        path: "/textstyle",
        component: textstyle
    },
    {
        name: "twod",
        path: "/twod",
        component: twod
    },
    {
        name: "threed",
        path: "/threed",
        component: threed
    },
    {
        name: "transition",
        path: "/transition",
        component: transition
    }
]