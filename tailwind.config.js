/** @type {import('tailwindcss').Config} */
export default {
  content: [
    //LOGIN
    "./src/pages/login/Auth.jsx",
    "./src/pages/login/components/AuthLayout.jsx",
    "./src/pages/login/components/LoginIcons.jsx",
    "./src/pages/login/components/outlets/Login.jsx",
    "./src/pages/login/components/outlets/Register.jsx",

    //Account Settings
    "./src/pages/account-settings/AccountSettings.jsx",
    "./src/pages/account-settings/components/AccountSettingsItem.jsx",
    "./src/pages/account-settings/components/AccountSettingsOptionIntro.jsx",
    "./src/pages/account-settings/components/outlets/AccountSettingsOverview.jsx",
    "./src/pages/account-settings/components/outlets/AccountSecurity.jsx",
    "./src/pages/account-settings/components/outlets/AccountInfo.jsx",

    //All Listings
    "./src/pages/all-listings/AllListingsPage.jsx",
    "./src/pages/all-listings/components/FilterInput.jsx",
    "./src/pages/all-listings/components/FilterSection.jsx",

    //Create Listing
    "./src/pages/create-listing/CreateListingPage.jsx",
    "./src/pages/create-listing/components/",

    //Homepage
    "./src/pages/homepage/Homepage.jsx",
    "./src/pages/homepage/components/",

    //Listing Page
    "./src/pages/listing-page/ListingPage.jsx",
    "./src/pages/listing-page/components",

    //Public user profile
    "./src/pages/public-user-profile/PublicUserProfile.jsx",

    //404
    "./src/pages/page-not-found/PageNotFound.jsx",

    //Layouts
    "./src/layout/Footer.jsx",
    "./src/layout/Navbar.jsx",
    "./src/layout/PageBody.jsx",

    //Global components
    "./src/components/Button.jsx",
    "./src/components/Container.jsx",
    "./src/components/Spinner.jsx",
    "./src/components/Logo.jsx",
    "./src/components/MiniListingItem.jsx",
    "./src/components/ListingItem.jsx",

    "./src/components/ReviewCard.jsx",
    "./src/components/UserCard.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
