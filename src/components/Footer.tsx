import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col border-t border-gray-100 text-black-100 mt-5">
      <div className="flex max-md:flex flex-wrap justify-between gap-5 px-6 sm:px-16 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
            <Image src="/logo.svg" alt="logo" width={118} height={18} className="object-contain" />
            <p className="text-base text-gray-700">Carhub 2024 <br /> All rights reserved &copy; </p>
        </div>
        <div className="footer__links">
            {footerLinks.map((link) => (
                <div className="footer__link" key={link.title}>
                    <h3 className="font-bold">{link.title}</h3>
                    {link.links.map((item)=> (
                        <Link key={item.title} className="text-gray-500" href={item.url} >{item.title}</Link>
                    ))}
                </div>
            ))}
        </div>
      </div>
        <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
            <p>@2024 Carhub. All rights reserved</p>
            <div className="footer__copyrights-link">
                <Link href="/" className="text-gray-500">Privacy Policy</Link>
                <Link href="/" className="text-gray-500">Terms of Use</Link>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
