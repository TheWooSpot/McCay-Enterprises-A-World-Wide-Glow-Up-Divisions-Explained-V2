import { motion } from 'framer-motion'

const DivisionCard = ({ title, description, icon, color, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`card p-6 ${color}`}
    >
      <div className="flex items-center mb-4">
        <div className="mr-4 text-3xl">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
      <div className="mt-4">
        <a href="#" className="text-primary-600 font-medium hover:underline">
          Learn more →
        </a>
      </div>
    </motion.div>
  )
}

export default DivisionCard
