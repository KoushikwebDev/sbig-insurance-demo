const stats = [
    { label: "Claims Handled", value: "24Cr+", icon: "📄" },
    { label: "Network Hospitals", value: "16,625", icon: "🏥" },
    { label: "Network Garages", value: "7159", icon: "🏠" },
    { label: "Locations", value: "140+", icon: "📍" },
  ];
  
  export default function StatsGrid() {
    return (
      <section className="grid grid-cols-2 md:grid-cols-4 text-center mt-10 px-6 gap-6 text-gray-800">
        {stats.map((item, idx) => (
          <div key={idx} className="bg-gradient-to-b from-white to-purple-50 py-4 rounded-lg shadow-sm">
            <div className="text-3xl">{item.icon}</div>
            <div className="text-xl font-bold">{item.value}</div>
            <div className="text-sm">{item.label}</div>
          </div>
        ))}
      </section>
    );
  }
  