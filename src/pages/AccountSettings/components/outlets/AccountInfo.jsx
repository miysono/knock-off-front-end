// Note: This is an outlet component for the AccountSettings page.
import { useAuthContext } from "../../../../hooks/useAuthContext";
import AccountSettingsOptionIntro from "../AccountSettingsOptionIntro";

const AccountInfo = () => {
  const { userData } = useAuthContext();
  return (
    <div className="flex gap-10">
      <article className="max-w-3xl">
        <AccountSettingsOptionIntro
          pageTitle="Account Information"
          currentPage="Account Info"
          pageDesc="Add or edit information about your account below"
        />
        <p className="mt-2.5">
          Last updated at: {userData?.updated_at.slice(0, 10)}
        </p>
        <section className="mt-10 text-lg">
          <div className="flex items-center justify-between border-b-2 border-indigo-500 border-opacity-20 py-2.5">
            <div>
              <p className="font-semibold">First name</p>
              <p>{userData?.first_name}</p>
            </div>
            <button className="underline">Edit</button>
          </div>

          <div className="flex items-center justify-between border-b-2 border-indigo-500 border-opacity-20 py-2.5">
            <div>
              <p className="font-semibold">Last name</p>
              <p>{userData?.last_name}</p>
            </div>
            <button className="underline">Edit</button>
          </div>

          <div className="flex items-center justify-between border-b-2 border-indigo-500 border-opacity-20 py-2.5">
            <div>
              <p className="font-semibold">Email</p>
              <p>{userData?.email}</p>
            </div>
            <button className="underline">Edit</button>
          </div>

          <div className="flex items-center justify-between border-b-2 border-indigo-500 border-opacity-20 py-2.5">
            <div>
              <p className="font-semibold">Phone number</p>
              <p>{userData?.phone}</p>
            </div>
            <button className="underline">Edit</button>
          </div>
        </section>
      </article>
      <aside className="mt-20 border-2 border-indigo-500 border-opacity-20 max-w-md rounded-xl p-5">
        <div className="flex flex-col gap-2.5 text-lg">
          <p className="text-xl font-semibold">
            Make sure the information is correct!
          </p>
          <p>Please double check the Account Information you provided!</p>
          <p>
            If you need to edit any of the information, click the
            &quot;Edit&quot; button next to the information you want to edit.
          </p>
          <p className="font-semibold mt-2.5">
            Can&apos;t find all your information?
          </p>
          <p>For safety reasons, the sensitive information is hidden.</p>
        </div>
      </aside>
    </div>
  );
};

export default AccountInfo;
