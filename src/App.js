import Header from "./component/Header";
import Apropos from "./component/Apropos";
import Competences from "./component/Competences";
import Services from "./component/Services";

import Contact from "./component/Contact";
import Footer from "./component/Footer";
import HeaderContent from "./component/HeaderContent";
import Realisation from "./component/Realisation";
//import style from "./App.module.scss"
function App() {
  return (
    <div className="app-container">
      <Header />
      <HeaderContent />
      <Apropos />
      <Competences />
      <Services />
      <Realisation />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
