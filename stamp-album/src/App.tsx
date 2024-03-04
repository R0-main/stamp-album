import { useEffect, useState } from "react";
import SearchBar from "./components/search-bar/search-bar";
import CreateStampModalButton from "./components/create-stamp-modal/create-stamp.button";
import { StampsStorage } from "./stamps-storage/stamps-storage";
import { TStamp } from "./types/stamp";
import StanpCard from "./components/stamp-card/stamp-card";

function App() {
  const [stamps, setStamps] = useState(StampsStorage.getCurrent());

  useEffect(() => {
    setStamps(StampsStorage.getCurrent());
  }, [StampsStorage.getCurrent()]);

  return (
    <>
      <div className="m-[8rem] flex flex-col justify-start items-center ">
        <div className="mb-[8rem] mx-[15rem] flex w-full justify-center">
          <CreateStampModalButton />
        </div>
        <div className=" flex gap-5">
          <SearchBar />
        </div>
        <div className=" flex flex-col flex-wrap gap-10 mt-20 bor">
          {stamps.map((stamp: TStamp) => (
            <StanpCard stamp={stamp} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
