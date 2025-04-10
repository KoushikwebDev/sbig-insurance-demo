// components/CustomerTestimonials.tsx

export default function CustomerTestimonials() {
    const testimonials = [
      {
        name: "Mr. Giridhara Kini & Mrs. Pravina Giridhara Kini",
        title: "Health Insurance",
        text: "We want to sincerely thank SBI General Insurance for the timely transfer of the net claim amount to cover the various risks for our residential property at Sriramanahalli, Bengaluru. Thanks a lot.",
      },
      {
        name: "Prof. Debabrata Roy",
        title: "Health Reimbursement",
        text: "I am very much happy with your staff who nicely explained all the claim related issues to me which was very much confusing for me earlier. Such gentle & polite staff will increase the business of SBI general insurance many folds in coming years as I...",
      },
      {
        name: "MYLAVARAPU VENKATARAMANA",
        title: "Claims",
        text: "I had wonderful experience of lodging claim and updating drivers name and licence numbers",
      },
    ]
  
    return (
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Why Customers Love Us?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6">
                <p className="text-sm text-gray-800 mb-4">{t.text}</p>
                <div className="font-semibold text-purple-700">{t.name}</div>
                <div className="text-xs text-gray-600">{t.title}</div>
                <div className="mt-2 text-purple-600 text-xs">★★★★★</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  