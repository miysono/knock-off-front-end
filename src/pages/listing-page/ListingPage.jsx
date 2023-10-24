import { useNavigate, useParams } from "react-router-dom";
import { useListingContext } from "../../hooks/useListingContext";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import Skeleton from "react-loading-skeleton";
import PageBody from "../../layout/PageBody";

const ListingPage = () => {
  const { id } = useParams();
  const { viewListing, isLoading } = useListingContext();
  const [listingData, setListingData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await viewListing(id);
        if (res.error) navigate("/404");
        setListingData(res);
        console.log(res);
      } catch (error) {
        throw new Error(error);
      }
    }
    if (!listingData) fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <PageBody>
        {/* TITLE SECTION */}
        <section className="container mt-20">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold">
              {listingData?.listing?.title || <Skeleton width={400} />}
            </h1>

            {isLoading && <Skeleton width={150} />}
            {/* STARS || FLOWERS */}
            {listingData?.listing?.stars && (
              <span className="flex">
                {Array.from({ length: listingData?.listing?.stars }).map(
                  (_) => {
                    return (
                      <img
                        className="w-6 h-6"
                        key={_}
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABZElEQVR4nOWSv0oDQRDGV9EHsEhu5hR7sRcFXyGFnfaCf0BstVBE0NRW9qK1hfaBm0ksTC0+gIgQtROSm9WVwSRnTAx78SzEgYGFnfl+s/OtMf8qhOFQCA5+RTzmcM4yOs2Y8rOZA4ThrAUQgtNMxV05yAtD/ROg4Uo5yAxgGXZb4u0k2MlE3JXMiBDcfQUI472rmlF/ocrEuI1wyTJuCOO+EB5bhnPLWO2aPsmq1mit9mivaqhWF0AIbvsIuTQphDfdAIZiZgCGYs81WcJNIXz9weRvQrjX1wshXBCClwGmrttyuOhleFwJZoTwwX9yeIwJ573Ek5eEBX9AWDBpwxJue6+IcGsQwGUKDy5SiTtnhoTgKYXBz86ZYW9Ag4LpHiI1y7is2Tx33GuP/3oYVjv+NuOJiyDXfiFNjgnBkTDaxAdY8QdEsN4071q/7Hd1eqc1HxBY8wboPt0VTPnsNU3t34x3jG1fYPBD+rEAAAAASUVORK5CYII="
                      />
                    );
                  }
                )}
              </span>
            )}
          </div>
          <p>{listingData?.listing?.address || <Skeleton width={350} />}</p>
        </section>
        {/* PHOTO SECTION */}
        <section className="mt-10 h-96">
          <div className="relative flex h-full rounded-2xl">
            {isLoading && (
              <div className="absolute z-50 h-full w-full bg-neutral-200"></div>
            )}
            <img
              className="w-1/2 object-cover border-r-8  border-indigo-500 border-opacity-20"
              src={listingData?.listing?.photos?.cover}
            />
            <div className="w-1/4 border-r-4 border-indigo-500 border-opacity-20">
              <img
                className="h-1/2 w-full object-cover border-b-4 border-indigo-500 border-opacity-20"
                src={listingData?.listing?.photos?.cover}
              />
              <img
                className="h-1/2 object-cover w-full border-t-4 border-indigo-500 border-opacity-20"
                src={listingData?.listing?.photos?.cover}
              />
            </div>
            <div className="w-1/4 border-l-4 border-indigo-500 border-opacity-20">
              <img
                className="h-1/2 object-cover w-full border-b-4 border-indigo-500 border-opacity-20"
                src={listingData?.listing?.photos?.cover}
              />
              <div className="w-full h-1/2 relative border-t-4 border-indigo-500 border-opacity-20">
                <img
                  className="h-full w-full object-cover"
                  src={listingData?.listing?.photos?.cover}
                />
                <span className="absolute top-0 w-full h-full bg-gray-800 bg-opacity-60 text-white">
                  <p className="text-lg font-semibold absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
                    Show more
                  </p>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* DESCRIPTION AND USER AND PRICING SECTION */}
        <section className="mt-10 flex gap-2.5">
          <div className="w-2/3">
            {/* USER DETAILS */}
            <div className="flex items-center gap-2.5 w-full border-b-2 border-indigo-500 border-opacity-20">
              {/* PLACEHOLDER FOR USER IMAGE */}
              {isLoading ? (
                <Skeleton width={96} height={96} circle />
              ) : (
                <img
                  className="w-24 h-24"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACNElEQVR4nO1WTWsUQRAd8KQeNYifCYIn/RHBo2hQdCFCotnqrhpj/MB/IXjyGNQcEgXxYHLJxyX+DVdBCIGQi2aqZhMwMWGldnfWdd3p7p0IekhBQdPMm9fvTVXXRNFB/G9BtHEOiB8CyZJBrhiSzXoiV5p7D8bGv539a4R34q3TgDJpiHcNSc2VgLxnSN7djZOBfZECpdcBpeoj7JIpoAwVI0V53FTQK2m7+kcFlHJh0nbyYOXWfj3jtBf5s4nlysjI+lFjqicMyWuv7bB1yktsiF/lKiDeGYvlwp+HTS4b4m0H7oW3ZVzVC8hzuZ8HeS5fNe+qk7nE2qdu2/hZrlMoT11YSzyRT4yy6CmWKYfiKQ923qX4kwc84yCecbqFXMkl1gp0EpMsl0q1Q5043TMkH3zVHRUlbqhObnbibJzcCujrtLDVDcvky+iEHMswutY9P44rhYurlXEy2HIpTgZDMOAqLh1tAS9ZIUqPZxhdG5TVAOL7ucQ6T7tfILwNJG/0Di89qR3uxOle2aY3Gs/wThfSH84LpKn6ZQfpmrXVi1FgwL3qJYO8/juxTAYN/vbqLjJX1Zm2YhSizZNhQJShbCzqNdorsc7hpsX6jms9g3/NZH6vA8R7YNjoN8SzGWmRQ7eUZ7YD8ndAeQvIw+VxPk+0dkRT1zbm2/qv1RqNKGKtXI32E+Vy2gfEz7UyA1pmzxBPB3/TkNB20NFmiBeA+KP+pdSzvuZ57VNvyxxE9A/iJ5ch8X1tpqkEAAAAAElFTkSuQmCC"
                />
              )}

              <div>
                {isLoading ? (
                  <Skeleton count={2} width={200} />
                ) : (
                  <>
                    <p>
                      This <span className="text-indigo-500">Knock</span> was
                      posted by X
                    </p>
                    <p>
                      Listing for{" "}
                      {listingData?.listing?.price_per_night /
                        listingData?.listing?.price_per_pers}{" "}
                      Guests
                    </p>{" "}
                  </>
                )}
              </div>
            </div>
            {/* LISTING DESCRIPTION */}
            <p className="mt-2.5 text-justify">
              {listingData?.listing?.description || <Skeleton count={5} />}
            </p>
          </div>
          {/* PRICING SECTION */}
          <div className="w-1/3 border-2 shadow-md border-indigo-500 border-opacity-20 rounded-3xl p-5">
            <h3 className="font-semibold text-xl  ">
              {listingData?.listing?.price_per_night || <Skeleton />} €{" "}
              <span className="font-normal">night</span>
            </h3>
            <div className="flex gap-2.5 w-full">
              <div className="mt-5 w-1/2 overflow-hidden">
                <p>Check in</p>
                {/* CALENDAR INPUT */}
                <input
                  className="w-full bg-neutral-200 p-2 rounded-lg"
                  type="date"
                />
              </div>
              <div className="mt-5 w-1/2 overflow-hidden">
                <p>Check out</p>
                {/* CALENDAR INPUT */}
                <input
                  className="w-full bg-neutral-200 p-2 rounded-lg"
                  type="date"
                />
              </div>
            </div>
            <div className="mt-2.5">
              Guests
              {/* GUESTS INPUT */}
              <input
                className="w-full bg-neutral-200 p-2 rounded-lg"
                type="number"
                min={1}
                max={
                  listingData?.listing?.price_per_night /
                  listingData?.listing?.price_per_pers
                }
              />
            </div>
            <button className="mt-5 w-full text-center p-2.5 rounded-xl bg-indigo-500 ">
              Reserve now!
            </button>
          </div>
        </section>
        {/* REVIEWS SECTION */}
        <section className="mt-10 border-t-2 pt-10 border-t-indigo-500 border-opacity-20">
          <h2 className="text-2xl font-semibold">Listing reviews</h2>
          <h2 className="text-xl mt-5">
            This listing currently has no reviews
          </h2>
        </section>
        <section className="mt-10 border-t-2 pt-10 border-t-indigo-500 border-opacity-20">
          <h2 className="text-2xl font-semibold">Amenities</h2>
          <h2 className="text-xl mt-5">
            This listing currently has no amenities listed
          </h2>
        </section>
        <section className="mt-10 border-t-2 py-10 border-t-indigo-500 border-opacity-20">
          <h2 className="text-2xl font-semibold">Where is this Knock?</h2>
          {listingData?.listing?.lat && listingData.listing?.lon ? (
            <div className="mt-5 w-full h-96 bg-slate-300">
              <MapContainer
                center={[listingData?.listing?.lat, listingData.listing?.lon]}
                zoom={15}
                scrollWheelZoom={true}
                className="h-full"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                />
                <Marker
                  position={[
                    listingData?.listing?.lat,
                    listingData.listing?.lon,
                  ]}
                >
                  <Popup>{listingData?.listing?.title}</Popup>
                </Marker>
              </MapContainer>
            </div>
          ) : (
            <p className="text-xl mt-5">This knock has no public location</p>
          )}
        </section>
      </PageBody>
      <Footer />
    </>
  );
};

export default ListingPage;
