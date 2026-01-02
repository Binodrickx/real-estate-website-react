import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

function About() {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      {/* ---------- Heading ---------- */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-4xl font-bold mb-2"
      >
        About{' '}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Our Brand
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-500 max-w-80 text-center mb-8"
      >
        Passionate About Properties, Dedicated to your Vision
      </motion.p>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* ---------- Image ---------- */}
        <motion.img
          src={assets.brand_img}
          alt=""
          className="w-full sm:w-1/2 max-w-lg"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        {/* ---------- Content ---------- */}
        <motion.div
          className="flex flex-col items-center md:items-start text-gray-600"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Experience</p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Projects Completed</p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>

          <p className="my-10 max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus illum ipsa quisquam hic commodi doloremque alias
            sapiente voluptatum blanditiis pariatur eligendi laudantium,
            corrupti eos debitis, placeat, recusandae tempore nulla officiis.
          </p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700 transition"
          >
            Learn more
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default About
