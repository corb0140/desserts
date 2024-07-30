import "./globals.css";

export const metadata = {
  title: "Dessert E-Commerce",
  description: "Add deserts to your cart and checkout",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-RedHat bg-Rose50">{children}</body>
    </html>
  );
}
