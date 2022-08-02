var $kcqsa$reactjsxruntime = require("react/jsx-runtime");
var $kcqsa$reactdom = require("react-dom");
var $kcqsa$reactrouterdom = require("react-router-dom");
var $kcqsa$react = require("react");










const $5ee75e8d88403aa5$var$Pet = (props)=>{
    const { name: name , animal: animal , breed: breed , images: images , location: location , id: id  } = props;
    let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
    if (images.length) hero = images[0];
    return /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsxs)((0, $kcqsa$reactrouterdom.Link), {
        to: `/details/${id}`,
        className: "relative block",
        children: [
            /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)("div", {
                className: "w-full",
                children: /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)("img", {
                    src: hero,
                    alt: name
                })
            }),
            /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsxs)("div", {
                className: "absolute bottom-1 left-0 bg-gradient-to-tr from-white to-transparent pr-2 pt-2",
                children: [
                    /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)("h1", {
                        children: name
                    }),
                    /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)("h2", {
                        children: `${animal} — ${breed} — ${location}`
                    })
                ]
            })
        ]
    });
};
var $5ee75e8d88403aa5$export$2e2bcd8739ae039 = $5ee75e8d88403aa5$var$Pet;


const $dc32e450287c4962$var$Results = ({ pets: pets  })=>{
    return /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)("div", {
        className: "grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-4",
        children: !pets.length ? /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)("h1", {
            children: "No Pets Found"
        }) : pets.map((pet)=>{
            return /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)((0, $5ee75e8d88403aa5$export$2e2bcd8739ae039), {
                animal: pet.animal,
                name: pet.name,
                breed: pet.breed,
                images: pet.images,
                location: `${pet.city}, ${pet.state}`,
                id: pet.id
            }, pet.id);
        })
    });
};
var $dc32e450287c4962$export$2e2bcd8739ae039 = $dc32e450287c4962$var$Results;



const $21189d65c3bb9b06$var$localCache = {};
function $21189d65c3bb9b06$export$2e2bcd8739ae039(animal) {
    const [breedList, setBreedList] = (0, $kcqsa$react.useState)([]);
    const [status, setStatus] = (0, $kcqsa$react.useState)("unloaded");
    (0, $kcqsa$react.useEffect)(()=>{
        if (!animal) setBreedList([]);
        else if ($21189d65c3bb9b06$var$localCache[animal]) setBreedList($21189d65c3bb9b06$var$localCache[animal]);
        else requestBreedList();
        async function requestBreedList() {
            setBreedList([]);
            setStatus("loading");
            const res = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
            const json = await res.json();
            $21189d65c3bb9b06$var$localCache[animal] = json.breeds || [];
            setBreedList($21189d65c3bb9b06$var$localCache[animal]);
            setStatus("loaded");
        }
    }, [
        animal
    ]);
    return [
        breedList,
        status
    ];
}



const $a7f7a42d6888860d$var$ThemeContext = /*#__PURE__*/ (0, $kcqsa$react.createContext)([
    "green",
    ()=>{}
]);
var $a7f7a42d6888860d$export$2e2bcd8739ae039 = $a7f7a42d6888860d$var$ThemeContext;


