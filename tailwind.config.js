/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/login/components/Login.jsx",
    "./src/pages/login/components/Register.jsx",
    "./src/pages/login/components/AuthLayout.jsx",
    "./src/pages/homepage/Homepage.jsx",
    "./src/pages/homepage/components/",

    "./src/pages/AccountSettings/AccountSettings.jsx",
    "./src/pages/AccountSettings/components/AccountSettingsItem.jsx",
    "./src/pages/AccountSettings/components/AccountSettingsOptionIntro.jsx",
    "./src/pages/AccountSettings/components/outlets/AccountSettingsOverview.jsx",
    "./src/pages/AccountSettings/components/outlets/AccountSecurity.jsx",
    "./src/pages/AccountSettings/components/outlets/AccountInfo.jsx",

    "./src/layout/Footer.jsx",
    "./src/layout/Navbar.jsx",
    "./src/layout/PageBody.jsx",

    "./src/components/Spinner.jsx",
    "./src/components/Logo.jsx",
    "./src/components/Listing.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
