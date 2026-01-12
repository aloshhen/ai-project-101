import { motion } from 'framer-motion'
import { Globe, Zap, Star } from 'lucide-react'

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
  >
    <Icon className="text-coffee-accent mb-4 w-12 h-12" />
    <h3 className="text-xl font-bold mb-2 text-coffee-primary">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
)

export default function About() {
  const features = [
    {
      icon: Globe,
      title: 'Global Coffee Community',
      description: 'Connect with coffee enthusiasts worldwide and share your passion.'
    },
    {
      icon: Zap,
      title: 'Instant Recommendations',
      description: 'Get personalized coffee suggestions based on your taste profile.'
    },
    {
      icon: Star,
      title: 'Premium Experiences',
      description: 'Access exclusive coffee tastings and masterclasses.'
    }
  ]

  return (
    <section className="py-16 bg-coffee-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-coffee-primary"
        >
          How CoffeeEco Works
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}