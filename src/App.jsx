import Accordian from "./components/accordian/Accordian";
import TabTest from "./components/custom-tabs/TabTest";
import ImageSlider from "./components/image-slider/ImageSlider";
import LightDarkMode from "./components/light-dark-mode/LightDarkMode";
import LoadMoreData from "./components/load-more-data/LoadMoreData";
import NavMenu from "./components/nav-menu/NavMenu";
import menus from "./components/nav-menu/data";
import QrCode from "./components/qr-code/QrCode";
import RandomColor from "./components/random-color/RandomColor";
import ScrollIndicator from "./components/scroll-indicator/ScrollIndicator";
import StarRating from "./components/star-rating/StarRating";

const App = () => {
  return (
    <div>
      {/* <Accordian /> */}

      {/* <RandomColor /> */}

      {/* <StarRating noOfStars={5} /> */}

      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"2"}
        limit={"4"}
      /> */}

      {/* <LoadMoreData /> */}

      {/* <NavMenu menus={menus} /> */}

      {/* <QrCode /> */}

      {/* <LightDarkMode /> */}

      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

      <TabTest />
    </div>
  );
};

export default App;
