import ApplicationRoutes from "./routes/ApplicationRoutes";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import { ListingProvider } from "./context/ListingContext";
import "leaflet/dist/leaflet.css";
import "react-loading-skeleton/dist/skeleton.css";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <AuthProvider>
        <ListingProvider>
          <ToastContainer
            position="bottom-center"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />

          <ApplicationRoutes />
        </ListingProvider>
      </AuthProvider>
    </>
  );
}

export default App;
