import { featureData } from "../data/featuresData"
import { patterns } from "../data/images"

import Button from "../components/Button"
import Feature from "../components/Feature"

const Features = () => {
  const { "how-we-work": { mobile, desktop} } = patterns

  return (
    <section className="flex flex-col gap-16 lg:gap-20">
      <h2 className="text-4xl font-dm-serif text-center lg:text-left lg:text-5xl">We&rsquo;re different</h2>

      <div className="grid grid-cols-fluid gap-12 md:gap-20">
        {
          featureData.map((featureItem, i) => (
            <Feature
              key={i}
              img={featureItem.img}
              title={featureItem.title}
              content={featureItem.content}
            />
          ))
        }
      </div>

      <article className="relative overflow-hidden flex flex-col items-center gap-6 bg-dark-violet py-14 px-6 z-10 lg:flex-row lg:justify-between lg:px-16">
        <h2 className="font-dm-serif text-center text-4xl text-very-light-gray w-full lg:text-5xl lg:flex-1 lg:max-w-md lg:text-left">Find out more about how we work</h2>
        
        <Button extraClasses="py-2 px-8 uppercase lg:py-3">
          How we work
        </Button>

        <img src={mobile} alt="Illustration pattern white" className="absolute top-0 right-0 -z-[1] lg:hidden" />
        <img src={desktop} alt="Illustration pattern white" className="hidden absolute top-0 right-0 -z-[1] lg:block" />
      </article>
    </section>
  )
}

export default Features