import Accordian from "./components/accordian/Accordian";
import TabTest from "./components/custom-tabs/TabTest";
import FeatureFlag from "./components/feature-flag/FeatureFlag";
import FeatureFlagGlobalState from "./components/feature-flag/context/Context";
import GitHubProfileFinder from "./components/github-profile/GitHubProfile";
import ImageSlider from "./components/image-slider/ImageSlider";
import LightDarkMode from "./components/light-dark-mode/LightDarkMode";
import LoadMoreData from "./components/load-more-data/LoadMoreData";
import ModelPopupTest from "./components/modal-popup/ModelPopupTest";
import NavMenu from "./components/nav-menu/NavMenu";
import menus from "./components/nav-menu/data";
import QrCode from "./components/qr-code/QrCode";
import RandomColor from "./components/random-color/RandomColor";
import ScrollIndicator from "./components/scroll-indicator/ScrollIndicator";
import SearchAutocomplete from "./components/search-autocomplete/SearchAutocomplete";
import StarRating from "./components/star-rating/StarRating";
import TicTacToe from "./components/tic-tac-toe/TicTacToe";
import HookTest from "./components/use-fetch/HookTest";
import UseOnClickOutsideTest from "./components/use-outside-click/UseOnClickOutsideTest";

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

      {/* <TabTest /> */}

      {/* <ModelPopupTest /> */}

      {/* <GitHubProfileFinder /> */}

      {/* <SearchAutocomplete /> */}

      {/* <TicTacToe /> */}

      {/* <FeatureFlagGlobalState>
        <FeatureFlag />
      </FeatureFlagGlobalState> */}

      {/* <HookTest /> */}

      <UseOnClickOutsideTest />
    </div>
  );
};

export default App;
