import FooterLinks from "./FooterLinks"
import FooterSocials from "./FooterSocials"

function Footer() {
    return (
        <footer className="flex flex-col-reverse gap-20 md:flex-row items-center py-14 px-16 h-full  justify-between bg-[#1D1D1E] w-full  ">
            <FooterSocials />
            <FooterLinks />
        </footer>
    );
}

export default Footer;