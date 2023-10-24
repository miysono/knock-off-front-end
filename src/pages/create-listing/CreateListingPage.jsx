import { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import { useListingContext } from "../../hooks/useListingContext";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import PageBody from "../../layout/PageBody";

const CreateListingPage = () => {
  const [initialDataState, setInitialDataState] = useState({
    coverImage: "",
    title: "",
    description: "",
    adress: "",
    pricePerNight: "",
    pricePerPerson: "",
    lat: "44.076121191589294",
    lon: "28.629319667816166",
    flowers: 3,
  });

  const [hasRating, setHasRating] = useState(false);
  const [ratingId, setRatingId] = useState(null);
  const [ratingValue, setRatingValue] = useState(null);

  console.log(hasRating, ratingId, ratingValue);
  console.log(initialDataState);
  const { userLoggedIn } = useAuthContext();
  const { createListing } = useListingContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userLoggedIn) {
      navigate("/auth/login?redirect=/create-listing");
    }
  }, [userLoggedIn, navigate]);

  const handleCreateListing = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("coverImage", initialDataState.coverImage);
    console.log(...formData);
    try {
      const res = await createListing(
        initialDataState.coverImage,
        initialDataState.title,
        initialDataState.description,
        initialDataState.adress,
        initialDataState.pricePerNight,
        initialDataState.pricePerPerson,
        initialDataState.lat,
        initialDataState.lon,
        initialDataState.stars,
        initialDataState.flowers
      );
      console.log(res);
      // navigate("/listings");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <PageBody>
        <section className="mt-10">
          <p>Create new listing</p>
          {/* CREATE INPUTS FOR ALL THE INITIAL DATA */}
          {/* CREATE A BUTTON TO SUBMIT THE FORM */}
          {/* CREATE A FUNCTION TO HANDLE THE SUBMISSION OF THE FORM */}
          <form className="flex flex-col" onSubmit={handleCreateListing}>
            <label htmlFor="coverImage">Cover image</label>
            <input
              className="border-black border-2"
              type="file"
              name="coverImage"
              accept="image/*"
              onChange={(e) => {
                setInitialDataState({
                  ...initialDataState,
                  coverImage: e.target.files[0],
                });
              }}
            />
            <label htmlFor="title">Title</label>
            <input
              className="border-black border-2"
              type="text"
              name="title"
              id="title"
              value={initialDataState.title}
              onChange={(e) =>
                setInitialDataState({
                  ...initialDataState,
                  title: e.target.value,
                })
              }
            />
            <label htmlFor="description">Description</label>
            <input
              className="border-black border-2"
              type="text"
              name="description"
              id="description"
              value={initialDataState.description}
              onChange={(e) =>
                setInitialDataState({
                  ...initialDataState,
                  description: e.target.value,
                })
              }
            />
            <label htmlFor="adress">Adress</label>
            <input
              className="border-black border-2"
              type="text"
              name="adress"
              id="adress"
              value={initialDataState.adress}
              onChange={(e) =>
                setInitialDataState({
                  ...initialDataState,
                  adress: e.target.value,
                })
              }
            />
            <label htmlFor="pricePerNight">Price per night</label>
            <input
              className="border-black border-2"
              type="text"
              name="pricePerNight"
              id="pricePerNight"
              value={initialDataState.pricePerNight}
              onChange={(e) =>
                setInitialDataState({
                  ...initialDataState,
                  pricePerNight: e.target.value,
                })
              }
            />
            <label htmlFor="pricePerPerson">Price per person</label>
            <input
              className="border-black border-2"
              type="text"
              name="pricePerPerson"
              id="pricePerPerson"
              value={initialDataState.pricePerPerson}
              onChange={(e) =>
                setInitialDataState({
                  ...initialDataState,
                  pricePerPerson: e.target.value,
                })
              }
            />

            <label htmlFor="rating">
              Does your property have a rating? eg.stars/flowers
            </label>
            <select
              name="rating"
              onChange={(e) => {
                setHasRating(e.target.value);
              }}
            >
              <option value={null}>Select an option</option>
              <option value={false}>No</option>
              <option value={true}>Yes</option>
            </select>

            {hasRating && (
              <>
                <label htmlFor="rating">Stars or flowers?</label>
                <select
                  name="rating"
                  onChange={(e) => {
                    setRatingId(e.target.value);
                  }}
                >
                  <option value={null}>Select an option</option>
                  <option value={1}>Stars</option>
                  <option value={2}>Flowers</option>
                </select>
              </>
            )}

            {ratingId === "1" && (
              <>
                <label htmlFor="rating">How many stars?</label>
                <select
                  name="rating"
                  onChange={(e) => {
                    setRatingValue(e.target.value);
                  }}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </>
            )}

            {ratingId === "2" && (
              <>
                <label htmlFor="rating">How many flowers?</label>
                <select
                  name="rating"
                  onChange={(e) => {
                    setRatingValue(e.target.value);
                  }}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </>
            )}

            <button type="submit">Create listing</button>
          </form>
        </section>
      </PageBody>
      <Footer />
    </>
  );
};
export default CreateListingPage;
