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
            this.addMarker(id, place, pos, activeId);
        }
    },
    addMarker: function(id, place, pos, activeId){
        var map =this.map;
        var div = document.createElement('div');
        div.className = "marker"+"_"+activeId;
        div.id = id+"_mk";
        var marker = new mapboxgl.Marker({
            element: div,
            anchor: 'center'
        }).setLngLat(pos).addTo(map);
        this.markers[id]=marker;
        var this_ = this;
        var active = store.getters.categories.filter(a => a.id==activeId);
        var bgColor = active[0].color;
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
            $("#"+id).addClass('hover');
            $("#"+id)[0].scrollIntoView({
                behavior: "smooth", block: "center"
            })
            $(".mapboxgl-popup-content").css("background-color",bgColor);
            $(".mapboxgl-popup-tip").css("border-top-color", bgColor);
            this_.map.flyTo({
                center: pos,
                zoom: 12,
                speed: 2,
                curve: 1
            });
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
    rmMarker: function(){
        var mks = this.markers;
        for (var m in mks){
            var mk = mks[m];
            mk.remove();
        }
        this.markers = {};
    },
    clkContent: function(id, pos, place, bgColor){
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
        $(".mapboxgl-popup-content").css("background-color",bgColor);
        $(".mapboxgl-popup-tip").css("border-top-color", bgColor);
        this.map.flyTo({
            center: pos,
            zoom: 12,
            speed: 2,
            curve: 1
        });
    },
    unclkContent(id, pos, place){
        $("#"+id+"_mk").removeClass("hover");
        if (this.popup) {
            this.popup.remove();
            this.popup = null;
        }
        this.map.flyTo({
            center: pos,
            zoom: 4,
            speed: 2,
            curve: 1
        });
    }
}