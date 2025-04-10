// components/HeroBoxSection.tsx
export default function HeroBoxSection() {
    const cards = [
      {
        title: "Winner of Best Large general insurer – Mint BFSI summit in the year 2023",
        btnText: "Know More",
        bgColor: "bg-purple-100",
      },
      {
        title: "Enjoy Wellness Benefits with Super Health Insurance - Prime Plan",
        btnText: "Know More",
        bgColor: "bg-blue-100",
      },
      {
        title: "Watch our SURAKSHA and BHAROSA wala films.",
        btnText: "Watch Now",
        bgColor: "bg-purple-200",
      },
    ]
  
    return (
      <div className="flex flex-col md:flex-row gap-4 py-8 px-4">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`flex-1 rounded-xl p-6 ${card.bgColor} shadow-md flex flex-col justify-between`}
          >
            <h3 className="text-lg font-semibold mb-4">{card.title}</h3>
            <button className="self-start bg-black text-white text-sm px-4 py-2 rounded">
              {card.btnText}
            </button>
          </div>
        ))}
      </div>
    )
  }
  