import Accordian from "./components/accordian/Accordian";
import ImageSlider from "./components/image-slider/ImageSlider";
import LoadMoreData from "./components/load-more-data/LoadMoreData";
import NavMenu from "./components/nav-menu/NavMenu";
import menus from "./components/nav-menu/data";
import RandomColor from "./components/random-color/RandomColor";
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

      <NavMenu menus={menus} />


    </div>
  );
};

export default App;
