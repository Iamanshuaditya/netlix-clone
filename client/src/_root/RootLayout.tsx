import { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "../components/Header";

import { RecoilRoot } from "recoil";

interface RootLayoutProps {
  children: ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <RecoilRoot>
      <Header />
      {children}
      <Footer />
    </RecoilRoot>
  );
}

export default RootLayout;
