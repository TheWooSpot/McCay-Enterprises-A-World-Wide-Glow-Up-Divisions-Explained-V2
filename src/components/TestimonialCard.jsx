import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

const TestimonialCard = ({ name, role, content, rating, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card p-6"
    >
      <div className="flex items-center mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(rating)].map((_, i) => (
          <FiStar key={i} className="text-yellow-400 fill-current" />
        ))}
      </div>
      
      <p className="text-gray-600 italic">"{content}"</p>
    </motion.div>
  )
}

export default TestimonialCard
