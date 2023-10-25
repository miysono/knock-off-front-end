import { useEffect } from "react";
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
        <section className="mt-10 relative text-center text-white">
          <div className="pt-40">
            <h1 className="font-bold text-6xl">
              Searching for the <span className="text-indigo-500">best</span>{" "}
              places?
            </h1>
            <h4 className="font-bold text-5xl mt-5">
              We{" "}
              <span className="text-indigo-500 tracking-wider font-bold">
                Knock
              </span>{" "}
              you.
            </h4>
          </div>
          <div className="w-3/4 flex gap-2.5 mx-auto rounded-3xl translate-y-1/2 py-20 px-10 text-gray-900 bg-white border-2 border-opacity-20 shadow-lg border-indigo-500">
            <div className="flex gap-2.5 w-3/4">
              <input
                type="text"
                placeholder="Search..."
                className="bg-slate-200 py-5 rounded-md px-2.5 w-2/3"
              />
              <select
                name="country"
                id="country"
                className="bg-slate-200 py-5 w-1/4 px-2.5 rounded-md"
              >
                <option value="" disabled selected hidden>
                  Country
                </option>
              </select>
            </div>
            <button className="bg-indigo-500 w-1/4 rounded-xl text-xl">
              Search
            </button>
          </div>
          <img
            className="absolute blur-sm top-0 -z-10 rounded-3xl w-full h-full object-cover"
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571460.jpg&fm=jpg"
          />
        </section>

        <section className="mt-60">
          <h1 className="text-4xl font-semibold">Browse by property type</h1>
          <div className="mt-10 flex justify-between">
            <div>
              <img
                className="w-64 rounded-xl h-64 object-cover"
                src="https://images.adsttc.com/media/images/577f/31e3/e58e/ce56/2300/00b9/large_jpg/_G6I5343_1.jpg?1467953625"
              />
              <p className="text-xl mt-2.5">Apartments</p>
            </div>
            <div>
              <img
                className="w-64 rounded-xl h-64 object-cover"
                src="https://www.thehousedesigners.com/images/plans/01/URD/bulk/6583/the-destination-front-rendering_m.webp"
              />
              <p className="text-xl mt-2.5">Vilas</p>
            </div>
            <div>
              <img
                className="w-64 rounded-xl h-64 object-cover"
                src="https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
              />
              <p className="text-xl mt-2.5">Hotels</p>
            </div>
            <div>
              <img
                className="w-64 rounded-xl h-64 object-cover"
                src="https://static.dezeen.com/uploads/2021/01/niliaitta-cabin-studio-puisto-finland_dezeen_2364_sq3.jpg"
              />
              <p className="text-xl mt-2.5">Cabins</p>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <h1 className="text-4xl font-semibold">Featured properties</h1>
          <div className="flex flex-wrap gap-5 mt-10 justify-between">
            {isLoading ? (
              <>
                {Array.from({ length: 8 }).map((_, index) => (
                  <div key={index}>
                    <Skeleton width={240} height={240} />
                    <Skeleton count={3} width={240} />
                  </div>
                ))}
              </>
            ) : (
              <>
                {Array.from({ length: 8 }).map((_, index) => (
                  <MiniListingItem
                    key={_}
                    listingData={allListingsData?.listings[1]}
                  />
                ))}
              </>
            )}
          </div>
        </section>

        <section className="my-20">
          <h1 className="text-4xl font-semibold">Popular places</h1>
          <div className="flex flex-wrap gap-5 mt-10 justify-between">
            {isLoading ? (
              <>
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index}>
                    <Skeleton width={240} height={240} />
                    <Skeleton count={3} width={240} />
                  </div>
                ))}
              </>
            ) : (
              <>
                {Array.from({ length: 4 }).map((_, index) => (
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
