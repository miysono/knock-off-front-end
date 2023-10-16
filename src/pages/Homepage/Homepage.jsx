import PageBody from "../../layout/PageBody";

const Homepage = () => {
  return (
    <>
      <PageBody>
        <section className="container mt-20">
          <h1 className="font-semibold text-4xl">
            Welcome to{" "}
            <span className="text-indigo-500 tracking-wider font-bold">
              Knock.
            </span>
          </h1>
        </section>
      </PageBody>
    </>
  );
};

export default Homepage;
