import { motion } from 'framer-motion'
import { FiAward, FiBookOpen, FiUsers, FiTarget } from 'react-icons/fi'
import PageTransition from '../components/PageTransition'

const About = () => {
  const teamMembers = [
    {
      name: "Lauren McCay",
      role: "Founder & Lead Researcher",
      bio: "With over 15 years of experience in organizational psychology, Lauren developed the 4 Divisions framework after extensive research into high-performing individuals and organizations.",
      image: "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Marcus Johnson",
      role: "Executive Coach & Facilitator",
      bio: "Former Fortune 500 executive who now helps leaders implement the 4 Divisions approach in their organizations, with a focus on sustainable growth and team development.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Sophia Rodriguez",
      role: "Curriculum Director",
      bio: "Educational expert who translates complex concepts into practical learning experiences, ensuring the 4 Divisions framework is accessible to diverse audiences.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "James Wilson",
      role: "Systems Implementation Specialist",
      bio: "Technology and systems expert who helps organizations build the infrastructure needed to support all four divisions effectively.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ]

  const milestones = [
    {
      year: "2012",
      title: "Initial Research",
      description: "Lauren McCay begins research into patterns of success across diverse fields and industries."
    },
    {
      year: "2015",
      title: "Framework Development",
      description: "The 4 Divisions framework is formalized after testing with initial pilot groups."
    },
    {
      year: "2017",
      title: "First Publication",
      description: "Release of 'The 4 Divisions: A New Paradigm for Personal and Professional Growth'."
    },
    {
      year: "2019",
      title: "Corporate Implementation",
      description: "First major corporate training programs based on the 4 Divisions approach."
    },
    {
      year: "2021",
      title: "Global Expansion",
      description: "The framework is adopted by organizations and educational institutions worldwide."
    },
    {
      year: "2023",
      title: "Digital Transformation",
      description: "Launch of comprehensive online resources and assessment tools."
    }
  ]

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
              About The 4 Divisions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              Our story, mission, and the team behind the framework that's transforming how people approach personal and professional development.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-600 mb-4">
                <FiBookOpen className="mr-2" />
                <span className="font-medium">Our Story</span>
              </div>
              
              <h2 className="text-3xl font-bold mb-6">The Origins of the 4 Divisions Framework</h2>
              
              <p className="text-gray-600 mb-4">
                The 4 Divisions framework began as a research project led by Lauren McCay, who was investigating why some individuals and organizations achieved sustainable success while others struggled despite similar resources and opportunities.
              </p>
              
              <p className="text-gray-600 mb-4">
                After studying hundreds of high-performers across diverse fields, Lauren identified a consistent pattern: those who achieved lasting success maintained balance across four key areas of development, while those who struggled typically over-emphasized one or two areas at the expense of others.
              </p>
              
              <p className="text-gray-600">
                This insight led to the formalization of the 4 Divisions framework, which has since been refined through practical application in organizations ranging from Fortune 500 companies to educational institutions and non-profits.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Team collaboration"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-100 rounded-full -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-50 text-secondary-600 mb-4">
              <FiTarget className="mr-2" />
              <span className="font-medium">Our Mission</span>
            </div>
            
            <h2 className="text-3xl font-bold mb-6">Why We Do What We Do</h2>
            
            <p className="text-xl text-gray-600">
              We believe that true success comes from balanced development across all aspects of life and work.
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
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                We envision a world where individuals and organizations approach growth holistically, recognizing the interconnected nature of personal development, relationships, systems, and continuous learning. We believe this balanced approach leads to more sustainable success, greater fulfillment, and positive impact.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-bold mb-4">Our Approach</h3>
              <p className="text-gray-600">
                We combine rigorous research with practical application, ensuring our framework is both evidence-based and immediately useful. We believe in making complex concepts accessible without oversimplification, and in meeting people where they are while challenging them to grow.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-bold mb-4">Our Values</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-3"></span>
                  <span><strong>Balance:</strong> We practice what we teach, maintaining equilibrium across all four divisions.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-3"></span>
                  <span><strong>Growth:</strong> We embrace continuous learning and evolution of our approach.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-3"></span>
                  <span><strong>Impact:</strong> We measure success by the positive change we create in individuals and organizations.</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-bold mb-4">Our Commitment</h3>
              <p className="text-gray-600">
                We are committed to ongoing research and refinement of the 4 Divisions framework, ensuring it remains relevant in a rapidly changing world. We believe in accessibility and work to make our approach available to diverse audiences regardless of background or resources.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 mb-4">
              <FiUsers className="mr-2" />
              <span className="font-medium">Our Team</span>
            </div>
            
            <h2 className="text-3xl font-bold mb-6">The People Behind the Framework</h2>
            
            <p className="text-xl text-gray-600">
              Our diverse team brings together expertise from psychology, business, education, and systems thinking.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 text-green-600 mb-4">
              <FiAward className="mr-2" />
              <span className="font-medium">Our Journey</span>
            </div>
            
            <h2 className="text-3xl font-bold mb-6">Key Milestones</h2>
            
            <p className="text-xl text-gray-600">
              The evolution of the 4 Divisions framework from research concept to global methodology.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200 hidden md:block"></div>
            
            {milestones.map((milestone, index) => (
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
                <div className={`hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-primary-400 text-primary-600 font-bold text-lg z-10 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  {milestone.year}
                </div>
                
                <div className={`flex md:hidden items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-primary-400 text-primary-600 font-bold text-lg z-10 mr-4`}>
                  {milestone.year}
                </div>
                
                <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Recognition & Partners</h2>
            <p className="text-xl text-gray-600">
              Organizations that have implemented and recognized the value of the 4 Divisions approach.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center p-4"
              >
                <div className="h-16 w-32 bg-gray-200 rounded-md flex items-center justify-center text-gray-400 font-medium">
                  Partner {item}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6 text-white">Join Our Community</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white opacity-90">
            Connect with others who are implementing the 4 Divisions framework and access exclusive resources.
          </p>
          <a href="#" className="btn bg-white text-primary-600 hover:bg-gray-100">
            Join Now
          </a>
        </div>
      </section>
    </PageTransition>
  )
}

export default About
