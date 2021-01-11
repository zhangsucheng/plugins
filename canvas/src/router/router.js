import welcome from "../components/welcome"
import wrap from "../components/wrap";
import map from "../components/maptalks/map";

export default [
    {
        name:"welcome",
        path:"/",
        component:welcome
    },
    {
        name:"wrap",
        path:"/wrap",
        component:wrap
    },
    {
        name:"map",
        path:"/map",
        component:map
    }
]
