import Tabs from "./Tabs";
import "./style.css";

function RandomComponent() {
  return <h3>Some random content for Tab 3</h3>;
}

const TabTest = () => {
  const tabs = [
    {
      label: "Tab 1",
      content: <h3>This is content for Tab 1</h3>,
    },
    {
      label: "Tab 2",
      content: <h3>This is content for Tab 2</h3>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  function handleChange(currentTabIndex) {
    console.log("Current active tab index:", currentTabIndex);
  }

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
};

export default TabTest;
