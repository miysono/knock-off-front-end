import { useContext } from "react";
import { ListingContext } from "../context/ListingContext";

const useListingContext = () => {
  const context = useContext(ListingContext);
  if (context === undefined) {
    throw new Error("useListingContext must be used within a ListingProvider");
  }
  return context;
};

export { useListingContext };
