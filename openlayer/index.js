import "ol/ol.css"
import {Map,View} from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from 'ol/source/OSM';
import {Vector as VectorSource} from "ol/source";
import {Vector as VectorLayer} from "ol/layer";
import {Circle as CircleStyle, Fill, Stroke, Style} from "ol/style";
import {Draw, Modify, Snap} from "ol/interaction";

const map = new Map({
    target:"map",
    layers:[
        new TileLayer({
            source:new OSM()
        })
    ],
    view: new View({
        center:[0, 0],
        zoom:0
    })
})

// 画图
let typeSelect = document.getElementById("type")
let draw,snap
let source = new VectorSource()
let vector = new VectorLayer({
    source:source,
    style:new Style({
        fill: new Fill({
            color:"rgba(255,255,255,0.2)"
        }),
        stroke: new Stroke({
            color:"#ffcc33",
            width:2
        }),
        image:new CircleStyle({
            radius:1,
            fill: new Fill({
                color:"#ffcc33"
            })
        })
    })
})
let modify = new Modify({source:source})
map.addInteraction(modify)

function addInteractions(){
    draw = new Draw({
        source:source,
        type:typeSelect.value
    })
    map.addInteraction(draw)
    snap = new Snap({source:source})
    map.addInteraction(snap)
}

typeSelect.onchange = ()=>{
    map.removeInteraction(draw)
    map.removeInteraction(snap)
    addInteractions()
}