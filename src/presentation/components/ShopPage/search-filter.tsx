import React from "react";
import { SearchBarNoPopup } from "../common/search-bar";
import SearchIcon from "../icons/SearchIcon";
import FilterIcon from "../icons/FilterIcon";
import { FilterSheet } from "./filter-sheet";

export const SearchFilter = () => {
  return (
    <div className="flex gap-[12px] px-[16px]">
      <SearchBarNoPopup
        className="rounded-[24px]"
        placeholder="Tìm kiếm"
        suffixIcon={<SearchIcon className="size-[15px] text-neutral500" />}
      />
      <FilterSheet>
        {({ open }) => (
          <div
            className="flex size-[36px] shrink-0 items-center justify-center rounded-[8px] bg-white"
            style={{ boxShadow: "0px 4px 12px 0px #DAE9EC87" }}
            onClick={open}
          >
            <FilterIcon className="text-green6" />
          </div>
        )}
      </FilterSheet>
    </div>
  );
};
