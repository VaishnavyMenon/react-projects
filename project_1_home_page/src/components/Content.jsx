import "./Content.css";

const Content = () => {
  return (
    <div className="content-main">
      <div className="content-body">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p className="upper-para">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="buttons">
          <button className="btn-true">Shop Now</button>
          <button className="btn-false">Category</button>
        </div>
        <div className="shopping">
            <p className="lower-para">Also available on</p>
            <div className="shop-icons">
            <img className="shop-icon" src="\images\flipkart.png" alt="flipkart-logo"/>
            <img className="shop-icon" src="\images\amazon.png" alt="amazon-logo"/>
            </div>
        </div>
      </div>
      <div className="content-image">
        <img src="\images\shoe_image.png" alt="show-image" />
      </div>
    </div>
  );
};

export default Content;
