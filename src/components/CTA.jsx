import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

export default function CTA() {
  return (
    <section className="bg-gradient-to-br from-coffee-primary to-coffee-accent py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto text-center px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Elevate Your Coffee Journey?
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Join our global coffee ecosystem and transform the way you experience coffee.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-coffee-primary px-8 py-4 rounded-full flex items-center space-x-2 mx-auto font-semibold"
        >
          <span>Join CoffeeEco</span>
          <Send className="ml-2" />
        </motion.button>
      </motion.div>
    </section>
  )
}