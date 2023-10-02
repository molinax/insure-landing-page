import { RiFacebookBoxFill, RiTwitterFill, RiPinterestFill, RiInstagramLine } from "react-icons/ri"
import { navFooterContent } from "../data/contentOfLists"
import { patterns } from "../data/images"

import Logo from "../components/Logo"
import List from "../components/List"

const Footer = () => {
  const {
    "our-company": ourCompany, 
    "help-me": helpMe,
    contact,
    others
  } = navFooterContent

  const { footer: { mobile, desktop } } = patterns
  
  return (
    <footer className="relative z-10 bg-very-light-gray py-20 px-4 flex flex-col gap-6">
      <header className="container flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
        <Logo />

        <ul className="flex gap-4 text-3xl text-dark-grayish-violet">
          <li>
            <RiFacebookBoxFill className="icon"/>
          </li>
          <li>
            <RiTwitterFill className="icon"/>
          </li>
          <li>
            <RiPinterestFill className="icon"/>
          </li>
          <li>
            <RiInstagramLine className="icon"/>
          </li>
        </ul>
      </header>
      
      <hr></hr>

      <nav className="container grid grid-cols-fluid gap-10">
        <List title="Our company" itemsCollection={ourCompany} />
        <List title="Help me" itemsCollection={helpMe} />
        <List title="Contact" itemsCollection={contact} />
        <List title="Others" itemsCollection={others} />
      </nav>
      
      <img src={mobile} alt="Illustration pattern white" className="absolute top-0 left-0 -z-[1] sm:hidden" />
      <img src={desktop} alt="Illustration pattern white" className="hidden absolute top-0 left-0 -z-[1] sm:block" />
    </footer>
  )
}

export default Footer