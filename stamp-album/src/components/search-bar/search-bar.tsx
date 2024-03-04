import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import React from "react";
import TextInput from "../text-input/text-input";

function SearchBar() {
  return (
    <TextInput icon={<MagnifyingGlassIcon className=" text-primary" height={35} width={35} />} placeHolder="Recherche" width="55rem"/>
  );
}

export default SearchBar;
