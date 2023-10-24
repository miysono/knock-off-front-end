import { Link } from "react-router-dom";

const AccountSettingsItem = ({ to, title, description, icon }) => {
  return (
    <Link to={to}>
      <div className="w-80 text-lg h-52 border-2 border-indigo-500 border-opacity-20 shadow-lg p-4 duration-300 rounded-3xl hover:scale-105">
        <img src={icon} alt="icon" />
        <p className="text-lg font-semibold mt-4">{title}</p>
        <p className="mt-2">{description}</p>
      </div>
    </Link>
  );
};

export default AccountSettingsItem;
