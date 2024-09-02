import "./App.css";
import Cover from "./pages/Cover";
import Nav from "./components/Nav";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Portfolio from "./pages/Portfolio";
import Clone from "./pages/Clone";
import Contact from "./pages/Contact";
import { createGlobalStyle } from "styled-components";
import Introduce from "./pages/Introduce";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap'); //  font-family: "Montserrat", sans-serif;
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap'); //    font-family: "Lora", serif;
@import url('https://fonts.googleapis.com/css2?family=Prata&display=swap');// font-family: "Prata", serif;
@import url('https://fonts.googleapis.com/css2?family=Hahmlet:wght@100..900&display=swap'); //  font-family: "Hahmlet", serif;
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap'); // font-family: "Nanum Gothic", sans-serif;
@import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300..700;1,300..700&display=swap');  // font-family: "Cormorant", serif;


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul, li {
  list-style: none;
};
a{
  text-decoration: none;
  color: inherit;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Cover />
      <About />
      {/* <Introduce /> */}
      <Skill />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
