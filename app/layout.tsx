import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import "./globals.css";

export const metadata = {
  title: "Luxury Heaven Store",
  description: "Created to be your cloth advisor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
