import { motion } from 'framer-motion'
import { Coffee, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-coffee-primary to-coffee-accent">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Discover Your Perfect Coffee Ecosystem
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-8">
          Seamlessly connect with coffee lovers, explore unique blends, and transform your daily ritual.
        </p>
        <div className="flex justify-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-coffee-primary px-6 py-3 rounded-full flex items-center space-x-2 font-semibold"
          >
            <span>Start Exploring</span>
            <ArrowRight className="ml-2" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white px-6 py-3 rounded-full flex items-center space-x-2 font-semibold"
          >
            <Coffee className="mr-2" />
            <span>Our Story</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}