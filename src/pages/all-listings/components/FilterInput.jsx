import { useSearchParams } from "react-router-dom";

const FilterInput = ({ filterName, filterValue }) => {
  const [searchParams, setSearchParams] = useSearchParams({ "filter-by": "" });
  const handleFilterChange = (filterName, isChecked) => {
    const filters = searchParams.get("filter-by")?.split(",") || null;
    if (isChecked) {
      setSearchParams((prev) => {
        prev.set("filter-by", [...filters, filterName].join(","));
        return prev;
      });
    } else {
      setSearchParams((prev) => {
        prev.set(
          "filter-by",
          filters.filter((filter) => filter !== filterName).join(",")
        );
        return prev;
      });
    }
  };

  return (
    <div className="flex items-center gap-2.5">
      <input
        type="checkbox"
        className="w-6 h-6"
        defaultChecked={searchParams.get("filter-by")?.includes(filterValue)}
        value={filterValue}
        onClick={(e) => {
          console.log(filterValue);
          handleFilterChange(filterValue, e.target.checked);
        }}
      />
      <label>{filterName}</label>
    </div>
  );
};

export default FilterInput;
