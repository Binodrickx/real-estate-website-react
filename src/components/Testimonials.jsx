import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonials = () => {
  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div
      className="container mx-auto py-10 lg:px-32 w-full overflow-hidden"
      id="Testimonials"
    >
      {/* ---------- Heading ---------- */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-4xl font-bold mb-2 text-center"
      >
        Customer{' '}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Testimonials
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-gray-500 mb-12 max-w-80 mx-auto"
      >
        Real Stories from Those Who Found Home with Us
      </motion.p>

      {/* ---------- Testimonials Grid ---------- */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 mx-auto rounded-full mb-4 object-cover"
            />

            <h3 className="text-lg font-semibold text-gray-800">
              {testimonial.name}
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              {testimonial.text}
            </p>

            {/* ---------- Rating Stars ---------- */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="flex justify-center gap-1 mt-3"
            >
              {Array.from({ length: testimonial.rating }, (_, index) => (
                <img
                  key={index}
                  src={assets.star_icon}
                  alt="star"
                  className="w-4 h-4"
                />
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Testimonials
