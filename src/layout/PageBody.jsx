import Navbar from "./Navbar";
import Footer from "./Footer";

const PageBody = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen dark:bg-neutral-900 dark:text-gray-100 mx-20">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default PageBody;
