import { useEffect, useState } from "react";
import SearchBar from "./components/search-bar/search-bar";
import CreateStampModalButton from "./components/create-stamp-modal/create-stamp.button";
import { StampsStorage } from "./stamps-storage/stamps-storage";
import { TStamp } from "./types/stamp";
import StanpCard from "./components/stamp-card/stamp-card";

function App() {
  const [stamps, setStamps] = useState(StampsStorage.getCurrent());
  const [search, setSearch] = useState("");

  useEffect(() => {
    setStamps(StampsStorage.getCurrent());
  }, [StampsStorage.getCurrent()]);

  const handleSearch = (value: string) =>
    value
      ?.toLowerCase()
      ?.trim()
      ?.replace(/ /g, "")
      ?.includes(search.toLocaleLowerCase().trim().replace(/ /g, ""));

  return (
    <>
      <div className="m-[4rem] flex flex-col justify-start items-center ">
        <div className="mb-[5rem] mx-[15rem] flex w-full justify-center">
          <CreateStampModalButton />
        </div>
        <div className=" flex justify-center gap-5 w-[35vw]">
          <SearchBar onChange={(value) => setSearch(value)} />
        </div>
        <div className=" flex flex-col flex-wrap gap-10 mt-10 bor">
          <div className="overflow-x-auto w-full">
            <table className="table w-full table-lg ">
              {/* head */}
              <thead className=" text-2xl">
                <tr>
                  <th>Année</th>
                  <th>Désignation</th>
                  <th>N°WT</th>
                  <th>Nombre de Copies</th>
                </tr>
              </thead>
              <tbody>
                {stamps
                  .filter((stamp) => {
                    if (handleSearch(stamp.name)) return true;
                    if (handleSearch(stamp.nwt)) return true;
                  })
                  .sort((a, b) => a.year - b.year)
                  .map((stamp: TStamp) => (
                    <StanpCard stamp={stamp} />
                  ))}
              </tbody>
            </table>
          </div>
          {}
        </div>
      </div>
    </>
  );
}

export default App;
