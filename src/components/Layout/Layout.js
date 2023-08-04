import {ThemeContextProvider} from "@/js/ThemeContext";
// import Navigation from "@/components/layouts/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <ThemeContextProvider>
      <div className={`container-lg gx-0 gx-md-4`}>
        <Header/>
        {/*<Navigation/>*/}

        <main>
          {children}
        </main>

        <footer>
          <Footer/>
        </footer>
      </div>
    </ThemeContextProvider>
  );
}
