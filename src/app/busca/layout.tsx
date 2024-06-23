import Header from "../components/Header";
import SmallFooter from "../components/SmallFooter";
import SmallHeader from "../components/SmallHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header />
      <div className="flex-grow bg-cinza">{children}</div>
      <SmallFooter />
    </div>
  );
}
