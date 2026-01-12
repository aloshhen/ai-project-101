import { Coffee, Twitter, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-coffee-primary text-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Coffee className="text-white" />
            <h3 className="text-xl font-bold">CoffeeEco</h3>
          </div>
          <p className="text-white/80">Connecting coffee lovers around the globe.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <nav className="space-y-2">
            <a href="#" className="block hover:text-coffee-accent">Home</a>
            <a href="#" className="block hover:text-coffee-accent">About</a>
            <a href="#" className="block hover:text-coffee-accent">Services</a>
          </nav>
        </div>
        <div>
          <h4 className="font-bold mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-coffee-accent"><Twitter /></a>
            <a href="#" className="hover:text-coffee-accent"><Instagram /></a>
            <a href="#" className="hover:text-coffee-accent"><Facebook /></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-white/20 pt-4">
        <p className="text-sm text-white/60">© 2024 CoffeeEco. All Rights Reserved.</p>
      </div>
    </footer>
  )
}