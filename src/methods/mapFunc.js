import {store} from '../store/store';

export default{
    map: null,
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
    }
}