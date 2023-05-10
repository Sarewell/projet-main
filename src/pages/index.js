
import Layout from "@/components/layout/Layout";
import About from "@/components/section/homePage/About";
import Blog from "@/components/section/homePage/Blog";
import Contact from "@/components/section/homePage/Contact";
import Projet from "@/components/section/homePage/Projet";

export default function Home() {
  return (
    
      <Layout>
        <About/>
        <Projet/>
        <Blog/>
        <Contact/>
      </Layout>

    
  )
}
