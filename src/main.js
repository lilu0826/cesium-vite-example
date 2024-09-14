import {
  Cartesian3,
  Math as CesiumMath,
  Terrain,
  Viewer,
  createOsmBuildingsAsync,
  Ion,
} from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import "./style.css";

Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhYTVjNTNhOS0wYjRjLTRmNTctOGQ1NS1kYTM5ZjZiMmVmM2IiLCJpZCI6MjQxMDAxLCJpYXQiOjE3MjYxMjQ2MDV9.dcJJWlhaBVNUrwLUMelG_amhdki5cV70kZoQ6k2Fpk8";

// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Viewer("cesiumContainer", {
  infoBox: false,
  terrain: Terrain.fromWorldTerrain(),
});

// Fly the camera to San Francisco at the given longitude, latitude, and height.
viewer.camera.flyTo({
  destination: Cartesian3.fromDegrees(-122.4175, 37.655, 400),
  orientation: {
    heading: CesiumMath.toRadians(0.0),
    pitch: CesiumMath.toRadians(-15.0),
  },
});

// Add Cesium OSM Buildings, a global 3D buildings layer.
createOsmBuildingsAsync().then((buildingTileset) => {
  viewer.scene.primitives.add(buildingTileset);
});

function isCrossOriginUrl(url2) {
  const a = document.createElement("a");
  a.href = window.location.href;
  const host = a.host;
  const protocol = a.protocol;
  a.href = url2;
  return protocol !== a.protocol || host !== a.host;
}

console.log('isCrossOriginUrl("skdjfklsdf")', isCrossOriginUrl("/4545"));
