import React, { useState } from "react";
import CreateStampModal from "./create-stamp.modal";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import Button from "../button/button";

function CreateStampModalButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
      >
        <PlusCircledIcon width={30} height={30} />
        Enregister un Nouveau Timbre
      </Button>
      <div className="">
        {open && <CreateStampModal state={open} setState={setOpen} />}
      </div>
    </>
  );
}

export default CreateStampModalButton;
