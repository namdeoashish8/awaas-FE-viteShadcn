import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import {motion} from "framer-motion"

const PageLayout=({children})=> children;

const pageVariants={
  initial: {
    opacity: 0
  },
  in: {
    opacity:1
  }, 
  out :{
    opacity:0
  }
}

const pageTransition = {
  type: "tween",
  ease: "linear",
  duration: 0.5
}

const MainLayout = () => {
  const {pathname} = useLocation();

  return (
    <main>
        <Navbar/>
        <PageLayout>
          <motion.div 
            key={pathname}
            initial = "initial"
            variants={pageVariants}
            animate="in"
            transition={pageTransition}>
              <Outlet/>
          </motion.div>
        </PageLayout>
        <Footer/>
    </main>
  )
}

export default MainLayout
