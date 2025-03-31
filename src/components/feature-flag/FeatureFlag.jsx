import { useContext } from "react";
import { FeatureFlagsContext } from "./context/Context";
import LightDarkMode from "../light-dark-mode/LightDarkMode";
import TicTacToe from "../tic-tac-toe/TicTacToe";
import RandomColor from "../random-color/RandomColor";
import Accordian from "../accordian/Accordian";
import TabTest from "../custom-tabs/TabTest";

const FeatureFlag = () => {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext)

  const componentsToRender = [
    { key: "showLightAndDarkMode", component: <LightDarkMode /> },
    { key: "showTicTacToeBoard", component: <TicTacToe /> },
    { key: "showRandomColorGenerator", component: <RandomColor /> },
    { key: "showAccordian", component: <Accordian /> },
    { key: "showTabs", component: <TabTest /> },
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  if (loading) return <h1>Loading data ! Please wait</h1>;

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
};

export default FeatureFlag;
