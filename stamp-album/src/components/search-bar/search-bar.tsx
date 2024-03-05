import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import TextInput from "../text-input/text-input";

function SearchBar({ onChange }: { onChange: (value: string) => void }) {
  return (
    <TextInput
      icon={
        <MagnifyingGlassIcon className=" text-primary" height={35} width={35} />
      }
      onChange={onChange}
      placeHolder="Recherche"
      width="60vw"
    />
  );
}

export default SearchBar;
