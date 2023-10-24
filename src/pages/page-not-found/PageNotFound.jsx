import { useNavigate } from "react-router-dom";
import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";
import PageBody from "../../layout/PageBody";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <PageBody>
        <section className="text-indigo-500 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <h1 className="text-6xl font-bold ">Page Not Found</h1>
          <p className="text-2xl font-semibold mt-2.5">
            The page you are looking for does not exist.
          </p>
          <button
            onClick={() => {
              navigate("/");
            }}
            className="mt-5 text-2xl bg-indigo-500 font-bold text-white px-5 py-3 rounded-lg"
          >
            Go to Homepage
          </button>
        </section>
      </PageBody>
      <Footer />
    </>
  );
};

export default PageNotFound;
