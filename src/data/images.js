//Hero images
import imageHeroMobile from "../assets/images/image-intro-mobile.jpg"
import imageHeroDesktop from "../assets/images/image-intro-desktop.jpg"
//Pattern nav mobile
import patternMobileNav from "../assets/images/bg-pattern-mobile-nav.svg"
//Pattern hero mobile
import patternLeftMobile from "../assets/images/bg-pattern-intro-left-mobile.svg"
import patternRightMobile from "../assets/images/bg-pattern-intro-right-mobile.svg"
//Pattern hero desktop
import patternLeftDesktop from "../assets/images/bg-pattern-intro-left-desktop.svg"
import patternRightDesktop from "../assets/images/bg-pattern-intro-right-desktop.svg"
//Pattern how we work mobile
import patternHowWeWorkMobile from "../assets/images/bg-pattern-how-we-work-mobile.svg"
//Pattern how we work desktop
import patternHowWeWorkDesktop from "../assets/images/bg-pattern-how-we-work-desktop.svg"
//Pattern footer mobile
import patternFooterMobile from "../assets/images/bg-pattern-footer-mobile.svg"
//Pattern footer desktop
import patternFooterDesktop from "../assets/images/bg-pattern-footer-desktop.svg"

//Features img
import snappyProcess from "../assets/images/icon-snappy-process.svg"
import affordablePrices from "../assets/images/icon-affordable-prices.svg"
import peopleFirst from "../assets/images/icon-people-first.svg"


export const imagesHero = {
  "mobile": imageHeroMobile,
  "desktop": imageHeroDesktop 
}

export const patterns = {
  "nav": {
    "mobile-nav": patternMobileNav 
  },
  "hero-mobile": {
    "heroLeft": patternLeftMobile,
    "heroRight": patternRightMobile
  },
  "hero-desktop": {
    "heroLeft": patternLeftDesktop,
    "heroRight": patternRightDesktop
  },
  "how-we-work": {
    "mobile": patternHowWeWorkMobile,
    "desktop": patternHowWeWorkDesktop
  },
  "footer": {
    "mobile": patternFooterMobile,
    "desktop": patternFooterDesktop
  }
}

export const featuresImg = {
  snappyProcess,
  affordablePrices,
  peopleFirst
}
