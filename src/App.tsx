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
      <Box h="45px" position={'sticky'} top={'0'} zIndex={'sticky'} w={'full'} >
        <Navbar/>
      </Box>
      <Page id="about">
        <About/>
      </Page>
      <Page id="projects">
        <Projects/>
      </Page>
      <Page id="contact">
        <Contact/>
      </Page>
      <Box h="45px" w={'full'}>
        <Footer/>
      </Box>
    </VStack>
}

export default App
