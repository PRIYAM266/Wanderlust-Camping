import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/Logo.png" alt="logo" width={160} height={100} />
      </Link>

      <div className="lg:flex items-center">
        <ul className="lg:flexBetween h-full gap-12 pr-10">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="lg:flexCenter hidden">
          <Button type="button" title="Sign Up" variant="btn_green" />
        </div>

        <div className="lg:flexCenter hidden pl-5">
          <Button type="button" title="Login" variant="btn_dark_green" />
        </div>
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
