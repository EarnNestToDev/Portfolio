import SocialLinks from "@/sections/main/SocialLinks";
import ButtonNavbar from "@/components/ui/ButtonNavbar";

import SVGBriefcase from "@/components/icons/brieftcase";

const Header = () => {
    return (
        <header className="bg-opacity-50 backdrop-blur-sm fixed w-full z-20 top-0 start-0 border-b border-orange-200/20 py-2">
            <nav className="w-full flex flex-wrap items-center gap-4 justify-between mx-auto pl-2 md:pl-8">
                <div className="hidden md:block">
                    <SVGBriefcase width={36} height={36} fill="white" />
                </div>

                <div className="flex items-center justify-center gap-4">
                    <ButtonNavbar name="Home" href="/#" />
                    <ButtonNavbar name="Experiencia" href="/#projects" />
                    <ButtonNavbar name="Sobre mí" href="/#aboutMe" />
                </div>

                <div className="pr-2 md:pr-8">
                    <SocialLinks />
                </div>
            </nav>
        </header>
    );
}

export default Header;