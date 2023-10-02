import { RiMenuFill, RiCloseLine } from "react-icons/ri"
import { useMenu } from "../hooks/useMenu.js"
import { navContent } from "../data/contentOfLists.js"
import { patterns } from "../data/images.js"

import Button from "../components/Button.jsx"
import Anchor from "../components/Anchor.jsx"
import Logo from "../components/Logo.jsx"

const Header = () => {
  const { showMenu, toggleMenu } = useMenu()
  const { nav: { "mobile-nav": mobileNav } } = patterns;

  return (
    <header className="fixed top-0 left-0 z-50 container py-4 flex justify-between items-center bg-white text-xl sm:static">
      <Logo />

      <Button onClick={toggleMenu} theme="dark" extraClasses="sm:hidden">
        {showMenu ? <RiCloseLine /> : <RiMenuFill />}
      </Button>

      {/* Menu mobile */}
      <nav className={`fixed top-16 left-0 z-50 w-screen h-[100vh] pt-16 px-8 ${showMenu ? "-translate-x-0" : "translate-x-full"} transition-transform duration-200 ease-out bg-very-dark-violet sm:hidden`}>
        <ul className="flex flex-col justify-center gap-12 text-2xl text-center uppercase tracking-widest">
          {
            navContent.map((navItem, i) => (
              <li key={i} className={(i === navContent.length - 1) ? "w-full btn p-2 group" : ""}>
                <Anchor content={navItem.content} extraClasses="group-hover:text-dark-grayish-violet" />
              </li>
            ))
          }
        </ul>
        
        <img src={mobileNav} alt="Illustration img" className="absolute bottom-0 right-0 w-screen h-max max-h-60" />
      </nav>

      {/* Menu desktop */}
      <nav className="hidden sm:flex">
        <ul className="flex gap-6 items-center text-sm uppercase lg:text-lg">
          {
            navContent.map((navItem, i) => (
              <li key={i} className={(i === navContent.length - 1) ? "btn-dark group p-2" : ""}>
                <Anchor content={navItem.content} extraClasses="group-hover:text-very-light-gray" theme="dark" />
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header