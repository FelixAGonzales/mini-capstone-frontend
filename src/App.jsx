import { Header } from "./Header";
import { ProductsPage } from "./ProductsPage";
import { Footer } from "./Footer";
import { LoginPage } from "./LoginPage";
import { SignupPage } from "./SignupPage"
// import { LogoutLink } from "./LogoutLink";

function App() {
  return (
    <div>
      <Header />
      {/* <LogoutLink /> */}
      <SignupPage />
      <LoginPage />
      <ProductsPage />
      <Footer />
    </div>
  )
}

export default App;