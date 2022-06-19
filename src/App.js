import AmongBuild from "./component/AmongBuild/AmongBuild";
import Brand from "./component/Brand/Brand";
import OfferPromotion from "./component/OfferPromotion/OfferPromotion";
import Business from "./container/Business/Business";
import Downlode from "./container/Downlode/Downlode";
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
    </>
   
  );
}

export default App;
