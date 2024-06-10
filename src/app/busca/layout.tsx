import Header from "../components/Header";
import SmallFooter from "../components/SmallFooter";
import SmallHeader from "../components/SmallHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className={`bg-cinza`}>{children}</div>
      <SmallFooter />
    </>
  );
}
