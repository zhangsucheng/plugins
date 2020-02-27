import border from "../components/border";
import background from "../components/background";
import vh from "../components/vh";
import gradient from "../components/gradient";
import textstyle from "../components/textstyle";
import twod from "../components/twod";
import threed from "../components/threed";
import transition from "../components/transition";
import animation from "../components/animation";
import transform from "../components/transform";
import solarsys from "../components/solarsys";
import column from "../components/column";
import box from "../components/box";
import img from "../components/img";
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
    },
    {
        name: "animation",
        path: "/animation",
        component: animation
    },
    {
        name: "transform",
        path: "/transform",
        component: transform
    },
    {
        name: "solarsys",
        path: "/solarsys",
        component: solarsys
    },
    {
        name: "column",
        path: "/column",
        component: column
    },
    {
        name: "box",
        path: "/box",
        component: box
    },
    {
        name: "img",
        path: "/img",
        component: img
    }
]