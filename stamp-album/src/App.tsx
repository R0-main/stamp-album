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

  return (
    <>
      <div className="m-[8rem] flex flex-col justify-start items-center ">
        <div className="mb-[8rem] mx-[15rem] flex w-full justify-center">
          <CreateStampModalButton />
        </div>
        <div className=" flex gap-5 ">
          <SearchBar onChange={(value) => setSearch(value)}/>
        </div>
        <div className=" flex flex-col flex-wrap gap-10 mt-20 bor">
          <div className="overflow-x-auto w-[50vw]">
            <table className="table w-[50vw] ">
              {/* head */}
              <thead>
                <tr>
                  <th>Année</th>
                  <th>Nom</th>
                  <th>Nobre de Copie</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {stamps
                  .filter((stamp) =>
                    stamp.name
                      .toLowerCase()
                      .trim()
                      .replace(/ /g, "")
                      .includes(
                        search.toLocaleLowerCase().trim().replace(/ /g, "")
                      )
                  )
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
