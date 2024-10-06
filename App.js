import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => (
    <div className="header">
        <div className="logo">
            <img className="logo-img" alt="Food Delivery App Logo" src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY=" />
        </div>
        <div className="nav-bar">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>
                    <img className="cart-logo" alt="Cart Logo" src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/orange_shoppictbasket_1484336514.png" />
                </li>
            </ul>
        </div>
    </div>
);

const ResturantCart = (props) => {

    const {resData} = props;
    
    const {cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo} = resData?.info;

    return(
        <div className="gokul-veg">
            <div className="res-img">
                <img className="res-biryani-img" alt="Biryani Image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto w_660/" + cloudinaryImageId } />
            </div>
            <div className="res-name">
                <h2>{name}</h2>
                <h3>{cuisines.join(", ")}</h3>
            </div>
            <div className="res-details">
                <h4>{avgRating} Stars</h4>
                <h4>{sla.deliveryTime} mins</h4>
                <h4>{costForTwo}</h4>
            </div>
        </div>
    );
};

const resList = [
                {
                  "info": {
                    "id": "804146",
                    "name": "Shailesh Fast Food",
                    "cloudinaryImageId": "ec22ec453eaa9f54fb97af5d25898f77",
                    "locality": "Quepem",
                    "areaName": "Curchorem",
                    "costForTwo": "₹500 for two",
                    "cuisines": [
                      "Biryani",
                      "Indian",
                      "Chinese"
                    ],
                    "avgRating": 4.4,
                    "parentId": "480047",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "139",
                    "sla": {
                      "deliveryTime": 57,
                      "lastMileTravel": 11,
                      "serviceability": "SERVICEABLE",
                      "slaString": "55-60 mins",
                      "lastMileTravelString": "11.0 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2024-10-05 15:00:00",
                      "opened": true
                    },
                    "badges": {
                      
                    },
                    "isOpen": true,
                    "aggregatedDiscountInfoV2": {
                      
                    },
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "orderabilityCommunication": {
                      "title": {
                        
                      },
                      "subTitle": {
                        
                      },
                      "message": {
                        
                      },
                      "customIcon": {
                        
                      }
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "maxDuration": "3000",
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "--"
                      }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-fac0a6b6-e5a6-4c79-a0c4-ed7cc2aef2e4"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/menu/804146",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                  },
                  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_BCP_byName"
                },
                {
                  "info": {
                    "id": "803726",
                    "name": "Saanvi Fast Food",
                    "cloudinaryImageId": "30038d2d2f2e3dbafef602a25ba3496d",
                    "locality": "Hoodi",
                    "areaName": "Goa_Sou_Margao",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                      "Indian",
                      "Chinese"
                    ],
                    "avgRating": 4.2,
                    "parentId": "173881",
                    "avgRatingString": "4.2",
                    "totalRatingsString": "62",
                    "sla": {
                      "deliveryTime": 52,
                      "lastMileTravel": 11,
                      "serviceability": "SERVICEABLE",
                      "slaString": "50-55 mins",
                      "lastMileTravelString": "11.0 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2024-10-05 15:00:00",
                      "opened": true
                    },
                    "badges": {
                      
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "10% OFF",
                      "subHeader": "ABOVE ₹1500",
                      "discountTag": "FLAT DEAL"
                    },
                    "orderabilityCommunication": {
                      "title": {
                        
                      },
                      "subTitle": {
                        
                      },
                      "message": {
                        
                      },
                      "customIcon": {
                        
                      }
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "maxDuration": "3000",
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "--"
                      }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-fac0a6b6-e5a6-4c79-a0c4-ed7cc2aef2e4"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/menu/803726",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                  },
                  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_BCP_byName"
                },
                {
                  "info": {
                    "id": "871483",
                    "name": "TEAMAX CAFE",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/16/333f53c6-ccba-4013-b092-4005aa010f68_871483.jpg",
                    "locality": "Sarvodaya High School Rd",
                    "areaName": "Goa_Sou_Margao",
                    "costForTwo": "₹600 for two",
                    "cuisines": [
                      "Chinese",
                      "Indian",
                      "Beverages",
                      "Pizzas",
                      "Burgers"
                    ],
                    "avgRating": 3.9,
                    "parentId": "256956",
                    "avgRatingString": "3.9",
                    "totalRatingsString": "56",
                    "sla": {
                      "deliveryTime": 52,
                      "lastMileTravel": 11.7,
                      "serviceability": "SERVICEABLE",
                      "slaString": "50-55 mins",
                      "lastMileTravelString": "11.7 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2024-10-05 21:45:00",
                      "opened": true
                    },
                    "badges": {
                      
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "10% OFF",
                      "subHeader": "UPTO ₹80"
                    },
                    "orderabilityCommunication": {
                      "title": {
                        
                      },
                      "subTitle": {
                        
                      },
                      "message": {
                        
                      },
                      "customIcon": {
                        
                      }
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "maxDuration": "3000",
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "isNewlyOnboarded": true,
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "--"
                      }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-fac0a6b6-e5a6-4c79-a0c4-ed7cc2aef2e4"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/menu/871483",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                  },
                  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_BCP_byName"
                },
                {
                  "info": {
                    "id": "822756",
                    "name": "Laziz Pizza",
                    "cloudinaryImageId": "97a5dc106839dc84ae7942195d814385",
                    "locality": "Kakoda",
                    "areaName": "Curchorem",
                    "costForTwo": "₹700 for two",
                    "cuisines": [
                      "Pizzas",
                      "Burgers",
                      "Tandoor"
                    ],
                    "avgRating": 4.1,
                    "parentId": "2299",
                    "avgRatingString": "4.1",
                    "totalRatingsString": "212",
                    "sla": {
                      "deliveryTime": 66,
                      "lastMileTravel": 11.7,
                      "serviceability": "SERVICEABLE",
                      "slaString": "65-70 mins",
                      "lastMileTravelString": "11.7 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2024-10-05 23:30:00",
                      "opened": true
                    },
                    "badges": {
                      
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "₹50 OFF",
                      "subHeader": "ABOVE ₹499",
                      "discountTag": "FLAT DEAL"
                    },
                    "orderabilityCommunication": {
                      "title": {
                        
                      },
                      "subTitle": {
                        
                      },
                      "message": {
                        
                      },
                      "customIcon": {
                        
                      }
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "maxDuration": "3000",
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "--"
                      }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-fac0a6b6-e5a6-4c79-a0c4-ed7cc2aef2e4"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/menu/822756",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                  },
                  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_BCP_byName"
                },
                {
                  "info": {
                    "id": "803731",
                    "name": "Flora Bar And Restaurant",
                    "cloudinaryImageId": "b14cd9fc40129fcfb97aa7e621719d07",
                    "locality": "Samarth Nagar",
                    "areaName": "Curchorem",
                    "costForTwo": "₹499 for two",
                    "cuisines": [
                      "Goan",
                      "Chinese",
                      "Biryani",
                      "Tandoor",
                      "Kebabs",
                      "Salads"
                    ],
                    "avgRating": 4.2,
                    "parentId": "479759",
                    "avgRatingString": "4.2",
                    "totalRatingsString": "80",
                    "sla": {
                      "deliveryTime": 54,
                      "lastMileTravel": 11.9,
                      "serviceability": "SERVICEABLE",
                      "slaString": "50-55 mins",
                      "lastMileTravelString": "11.9 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2024-10-05 15:30:00",
                      "opened": true
                    },
                    "badges": {
                      
                    },
                    "isOpen": true,
                    "aggregatedDiscountInfoV2": {
                      
                    },
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "orderabilityCommunication": {
                      "title": {
                        
                      },
                      "subTitle": {
                        
                      },
                      "message": {
                        
                      },
                      "customIcon": {
                        
                      }
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "maxDuration": "3000",
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "--"
                      }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-fac0a6b6-e5a6-4c79-a0c4-ed7cc2aef2e4"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/menu/803731",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                  },
                  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_BCP_byName"
                }
              ]

const Body = () => (
    <div className="body">
        <div className="search">
            <h1>Search</h1>
        </div>
        <div className="food-carts">
            {
                resList.map((resturant) => (
                <ResturantCart key={resturant.info.id} resData={resturant} />
                ))
            }
        </div>
    </div>
);

const AppLayout = () => (
    <div className="app-layout">
        <Header />
        <Body />
    </div>
);
 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);