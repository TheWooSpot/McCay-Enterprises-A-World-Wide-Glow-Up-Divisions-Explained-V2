import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiUsers, FiTarget, FiTrendingUp, FiHeart } from 'react-icons/fi'
import PageTransition from '../components/PageTransition'
import DivisionCard from '../components/DivisionCard'
import TestimonialCard from '../components/TestimonialCard'

const Home = () => {
  const divisions = [
    {
      title: "Division 1: Self",
      description: "Focus on personal growth, self-awareness, and developing your unique strengths and abilities.",
      icon: <FiHeart />,
      color: "bg-red-50 border-l-4 border-red-500",
    },
    {
      title: "Division 2: Others",
      description: "Build meaningful relationships, develop emotional intelligence, and learn to collaborate effectively.",
      icon: <FiUsers />,
      color: "bg-blue-50 border-l-4 border-blue-500",
    },
    {
      title: "Division 3: Systems",
      description: "Create and optimize systems that support your goals and enhance productivity and efficiency.",
      icon: <FiTarget />,
      color: "bg-green-50 border-l-4 border-green-500",
    },
    {
      title: "Division 4: Growth",
      description: "Embrace continuous learning, adapt to change, and develop strategies for sustainable long-term success.",
      icon: <FiTrendingUp />,
      color: "bg-purple-50 border-l-4 border-purple-500",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, Innovate Inc.",
      content: "The 4 Divisions framework transformed how I approach leadership. It provided clarity and structure to areas I previously overlooked.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Michael Chen",
      role: "Team Lead, Tech Solutions",
      content: "Implementing the 4 Divisions approach helped our team balance personal growth with system optimization. Productivity is up 40%!",
      rating: 5,
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Aisha Patel",
      role: "Personal Development Coach",
      content: "I recommend the 4 Divisions to all my clients. It provides a holistic framework that addresses all aspects of growth.",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="mb-6 font-bold leading-tight text-4xl md:text-5xl lg:text-6xl">
                <span className="text-primary-600 block font-extrabold">A World Wide Glow-Up</span>
                <span className="block">The <span className="text-[#5D7052]">BIG</span> Idea</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                A comprehensive framework for personal and professional development that balances self-improvement, relationships, systems, and continuous growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/divisions" className="btn btn-primary">
                  Explore The Divisions
                </Link>
                <Link to="/about" className="btn btn-outline">
                  Learn More
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="People collaborating" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute top-0 right-0 w-full h-full bg-primary-200 rounded-xl transform translate-x-6 translate-y-6 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divisions Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">The Four Divisions Explained</h2>
            <p className="text-xl text-gray-600">
              Discover how these four essential areas work together to create a balanced approach to growth and success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {divisions.map((division, index) => (
              <DivisionCard key={index} {...division} index={index} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/divisions" className="btn btn-primary inline-flex items-center">
              Explore in Detail
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="mb-6">Why The 4 Divisions Matter</h2>
              <p className="text-gray-600 mb-6">
                In today's complex world, success requires more than just technical skills or hard work. The 4 Divisions framework provides a holistic approach that addresses all aspects of personal and professional development.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Balance personal growth with relationship building",
                  "Create systems that support sustainable success",
                  "Develop adaptability in a rapidly changing world",
                  "Identify blind spots in your development journey",
                  "Achieve meaningful goals while maintaining wellbeing"
                ].map((benefit, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <span className="inline-block w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-3 mt-0.5">
                      ✓
                    </span>
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Team success" 
                  className="rounded-xl shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="text-4xl font-bold text-primary-600">94%</div>
                  <div className="text-sm text-gray-600">Success rate reported by practitioners</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">What People Are Saying</h2>
            <p className="text-xl text-gray-600">
              Hear from individuals and organizations who have transformed their approach using the 4 Divisions framework.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6 text-white">Ready to Transform Your Approach?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white opacity-90">
            Start your journey with the 4 Divisions framework today and discover a more balanced, effective path to personal and professional growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/divisions" className="btn bg-white text-primary-600 hover:bg-gray-100">
              Explore The Divisions
            </Link>
            <Link to="/contact" className="btn border-2 border-white text-white hover:bg-white/10">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Home
