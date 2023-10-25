const UserCard = () => {
  return (
    <div className="w-full flex border-2 border-indigo-500 border-opacity-20 shadow-lg p-5 rounded-2xl top-32 sticky">
      <div className="w-1/3 flex flex-col justify-around">
        <div className="text-center border-b-2 border-indigo-500 border-opacity-20 py-2">
          <span className="text-xl font-semibold">X</span>
          <p>Reviews</p>
        </div>
        <div className="text-center border-b-2 border-indigo-500 border-opacity-20 py-2">
          <span className="text-xl font-semibold">X</span>
          <p>Rating</p>
        </div>
        <div className="text-center py-2">
          <span className="text-xl font-semibold">X</span>
          <p>Listings</p>
        </div>
      </div>
      <div className="w-2/3 flex items-center flex-col justify-center">
        <img
          className="w-1/2"
          src="data:image/png;base64,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"
        />
        <p className="text-xl mt-2.5">User name</p>
        <p className="">Joined on d/mo/year</p>
      </div>
    </div>
  );
};

export default UserCard;
