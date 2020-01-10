var map;

import {store} from '../store/store';
//import mapboxgl from "mapbox-gl";

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

export default{
    map: null,
    markers: {},
    popup: null,
    store: store,
    //Methods
    getBound: function(){
        var ext = this.map.getBounds();
        return {
            minX: ext._sw.lng,
            minY: ext._sw.lat,
            maxX: ext._ne.lng,
            maxY: ext._ne.lat
        }
    },
    addMarkers:function(activeId){
        var li = store.getters[activeId];
        for (var l in li){
            var data = li[l];
            var id = data.id;
            var place = data.place;
            var pos = data.pos;
            this.addMarker(id, place, pos);
        }
    },
    addMarker: function(id, place, pos){
        var map =this.map;
        var div = document.createElement('div');
        div.className = "marker";
        div.id = id+"_mk";
        var marker = new mapboxgl.Marker({
            element: div,
            anchor: 'center'
        }).setLngLat(pos).addTo(map);
        this.markers[id]=marker;
        var this_ = this;
        div.onmouseover = function(){
            var popup = new mapboxgl.Popup({
                closeButton: false,
                closeOnClick: false,
                className: "popup",
                offset: [0, -15]
            })
            .setLngLat(pos)
            .setHTML(place)
            .addTo(map);
            this_.popup = popup;
            $(this).addClass('hover');
            var a = $("#"+id);
            $("#"+id).addClass('hover');
        }
        div.onmouseout = function(){
            if (this_.popup) {
                this_.popup.remove();
                this_.popup = null;
            }
            $(this).removeClass('hover');
            $("#"+id).removeClass('hover');
        }
    },
    clkContent(id, pos, place){
        var map = this.map;
        $("#"+id+"_mk").addClass("hover");
        var popup = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false,
            className: "popup",
            offset: [0, -15]
        })
        .setLngLat(pos)
        .setHTML(place)
        .addTo(map);
        this.popup = popup;
    },
    unclkContent(id, pos, place){
        $("#"+id+"_mk").removeClass("hover");
        if (this.popup) {
            this.popup.remove();
            this.popup = null;
        }
    }
}