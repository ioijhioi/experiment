// import { useRouter } from 'next/router';
import "antd/dist/antd.css"
import Layout from '../src/components/commons/Layout'
// import LandingPage from '.';

const HIDDEN_MAIN = ["/"];


function MyApp({ Component, pageProps }) {
  // const router = useRouter();
  // const isHiddenMain = HIDDEN_MAIN.includes(router.pathname);
  
  return (
    <>
    
      {/* {isHiddenMain && <LandingPage/>} */}
      {/* {!isHiddenMain &&( */}
      <Layout>
        <Component {...pageProps} />
      </Layout> 
      {/* )} */}
    
    </>
  ) 

  
}

export default MyApp
