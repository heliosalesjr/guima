export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: "John Doe",
              role: "CEO, TechStart",
              quote:
                "ElegantBiz transformed our online presence. Their expertise and attention to detail are unmatched.",
            },
            {
              name: "Jane Smith",
              role: "Founder, CreativeMinds",
              quote: "Working with ElegantBiz was a game-changer for our small business. Highly recommended!",
            },
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-gray-500 text-sm">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

