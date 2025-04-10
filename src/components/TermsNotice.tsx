export default function TermsNotice() {
    return (
      <div className="flex justify-center mt-3 text-sm text-gray-600">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="accent-purple-700" />
          <span>
            I agree to the <a href="#" className="text-purple-600 underline">Terms & Conditions</a>*
          </span>
        </label>
      </div>
    );
  }
  