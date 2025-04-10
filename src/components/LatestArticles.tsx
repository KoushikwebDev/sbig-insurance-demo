// components/LatestArticles.tsx

export default function LatestArticles() {
    const articles = [
      {
        image: "/article/ariticle-one.png",
        tag: "HEALTH INSURANCE",
        category: "Health Insurance",
        date: "March 31, 2025",
        title: "Everything You Should Know About Cholera",
        desc: "Cholera is a severe bacterial infection that can lead to life-threatening dehydration if left untreated...",
      },
      {
        image: "/article/article-two.png",
        tag: "CYBER INSURANCE",
        category: "General Insurance",
        date: "March 28, 2025",
        title: "What is a CRIF Credit Score and How Is It Calculated?",
        desc: "Your credit score plays a crucial role in your financial journey, influencing everything from loan approvals to...",
      },
      {
        image: "/article/article-three.png",
        tag: "CYBER INSURANCE",
        category: "General Insurance",
        date: "March 28, 2025",
        title: "7 Ways to Increase Your CRIF Credit Score",
        desc: "Having a good credit score is crucial, whether you're applying for a loan, a credit card, or even renting a house...",
      },
    ]
  
    return (
      <section className="bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center">Latest Articles On Insurance</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((a, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <img src={a.image} alt={a.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full uppercase font-semibold">{a.tag}</span>
                  <div className="text-sm text-gray-600 mt-2">{a.category}</div>
                  <div className="text-xs text-gray-500 mt-1">{a.date}</div>
                  <h3 className="font-semibold mt-3">{a.title}</h3>
                  <p className="text-sm text-gray-700 mt-2">{a.desc}</p>
                  <button className="mt-3 text-purple-600 text-sm font-medium hover:underline">View More</button>
                </div>
              </div>
            ))}
          </div>
  
          <div className="text-center mt-10">
            <button className="bg-purple-700 text-white px-6 py-2 rounded-full hover:bg-purple-800">
              All Articles
            </button>
          </div>
        </div>
      </section>
    )
  }
  