const UserProfileSection = ({
  children,
  viewMore = false,
  sectionTitle,
  sectionFor = "",
}) => {
  return (
    <section className=" py-10 border-opacity-20">
      <div className="flex justify-between">
        <h3 className="text-3xl font-semibold">{sectionTitle}</h3>
        {viewMore && (
          <p className="text-xl hover:underline">Show all {sectionFor} </p>
        )}
      </div>
      {children}
    </section>
  );
};

export default UserProfileSection;
