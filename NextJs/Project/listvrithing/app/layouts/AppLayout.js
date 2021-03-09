import {
    Container,
} from 'react-bootstrap';

import Navbar from '../components/AppNavbar';
import Footer from '../components/AppFooter';

const AppLayout = ({ children }) => {
    return (  
        <>
            <Navbar/>

                <Container className="py-5">
                    {children}
                </Container>

            <Footer/>
        </>
    );
}
 
export default AppLayout;