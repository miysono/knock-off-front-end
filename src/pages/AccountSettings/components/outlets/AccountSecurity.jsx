// Note: Account Security Outlet Component - Account Settings Page
import { useState } from "react";
import AccountSettingsOptionIntro from "../AccountSettingsOptionIntro";
const AccountSecurity = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const [passwordSetOpen, setPasswordSetOpen] = useState(false);

  return (
    <div className="flex gap-10">
      <article className="max-w-3xl">
        <AccountSettingsOptionIntro
          pageTitle="Account security"
          pageDesc="View your account security and protect your account"
          currentPage="Security"
        />
        <section className="mt-10">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Password</p>
            <p
              className="text-indigo-500 hover:underline"
              onClick={() => {
                setPasswordSetOpen((open) => !open);
              }}
            >
              {passwordSetOpen ? "Close" : "Change"}
            </p>
          </div>
          <p className="mt-2.5 text-lg">
            We recommend changing your password every 3 months.
          </p>
          {passwordSetOpen && (
            <div className="flex flex-col">
              <input
                type="password"
                className="mt-5 border-2 w-60 border-indigo-500 p-3 rounded bg-gray-100"
                placeholder="Current password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <input
                type="password"
                className="mt-5 border-2 w-60 border-indigo-500 p-3 rounded bg-gray-100"
                placeholder="New password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <input
                type="password"
                className="mt-5 border-2 w-60 border-indigo-500 p-3 rounded bg-gray-100"
                placeholder="Confirm new password"
                value={newPasswordConfirm}
                onChange={(e) => setNewPasswordConfirm(e.target.value)}
              />
              <button className="w-60 text-lg p-3 border-2 mt-5 duration-300 rounded-full border-indigo-500 hover:scale-105 hover:bg-indigo-500 ">
                Change password
              </button>
            </div>
          )}
        </section>
        <section className="mt-10">
          <p className="text-xl font-semibold">Authenticated devices</p>
          <p className="mt-2.5 text-lg">
            These are the devices that you have logged in with.
          </p>
        </section>
        <section className="mt-10">
          <p className="text-xl font-semibold">Two-factor authentication</p>
          <p className="mt-2.5 text-lg">
            Two-factor authentication adds an extra layer of security to your
            account.
          </p>
        </section>
        <section className="mt-10">
          <p className="text-xl font-semibold">Account deletion</p>
          <p className="mt-2.5 text-lg">
            Permanently delete your account and all of your data.
          </p>
          <button className="mt-2.5 p-3 px-5 border-2 border-indigo-500 rounded duration-300 hover:bg-indigo-500 hover:scale-105">
            Delete account
          </button>
        </section>
      </article>
      <aside className="mt-20 border-2 border-indigo-500 border-opacity-20 rounded-xl max-w-md p-5">
        <p className="text-xl font-semibold">Account security tips</p>
        <p className="mt-2.5 text-lg">
          Here are some tips to help you keep your account secure:
        </p>
        <ul className="flex flex-col gap-2.5 font-semibold text-lg mt-5">
          <li>Use a strong password</li>
          <li>Use a password manager</li>
          <li>Use two-factor authentication</li>
          <li>Don't share your password with anyone</li>
          <li>Don't use the same password for multiple accounts</li>
        </ul>
      </aside>
    </div>
  );
};

export default AccountSecurity;
