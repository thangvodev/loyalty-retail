import React from "react";
import { SearchBarNoPopup } from "../common/search-bar";
import SearchIcon from "../icons/SearchIcon";

export const SearchBar = () => {
  return (
    <SearchBarNoPopup
      className="h-[40px] rounded-[24px]"
      placeholder="Tìm kiếm ưu đãi"
      suffixIcon={<SearchIcon className="size-[15px] text-neutral500" />}
    />
  );
};
