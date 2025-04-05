// UseWindowResizeTest.js
import useWindowResize from "./useWindowResize";

const UseWindowResizeTest = () => {
  const { width, height } = useWindowResize();

  return (
    <div>
      <h1>Use Window Resize Hook</h1>
      <p>Width is {width}</p>
      <p>Height is {height}</p>
    </div>
  );
};

export default UseWindowResizeTest;
