import Header from "./_components/Header";
import Logo from "./_components/Logo";
import Navigation from "./_components/navigation";
import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "The Wild Oasis",
  },
  description:
    "Discover the luxury of the Wild Oasis by booking your perfect vacation.",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body
        className={`${josefin.className} bg-primary-950 flex flex-col  text-primary-100 min-h-screen`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl w-full  mx-auto ">{children}</main>
        </div>
      </body>
    </html>
  );
}
