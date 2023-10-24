import React, { useEffect } from "react";
import MiniListingItem from "../../components/MiniListingItem";
import { useListingContext } from "../../hooks/useListingContext";
import PageBody from "../../layout/PageBody";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";

const Homepage = () => {
  const { viewAllListings, allListingsData, isLoading } = useListingContext();
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
      <Navbar />
      <PageBody>
        <section className="container mt-20">
          <h1 className="font-semibold text-4xl">
            Welcome to{" "}
            <span className="text-indigo-500 tracking-wider font-bold">
              Knock.
            </span>
          </h1>

          {/* TEST SECTION */}
          <Link to="/listings">
            <button className="mt-10 text-center border-2 border-indigo-500 p-3">
              View all listings
            </button>
          </Link>
          <div className="flex flex-wrap mt-10 justify-between">
            {isLoading ? (
              <>
                {Array.from({ length: 10 }).map((_, index) => (
                  <div key={index}>
                    <Skeleton width={240} height={240} />
                    <Skeleton count={3} width={240} />
                  </div>
                ))}
              </>
            ) : (
              <>
                {Array.from({ length: 10 }).map((_, index) => (
                  <MiniListingItem
                    key={_}
                    listingData={allListingsData?.listings[0]}
                  />
                ))}
              </>
            )}
          </div>
        </section>
      </PageBody>
      <Footer />
    </>
  );
};

export default Homepage;
