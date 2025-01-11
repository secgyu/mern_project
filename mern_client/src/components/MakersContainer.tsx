import { useAtom, useAtomValue } from "jotai";
import { mapAtom } from "../atoms/map";
import { infosAtom, selectInfoAtom } from "../atoms/info";
import { Info } from "../types/info";
import Maker from "./common/Maker";
import InfoWindow from "./common/InfoWindow";
import { useCallback } from "react";

interface MarkersContainerProps {
  type?: "home" | "upload";
}

function MakersContainer({ type = "home" }: MarkersContainerProps) {
  const map = useAtomValue(mapAtom);
  const infos = useAtomValue(infosAtom);
  const [selectInfo, setSelectInfo] = useAtom(selectInfoAtom);

  const onSubmit = useCallback(() => {
    console.log("제출");
  }, []);

  if (!map || !infos) return null;
  return (
    <>
      {infos.map((info: Info) => (
        <Maker
          key={info.id}
          map={map}
          position={info.position}
          content={'<div class="marker" />'}
          onClick={() => {
            setSelectInfo(info);
          }}
        />
      ))}
      {selectInfo && (
        <Maker
          key={selectInfo.id}
          map={map}
          position={selectInfo.position}
          content={'<div class="marker select"/>'}
          onClick={() => {
            setSelectInfo(null);
          }}
        />
      )}
      <InfoWindow map={map} selectInfo={selectInfo} onSubmit={type === "upload" ? onSubmit : undefined} />
    </>
  );
}

export default MakersContainer;
