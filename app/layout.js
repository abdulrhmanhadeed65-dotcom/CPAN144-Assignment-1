import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Student Dashboard",
  description: "CPAN144 Assignment 1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}