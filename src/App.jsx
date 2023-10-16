import ApplicationRoutes from "./routes/ApplicationRoutes";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <AuthProvider>
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
      </AuthProvider>
    </>
  );
}

export default App;
