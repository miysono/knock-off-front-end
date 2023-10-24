import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";
import PageBody from "../../layout/PageBody";
import ListingItem from "../../components/ListingItem";
import { useListingContext } from "../../hooks/useListingContext";
import { useEffect } from "react";
import FilterInput from "./components/FilterInput";
import FilterSection from "./components/FilterSection";

const AllListingsPage = () => {
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

  const listingData = allListingsData?.listings;
  return (
    <>
      <Navbar />
      <PageBody>
        <div className="flex mt-10 gap-5">
          {/* FILTERING SECTION */}
          <aside className="w-1/3 border-r-2 pr-5 border-indigo-500 border-opacity-20 accent-indigo-500">
            <h3 className="text-xl font-semibold">Filter by</h3>
            <FilterSection title="Popular filters">
              {/* checkboxes for all 5 ratings */}
              <FilterInput filterValue="no-smoking" filterName="No smoking" />
              <FilterInput
                filterValue="free-parking"
                filterName="Free Parking"
              />
              <FilterInput filterValue="apartments" filterName="Apartments" />
              <FilterInput filterValue="restaurant" filterName="Restaurant" />
              <FilterInput filterValue="free-wifi" filterName="Free WiFi" />
              <FilterInput filterValue="whole-place" filterName="Whole place" />
              <FilterInput filterValue="balcony" filterName="Balcony" />
            </FilterSection>

            {/* FILTER BY STARS */}
            <FilterSection title="Stars">
              {/* checkboxes for all 5 ratings */}
              <FilterInput filterValue="stars-1" filterName="1 Star" />
              <FilterInput filterValue="stars-2" filterName="2 Stars" />
              <FilterInput filterValue="stars-3" filterName="3 Stars" />
              <FilterInput filterValue="stars-4" filterName="4 Stars" />
              <FilterInput filterValue="stars-5" filterName="5 Stars" />
              <FilterInput filterValue="no-stars" filterName="Unrated" />
            </FilterSection>

            {/* FILTER BY FLOWERS */}
            <FilterSection title="Flowers">
              {/* checkboxes for all 5 ratings */}
              <FilterInput filterValue="flowers-1" filterName="1 Flowers" />
              <FilterInput filterValue="flowers-2" filterName="2 Flowers" />
              <FilterInput filterValue="flowers-3" filterName="3 Flowers" />
              <FilterInput filterValue="flowers-4" filterName="4 Flowers" />
              <FilterInput filterValue="flowers-5" filterName="5 Flowers" />
              <FilterInput filterValue="no-flowers" filterName="Unrated" />
            </FilterSection>

            {/* PRICE */}
            <FilterSection title="Price">
              <div className="flex flex-col gap-2.5 mt-2.5">
                <input
                  type="number"
                  placeholder="Min"
                  className="border-2 border-indigo-500 border-opacity-20 p-2 rounded-md w-full"
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="border-2 border-indigo-500 border-opacity-20 p-2 rounded-md w-full"
                />
              </div>
            </FilterSection>
          </aside>

          {/* LISTINGS & SORT-BY SECTION */}
          <article className="w-2/3">
            {/* SORT BY SECTION */}
            <section>Sort by</section>

            {/* LISTINGS SECTION */}
            <section>
              {listingData?.map((listing) => (
                <ListingItem key={listing?.id} listing={listing} />
              ))}
            </section>
          </article>
        </div>
      </PageBody>
      <Footer />
    </>
  );
};

export default AllListingsPage;
