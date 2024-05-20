"use client";
import Footer from "@/components/semantic/Footer";
import Header from "@/components/semantic/Header";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <ToastContainer transition={Zoom} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
