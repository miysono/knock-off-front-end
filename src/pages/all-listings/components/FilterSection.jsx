const FilterSection = ({ children, title }) => {
  return (
    <section className="border-t-2 border-indigo-500 border-opacity-20 my-5">
      <h4 className="text-lg font-semibold mt-5">{title}</h4>
      <div className="flex flex-col gap-2.5 mt-2.5 ">{children}</div>
    </section>
  );
};
export default FilterSection;
