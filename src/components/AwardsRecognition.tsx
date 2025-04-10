// components/AwardsRecognition.tsx

export default function AwardsRecognition() {
    const awards = [
      {
        title: "Insurance Asia Awards 2024",
        desc: "Technology Excellence Initiative of the Year –",
        category: "Health Insurance",
        date: "March 31, 2025",
      },
      {
        title: "Global CSR, Sustainability and ESG Awards by Brand Honchos",
        desc: "Best CSR Project of the Year 2024 in the Road Safety Category",
        category: "General Insurance",
        date: "March 28, 2025",
      },
      {
        title: "Marksmen Daily",
        desc: "Most Preferred WorkPlace 2024-2025",
        category: "General Insurance",
        date: "March 28, 2025",
      },
    ]
  
    return (
      <section className="bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Awards & Recognition</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="bg-gray-50 p-6 shadow-sm rounded-lg border border-gray-200">
                <div className="mb-4 text-purple-700 text-xl font-semibold">{award.title}</div>
                <p className="text-sm text-gray-700 mb-3">{award.desc}</p>
                <div className="inline-block text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full mb-2">
                  {award.category}
                </div>
                <p className="text-xs text-gray-500">{award.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  