export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="p-8 max-w-[54rem] m-auto min-h-screen">{children}</main>
  );
}
