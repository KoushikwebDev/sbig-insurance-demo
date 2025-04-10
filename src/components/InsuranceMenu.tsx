// components/footer/InsuranceMenu.tsx
export default function InsuranceMenu() {
    return (
      <section className="bg-gray-100 py-8 px-4 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 text-sm text-gray-800">
          <div>
            <h4 className="font-bold mb-2">Health Insurance</h4>
            <ul className="space-y-1">
              <li><a href="#">Super Top-Up</a></li>
              <li><a href="#">Health Edge</a></li>
              <li><a href="#">Super Health</a></li>
              <li><a href="#">Arogya Supreme</a></li>
              <li><a href="#">Arogya Top-Up</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Motor Insurance</h4>
            <ul className="space-y-1">
              <li><a href="#">Private Car Package</a></li>
              <li><a href="#">Two Wheeler Insurance</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Travel Insurance</h4>
            <ul className="space-y-1">
              <li><a href="#">Business & Holiday</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Other Insurance</h4>
            <ul className="space-y-1">
              <li><a href="#">Grha Raksha Plus</a></li>
              <li><a href="#">Bharat Griha Raksha</a></li>
              <li><a href="#">Cyber VaultEdge</a></li>
              <li><a href="#">PMFBY</a></li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  