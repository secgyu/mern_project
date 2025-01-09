import { useSetAtom } from "jotai";
import Map from "./common/Map";
import { mapAtom } from "../atoms/map";

function MapContainer() {
  const setMap = useSetAtom(mapAtom);

  const initMap = (map: naver.maps.Map) => {
    setMap(map);
    naver.maps.Event.addListener(map, "click", () => {
      console.log("맵클릭!");
    });
  };

  return <Map width="100%" height="100%" initMap={initMap} />;
}

export default MapContainer;
