import { useState } from "react";
import { TStamp } from "../../types/stamp";
import EditStampModal from "../edit-stamp-modal/edit-stamp.modal";

export default function StanpCard({ stamp }: { stamp: TStamp }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <tr
        className=" break-all hover cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <th className=" text-2xl">{stamp.year}</th>
        <td className=" text-2xl ">{stamp.name}</td>
        <td className=" text-2xl ">{stamp.nwt}</td>
        <td className=" text-2xl ">{stamp.count}</td>
        <td className=" text-2xl ">{stamp.damage ? "Oui" : "Non"}</td>
        <td className=" text-2xl">{stamp.numberOfCopies}</td>
      </tr>
      {open && <EditStampModal state={open} setState={setOpen} stamp={stamp} />}
    </>
  );
}
