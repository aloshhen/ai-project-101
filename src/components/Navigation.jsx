import { Coffee, Menu } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-white/80 backdrop-blur-md z-50"
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="flex items-center space-x-2">
          <Coffee className="text-coffee-primary" />
          <h1 className="text-xl font-bold text-coffee-primary">CoffeeEco</h1>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-coffee-primary hover:text-coffee-accent">Home</a>
          <a href="#" className="text-coffee-primary hover:text-coffee-accent">About</a>
          <a href="#" className="text-coffee-primary hover:text-coffee-accent">Services</a>
        </div>
        <button className="md:hidden">
          <Menu className="text-coffee-primary" />
        </button>
      </div>
    </motion.nav>
  )
}