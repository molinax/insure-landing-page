import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Features from "./sections/Features"
import Footer from "./sections/Footer"

const InsurePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="container my-36 xl:my-40">
          <Features />
        </div>
        <Footer />
      </main>
    </>
  )
}

export default InsurePage