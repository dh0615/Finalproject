// import React from "react";
// import "./Header.css";
// import styled from "styled-components";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import ProgressBar from "react-bootstrap";

// const Header = () => {
//   return (
//     <Navbar
//       expand="lg"
//       className="bg-body-tertiary"
//       style={{
//         position: "fixed",
//         width: `calc(100% - ${handleScroll()}px)`,
//         zIndex: 1000,
//       }}
//     >
//       <Container>
//         <Navbar.Brand href="#home" style={{ color: "#AEE4F0" }}>
//           LOGO
//         </Navbar.Brand>
//         <Navbar.Toggle
//           className="NavbarToggle"
//           aria-controls="basic-navbar-nav"
//         />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#about">About</Nav.Link>
//             <Nav.Link href="#skill">Skill</Nav.Link>
//             <Nav.Link href="#portfolio">Portfolio</Nav.Link>
//             <Nav.Link href="#contact">Contact</Nav.Link>
//           </Nav>
//           <ProgressBar now={60} label={`${60}%`} />
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Header;

// // ===
// import React, { useState } from "react";
// import styled from "styled-components";
// import { Link } from "react-scroll";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import ProgressBar from "react-bootstrap/ProgressBar";
// import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
// import About from "../pages/About";
// import Skill from "../pages/Skill";
// import Portfolio from "../pages/Portfolio";
// import Clone from "../pages/Clone";
// import Contact from "../pages/Contact";

// // const Wrapper = styled.div`
// //   width: 100%;
// //   height: 100vh;
// //   background: grey;
// // `;

// // const Header = styled.div`
// //   width: 100%;
// //   height: 60px;
// //   background: pink;
// //   margin: 0 auto;

// // `;

// // const LogoImg = styled.div`
// //   width: 100px;
// //   height: 60px;
// //   background: green;
// // `;

// // const MenuBar = styled.div`
// // width : 90%;
// //   display: flex;
// //   justify-content: space-between;
// //   align-items: center;
// //   margin: 0 auto;
// //   .toggle{
// //     display:block;
// //   }
// //   .headerMenuList {
// //     display: ${(props) => (props.isToggled ? "flex" : "none")};
// //     justify-content: space-around;
// //     align-items: center;
// //     border: 1px solid #f00;
// //     gap: 20px;
// //     flex-direction: column;
// //     width: 100%;
// //     background-color: black;
// //   }
// // `;

// const Wrapper = styled.div``;
// // const Header = styled.div`
// //   max-width: 1920px;
// //   margin: 0 auto;
// //   display: flex;
// //   justify-content: space-between;
// //   align-items: center;
// //   color: white;
// //   background-color: black;

// //   .logo {
// //     margin: 0.1rem;
// //     font-size: 2rem;
// //   }

// //   .headerMenuList {
// //     list-style: none;
// //     display: flex;
// //   }

// //   li {
// //     padding: 0 1rem;
// //   }

// //   .toggle {
// //     display: none;
// //     font-size: 1.5rem;
// //     padding: 1rem 1rem;
// //   }

// //   @media screen and (max-width: 768px) {
// //     flex-wrap: wrap;

// //     .headerMenuList {
// //       display: ${(props) => (props.toggleMenu ? "flex" : "none")};
// //       flex-direction: column;
// //       width: 100%;
// //       background-color: black;
// //     }

// //     .headerMenuList li {
// //       margin: 1rem 0;
// //       padding: 0;
// //     }

// //     .toggle {
// //       display: block;
// //     }
// //   }
// // `;
// const MenuBar = styled.div``;
// const LogoImg = styled.div``;

// const Nav = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);

//   return (
//     // <Router>
//     //   <div>
//     //     <nav>
//     //       <ul>
//     //         <li>
//     //           <Link to="/about">About</Link>
//     //         </li>
//     //         <li>
//     //           <Link to="/skill">Skill</Link>
//     //         </li>
//     //         <li>
//     //           <Link to="/portfolio">Portfolio</Link>
//     //         </li>
//     //         <li>
//     //           <Link to="/clone">Clone</Link>
//     //         </li>
//     //         <li>
//     //           <Link to="/contact">Contact</Link>
//     //         </li>
//     //       </ul>
//     //     </nav>
//     //     <Routes>
//     //       <Route path="/about" element={<About />} />
//     //       <Route path="/skill" element={<Skill />} />
//     //       <Route path="/portfolio" element={<Portfolio />} />
//     //       <Route path="/clone" element={<Clone />} />
//     //       <Route path="/contact" element={<Contact />} />
//     //     </Routes>
//     //   </div>
//     // </Router>
//     <div>
//       <Wrapper>
//         <Header toggleMenu={toggleMenu}>
//           <MenuBar>
//             <LogoImg></LogoImg>
//             <div
//               className="toggle"
//               onClick={() => {
//                 setToggleMenu(!toggleMenu);
//               }}
//             >
//               <FontAwesomeIcon icon={!toggleMenu ? faBars : faX} />
//             </div>
//             <ul className="headerMenuList">
//               <li>
//                 <a href="#about">
//                   <Link
//                     to="about"
//                     spy={true}
//                     smooth={true}
//                     /* offset={-70} */
//                     duration={100}
//                   >
//                     About
//                   </Link>
//                 </a>
//               </li>
//               <li>
//                 <a href="#skill">
//                   <Link
//                     to="skill"
//                     spy={true}
//                     smooth={true}
//                     /* offset={-70} */
//                     duration={100}
//                   >
//                     Skill
//                   </Link>
//                 </a>
//               </li>
//               <li>
//                 <a href="#portfolio">
//                   <Link
//                     to="portfolio"
//                     spy={true}
//                     smooth={true}
//                     /* offset={-70} */
//                     duration={100}
//                   >
//                     Portfolio
//                   </Link>
//                 </a>
//               </li>
//               <li>
//                 <a href="#clone">
//                   <Link
//                     to="clone"
//                     spy={true}
//                     smooth={true}
//                     /* offset={-70} */
//                     duration={100}
//                   >
//                     Clone
//                   </Link>
//                 </a>
//               </li>
//               <li>
//                 <a href="#contact">
//                   <Link
//                     to="contact"
//                     spy={true}
//                     smooth={true}
//                     /* offset={-70} */
//                     duration={100}
//                   >
//                     Contact
//                   </Link>
//                 </a>
//               </li>
//             </ul>
//           </MenuBar>
//         </Header>
//       </Wrapper>
//       <ProgressBar
//         striped
//         variant="danger"
//         /* now={(questionNo / QuestionData.length) * 100} */
//       />
//     </div>
//   );
// };

// // export default Nav;
