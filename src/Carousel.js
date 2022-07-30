import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="flex justify-around items-center mt-2 h-96">
        <img src={images[active]} alt="animal" className="max-h-96 max-w-lg " />
        <div className="rounded-full">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              style={{
                borderRadius: "50%",
                width: "100px",
                height: "100px",
                // display: "inline-block",
                margin: "15px",
              }}
              className={
                index === active
                  ? "border-b-gray-700 opacity-60"
                  : " cursor-pointer inline-block"
              }
              alt="animal thumbnail"
              onClick={this.handleIndexClick}
              data-index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
