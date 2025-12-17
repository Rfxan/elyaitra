import "./globals.css";

export const metadata = {
  title: "elyAItra - AI for Students | Making the Future Easier",
  description: "AI-powered learning platform for students",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
