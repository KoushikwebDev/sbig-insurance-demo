// components/footer/LegalDisclaimer.tsx
export default function LegalDisclaimer() {
    return (
      <section className="bg-white py-6 px-4 md:px-16 text-xs text-gray-600 border-t">
        <div className="max-w-7xl mx-auto space-y-4">
          <p>© 2025 SBI General Insurance Company Limited | All Rights Reserved.</p>
          <p>
            SBI General Insurance Company Limited Corporate & Registered Office: 9th Floor, A & B Wing, Fulcrum Building, Sahar Road, Andheri(East), Mumbai - 400099 ...
          </p>
          <p>
            Beware of suspicious calls. IRDAI does not announce bonuses or collect premiums. Verify with the company or write to us at <a href="mailto:customercare@sbigeneral.in" className="text-blue-600">customercare@sbigeneral.in</a>
          </p>
          <p>www.sbigeneral.in | 1800 102 1111</p>
          <p>Best viewed in IE 11+, Firefox 14+, Chrome 22+ at 1366x900 or higher.</p>
        </div>
      </section>
    );
  }
  