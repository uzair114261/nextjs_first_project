import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-6">
        <Link href="/" className="flex items-center justify-between">
          <Image
            src="/logo.svg"
            className="object-contain"
            height={18}
            width={118}
            alt="car hub logo"
          />
        </Link>
          <CustomButton
            title="Sign in"
            containerStyle="text-primary-blue rounded-full bg-white min-w-[130px]"
            btnType="button"
          />
      </nav>
    </header>
  );
};

export default Navbar;
