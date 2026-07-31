import Masthead from '@/components/Masthead'
import About from '@/components/About'
import Work from '@/components/Work'
import Projects from '@/components/Projects'
import Background from '@/components/Background'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[46rem] px-6 pt-20 pb-8 sm:px-8 sm:pt-24">
      <Masthead />
      <div className="space-y-12 sm:space-y-14">
        <About />
        <Work />
        <Projects />
        <Background />
      </div>
      <Footer />
    </main>
  )
}
