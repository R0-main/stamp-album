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
    damage: false,
    count: 0,
    year: new Date().getFullYear(),
    numberOfCopies: 0,
  };
  const [stamp, updateStamp] = useReducer<
    (prev: any, next: any) => TStamp,
    TStamp
  >(
    (prev, next) => {
      return { ...prev, ...next };
    },
    defaultStampData,
    (arg: TStamp) => arg
  );

  const handleSave = () => {
    const duplicate = StampsStorage.getCurrent().find(
      (stp) =>
        stp.name.trim().toLocaleLowerCase() ===
          stamp.name.trim().toLocaleLowerCase() ||
        (stp.nwt.trim().toLocaleLowerCase() ===
          stamp.nwt.trim().toLocaleLowerCase() &&
          stp.year === stp.year)
    );

    if (duplicate) {
      StampsStorage.update(duplicate.uuid, {
        ...duplicate,
        count: duplicate.count + 1,
      });
    } else StampsStorage.save(stamp);
  };

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
            onChange={(value: string) => updateStamp({ name: value })}
          />
        </div>

        <div className="flex flex-col gap-10">
          <TextInput
            type="number"
            label="Année du Timbre"
            width="20vw"
            onChange={(value: string) => updateStamp({ year: value })}
          />
        </div>

        <div className="flex flex-col gap-10">
          <TextInput
            label="N°WT"
            width="20vw"
            onChange={(value: string) => updateStamp({ nwt: value })}
          />
        </div>

        <div className="flex flex-col gap-10">
          <TextInput
            type="number"
            label="Doublon"
            width="20vw"
            defaultValue={defaultStampData.count.toString()}
            onChange={(value: string) =>
              updateStamp({ count: parseInt(value) })
            }
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
            onChange={(value: string) =>
              updateStamp({ numberOfCopies: Number(value) })
            }
          />
        </div>

        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <div className=" flex flex-row gap-10">
              <Button>Annuler</Button>
              <Button onClick={() => handleSave()}>Enregistrer</Button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default CreateStampModal;
