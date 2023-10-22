import { useNavigate, useParams } from "react-router-dom";
import { useListingContext } from "../../hooks/useListingContext";
import { useEffect } from "react";

const ListingPage = () => {
  const { id } = useParams();
  const { viewListing } = useListingContext();
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await viewListing(id);
        if (res.error) navigate("/");
        console.log(res);
      } catch (error) {
        throw new Error(error);
      }
    }
    fetchData();
  }, []);
};

export default ListingPage;
