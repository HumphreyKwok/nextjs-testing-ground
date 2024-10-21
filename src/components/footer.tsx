import ThemeToggle from "./themeToggle";

const Footer = () => {
  return (
    <footer className="my-8 flex justify-end gap-4">
      <ThemeToggle />
      <span className="border border-l-[0.5px] border-zinc-800 dark:border-slate-200" />
      <p>Humphrey Kwok </p>
      <span className="border border-l-[0.5px] border-zinc-800 dark:border-slate-200" />
      <p>{new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
