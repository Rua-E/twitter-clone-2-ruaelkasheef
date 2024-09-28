import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// import { SessionProvider } from "next-auth/react";

import Layout from "../components/Layout";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import EditModal from "@/components/modals/EditModal";
import "@/styles/globals.css";
import Modal from "@/components/Modal";

export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <>
    <Router>
      <Routes>
    {/* <SessionProvider session={pageProps.session} > */}
        <Route 
            path="/Modal" 
            element={<Modal actionLabel="Submit" isOpen title="Test Modal" /> }></Route>
        <Route
          path="/Toaster"
          element={<Toaster />}></Route>
        <Route
          path="/EditModal"
          element={<EditModal/>}></Route>
        <Route 
          path="/RegisterModal"
          element={<RegisterModal/>}></Route>
        <Route
          path="/LoginModal"
          element={<LoginModal/>}></Route>
        <Route path="/Layout" element={
            <Layout >
              <Component {...pageProps} />
            </Layout>
          }></Route>
    {/* </SessionProvider> */}
      </Routes>
    </Router>
   
    </>
  )
}
