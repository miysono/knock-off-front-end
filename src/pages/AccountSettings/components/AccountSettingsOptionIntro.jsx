import { Link } from "react-router-dom";

const AccountSettingsOptionIntro = ({
  currentPage,
  pageTitle,
  pageDesc,
  noBreadcrumb,
}) => {
  return (
    <div className="mt-10">
      {!noBreadcrumb && (
        <div className="flex items-center mb-5 gap-2.5">
          <Link to="/account-settings">
            <p className="hover:underline">Account Settings</p>
          </Link>
          <img
            className="w-3 h-3"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAjklEQVR4nO3asQ3CQBAF0WliLdN/JyRImAgCygEhXUSO9HeZ18HXOPDpDiT9yhm4ARvNXYEX8Og+poD7GvMETjRWjglVlglVlglVlgllmVSWSWWZVJZJNarMto7LnzEHjY0YUl+f1k5DjkhhiRSWSGGJFJZIYYkUlkhR/oqHqAklWMfSEdfTlykPBqR/8Abo/nQfGMTYTAAAAABJRU5ErkJggg=="
          />
          <p className="font-semibold">{currentPage}</p>
        </div>
      )}
      <p className="text-2xl font-semibold">{pageTitle}</p>
      <p className="text-xl mt-2.5">{pageDesc}</p>
    </div>
  );
};

export default AccountSettingsOptionIntro;
