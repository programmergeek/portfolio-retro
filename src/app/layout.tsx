import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Thato Will Joseph",
  description: "I love starberry milk. I'm lactose intolerant.",
  icons: [{ rel: "icon", url: "/Logo.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
          {children}
      </body>
    </html >
  );
}
