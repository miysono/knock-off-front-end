import { Link } from "react-router-dom";

const MiniListingItem = ({ listingData }) => {
  return (
    <div className="w-60">
      <Link to={`/listings/${listingData?.id}`}>
        <img
          src={listingData?.photos?.cover}
          alt=""
          className="w-60 h-60 object-cover rounded-lg"
        />

        <div className="flex justify-between items-center">
          <p className="font-semibold truncate">{listingData?.address}</p>
          <div className="flex">
            {Array.from({ length: listingData?.stars }, (_, i) => (
              <img
                key={i}
                className="w-4 h-4"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB1ElEQVR4nNWWv0scURDHV0Gx8LeeO3NqRFTEtAHBQoJF/AcCNlor+AcomCaQxn/BP0AFG7HQdu9uhtPiBAPp0lgLweuS3DwdeeuJy90t3u7eLTgw1c7M5813Zx7Pcd6b6a+P3dZTBxvGnGH0UoVq3p0WwkfDqMqZmdTAhnDXQqu+kx6Y4ToALqUCVc7MBKC+a258ru1gw/CtFmwY99IA/6wHw01bocrZ+QbdPst9CQutB3pTPUofhoTxRxjYfrMxNrbpwsLuijDeCWE5rHBSF8KyZVQK8Pm1o+LErBDetgsagN/WXThaGhowjCdtAxOcaXFiOFR2Q7gpBP9b1iWj2JtO1el4859XCD8Jwe9WSFvh7FLTw+ZLfzXcLwTH8cFwaqc8EjRopgDbvlxRpC3AtpPU9HLMFcKHCPI+aH4UE4MNwVb0CcbN5GDGixjg80RQ9TK9wvA3+grBPzuc8bsldy1sgITwu+9hg0fuWmywMBw13k1cfompFN3FRjsvDIexoFpyuoThvqbgiXpTg3WxPNInjAc1ByzHev4K42qwiGFcfzsHvgrBn0Delxhg2K8W8DSfnWw2z8banKrc+5HBmhufMwwbqk5n5Fx1Ov3cNB6BznuxJ7mih9nO9D1IAAAAAElFTkSuQmCC"
              />
            ))}
          </div>
        </div>
        <div className="w-full line-clamp-1">
          <p className="font-semibold">{listingData?.title}</p>
        </div>
        <p className="font-semibold">
          {listingData?.price_per_night} € / night
        </p>
      </Link>
    </div>
  );
};

export default MiniListingItem;
