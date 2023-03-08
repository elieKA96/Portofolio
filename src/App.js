import Header from "./component/Header";
import Apropos from "./component/Apropos";
import Competences from "./component/Competences";
import Services from "./component/Services";
import Galerie from "./component/Galerie";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
//import style from "./App.module.scss"
function App() {
  return (
    <div className={`d-flex flex-column appContainer`}>

      <Header />
      <Apropos />
      <Competences />
      <Services />
      <Galerie />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
