import Logo from "../components/Logo";

const Footer = () => {
  return (
    <footer className="text-gray-900 dark:bg-neutral-900 dark:text-gray-100 border-t-2 border-indigo-500 border-opacity-20">
      <section className="py-10 mx-20">
        <Logo />
      </section>
    </footer>
  );
};

export default Footer;
