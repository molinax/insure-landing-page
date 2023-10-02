import Button from "../components/Button";
import { imagesHero, patterns } from "../data/images"

const Hero = () => {
  const { mobile, desktop } = imagesHero;
  const { "hero-mobile": { "heroLeft": heroLeftMobile, "heroRight": heroRightMobile } } = patterns;
  const { "hero-desktop": { "heroLeft": heroLeftDesktop, "heroRight": heroRightDesktop } } = patterns;

  return (
    <section className="relative flex flex-col bg-dark-violet sm:flex-row">
      {/* Hero mobile */}
      <img src={mobile} alt="Image with four people holding hands" className="sm:hidden" />
      {/* Pattern desktop */}
      <img src={heroLeftDesktop} alt="Illustration pattern white" className="hidden absolute -z[-1] -bottom-56 left-0 h-[24rem] xl:block" />
      <img src={heroRightDesktop} alt="Illustration pattern white" className="hidden absolute -z[-1] top-0 right-0 h-[29rem] xl:block" />
      
      <div className="flex lg:container lg:gap-8">
        <article className="relative flex items-center justify-center w-full text-very-light-gray text-center py-24 px-4 sm:w-[55%] sm:overflow-hidden lg:px-0">
          <div className="container z-20 p-0 flex flex-col items-center gap-9 lg:text-left xl:text-xl">
            <h1 className="font-dm-serif text-5xl lg:self-start">Humanizing your insurance.</h1>

            <p className="leading-7">
              Get your life insurance coverage easier and faster. We blend our expertise
              and technology to help you find the plan that&rsquo;s right for you. Ensure you
              and your loved ones are protected.
            </p>

            <Button extraClasses="py-2 px-8 uppercase lg:self-start">
              View plans
            </Button>
          </div>

          {/* Pattern mobile */}
          <img src={heroLeftMobile} alt="Illustration pattern white" className="lg:hidden absolute -z[-1] top-0 left-0" />
          <img src={heroRightMobile} alt="Illustration pattern white" className="lg:hidden absolute -z[-1] -bottom-44 right-0" />
        </article>

        {/* Hero desktop */}
        <div className="hidden bg-dark-violet h-full sm:w-[45%] sm:block xl:pt-24">
          <img src={desktop} alt="Image with four people holding hands" className="object-cover h-full w-full xl:ml-auto xl:h-auto xl:-mb-24 2xl:w-2/3" />
        </div>
      </div>
    </section>
  )
}

export default Hero