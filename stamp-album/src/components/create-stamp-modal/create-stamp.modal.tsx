import React, { useReducer } from "react";
import Button from "../button/button";
import TextInput from "../text-input/text-input";
import { EStampUsage, TStamp } from "../../types/stamp";
import { StampsStorage } from "../../stamps-storage/stamps-storage";

function CreateStampModal({
  state,
  setState,
}: {
  state: boolean;
  setState: (state: boolean) => void;
}) {
  const defaultStampData: TStamp = {
    uuid : crypto.randomUUID(),
    name: "",
    usage: EStampUsage.Other,
    year: new Date().getFullYear(),
    numberOfCopies: 0,
  };
  const [stamp, updateStanp] = useReducer<
    (prev: any, next: any) => TStamp,
    TStamp
  >(
    (prev, next) => {
      return { ...prev, ...next };
    },
    defaultStampData,
    (arg: TStamp) => arg
  );

  return (
    <dialog
      id="create_stamp_modal"
      className="modal bg-black bg-opacity-30"
      open={state}
      onClose={() => setState(false)}
    >
      <div className="modal-box flex flex-col max-w-[60vw] gap-10">
        <h1 className="font-bold text-5xl">
          Enregistrement d'un Nouveau Timbre
        </h1>

        <div className="flex flex-col gap-10">
          <TextInput
            placeHolder="Nom"
            width="20vw"
            onChange={(value: string) => updateStanp({ name: value })}
          />
        </div>

        <div className="flex flex-col gap-10">
          <TextInput
            type="number"
            placeHolder="Année"
            width="20vw"
            onChange={(value: string) => updateStanp({ year: Number(value) })}
          />
        </div>

        <div className="flex flex-col gap-10">
          <TextInput
            type="number"
            placeHolder="Nobre de Copies du"
            width="20vw"
            onChange={(value: string) => updateStanp({ year: Number(value) })}
          />
        </div>

        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Button onClick={() => StampsStorage.save(stamp)}>Enregistrer</Button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default CreateStampModal;
