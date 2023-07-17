import './App.css'
import Navbar from "./components/Navbar.tsx";
import {Grid, GridItem} from "@chakra-ui/react";
import About from "./pages/About.tsx";
import Projects from "./pages/Projects.tsx";
import Contact from "./pages/Contact.tsx";
import Footer from "./components/Footer.tsx";

function App() {

    return <Grid
        templateAreas={{
            base: `"nav"
                  "about"
                  "projects"
                  "contact"
                  "footer"`
        }}
        gridTemplateRows={'50px 90vh 90vh 90vh 50px'}
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'
    >
        <GridItem pl='2' bg='orange.300' area={'nav'}>
            <Navbar/>
        </GridItem>
        <GridItem pl='2' bg='pink.300' area={'about'}>
            <About/>
        </GridItem>
        <GridItem pl='2' bg='blue.300' area={'projects'}>
            <Projects/>
        </GridItem>
        <GridItem pl='2' bg='red.300' area={'contact'}>
            <Contact/>
        </GridItem>
        <GridItem pl='2' bg='gray.300' area={'footer'}>
            <Footer/>
        </GridItem>
    </Grid>
}

export default App
