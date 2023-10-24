import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { useEffect, useRef, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isUserOptionsOpen, setIsUserOptionsOpen] = useState(false);
  const { userLoggedIn, logout, isLoading, userData } = useAuthContext();
  const userModalRef = useRef(null);
  const userSectionRef = useRef(null);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
    toast.success("Logged out succesfully!", {
      position: "bottom-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    navigate("/");
  };

  const handleUserOptions = () => {
    setIsUserOptionsOpen((open) => !open);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        userModalRef.current &&
        !userModalRef.current.contains(e.target) &&
        userSectionRef.current &&
        !userSectionRef.current.contains(e.target)
      ) {
        setIsUserOptionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <header className="hidden lg:block lg:sticky top-0 z-50 bg-white text-gray-900 dark:bg-neutral-900 dark:text-gray-100 border-b-2 border-indigo-500 border-opacity-20">
      <nav className="mx-20">
        <ul className="flex justify-between">
          {/* LOGO */}
          <li className="flex flex-1 items-center gap-8 py-4 ">
            <Link to="/">
              <Logo />
            </Link>
          </li>
          {/* SEARCH BAR */}
          <li className="text-dark-900 flex flex-1 py-4 dark:text-gray-100">
            <div className="border-2 duration-300 border-indigo-500  px-4 py-2 rounded-full flex items-center hover:shadow hover:shadow-indigo-500 hover:scale-105">
              <input
                type="text"
                className="dark:bg-neutral-900 outline-none"
                placeholder="Search..."
              />
              <div className="border-l-2 border-indigo-500 pr-2 pl-3">
                <img
                  className="w-6 h-6"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADY0lEQVR4nO1ZO28TQRDeNDzEQ0IIAS0goKVBouAZ5RcgV3EwN+sd24EU/AIQFAn06QkSEqJMrDxaKHiXQGhoKBDEkWecCEhAHBo7kXJ7sXFyu7YD/qSVLEv3zX63O89TqosuOg+Ii4eDXEVrpAca+Y02VAKk5ZU1B8ivtaExMAyZwcVDqtOgc+ULGqmokX5p5LCZBYZ+AtIEYOVcu/evtKZjgDzd7ObrL5pEpKNtERHk+IpGXkwuYvWEeEEjp1sqApBv190Q0jtAHgYs90KeT6TTn3fJQqyclP+04RFAel9XlOFbLRGhDd+p80ZfAJYvNssDyGc00tO2iAlq18m+30tZJFQq7Nk4Y9gDSHnhiL2YLPV7c+yYTxgqZbOVs0m5JXIB8rztM0GBjrjZfcSYHZ1oyYWIVQSmcl7yjWWjqNzniejR166TW2ikQsxO1t3LEgNF600935xPNOMz/NJKnOPOyg7JwmvJ5RooT5DIZ1cAWi8cTExcq50iDv5WeYY2NBuNYHw1OWmtAFyT8HhYeQYg3bWS7P3EpNUqNkJa7nWy20Y2c9RnJchXyUkNlaJRhI8rz5DSxgouXxOT2ll3cPDLbuUZYsNy+B/OhQDM7VGe0T9U2mtnefUvXC1A/picVNrTNjs7ID1LTmpozIogI05229jmPatUGXWeEKUpUp4BSB+iPlK+nJhUph12iSJFpPKEahdpVdkD13i/I3KasLtBj0VjxCe1oTFn9NL4xDo4pLxyDG3oesxOvnzKrRGkSUvIssuZlFS9dmMFyA+Va8jcaWVks9bQvIuSXnwu1uoizQVB5YCb3dsGkdPrXLFl6ew2O3yQ6xRvcau8T1KpcJvyBRnV2EZXK9RstnypWZ7q3Mt27PiEZjKTCXe0XkwtysxW+4kc9clQTgpAWfK7mrEN3bPzRKMFhsa9nozMnWyf8bUAaWJoKNzuTYzMneKDiY0u+q2RH2vkmbaKEcjIRq5ArAJoLOA7GH6kc3RaOMQXwPDUX54pehcjkGmHDAqkxxbnlxBa7WcMfQPkTyujnlEwPFAo0D77+Y4SkxTi2HZJpGMBgKe8RrOWikGe7oppNVL/28lo5JnUjXCn6nRkmopmLf7+6ONkAOmm2kpIrSNmy4lYT8yWFRHxGV8fS7voQjXEHzDs8aVpPLh/AAAAAElFTkSuQmCC"
                />
              </div>
            </div>
          </li>
          {/* USER AND OPTIONS */}
          <li className="flex text-base gap-5 items-center font-semibold text-gray-900 dark:text-gray-100">
            <Link to="/create-listing">
              <p className="hover:underline">
                Add your property to{" "}
                <span className="text-indigo-500 font-semibold tracking-wider">
                  Knock.
                </span>
              </p>
            </Link>

            {/* USER OVERLAY */}
            <div
              ref={userSectionRef}
              onClick={handleUserOptions}
              className={`border-2 duration-300 ${
                isUserOptionsOpen && "shadow shadow-indigo-500 scale-105"
              } border-indigo-500 py-1.5 px-4 rounded-full flex items-center gap-2 hover:shadow hover:shadow-indigo-500 hover:scale-105`}
            >
              <img
                className="w-6 h-6"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAcElEQVR4nO3WMQqAMBBE0RxPvUVcNt7agHiAzAm0sLIQ7WLCf7D9TLEwIQAA0BNbNJkrW9Lxq3Pl6BrfC7i26mHTU4my918gusY5aa0eNt3vylSGz78AAECTjDEnxpwx5gAAaJUx5sSYM8YcAAChDSejWw+eZl01YwAAAABJRU5ErkJggg=="
              />

              {/* IF USER LOGGED OUT THE USER ICON IS THE BASIC ONE. IF LOGGED IN THE USER ICON WILL BE THE FIRST LETTER OF THE USER'S NAME */}
              {/* THE CONTENTS IN THE ACCOUNTVIEW WILL BE DIFFERENT BASED ON THE AUTH STATE. */}
              {userLoggedIn ? (
                //LOGGED IN -> USER INITIAL
                <div className="relative w-8 h-8 bg-indigo-500 rounded-full">
                  {!isLoading && (
                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      {userData?.first_name?.charAt(0)}
                    </p>
                  )}
                </div>
              ) : (
                //LOGGED OUT ->  BASIC USER IMAGE
                <img
                  className="w-8 h-8"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABl0lEQVR4nN1VwU4CMRAFv0P5BfEov4De3IMHIrSdKST6DVxN1P/Qo/yIXrj6BbI7syAndM0g6i7dbrPctMlLmmb6XvtmOm00/vUYj7M9xGWrD9xRyF2N80ggc1lDjFsSsxN5fzQ70MinxtJ5FSRGYmtQZ001TI5CxGYLskf2Bul3ITcbXJikHbSl9HTAPWVpopASjRwroImslQqZt/1SckmWz3MFNNHIWR6y5stJaeKlWrz+4vrkBQENnPjipbocAQDuVFRKvC1gkGf+A/GxI2AMn3g3gGvRANPHCoGuI6CRIr8A9zYicTDJ6xtTVEvA1EZ65ggMKiwydR9dmUXSWwqBGF9p4KlGWjkV9ANaaaCptvFlMMlSWgUfgZ/9xA6e8ntHo6Xbm+RxmOGvTdrStQJ6D5EroA+N6U3woZW1Cm3TO4U895IjzxXSbbFVvJa3Cm+zQxpqTB4U8osCXqwhc8v3YFObjx3YxWEjPLKmMUl7t06ahdv195CumM+JFxITsqX6y4xbUnZfXyZFApnLmlTLzl/mnxmfSjHtKWxkY6wAAAAASUVORK5CYII="
                />
              )}
            </div>

            {/* IF THE USER CLICKS ON THE USER SECTION THE MODAL WILL OPEN */}
            {/* MODAL WINDOW */}
            {isUserOptionsOpen && (
              <div
                ref={userModalRef}
                className="z-50 absolute font-normal overflow-hidden bg-white dark:bg-neutral-900 border-2 mt-1 shadow shadow-indigo-500 border-indigo-500 border-opacity-20 w-72 right-20 top-16 rounded-3xl"
              >
                <div className="flex flex-col">
                  {/* IF THE USER IS LOGGED IN IT WILL SHOW THE CORRESPONDING OPTIONS */}
                  {/* OTHERWISE IT WILL DSIPLAY THE LOGIN/LOGOUT ROUTES */}
                  {userLoggedIn ? (
                    <div>
                      <p className="text-center py-3">
                        Welcone back, {userData?.first_name}
                      </p>

                      <Link to="/create-listing">
                        <p className="hover:bg-indigo-500 px-5 py-3 hover:bg-opacity-10">
                          List a new property
                        </p>
                      </Link>
                      <Link to="/create-listing">
                        <p className="hover:bg-indigo-500 px-5 py-3 hover:bg-opacity-10">
                          My listings
                        </p>
                      </Link>
                      <Link to="/account-settings">
                        <p className="hover:bg-indigo-500 px-5 py-3 hover:bg-opacity-10">
                          My account
                        </p>
                      </Link>

                      {/* LOGOUT */}
                      <p
                        onClick={handleLogout}
                        className="hover:bg-indigo-500 px-5 py-3 border-t-2 border-indigo-500 border-opacity-20 hover:bg-opacity-10"
                      >
                        Logout
                      </p>
                    </div>
                  ) : (
                    <>
                      <Link to="/auth/register">
                        <p className="hover:bg-indigo-500 px-5 py-3 hover:bg-opacity-10">
                          Sign up
                        </p>
                      </Link>
                      <Link to="/auth/login">
                        <p className="hover:bg-indigo-500 px-5 py-3 hover:bg-opacity-10">
                          Login
                        </p>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
