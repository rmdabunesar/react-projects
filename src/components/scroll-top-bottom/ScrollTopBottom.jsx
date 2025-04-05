import { useRef } from "react";
import UseFetch from "../use-fetch/UseFetch";

const ScrollTopBottom = () => {
  const { data, error, pending } = UseFetch(
    "https://dummyjson.com/products",
    {}
  );

  const bottomRef = useRef(null);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleScrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  if (error) return <h1>Error occurred! Please try again.</h1>;
  if (pending) return <h1>Loading! Please wait...</h1>;

  return (
    <div>
      <h1>Scroll to Top and Bottom Feature</h1>
      <h3>This is the top section</h3>
      <button onClick={handleScrollToBottom}>Scroll To Bottom</button>

      {data && data.products && data.products.length 
      ? data.products.map((productItem) => (
        <p key={productItem.id}>{productItem.title}</p>
      ))
      : null}


      <button onClick={handleScrollToTop}>Scroll To Top</button>

      <div ref={bottomRef}></div>
      <h3>This is the bottom of the page</h3>
    </div>
  );
};

export default ScrollTopBottom;
