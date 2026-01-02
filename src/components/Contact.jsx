import React, { useState } from 'react'

const Contact = () => {
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)

  const onSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setResult("Sending...")

    const formData = new FormData(event.target)
    formData.append(
      "access_key",
      "5584a4d1-3978-4996-83ed-09312847dd08"
    )

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setResult("Message sent successfully ✅")
        event.target.reset()
      } else {
        setResult(data.message || "Something went wrong ❌")
      }
    } catch (error) {
      setResult("Network error ❌")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      {/* ---------- Heading ---------- */}
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Us
        </span>
      </h1>

      <p className="text-gray-500 mb-12 max-w-80 mx-auto">
        Ready to make a move? Let’s build your future together.
      </p>

      {/* ---------- Contact Form ---------- */}
      <form onSubmit={onSubmit} className="max-w-4xl mx-auto">
        <div className="flex flex-wrap gap-6">
          {/* Name */}
          <div className="w-full md:w-[48%] text-left">
            <label className="text-sm text-gray-600">Your Name</label>
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 focus:outline-none focus:border-gray-500"
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email */}
          <div className="w-full md:w-[48%] text-left">
            <label className="text-sm text-gray-600">Your Email</label>
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 focus:outline-none focus:border-gray-500"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>

        {/* Message */}
        <div className="my-6 text-left">
          <label className="text-sm text-gray-600">Message</label>
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none focus:outline-none focus:border-gray-500"
            name="message"
            placeholder="Write your message here..."
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`px-8 py-3 rounded transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {/* Result Message */}
        {result && (
          <p className="mt-4 text-sm text-gray-600">{result}</p>
        )}
      </form>
    </div>
  )
}

export default Contact
