import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import AuthProvider  from "./context/AuthProvider";
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
        <AuthProvider>
          <NavigationBar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
