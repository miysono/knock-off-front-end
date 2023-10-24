const PageBody = ({ children }) => {
  return (
    <>
      <main className="min-h-screen dark:bg-neutral-900 dark:text-gray-100 lg:px-32 container mx-auto">
        {children}
      </main>
    </>
  );
};

export default PageBody;
