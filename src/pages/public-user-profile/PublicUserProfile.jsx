import MiniListingItem from "../../components/MiniListingItem";
import ReviewCard from "../../components/ReviewCard";
import UserCard from "../../components/UserCard";
import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";
import PageBody from "../../layout/PageBody";
import UserInformation from "./components/UserInformation";
import UserProfileSection from "./components/UserProfileSection";

const listingData = {
  id: 1,
  title: "JW Marriott Bucharest Grand Hotel",
  address: "Calea 13 Septembrie",
  price_per_night: 100,
  stars: 5,
  photos: {
    cover:
      "https://s3.amazonaws.com/blackbooktravels/inventory/hotels/images/aaf1e51132232bea65707717f03cb26a8df7c104158ba9be489b38a451a3748f804d00.jpeg",
  },
};

const PublicUserProfile = () => {
  return (
    <>
      <Navbar />
      <PageBody>
        <div className="flex">
          <aside className="w-1/3 border-r-2 pr-10 my-10 h-screen border-indigo-500 border-opacity-20">
            <UserCard />
          </aside>
          <main className="pl-10 w-2/3">
            {/* INTRO */}
            <UserProfileSection sectionTitle="About User">
              <UserInformation />
              <p className="text-justify mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia odit laudantium harum delectus modi sed qui dolore
                maxime? Similique temporibus aut, nemo, corrupti error placeat
                dolorum unde tenetur tempora ducimus, ipsa aliquid sequi
                voluptas possimus ex! Tenetur tempora ipsum natus.
              </p>
            </UserProfileSection>

            {/* REVIEWS */}
            <UserProfileSection
              sectionTitle="User's Reviews"
              sectionFor="reviews"
              viewMore
            >
              <div className="mt-10 flex gap-5">
                <ReviewCard />
                <ReviewCard />
              </div>
            </UserProfileSection>

            {/* LISTINGS */}
            <UserProfileSection
              sectionTitle="User's Listings"
              sectionFor="listings"
              viewMore
            >
              <div className="mt-10 flex justify-around">
                <MiniListingItem listingData={listingData} />
                <MiniListingItem listingData={listingData} />
                <MiniListingItem listingData={listingData} />
              </div>
            </UserProfileSection>
          </main>
        </div>
      </PageBody>
      <Footer />
    </>
  );
};

export default PublicUserProfile;
