import { createContext, useState } from "react";
import {
  viewAllListingsRequest,
  viewListingRequest,
  getUserListingsRequest,
  createListingRequest,
} from "../services/user-requests";
const ListingContext = createContext();

const ListingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [allListingsData, setAllListingsData] = useState(null);

  const viewAllListings = async () => {
    try {
      setIsLoading(true);
      const res = await viewAllListingsRequest();
      setAllListingsData(res);
      return res;
    } catch (error) {
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const viewListing = async (id) => {
    try {
      setIsLoading(true);
      const res = await viewListingRequest(id);
      return res;
    } catch (error) {
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getUserListings = async () => {
    try {
      setIsLoading(true);
      const res = await getUserListingsRequest();
      return res;
    } catch (error) {
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const createListing = async (
    coverImage,
    title,
    description,
    address,
    pricePerNight,
    pricePerPerson,
    lat = null,
    lon = null,
    stars = null,
    flowers = null
  ) => {
    try {
      setIsLoading(true);
      const res = await createListingRequest(
        coverImage,
        title,
        description,
        address,
        pricePerNight,
        pricePerPerson,
        lat,
        lon,
        stars,
        flowers
      );
      return res;
    } catch (error) {
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ListingContext.Provider
      value={{
        isLoading,
        viewAllListings,
        viewListing,
        getUserListings,
        createListing,
        allListingsData,
      }}
    >
      {children}
    </ListingContext.Provider>
  );
};

export { ListingProvider, ListingContext };
