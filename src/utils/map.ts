import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const createMap = (divId: string) => {
  // const createMap = ({ divId, options } : { divId: string, options: any }) => {
  const map = L.map(divId);
  // debugger;
  return map;
};

const createTileLayer = ({ map, url } : { map: any, url: string }) => {
  const tileLayer = L.tileLayer(url);
  tileLayer.addTo(map);
  return tileLayer;
};
const createChinaMap = () => {
  const map = L.map('map-container', {
    center: [29.59, 106.59],
    zoom: 13
  });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
  }).addTo(map);
  return map;
};
export default {
  createMap,
  createTileLayer,
  createChinaMap
};
