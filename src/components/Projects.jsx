import React, { useState, useEffect } from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(1)

  // Update cards count based on screen size
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectsData.length)
      } else {
        setCardsToShow(1)
      }
    }

    updateCardsToShow()
    window.addEventListener('resize', updateCardsToShow)
    return () => window.removeEventListener('resize', updateCardsToShow)
  }, [])

  const nextProject = () => {
    setCurrentIndex((prev) =>
      prev + 1 >= projectsData.length - cardsToShow + 1 ? 0 : prev + 1
    )
  }

  const prevProject = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projectsData.length - cardsToShow : prev - 1
    )
  }

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
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Projects"
    >
      {/* ---------- Heading ---------- */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-4xl font-bold mb-2 text-center"
      >
        Projects{' '}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Completed
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-gray-500 max-w-80 mb-8 mx-auto"
      >
        Crafting Spaces, Building Legacies — Explore our Portfolio
      </motion.p>

      {/* ---------- Slider Buttons ---------- */}
      <div className="flex justify-end items-center mb-8">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={prevProject}
          className="p-3 bg-gray-200 rounded mr-2"
        >
          <img src={assets.left_arrow} alt="Previous project" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={nextProject}
          className="p-3 bg-gray-200 rounded"
        >
          <img src={assets.right_arrow} alt="Next project" />
        </motion.button>
      </div>

      {/* ---------- Project Slider ---------- */}
      <div className="overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative flex-shrink-0 w-full sm:w-1/2 lg:w-1/4"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-lg"
              />

              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="bg-white w-3/4 px-4 py-2 shadow-md rounded">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {project.price} • {project.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Projects
