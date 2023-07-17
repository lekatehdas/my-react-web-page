import './App.css'
import Navbar from "./components/Navbar.tsx";
import {Box, VStack} from "@chakra-ui/react";
import About from "./pages/About.tsx";
import Projects from "./pages/Projects.tsx";
import Contact from "./pages/Contact.tsx";
import Footer from "./components/Footer.tsx";
import Page from "./components/Page.tsx";

function App() {
    return <VStack spacing={1}>
      <Box h="5vh" position={'sticky'} top={'0'} zIndex={'sticky'} bg='orange.300' w={'full'}>
        <Navbar/>
      </Box>
      <Page bg='pink.300' id="about">
        <About/>
      </Page>
      <Page bg='blue.300' id="projects">
        <Projects/>
      </Page>
      <Page bg='red.300' id="contact">
        <Contact/>
      </Page>
      <Box h="50px" bg='gray.300' w={'full'}>
        <Footer/>
      </Box>
    </VStack>
}

export default App
