import Footer from "./components/Footer";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import { Hind_Siliguri } from "next/font/google";

const siliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["300", "600"],
  variable: "--font-siliguri",
});

export const metadata = {
  title: "Blog Application",
  description: "Generated by Inzamamul Karim",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={siliguri.variable}>
        <Header />
        {children}
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
      </body>
    </html>
  );
}
