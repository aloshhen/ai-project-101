import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App