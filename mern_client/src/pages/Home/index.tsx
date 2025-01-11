import { useSetAtom } from "jotai";
import MapContainer from "../../components/MapContainer";
import Navigation from "../../components/Navigation";
import { infosAtom } from "../../atoms/info";
import { infos } from "../../data/infos";
import MakersContainer from "../../components/MakersContainer";
import { useEffect } from "react";

function Home() {
  const setInfos = useSetAtom(infosAtom);

  useEffect(() => {
    if (infos) {
      setInfos(infos);
    }
  }, []);

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
