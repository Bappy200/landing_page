import AmongBuild from "./component/AmongBuild/AmongBuild";
import Brand from "./component/Brand/Brand";
import Choose from "./component/Choose/Choose";
import OfferPromotion from "./component/OfferPromotion/OfferPromotion";
import Blog from "./container/Blog/Blog";
import Business from "./container/Business/Business";
import Downlode from "./container/Downlode/Downlode";
import Footer from "./container/Footer/Footer";
import Header from "./container/Header/Header";
import Team from "./container/Team/Team";
import Testimonial from "./container/Testimonial/Testimonial";
import "./style/app.scss"

function App() {
  return (
    <>
        <Header/>
        <Brand/>
        <Team/>
        <Business/>
        <AmongBuild/>
        <OfferPromotion/>
        <Testimonial/>
        <Downlode/>
        <Blog/>
        <Choose/>
        <Footer/>
    </>
   
  );
}

export default App;
