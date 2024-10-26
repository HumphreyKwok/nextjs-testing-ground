import Link from "next/link";
import ThemeToggle from "./themeToggle";

const Footer = () => {
  return (
    <footer className="my-8 flex select-none justify-between">
      <div className="flex gap-4">
        <Link href={"/"}>Home </Link>
        <ThemeToggle />
      </div>

      <div className="flex gap-4">
        <p>Humphrey Kwok </p>
        <p>{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
