import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow">
      <Image src="/header/sbig-logo.svg" alt="Logo" width={120} height={40} />
      <nav className="hidden md:flex space-x-6 font-medium text-gray-700">
        {["Products", "Claims", "Renewals", "About Us", "Quick Links", "Need Help"].map((item) => (
          <a href="#" key={item}>{item}</a>
        ))}
      </nav>
    </header>
  );
}
