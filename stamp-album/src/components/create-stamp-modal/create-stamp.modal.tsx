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
    uuid: crypto.randomUUID(),
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
            label="Nom du Timbre"
            width="20vw"
            onChange={(value: string) => updateStanp({ name: value })}
          />
        </div>

        <div className="flex flex-col gap-10">
          <TextInput
            type="number"
            label="Année du Timbre"
            width="20vw"
            onChange={(value: string) => updateStanp({ year: Number(value) })}
          />
        </div>

        <div className="flex flex-col gap-10">
          <TextInput
            type="number"
            label="Nobre de Copies du Timbre"
            width="20vw"
            onChange={(value: string) => updateStanp({ numberOfCopies: Number(value) })}
          />
        </div>

        <label className="form-control w-full ">
          <div className="label ">
            <span className="label-text text-primary text-2xl font-bold">
              Type de Timbre
            </span>
          </div>
          <select className="select select-bordered select-primary text-primary font-bold text-xl border-2" onChange={(e) => updateStanp({usage : e})}>
            {Object.values(EStampUsage)
              .reverse()
              .map((usage) => (
                <option className=" select-primary text-primary font-bold text-xl">
                  {usage}
                </option>
              ))}
          </select>
        </label>

        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Button onClick={() => StampsStorage.save(stamp)}>
              Enregistrer
            </Button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default CreateStampModal;
