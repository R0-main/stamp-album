import React from "react";
import { TStamp } from "../../types/stamp";

export default function StanpCard({ stamp }: { stamp: TStamp }) {
  return (
    <tr>
      <th>{stamp.year}</th>
      <td>{stamp.name}</td>
      <td>{stamp.numberOfCopies}</td>
      <td>{stamp.usage}</td>
    </tr>
  );
}
