import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Software Developer Portfolio",
  description: "Dark and minimal software developer portfolio.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className="dark">
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
