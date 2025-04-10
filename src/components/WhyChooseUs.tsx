// components/WhyChooseUs.tsx
import Image from "next/image"

export default function WhyChooseUs() {
  const features = [
    {
      title: "Customer-Centric Approach",
      desc: "SBIG is all about putting you first! We believe in customer service and support, so to make insurance a breeze to understand and hassle-free.",
    },
    {
      title: "Prompt Claims Settlement",
      desc: "We’re committed to sorting out your claims quickly and efficiently so you get the help you need when you need it.",
    },
    {
      title: "Digital-first Experience",
      desc: "Get things done from anywhere using our tech-driven approach. Easy, fast and transparent.",
    },
    {
      title: "Nationwide Network",
      desc: "We provide services across India with a strong hospital and partner network for your convenience.",
    },
  ]

  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-center">
        {/* Left Side - Features */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-8">Why Choose us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <div key={index}>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 hidden lg:block">
          <Image
            src="/why-choose-us.-main.webp" 
            alt="Why Choose Us Illustration"
            className="w-full h-auto object-contain"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  )
}
