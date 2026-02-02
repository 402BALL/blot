export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // App has its own layout without the main Header/Footer
  return <>{children}</>;
}

