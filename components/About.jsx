import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image src="/img/hands2.jpg" alt="About Us" width={500} height={300} className="rounded-lg" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About ElegantBiz</h2>
            <p className="text-gray-600 mb-6">
              At ElegantBiz, we believe in the power of sophistication and simplicity. Our team of experts is dedicated
              to providing small businesses with the tools and strategies they need to stand out in a crowded
              marketplace.
            </p>
            <Button variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-100">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

