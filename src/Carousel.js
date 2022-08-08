import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["https://pets-images.dev-apis.com/pets/none.jpg"],
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
      <div className="flex flex-wrap justify-around items-center my-2">
        <img
          data-testid="hero"
          src={images[active]}
          alt="animal"
          className="h-96 w-96 lg:max-h-96 sm:w-lg rounded-2xl"
        />
        <div className="flex sm:flex-wrap rounded-full mb-4">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              data-testid={`thumbnails${index}`}
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
