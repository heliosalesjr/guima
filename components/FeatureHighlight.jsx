

export default function FeatureHighlight() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="img/hands3.jpg" alt="Feature Background" className="w-full h-full object-cover opacity-20" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="md:w-1/2">
          <h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
          >
            Transforming Businesses
          </h1>
          <h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800"
          >
            Innovative Solutions for Modern Challenges
          </h2>
          <p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-gray-700"
          >
            At ElegantBiz, we're dedicated to providing cutting-edge solutions that help your business thrive in today's
            fast-paced digital landscape. Our team of experts combines creativity with technical expertise to deliver
            results that exceed expectations.
          </p>
        </div>
      </div>
    </section>
  )
}

