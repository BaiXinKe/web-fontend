import { Input } from "../ui/input";

const Search = () => {
  return (
    <div>
      <Input
        type="search"
        placeholder="Searching..."
        className="md:w-[100px] lg:w-[300px]"
      />
    </div>
  );
};

export default Search;
