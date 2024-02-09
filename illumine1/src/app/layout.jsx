import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import CompleteHeader from "./components/CompleteHeader";

const inter = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "gmail clone",
  description: "replicating the gmail interface",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="grid grid-cols-[1fr_3fr] gap-6">
        < CompleteHeader />
        {children}
        

      </div>

      </body>

    </html>
  );
}
