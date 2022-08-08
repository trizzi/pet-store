import { Component } from "react";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";
import { connect } from "react-redux";

class Details extends Component {
  state = { loading: true, showModal: false };

  async componentDidMount() {
    try {
      const res = await fetch(
        `https://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
      );
      const json = await res.json();
      this.setState(Object.assign({ loading: false }, json.pets[0]));
    } catch (error) {
      console.log("Error from the Details page", error);
    }
  }
  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  adopt = () => (window.location = "http://bit.ly/pet-adopt");
  render() {
    if (this.state.loading) {
      return <h2>loading … </h2>;
    }

    const { animal, breed, city, state, description, name, images, showModal } =
      this.state;

    return (
      <div
        className="mx-auto max-w-5xl rounded-md p-4 mb-6 overflow-y-hidden"
        style={{
          background: "#faeff0",
          boxShadow: " 0px 0px 12px #aaa, -0px -0px 12px #fff",
        }}
      >
        <Carousel images={images} />
        <div className="my-2 mx-8">
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>

          <button
            onClick={this.toggleModal}
            className="rounded px-6 py-2 my-3 text-white hover:opacity-50 border-none"
            style={{ backgroundColor: this.props.theme }}
          >
            Adopt {name}
          </button>

          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div
                style={{
                  // background: "white",
                  maxWidth: "500px",
                  padding: "15px",
                  textAlign: "center",
                  borderRadius: "30px",
                  background: "#faeff0",
                }}
              >
                <h1>Would you like to adopt {name}?</h1>
                <div>
                  <a
                    className="bg-emerald-400 px-6 py-2 rounded hover:opacity-50 border-none inline-block text-white m-4 no-underline"
                    href="https://bit.ly/pet-adopt"
                  >
                    Yes
                  </a>
                  <button
                    className=" bg-red-700 rounded px-6 py-2 text-white hover:opacity-50 border-none"
                    onClick={this.toggleModal}
                  >
                    No
                  </button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ theme }) => ({ theme });

const ReduxWrappedDetails = connect(mapStateToProps)(Details);

const WrappedDetails = () => {
  const params = useParams();

  return (
    <ErrorBoundary>
      <ReduxWrappedDetails params={params} />
    </ErrorBoundary>
  );
};

export default WrappedDetails;
