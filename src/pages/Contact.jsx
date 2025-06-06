import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiMessageSquare, FiHelpCircle, FiBookOpen } from 'react-icons/fi'
import PageTransition from '../components/PageTransition'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  const contactOptions = [
    {
      title: "General Inquiries",
      description: "Questions about our approach or organization",
      icon: <FiMessageSquare className="text-primary-500" />,
      email: "info@4divisions.com"
    },
    {
      title: "Support",
      description: "Help with resources or implementation",
      icon: <FiHelpCircle className="text-green-500" />,
      email: "support@4divisions.com"
    },
    {
      title: "Training & Workshops",
      description: "Information about our training programs",
      icon: <FiBookOpen className="text-purple-500" />,
      email: "training@4divisions.com"
    }
  ]

  const faqs = [
    {
      question: "How is the 4 Divisions framework different from other development approaches?",
      answer: "The 4 Divisions framework is unique in its holistic, balanced approach that addresses all aspects of growth simultaneously. Unlike approaches that focus primarily on one area (like productivity or relationships), our framework recognizes the interconnected nature of personal development, relationships, systems, and continuous learning."
    },
    {
      question: "Is the framework suitable for both individuals and organizations?",
      answer: "Yes, the 4 Divisions framework is designed to be scalable and applicable at both individual and organizational levels. The core principles remain the same, while the specific implementation strategies may vary based on context and scale."
    },
    {
      question: "How long does it take to see results from implementing the 4 Divisions approach?",
      answer: "Many people report immediate benefits from the increased awareness and balance the framework provides. However, sustainable transformation typically emerges over 3-6 months of consistent application. The framework is designed as a long-term approach to development rather than a quick fix."
    },
    {
      question: "Do you offer customized training for organizations?",
      answer: "Yes, we offer tailored training programs for organizations of all sizes. Our approach begins with understanding your specific context and challenges, then adapting the 4 Divisions framework to address your unique needs and goals."
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
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              Have questions about the 4 Divisions framework? We're here to help you on your journey.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              >
                <div className="text-3xl mb-4">{option.icon}</div>
                <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <a href={`mailto:${option.email}`} className="text-primary-600 font-medium hover:underline">
                  {option.email}
                </a>
              </motion.div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible. We typically respond within 24-48 business hours.
              </p>
              
              <ContactForm />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:pl-12"
            >
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-lg mr-4">
                    <FiMapPin className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Our Location</h3>
                    <p className="text-gray-600">
                      123 Growth Avenue<br />
                      Success City, ST 10001<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-lg mr-4">
                    <FiPhone className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-gray-600">
                      Main: (123) 456-7890<br />
                      Support: (123) 456-7891
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-lg mr-4">
                    <FiMail className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-gray-600">
                      General: info@4divisions.com<br />
                      Support: support@4divisions.com
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 5:00 PM EST</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Saturday:</span>
                    <span className="font-medium">Closed</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="bg-white p-4 rounded-xl shadow-md overflow-hidden">
            <div className="bg-gray-200 h-96 w-full flex items-center justify-center">
              <p className="text-gray-500 text-lg">Interactive Map Would Be Displayed Here</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about the 4 Divisions framework.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-6 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
            
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Don't see your question here? Reach out to us directly.
              </p>
              <a href="mailto:info@4divisions.com" className="btn btn-primary">
                Ask Your Question
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Stay Updated</h2>
            <p className="text-xl mb-8 text-white opacity-90">
              Subscribe to our newsletter for the latest insights, resources, and updates on the 4 Divisions framework.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button type="submit" className="btn bg-white text-primary-600 hover:bg-gray-100 whitespace-nowrap">
                Subscribe
              </button>
            </form>
            
            <p className="mt-4 text-sm text-white opacity-75">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Contact
