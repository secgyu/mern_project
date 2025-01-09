import { useSetAtom } from "jotai";
import MapContainer from "../../components/MapContainer";
import Navigation from "../../components/Navigation";
import { infosAtom } from "../../atoms/info";
import { infos } from "../../data/infos";
import MakersContainer from "../../components/MakersContainer";

function Home() {
  const setInfos = useSetAtom(infosAtom);

  if (infos) {
    setInfos(infos);
  }

  return (
    <>
      <Navigation />
      <MapContainer />
      <MakersContainer />
    </>
  );
}

export default Home;
