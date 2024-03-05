import { useReducer } from "react";
import Button from "../button/button";
import TextInput from "../text-input/text-input";
import { TStamp } from "../../types/stamp";
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
    nwt: "",
    year: new Date().getFullYear(),
    numberOfCopies: 0,
  };
  const [stamp, updatedStamp] = useReducer<
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
            label="Désignation du Timbre"
            width="20vw"
            onChange={(value: string) => updatedStamp({ name: value })}
          />
        </div>

        <div className="flex flex-col gap-10">
          <TextInput
            type="number"
            label="Année du Timbre"
            width="20vw"
            onChange={(value: string) => updatedStamp({ year: value })}
          />
        </div>

        <div className="flex flex-col gap-10">
          <TextInput
            label="N°WT"
            width="20vw"
            onChange={(value: string) => updatedStamp({ nwt: value })}
          />
        </div>

        <div className="flex flex-col gap-10">
          <TextInput
            type="number"
            label="Nombre de Copies du Timbre"
            width="20vw"
            onChange={(value: string) =>
              updatedStamp({ numberOfCopies: Number(value) })
            }
          />
        </div>

        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <div className=" flex flex-row gap-10">
              <Button>Annuler</Button>
              <Button onClick={() => StampsStorage.save(stamp)}>
                Enregistrer
              </Button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default CreateStampModal;
