import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiHeart, FiUsers, FiTarget, FiTrendingUp, FiChevronRight, FiCheck } from 'react-icons/fi'
import PageTransition from '../components/PageTransition'

const Divisions = () => {
  const [activeTab, setActiveTab] = useState(0)

  const divisions = [
    {
      id: 0,
      title: "Division 1: Self",
      subtitle: "Personal Growth & Self-Awareness",
      icon: <FiHeart className="text-red-500" />,
      color: "bg-red-50 border-red-500",
      textColor: "text-red-500",
      description: "The first division focuses on your relationship with yourself. It encompasses self-awareness, personal growth, mindset, and developing your unique strengths and abilities.",
      keyAreas: [
        "Self-awareness and emotional intelligence",
        "Personal values and purpose",
        "Mindset and belief systems",
        "Health and wellbeing",
        "Skills and competencies"
      ],
      practices: [
        "Regular self-reflection and journaling",
        "Mindfulness and meditation practices",
        "Identifying and leveraging personal strengths",
        "Setting meaningful personal goals",
        "Developing healthy habits and routines"
      ],
      image: "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 1,
      title: "Division 2: Others",
      subtitle: "Relationships & Interpersonal Skills",
      icon: <FiUsers className="text-blue-500" />,
      color: "bg-blue-50 border-blue-500",
      textColor: "text-blue-500",
      description: "The second division addresses your relationships with others. It includes communication skills, emotional intelligence in social contexts, collaboration, and building meaningful connections.",
      keyAreas: [
        "Effective communication",
        "Empathy and understanding",
        "Conflict resolution",
        "Building trust and rapport",
        "Collaboration and teamwork"
      ],
      practices: [
        "Active listening techniques",
        "Practicing empathetic communication",
        "Regular feedback exchanges",
        "Building diverse relationships",
        "Contributing to team success"
      ],
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      title: "Division 3: Systems",
      subtitle: "Processes & Organizational Structures",
      icon: <FiTarget className="text-green-500" />,
      color: "bg-green-50 border-green-500",
      textColor: "text-green-500",
      description: "The third division focuses on creating and optimizing systems. This includes developing processes, routines, and frameworks that support your goals and enhance productivity and efficiency.",
      keyAreas: [
        "Productivity systems and workflows",
        "Time and energy management",
        "Decision-making frameworks",
        "Resource allocation",
        "Environmental design"
      ],
      practices: [
        "Creating standardized processes",
        "Implementing effective planning systems",
        "Regular system reviews and optimization",
        "Leveraging technology appropriately",
        "Designing supportive environments"
      ],
      image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      title: "Division 4: Growth",
      subtitle: "Adaptation & Continuous Improvement",
      icon: <FiTrendingUp className="text-purple-500" />,
      color: "bg-purple-50 border-purple-500",
      textColor: "text-purple-500",
      description: "The fourth division embraces continuous learning and adaptation. It focuses on developing strategies for sustainable long-term success, innovation, and navigating change effectively.",
      keyAreas: [
        "Continuous learning mindset",
        "Adaptability and resilience",
        "Innovation and creativity",
        "Strategic thinking",
        "Long-term vision"
      ],
      practices: [
        "Regular learning and skill development",
        "Seeking diverse perspectives",
        "Experimenting with new approaches",
        "Developing strategic plans with flexibility",
        "Building resilience through challenges"
      ],
      image: "https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ]

  const activeDivision = divisions[activeTab]

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              The 4 Divisions Explained
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8"
            >
              A comprehensive framework for balanced personal and professional development that addresses all aspects of growth and success.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Divisions Tabs */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap border-b border-gray-200 mb-8">
            {divisions.map((division) => (
              <button
                key={division.id}
                onClick={() => setActiveTab(division.id)}
                className={`flex items-center py-4 px-6 text-lg font-medium transition-colors duration-200 ${
                  activeTab === division.id
                    ? `${division.textColor} border-b-2 ${division.color.replace('bg-', 'border-')}`
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <span className="mr-2">{division.icon}</span>
                <span className="hidden md:inline">{division.title}</span>
                <span className="md:hidden">{`D${division.id + 1}`}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              key={activeDivision.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className={`inline-flex items-center px-4 py-2 rounded-full ${activeDivision.color.split(' ')[0]} mb-4`}>
                <span className="mr-2">{activeDivision.icon}</span>
                <span className={`font-medium ${activeDivision.textColor}`}>{activeDivision.subtitle}</span>
              </div>
              
              <h2 className="text-3xl font-bold mb-4">{activeDivision.title}</h2>
              
              <p className="text-gray-600 mb-6">
                {activeDivision.description}
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Key Areas</h3>
                <ul className="space-y-2">
                  {activeDivision.keyAreas.map((area, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full ${activeDivision.color.split(' ')[0]} ${activeDivision.textColor} mr-3 mt-0.5`}>
                        <FiCheck size={12} />
                      </span>
                      <span>{area}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Recommended Practices</h3>
                <ul className="space-y-2">
                  {activeDivision.practices.map((practice, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      className="flex items-start"
                    >
                      <FiChevronRight className={`${activeDivision.textColor} mt-1 mr-2 flex-shrink-0`} />
                      <span>{practice}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              key={`image-${activeDivision.id}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img
                src={activeDivision.image}
                alt={activeDivision.title}
                className="rounded-xl shadow-lg w-full h-auto"
              />
              <div className={`absolute -bottom-4 -right-4 w-24 h-24 ${activeDivision.color.split(' ')[0]} rounded-full flex items-center justify-center text-4xl font-bold ${activeDivision.textColor} -z-10`}>
                D{activeDivision.id + 1}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">How The Divisions Work Together</h2>
            <p className="text-xl text-gray-600">
              The true power of the 4 Divisions framework comes from understanding how these areas interact and support each other.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-bold mb-4">Balancing All Four Divisions</h3>
              <p className="text-gray-600 mb-4">
                Success comes from giving appropriate attention to all four divisions. Neglecting any area creates imbalance that eventually impacts overall performance and wellbeing.
              </p>
              <p className="text-gray-600">
                For example, focusing solely on systems (Division 3) without personal growth (Division 1) or relationship building (Division 2) leads to efficient but unsustainable and potentially unfulfilling outcomes.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-bold mb-4">Reinforcing Connections</h3>
              <p className="text-gray-600 mb-4">
                Each division reinforces the others. Personal growth enhances relationships, better relationships improve systems, effective systems support continuous growth, and growth mindsets drive personal development.
              </p>
              <p className="text-gray-600">
                This interconnected nature creates a virtuous cycle where improvements in one area naturally flow to others when approached holistically.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-bold mb-4">Identifying Blind Spots</h3>
              <p className="text-gray-600 mb-4">
                The framework helps identify areas that may be overlooked. Many people naturally gravitate toward certain divisions based on personality and experience, potentially neglecting others.
              </p>
              <p className="text-gray-600">
                Regular assessment across all four divisions reveals opportunities for development that might otherwise remain hidden.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-bold mb-4">Adapting to Different Contexts</h3>
              <p className="text-gray-600 mb-4">
                Different situations may require emphasizing certain divisions temporarily. The framework provides flexibility while maintaining awareness of all areas.
              </p>
              <p className="text-gray-600">
                For example, during organizational change, you might focus more on systems (Division 3) and adaptation (Division 4), while still maintaining awareness of personal wellbeing (Division 1) and team dynamics (Division 2).
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">Implementing The 4 Divisions</h2>
            <p className="text-xl text-gray-600">
              Practical steps to incorporate this framework into your personal and professional life.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>
            
            {[
              {
                title: "Assessment",
                description: "Begin by assessing your current state across all four divisions. Identify strengths and areas for development in each division.",
                tips: [
                  "Use self-reflection exercises",
                  "Seek feedback from trusted others",
                  "Consider formal assessments where appropriate"
                ]
              },
              {
                title: "Prioritization",
                description: "Based on your assessment, identify which divisions need the most immediate attention. Look for areas where improvement would create the greatest positive impact.",
                tips: [
                  "Focus on no more than two divisions initially",
                  "Consider both short and long-term impacts",
                  "Look for interconnected opportunities"
                ]
              },
              {
                title: "Action Planning",
                description: "Develop specific, measurable actions for each priority area. Create a balanced plan that addresses your focus divisions while maintaining awareness of all four.",
                tips: [
                  "Set SMART goals for each division",
                  "Create accountability mechanisms",
                  "Schedule regular review points"
                ]
              },
              {
                title: "Integration",
                description: "Implement your plan with attention to how the divisions interact. Look for ways to create positive reinforcement between different areas.",
                tips: [
                  "Build new habits gradually",
                  "Connect actions across divisions",
                  "Celebrate small wins along the way"
                ]
              },
              {
                title: "Reflection & Refinement",
                description: "Regularly review your progress and adjust your approach. The 4 Divisions framework is meant to be dynamic and responsive to changing circumstances.",
                tips: [
                  "Schedule quarterly reviews",
                  "Adjust priorities as needed",
                  "Deepen your understanding of each division"
                ]
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-start mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 font-bold text-xl z-10 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  {index + 1}
                </div>
                
                <div className={`flex md:hidden items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 font-bold text-xl z-10 mr-4`}>
                  {index + 1}
                </div>
                
                <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  
                  <h4 className="font-semibold mb-2">Helpful Tips:</h4>
                  <ul className="space-y-1">
                    {step.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start">
                        <FiCheck className="text-primary-500 mt-1 mr-2 flex-shrink-0" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6 text-white">Ready to Apply The 4 Divisions?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white opacity-90">
            Take the first step toward a more balanced, effective approach to personal and professional development.
          </p>
          <a href="#" className="btn bg-white text-primary-600 hover:bg-gray-100">
            Download Free Assessment Guide
          </a>
        </div>
      </section>
    </PageTransition>
  )
}

export default Divisions
