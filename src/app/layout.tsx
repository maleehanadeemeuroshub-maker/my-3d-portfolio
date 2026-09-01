import type { Metadata } from "next";
// We don't import index.css because it contains Vite's default centering CSS

export const metadata: Metadata = {
  title: "Maleeha Nadeem | 3D Portfolio",
  description: "Immersive 3D portfolio of Maleeha Nadeem — Full Stack / MERN Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, overflow: 'hidden' }}>{children}</body>
    </html>
  );
}
