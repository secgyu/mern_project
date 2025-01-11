import { useEffect } from "react";
import MakersContainer from "../../components/MakersContainer";
import MapContainer from "../../components/MapContainer";
import Navigation from "../../components/Navigation";
import { useSetAtom } from "jotai";
import { infosAtom, selectInfoAtom } from "../../atoms/info";
import SearchBoard from "../../components/SearchBoard";

function Upload() {
  const setInfos = useSetAtom(infosAtom);
  const setSelectInfo = useSetAtom(selectInfoAtom);

  useEffect(() => {
    setInfos(null);
    setSelectInfo(null);
  }, []);

  return (
    <>
      <Navigation type="upload" />
      <MapContainer />
      <MakersContainer type="upload" />
      <SearchBoard />
    </>
  );
}

export default Upload;
