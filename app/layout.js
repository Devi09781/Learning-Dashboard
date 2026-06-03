import "./globals.css";

export const metadata = {
  title: "LearnX Dashboard",
  description: "Next-Gen Learning Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}