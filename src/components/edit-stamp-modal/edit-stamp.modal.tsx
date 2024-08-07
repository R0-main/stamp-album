import { useReducer } from "react";
import Button from "../button/button";
import TextInput from "../text-input/text-input";
import { TStamp } from "../../types/stamp";
import { StampsStorage } from "../../stamps-storage/stamps-storage";

function EditStampModal({
  state,
  setState,
  stamp,
}: {
  state: boolean;
  setState: (state: boolean) => void;
  stamp: TStamp;
}) {
  const [updatedStamp, updateStamp] = useReducer<
    (prev: any, next: any) => TStamp,
    TStamp
  >(
    (prev, next) => {
      return { ...prev, ...next };
    },
    stamp,
    (arg: TStamp) => arg
  );

  return (
    <dialog
      id="edit_stamp_modal"
      className="modal bg-black bg-opacity-30"
      open={state}
      onClose={() => setState(false)}
    >
      <div className="modal-box flex flex-col max-w-[60vw] gap-10">
        <h1 className="font-bold text-5xl">Modification d'un Timbre</h1>

        <div className="flex flex-col gap-10">
          <TextInput
            label="Désignation du Timbre"
            width="20vw"
            copyButton={true}
            defaultValue={stamp.name}
            onChange={(value: string) => updateStamp({ name: value })}
          />
        </div>

        <div className="flex flex-col gap-10">
          <TextInput
            label="Année du Timbre"
            width="20vw"
            copyButton={true}
            defaultValue={stamp.year?.toString()}
            onChange={(value: string) => updateStamp({ year: value })}
          />
        </div>

        <div className="flex flex-col gap-10">
          <TextInput
            label="N°WT"
            width="20vw"
            copyButton={true}
            defaultValue={stamp.nwt}
            onChange={(value: string) => updateStamp({ nwt: value })}
          />
        </div>

        <div className="flex flex-col gap-10">
          <TextInput
            type="number"
            label="Doublon"
            width="20vw"
            defaultValue={stamp.count.toString()}
            onChange={(value: string) => updateStamp({ count: parseInt(value) })}
          />
        </div>

        <div className="flex flex-col ">
          <span className="label-text text-primary text-2xl font-bold mb-2">
            Abîmer
          </span>
          <div className="flex gap-3">
            <span className="label-text text-primary text-xl font-bold mb-2">
              Non
            </span>
            <input
              type="checkbox"
              className="toggle border-4 toggle-lg"
              defaultChecked={stamp.damage}
              onClick={() => {
                updateStamp({ damage: !stamp.damage });
              }}
            />
            <span className="label-text text-primary text-xl font-bold mb-2">
              Oui
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <TextInput
            type="number"
            label="Nombre de Copies du Timbre"
            width="20vw"
            copyButton={true}
            defaultValue={stamp.numberOfCopies?.toString()}
            onChange={(value: string) => updateStamp({ numberOfCopies: value })}
          />
        </div>

        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <div className="absolute left-6">
              <Button
                onClick={() => StampsStorage.delete(stamp)}
                color="btn-error"
              >
                Supprimer
              </Button>
            </div>
            <div className=" flex flex-row gap-10">
              <Button>Annuler</Button>
              <Button
                onClick={() =>
                  StampsStorage.update(updatedStamp.uuid, updatedStamp)
                }
              >
                Enregistrer
              </Button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default EditStampModal;
