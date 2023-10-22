import { Link } from "react-router-dom";

const Listing = ({ listingData }) => {
  return (
    <div className="w-60 overflow-hidden mt-10">
      <Link to={`/listings/${listingData?.id}`}>
        <img
          src={listingData?.photos?.cover}
          alt=""
          className="w-60 h-60 object-cover rounded-lg"
        />

        <div className="flex justify-between">
          <p className="font-semibold">{listingData?.address}</p>
          <p>{listingData?.stars}</p>
        </div>
        <p className="font-semibold">{listingData?.title}</p>
        <p className="font-semibold">
          {listingData?.price_per_night} lei / night
        </p>
      </Link>
    </div>
  );
};

export default Listing;