const $4594b102f3775ea4$var$ANIMALS = [
    "bird",
    "cat",
    "dog",
    "rabbit",
    "reptile"
];
const $4594b102f3775ea4$var$SearchParams = ()=>{
    const [location, updateLocation] = (0, $kcqsa$react.useState)("");
    const [animal1, updateAnimal] = (0, $kcqsa$react.useState)("");
    const [breed1, updateBreed] = (0, $kcqsa$react.useState)("");
    const [pets, setPets] = (0, $kcqsa$react.useState)([]);
    const [breeds] = (0, $21189d65c3bb9b06$export$2e2bcd8739ae039)(animal1);
    const [theme, setTheme] = (0, $kcqsa$react.useContext)((0, $a7f7a42d6888860d$export$2e2bcd8739ae039));
    (0, $kcqsa$react.useEffect)(()=>{
        requestPets();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    async function requestPets() {
        const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal1}&location=${location}&breed=${breed1}`);
        const json = await res.json();
        setPets(json.pets);
    }
    return /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsxs)("div", {
        className: "my-0 mx-auto w-11/12",
        children: [
            /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsxs)("form", {
                className: "px-10 py-8 mb-10 rounded-lg bg-gray-200 shadow-lg flex flex-col justify-center items-center",
                onSubmit: (e)=>{
                    e.preventDefault();
                    requestPets();
                },
                children: [
                    /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsxs)("label", {
                        htmlFor: "location",
                        children: [
                            "Location",
                            /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)("input", {
                                id: "location",
                                type: "text",
                                className: "w-60 mb-5 block",
                                value: location,
                                placeholder: "Location",
                                onChange: (e)=>updateLocation(e.target.value)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsxs)("label", {
                        htmlFor: "animal",
                        children: [
                            "Animal",
                            /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsxs)("select", {
                                id: "animal",
                                value: animal1,
                                className: "w-60 mb-5 block",
                                onChange: (e)=>{
                                    updateAnimal(e.target.value);
                                    updateBreed("");
                                },
                                onBlur: (e)=>{
                                    updateAnimal(e.target.value);
                                    updateBreed("");
                                },
                                children: [
                                    /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)("option", {}),
                                    $4594b102f3775ea4$var$ANIMALS.map((animal)=>/*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)("option", {
                                            value: animal,
                                            children: animal
                                        }, animal))
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsxs)("label", {
                        htmlFor: "breed",
                        children: [
                            "Breed",
                            /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsxs)("select", {
                                disabled: !breeds.length,
                                id: "breed",
                                value: breed1,
                                className: "w-60 mb-5 block disabled:opacity-50",
                                onChange: (e)=>updateBreed(e.target.value),
                                onBlur: (e)=>updateBreed(e.target.value),
                                children: [
                                    /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)("option", {}),
                                    breeds.map((breed)=>/*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)("option", {
                                            value: breed,
                                            children: breed
                                        }, breed))
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsxs)("label", {
                        htmlFor: "theme",
                        children: [
                            "Theme",
                            /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsxs)("select", {
                                value: theme,
                                className: "w-60 mb-5 block",
                                onChange: (e)=>setTheme(e.target.value),
                                onBlur: (e)=>setTheme(e.target.value),
                                children: [
                                    /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)("option", {
                                        value: "peru",
                                        children: "Peru"
                                    }),
                                    /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)("option", {
                                        value: "darkblue",
                                        children: "Dark Blue"
                                    }),
                                    /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)("option", {
                                        value: "chartreuse",
                                        children: "Chartreuse"
                                    }),
                                    /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)("option", {
                                        value: "mediumorchid",
                                        children: "Medium Orchid"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)("button", {
                        className: "rounded px-6 py-2 text-white hover:opacity-50 border-none",
                        style: {
                            backgroundColor: theme
                        },
                        children: "Submit"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)((0, $dc32e450287c4962$export$2e2bcd8739ae039), {
                pets: pets
            })
        ]
    });
};
var $4594b102f3775ea4$export$2e2bcd8739ae039 = $4594b102f3775ea4$var$SearchParams;









function $9072c6b9e2cf8596$var$_defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
class $9072c6b9e2cf8596$var$Carousel extends (0, $kcqsa$react.Component) {
    constructor(...args){
        super(...args);
        $9072c6b9e2cf8596$var$_defineProperty(this, "state", {
            active: 0
        });
        $9072c6b9e2cf8596$var$_defineProperty(this, "handleIndexClick", (event)=>{
            this.setState({
                active: +event.target.dataset.index
            });
        });
    }
    render() {
        const { active: active  } = this.state;
        const { images: images  } = this.props;
        return /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsxs)("div", {
            className: "flex flex-wrap justify-around items-center my-2",
            children: [
                /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)("img", {
                    src: images[active],
                    alt: "animal",
                    className: "h-96 w-96 lg:max-h-96 sm:w-lg rounded-2xl"
                }),
                /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)("div", {
                    className: "flex sm:flex-wrap rounded-full mb-4",
                    children: images.map((photo, index)=>/*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)("img", {
                            src: photo,
                            style: {
                                borderRadius: "50%",
                                width: "100px",
                                height: "100px",
                                // display: "inline-block",
                                margin: "15px"
                            },
                            className: index === active ? "border-b-gray-700 opacity-60" : " cursor-pointer inline-block",
                            alt: "animal thumbnail",
                            onClick: this.handleIndexClick,
                            "data-index": index
                        }, photo))
                })
            ]
        });
    }
}
$9072c6b9e2cf8596$var$_defineProperty($9072c6b9e2cf8596$var$Carousel, "defaultProps", {
    images: [
        "http://pets-images.dev-apis.com/pets/none.jpg"
    ]
});
var $9072c6b9e2cf8596$export$2e2bcd8739ae039 = $9072c6b9e2cf8596$var$Carousel;





function $fc662f58862af619$var$_defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
class $fc662f58862af619$var$ErrorBoundary extends (0, $kcqsa$react.Component) {
    constructor(...args){
        super(...args);
        $fc662f58862af619$var$_defineProperty(this, "state", {
            hasError: false,
            redirect: false
        });
    }
    static getDerivedStateFromError() {
        return {
            hasError: true
        };
    }
    componentDidCatch(error, info) {
        console.error("ErrorBoundary caught an error", error, info);
    }
    componentDidUpdate() {
        if (this.state.hasError) setTimeout(()=>this.setState({
                redirect: true
            }), 5000);
    }
    render() {
        if (this.state.redirect) return /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)((0, $kcqsa$reactrouterdom.Navigate), {
            to: "/"
        });
        else if (this.state.hasError) return /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsxs)("h2", {
            children: [
                "There was an error with this listing. ",
                /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)((0, $kcqsa$reactrouterdom.Link), {
                    to: "/",
                    children: "Click here"
                }),
                " ",
                "to back to the home page or wait five seconds."
            ]
        });
        return this.props.children;
    }
}
var $fc662f58862af619$export$2e2bcd8739ae039 = $fc662f58862af619$var$ErrorBoundary;






const $0c957461b24672db$var$Modal = ({ children: children  })=>{
    const elRef = (0, $kcqsa$react.useRef)(null);
    if (!elRef.current) elRef.current = document.createElement("div");
    (0, $kcqsa$react.useEffect)(()=>{
        const modalRoot = document.getElementById("modal");
        modalRoot.appendChild(elRef.current);
        return ()=>modalRoot.removeChild(elRef.current);
    }, []);
    return /*#__PURE__*/ (0, $kcqsa$reactdom.createPortal)(/*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)("div", {
        className: "flex justify-center items-center fixed",
        style: {
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            left: " 0",
            right: "0",
            bottom: "0",
            top: "0",
            zIndex: "10"
        },
        children: children
    }), elRef.current);
};
var $0c957461b24672db$export$2e2bcd8739ae039 = $0c957461b24672db$var$Modal;


function $52731b2a093f9987$var$_defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
class $52731b2a093f9987$var$Details extends (0, $kcqsa$react.Component) {
    constructor(...args){
        super(...args);
        $52731b2a093f9987$var$_defineProperty(this, "state", {
            loading: true,
            showModal: false
        });
        $52731b2a093f9987$var$_defineProperty(this, "toggleModal", ()=>this.setState({
                showModal: !this.state.showModal
            }));
        $52731b2a093f9987$var$_defineProperty(this, "adopt", ()=>window.location = "http://bit.ly/pet-adopt");
    }
    async componentDidMount() {
        const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`);
        const json = await res.json();
        this.setState(Object.assign({
            loading: false
        }, json.pets[0]));
    }
    render() {
        if (this.state.loading) return /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)("h2", {
            children: "loading \u2026 "
        });
        const { animal: animal , breed: breed , city: city , state: state , description: description , name: name , images: images , showModal: showModal  } = this.state;
        return /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsxs)("div", {
            className: "mx-auto max-w-5xl rounded-md p-4 mb-6 overflow-y-hidden",
            style: {
                background: "#faeff0",
                boxShadow: " 0px 0px 12px #aaa, -0px -0px 12px #fff"
            },
            children: [
                /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)((0, $9072c6b9e2cf8596$export$2e2bcd8739ae039), {
                    images: images
                }),
                /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsxs)("div", {
                    className: "my-2 mx-8",
                    children: [
                        /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)("h1", {
                            children: name
                        }),
                        /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)("h2", {
                            children: `${animal} — ${breed} — ${city}, ${state}`
                        }),
                        /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)((0, $a7f7a42d6888860d$export$2e2bcd8739ae039).Consumer, {
                            children: ([theme])=>/*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsxs)("button", {
                                    onClick: this.toggleModal,
                                    className: "rounded px-6 py-2 my-3 text-white hover:opacity-50 border-none",
                                    style: {
                                        backgroundColor: theme
                                    },
                                    children: [
                                        "Adopt ",
                                        name
                                    ]
                                })
                        }),
                        /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)("p", {
                            children: description
                        }),
                        showModal ? /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)((0, $0c957461b24672db$export$2e2bcd8739ae039), {
                            children: /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsxs)("div", {
                                style: {
                                    // background: "white",
                                    maxWidth: "500px",
                                    padding: "15px",
                                    textAlign: "center",
                                    borderRadius: "30px",
                                    background: "#faeff0"
                                },
                                children: [
                                    /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsxs)("h1", {
                                        children: [
                                            "Would you like to adopt ",
                                            name,
                                            "?"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)("a", {
                                                className: "bg-emerald-400 px-6 py-2 rounded hover:opacity-50 border-none inline-block text-white m-4 no-underline",
                                                href: "https://bit.ly/pet-adopt",
                                                children: "Yes"
                                            }),
                                            /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)("button", {
                                                className: " bg-red-700 rounded px-6 py-2 text-white hover:opacity-50 border-none",
                                                onClick: this.toggleModal,
                                                children: "No"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }) : null
                    ]
                })
            ]
        });
    }
}
const $52731b2a093f9987$var$WrappedDetails = ()=>{
    const params = (0, $kcqsa$reactrouterdom.useParams)();
    return /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)((0, $fc662f58862af619$export$2e2bcd8739ae039), {
        children: /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)($52731b2a093f9987$var$Details, {
            params: params
        })
    });
};
var $52731b2a093f9987$export$2e2bcd8739ae039 = $52731b2a093f9987$var$WrappedDetails;



const $dcac37c4d5b5629c$var$App = ()=>{
    const theme = (0, $kcqsa$react.useState)("darkblue");
    return /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)((0, $kcqsa$react.StrictMode), {
        children: /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)((0, $a7f7a42d6888860d$export$2e2bcd8739ae039).Provider, {
            value: theme,
            children: /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsxs)("div", {
                className: "p-0 m-0",
                style: {
                    background: "#81a69b"
                },
                children: [
                    /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)("header", {
                        className: "w-full mb-10 text-center p-7",
                        children: /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsxs)((0, $kcqsa$reactrouterdom.Link), {
                            to: "/",
                            className: "text-6xl text-white",
                            children: [
                                /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)("i", {
                                    className: "fa-solid fa-house"
                                }),
                                " Pet Store!"
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsxs)((0, $kcqsa$reactrouterdom.Routes), {
                        children: [
                            /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)((0, $kcqsa$reactrouterdom.Route), {
                                path: "/details/:id",
                                element: /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)((0, $52731b2a093f9987$export$2e2bcd8739ae039), {})
                            }),
                            /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)((0, $kcqsa$reactrouterdom.Route), {
                                path: "/",
                                element: /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)((0, $4594b102f3775ea4$export$2e2bcd8739ae039), {})
                            })
                        ]
                    })
                ]
            })
        })
    });
};
var $dcac37c4d5b5629c$export$2e2bcd8739ae039 = $dcac37c4d5b5629c$var$App;


(0, $kcqsa$reactdom.hydrate)(/*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)((0, $kcqsa$reactrouterdom.BrowserRouter), {
    children: /*#__PURE__*/ (0, $kcqsa$reactjsxruntime.jsx)((0, $dcac37c4d5b5629c$export$2e2bcd8739ae039), {})
}), document.getElementById("root"));


//# sourceMappingURL=.ClientApp.js.map
