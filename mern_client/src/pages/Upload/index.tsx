import MakersContainer from "../../components/MakersContainer";
import MapContainer from "../../components/MapContainer";
import Navigation from "../../components/Navigation";

function Upload() {
  return (
    <>
      <Navigation type="upload" />
      <MapContainer />
      <MakersContainer />
    </>
  );
}

export default Upload;
