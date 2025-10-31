import "../styles/globals.css";
import Navbar from "@/components/General/Navbar";
import Footer from "@/components/General/Footer";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Highland Lifespaces</title>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
