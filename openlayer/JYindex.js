import 'ol/ol.css';
import Map from "ol/Map"
import View from "ol/View"
import TileLayer from "ol/layer/Tile"
import Projection from "ol/proj/Projection"
import WMTS from "ol/source/WMTS"
import WMTSTileGrid from "ol/tilegrid/WMTS"

// 画图用
import {Circle as CircleStyle,Fill,Stroke,Style} from "ol/style";
import {Vector as VectorLayer} from "ol/layer";
import {Vector as VectorSource} from "ol/source"
import {Draw, Modify, Snap} from "ol/interaction";

let resolutions = [
    3.5691915087454206e-4,
    1.1897305029151401e-4,
    3.331245408162392e-5,
    1.665622704081196e-5,
    8.32811352040598e-6,
    4.75892201166056e-6,
    2.37946100583028e-6,
    1.18973050291514e-6,
    4.7589220116605604e-7,
    2.3794610058302802e-7,
]

function roadLayerSource(){
    let gridsetName = "EPSG:4326_road1";
    let gridNames = [
        "EPSG:4326_road1:0",
        "EPSG:4326_road1:1",
        "EPSG:4326_road1:2",
        "EPSG:4326_road1:3",
        "EPSG:4326_road1:4",
        "EPSG:4326_road1:5",
    ];
    let baseUrl = "http://39.106.82.212:8080/geowebcache/service/wmts";
    let style = "";
    let format = "image/png";
    let layerName = "road1";

    let resolutions = [
        3.5691915087454206e-4,
        1.1897305029151401e-4,
        3.331245408162392e-5,
        1.665622704081196e-5,
        8.32811352040598e-6,
        3.8071376093284483e-6,
    ];
    let baseParams = [
        "VERSION",
        "LAYER",
        "STYLE",
        "TILEMATRIX",
        "TILEMATRIXSET",
        "SERVICE",
        "FORMAT",
    ];

    let params = {
        VERSION: "1.0.0",
        LAYER: layerName,
        STYLE: style,
        TILEMATRIX: gridNames,
        TILEMATRIXSET: gridsetName,
        SERVICE: "WMTS",
        FORMAT: format,
    };

    let url = baseUrl + "?";
    for (let param in params) {
        if (baseParams.indexOf(param.toUpperCase()) < 0) {
            url = url + param + "=" + params[param] + "&";
        }
    }
    url = url.slice(0, -1);

    let source = new WMTS({
        url: url,
        layer: params["LAYER"],
        matrixSet: params["TILEMATRIXSET"],
        format: params["FORMAT"],
        projection: "",
        style: params["STYLE"],
        wrapX: true,
        tileGrid: new WMTSTileGrid({
            tileSize: [512, 512],
            extent: [119.87, 31.63451478950447, 120.78371302623883, 32.0],
            origin: [119.87, 32.0],
            resolutions: resolutions,
            matrixIds: params["TILEMATRIX"],
        }),
    })
    return source
}

function lanSourceLayer(){
    let gridsetName = "EPSG:4326_lane1";
    let gridNames = [
        "EPSG:4326_lane1:0",
        "EPSG:4326_lane1:1",
        "EPSG:4326_lane1:2",
        "EPSG:4326_lane1:3",
        "EPSG:4326_lane1:4",
    ];
    let baseUrl = "http://39.106.82.212:8080/geowebcache/service/wmts";
    let style = "";
    let format = "image/png";
    let layerName = "lane1";
    let projection = new Projection({
        code: "EPSG:4326",
        units: "",
        axisOrientation: "neu",
    });
    let resolutions = [
        4.75892201166056e-6,
        2.37946100583028e-6,
        1.18973050291514e-6,
        4.7589220116605604e-7,
        2.3794610058302802e-7,
    ];
    let baseParams = [
        "VERSION",
        "LAYER",
        "STYLE",
        "TILEMATRIX",
        "TILEMATRIXSET",
        "SERVICE",
        "FORMAT",
    ];

    let params = {
        VERSION: "1.0.0",
        LAYER: layerName,
        STYLE: style,
        TILEMATRIX: gridNames,
        TILEMATRIXSET: gridsetName,
        SERVICE: "WMTS",
        FORMAT: format,
    };
    let url = baseUrl + "?";
    for (let param in params) {
        if (baseParams.indexOf(param.toUpperCase()) < 0) {
            url = url + param + "=" + params[param] + "&";
        }
    }
    url = url.slice(0, -1);

    let source = new WMTS({
        url: url,
        layer: params["LAYER"],
        matrixSet: params["TILEMATRIXSET"],
        format: params["FORMAT"],
        projection: projection,
        tileGrid: new WMTSTileGrid({
            tileSize: [512, 512],
            extent: [120.436, 31.799324615090388, 120.51153361016908, 31.831],
            origin: [120.43600000000001, 31.831],
            resolutions: resolutions,
            matrixIds: params["TILEMATRIX"],
        }),
        style: params["STYLE"],
        wrapX: true,
    });
    return source;
}

/*创建投影*/
let projection = new Projection({
    code: "EPSG:4326",
    units: "",
    axisOrientation: "enu",
})
/*创建路段瓦片*/
let roadLayer = new TileLayer({
    minResolution: 8.32811352040598e-6,
    source:roadLayerSource()
})
let lanLayer = new TileLayer({
    source:lanSourceLayer(),
    minResolution: 2.3794610058302802e-7,
    maxResolution: 8.32811352040598e-6,
})
/*创建视图*/
let view = new View({
    center: [120.499479,31.814279],
    zoom: 2,
    resolutions:resolutions,
    projection:projection,
    extent: [119.87, 31.63451478950447, 120.78371302623883, 32.0],
})

/*创建地图*/
let map = new Map({
    layers:[roadLayer,lanLayer],
    target:"map",
    view:view,
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