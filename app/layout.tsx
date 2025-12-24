export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <header style={{ padding: 16, borderBottom: '1px solid #ddd' }}>
          <h2>Next.js App Router Playground</h2>
        </header>
        <main style={{ padding: 16 }}>{children}</main>
      </body>
    </html>
  );
}
