import { useEffect } from "react";
import Listing from "../../components/Listing";
import { useListingContext } from "../../hooks/useListingContext";
import PageBody from "../../layout/PageBody";

const Homepage = () => {
  const { viewAllListings, allListingsData } = useListingContext();
  useEffect(() => {
    if (allListingsData) return;
    async function fetchData() {
      try {
        const res = await viewAllListings();
        console.log(res);
      } catch (error) {
        throw new Error(error);
      }
    }
    fetchData();
  }, []);
  console.log(allListingsData);
  return (
    <>
      <PageBody>
        <section className="container mt-20">
          <h1 className="font-semibold text-4xl">
            Welcome to{" "}
            <span className="text-indigo-500 tracking-wider font-bold">
              Knock.
            </span>
          </h1>
          {allListingsData?.listings.map((listing) => (
            <Listing key={listing.id} listingData={listing} />
          ))}
        </section>
      </PageBody>
    </>
  );
};

export default Homepage;
