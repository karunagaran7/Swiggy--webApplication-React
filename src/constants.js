
export const IMG_CDN_URL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
export const RESTAURANT_URL = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9257861&lng=80.1178836&page_type=DESKTOP_WEB_LISTING'
 export const MENU_URL = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9249308&lng=80.1000026&restaurantId="

export const restaurants = [
  {
    "statusCode": 0,
    "data": {
      "statusMessage": "done successfully",
      "cards": [
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "18696",
                "name": "Namma Veedu Vasanta Bhavan",
                "city": "Chennai",
                "slugs": {
                  "restaurant": "namma-veedu-vasanta-bhavan-velachery-main-road-medavakkam",
                  "city": "chennai"
                },
                "uniqueId": "e1e1805d-3559-4dc0-b498-a6db42db2060",
                "cloudinaryImageId": "gtjgskqpdpchdifhh0vy",
                "locality": "Velachery Main Road",
                "areaName": "Medavakkam",
                "costForTwo": "15000",
                "costForTwoMessage": "₹150 for two",
                "cuisines": [
                  "South Indian"
                ],
                "avgRating": 4.2,
                "veg": true,
                "feeDetails": {
                  "restaurantId": "18696",
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 8800
                    },
                    {
                      "name": "time"
                    },
                    {
                      "name": "special"
                    }
                  ],
                  "totalFee": 8800,
                  "icon": "v1648208530/surgecreatives/info",
                  "message": "Far (9.3 kms) | Additional delivery fee will apply"
                },
                "parentId": "1263",
                "avgRatingString": "4.2",
                "totalRatingsString": "1K+ ratings",
                "sla": {
                  "restaurantId": "18696",
                  "deliveryTime": 41,
                  "minDeliveryTime": 41,
                  "maxDeliveryTime": 41,
                  "lastMileTravel": 9.3,
                  "serviceability": "SERVICEABLE",
                  "stressFactor": 0.7803585,
                  "rainMode": "RAIN_MODE_NONE",
                  "longDistance": "LONG_DISTANCE_IT_IS_LONG_DISTANCE",
                  "zoneId": 190,
                  "slaString": "41 MINS",
                  "lastMileTravelString": "9.3 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2023-03-23 23:45:00",
                  "visibility": true,
                  "opened": true,
                  "restaurantClosedMeta": {}
                },
                "aggregatedDiscountInfo": {
                  "header": "FLAT100 off",
                  "shortDescriptionList": [
                    {
                      "meta": "FLAT100 off | Use FLATDEAL",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    },
                    {
                      "meta": "15% off | Use PARTY",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "FLAT100 off | Use FLATDEAL",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    },
                    {
                      "meta": "15% off | Use code PARTY",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "visible": true
                },
                "badges": {},
                "slugString": "namma-veedu-vasanta-bhavan-velachery-main-road-medavakkam",
                "multiOutlet": true,
                "isOpen": true,
                "labels": [
                  {
                    "title": "Timings",
                    "message": "null"
                  },
                  {
                    "title": "Address",
                    "message": "5/521, Velachery Main Road, Medavakkam, Chennai"
                  },
                  {
                    "title": "Cuisines",
                    "message": "South Indian"
                  }
                ],
                "logo": "MM/NVVB",
                "totalRatings": 1000,
                "aggregatedDiscountInfoV2": {
                  "header": "FLAT100 off",
                  "shortDescriptionList": [
                    {
                      "meta": "FLAT100 off | Use FLATDEAL",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    },
                    {
                      "meta": "15% off | Use PARTY",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "FLAT100 off | Use FLATDEAL",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    },
                    {
                      "meta": "15% off | Use code PARTY",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "couponDetailsCta": "View coupon details"
                },
                "type": "F",
                "nudgeBanners": [
                  {
                    "minValue": 560,
                    "maxValue": 800,
                    "priority": 2,
                    "couponCode": "PARTY",
                    "discountInfo": {
                      "discountType": "Percentage",
                      "value": 15
                    },
                    "lockedMessage": "Add items worth ₹<amount> to unlock flat 15% off | Code PARTY",
                    "unlockedMessage": "PARTY Coupon Unlocked! Use it to save flat 15% off",
                    "logoCtx": {}
                  }
                ],
                "headerBanner": {
                  "url": "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/18696"
                },
                "expectationNotifiers": [
                  {
                    "text": "Far (9.3 kms) | Additional delivery fee will apply",
                    "icon": {
                      "imageId": "v1648208530/surgecreatives/info"
                    },
                    "popup": {
                      "cta": {}
                    },
                    "type": "DISTANCE_FEE_FOOD_LM",
                    "enrichedText": "<b>Far (9.3 kms)</b> | Additional delivery fee will apply",
                    "halfCardPopup": {
                      "halfCardPopupHeader": {}
                    }
                  }
                ],
                "generalPurposeInfoListV2": [
                  {
                    "cta": {
                      "info": {
                        "recordings": {}
                      },
                      "linkCta": {}
                    }
                  }
                ],
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {},
                  "subTitle": {},
                  "message": {},
                  "customIcon": {}
                },
                "hasBestsellerItems": true,
                "hasGuiltfreeItems": true,
                "cartOrderabilityNudgeBanner": {
                  "parameters": {},
                  "presentation": {}
                },
                "areaPostalCode": "0",
                "latLong": "12.920267321705012,80.1844946667552"
              },
              "analytics": {}
            },
            "relevance": {
              "type": "RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD",
              "sectionId": "POP_UP_CROUTON_MENU"
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
              "layout": {
                "rows": 1,
                "columns": 5,
                "horizontalScrollEnabled": true,
                "itemSpacing": 12,
                "lineSpacing": 10,
                "widgetPadding": {},
                "containerStyle": {
                  "containerPadding": {
                    "left": 10,
                    "right": 10,
                    "bottom": 16
                  }
                },
                "scrollBar": {}
              },
              "id": "offerCollectionWidget_UX4",
              "gridElements": {
                "infoWithStyle": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                  "offers": [
                    {
                      "info": {
                        "header": "FLAT ₹100 OFF",
                        "offerTag": "FLAT DEAL",
                        "offerTagColor": "#E46D47",
                        "offerIds": [
                          "bfa7ea3e-246c-4b05-9689-338210e4561a"
                        ],
                        "expiryTime": "1970-01-01T00:00:00Z",
                        "couponCode": "USE FLATDEAL",
                        "description": "ABOVE ₹499",
                        "offerType": "offers",
                        "restId": "18696",
                        "offerLogo": "offers/generic",
                        "descriptionTextColor": "#7302060C"
                      },
                      "cta": {
                        "type": "OFFER_HALF_CARD"
                      }
                    },
                    {
                      "info": {
                        "header": "FLAT 15% OFF",
                        "offerTag": "FLAT DEAL",
                        "offerTagColor": "#E46D47",
                        "offerIds": [
                          "b0febfaf-d3d3-472c-9be2-b3b100ed56bc"
                        ],
                        "expiryTime": "1970-01-01T00:00:00Z",
                        "couponCode": "USE PARTY",
                        "description": "ABOVE ₹800",
                        "offerType": "offers",
                        "restId": "18696",
                        "offerLogo": "offers/generic",
                        "descriptionTextColor": "#7302060C"
                      },
                      "cta": {
                        "type": "OFFER_HALF_CARD"
                      }
                    },
                    {
                      "info": {
                        "header": "30% OFF UPTO ₹150",
                        "offerTagColor": "#E46D47",
                        "logoBottom": "rng/md/ads/production/32b9f8a87957f8c1ca369622f6a1ca77",
                        "offerIds": [
                          "1bf4c489-544b-4858-aa69-5837cbd88915"
                        ],
                        "expiryTime": "1970-01-01T00:00:00Z",
                        "couponCode": "USE AXIS30",
                        "description": "ABOVE ₹200",
                        "offerType": "offers",
                        "restId": "18696",
                        "offerLogo": "rng/md/ads/production/32b9f8a87957f8c1ca369622f6a1ca77",
                        "descriptionTextColor": "#7302060C"
                      },
                      "cta": {
                        "type": "OFFER_HALF_CARD"
                      }
                    },
                    {
                      "info": {
                        "header": "20% OFF UPTO ₹125",
                        "offerTagColor": "#E46D47",
                        "logoBottom": "rng/md/ads/production/4abdba6754dfedb04324150e316a4004",
                        "offerIds": [
                          "7444068e-8d79-4aff-8ca8-881faa66af54"
                        ],
                        "expiryTime": "1970-01-01T00:00:00Z",
                        "couponCode": "USE KOTAK125",
                        "description": "ABOVE ₹500",
                        "offerType": "offers",
                        "restId": "18696",
                        "offerLogo": "rng/md/ads/production/4abdba6754dfedb04324150e316a4004",
                        "descriptionTextColor": "#7302060C"
                      },
                      "cta": {
                        "type": "OFFER_HALF_CARD"
                      }
                    },
                    {
                      "info": {
                        "header": "FLAT ₹100 OFF",
                        "offerTagColor": "#E46D47",
                        "logoBottom": "rng/md/ads/production/3a937ddacd3adb70c4543c4895213123",
                        "offerIds": [
                          "f885879b-2148-4840-a1d1-f3610b5c809d"
                        ],
                        "expiryTime": "1970-01-01T00:00:00Z",
                        "couponCode": "USE AUDC100",
                        "description": "ABOVE ₹299",
                        "offerType": "offers",
                        "restId": "18696",
                        "offerLogo": "rng/md/ads/production/3a937ddacd3adb70c4543c4895213123",
                        "descriptionTextColor": "#7302060C"
                      },
                      "cta": {
                        "type": "OFFER_HALF_CARD"
                      }
                    }
                  ]
                }
              }
            }
          }
        },
        {
          "groupedCard": {
            "cardGroupMap": {
              "REGULAR": {
                "cards": [
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                        "isPureVeg": true,
                        "badges": {},
                        "vegOnlyDetails": {
                          "imageId": "AutoVegOnly_qkjowj",
                          "title": "Showing only vegetarian options.",
                          "description": "Tap on the VEG ONLY button to turn off the setting"
                        }
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Recommended",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090109",
                                "name": "Mini Podi Idly [14 Pcs]",
                                "category": "Tiffin",
                                "description": "Idlies are steamed cut to cubes and well mixed with idli podi and ghee or sesame oil to make Mini Podi Idly",
                                "imageId": "vwot89roivcpb0ygwir0",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 12000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "134 ratings",
                                    "ratingCountV2": "134"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090110",
                                "name": "Nvvb Special - Sodhi Idly",
                                "category": "Tiffin",
                                "description": "Sodhi is the southern version of a vegetable stew where addition of lentils and drumstick makes this sodhi a sublime one",
                                "imageId": "l2afobgb1gs8t5vqxarr",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 13000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "89 ratings",
                                    "ratingCountV2": "89"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090111",
                                "name": "Podi Idly [2 Pcs]",
                                "category": "Tiffin",
                                "description": "Idli podi is condiment of spiced dry powder made with lentils and red chilies, a mixture of idli podi (milagai podi) and sesame oil or ghee is mixed and then smeared on the idlis.",
                                "imageId": "vniwy8pjuyzosplrhuuh",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 12000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.8",
                                    "ratingCount": "23 ratings",
                                    "ratingCountV2": "23"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090112",
                                "name": "Poori With Potato Masala [3 Pcs]",
                                "category": "Tiffin",
                                "description": "South Indian style potato masala made with boiled, crumbled potatoes in mild, flavorful gravy. It is served with hot Poori which is a deep-fried bread made from unleavened whole-wheat flour",
                                "imageId": "pakjniomzqnw04ktrx78",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 9500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  "text": "Bestseller",
                                  "textColor": "#ffffff",
                                  "topBackgroundColor": "#d53d4c",
                                  "bottomBackgroundColor": "#b02331"
                                },
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "isBestseller": true,
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "560 ratings",
                                    "ratingCountV2": "560"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090113",
                                "name": "Sambar Idly [2 Pcs]",
                                "category": "Tiffin",
                                "description": "Hearty, satisfying, comforting and a healthy meal of soft fluffy idlis served with savory, spiced and lightly tangy sambar",
                                "imageId": "pt1zjujrkdsnd7tivtby",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "39 ratings",
                                    "ratingCountV2": "39"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090114",
                                "name": "Medhu Vadai [1 Pc]",
                                "category": "Vadai",
                                "description": "South Indian cuisine made in a doughnut shape, with a crispy exterior and soft interior.",
                                "imageId": "fkvjekmnyfcyap5ydj7p",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 5000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "368 ratings",
                                    "ratingCountV2": "368"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090115",
                                "name": "Sambar Vadai [1 Pc]",
                                "category": "Vadai",
                                "description": "South Indian recipe prepared by combining the spiced and flavoured sambar with medu vada",
                                "imageId": "awbi53cmijrppovjmvna",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 8500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "71 ratings",
                                    "ratingCountV2": "71"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090116",
                                "name": "Thayir Vadai [1 Pc]",
                                "category": "Vadai",
                                "description": "South Indian snack, where Vadai soaked in the spicy curd mixture garnished with green coriander leaves and crispy boondis",
                                "imageId": "j0c2yebkkmxrwlg4h9c7",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 8500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "81 ratings",
                                    "ratingCountV2": "81"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090117",
                                "name": "Butter Dosai",
                                "category": "Dosa",
                                "description": "Butter Dosa is just one of the many varieties prevalent in the South Indian cuisine; it has a thick base yet is thin and crispy with the butter",
                                "imageId": "jvpb3lclajccdbu87muj",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 17500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.8",
                                    "ratingCount": "10 ratings",
                                    "ratingCountV2": "10"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090120",
                                "name": "Ghee Roast",
                                "category": "Dosa",
                                "description": "A classic South Indian Breakfast Tiffin that is made with fresh homemade idli dosa batter along with ghee.",
                                "imageId": "z3yfesfj3yufxjf7ouyo",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 17000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "94 ratings",
                                    "ratingCountV2": "94"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090121",
                                "name": "Masala Dosai",
                                "category": "Dosa",
                                "description": "Variation of the popular South Indian dosa made from rice, spicy potatoes, served with Chutney, Sambar",
                                "imageId": "gjpfgfzulmfetcfythcl",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 11000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  "text": "Bestseller",
                                  "textColor": "#ffffff",
                                  "topBackgroundColor": "#d53d4c",
                                  "bottomBackgroundColor": "#b02331"
                                },
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "isBestseller": true,
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "180 ratings",
                                    "ratingCountV2": "180"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090122",
                                "name": "Mysore Masala Dosai",
                                "category": "Dosa",
                                "description": "Appetizing crispy fried Dosa with chilli and garlic chutney spread on the inside and stuffed with a potato bhaji and served with a south indian coconut chutney.",
                                "imageId": "pdzgv4ootjotfrrmcqt2",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 13500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "87 ratings",
                                    "ratingCountV2": "87"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090123",
                                "name": "Onion Dosai",
                                "category": "Dosa",
                                "description": "Recipe with finely chopped onion topping over the dosa which gives the plain dosa a very yummy and unique flavor",
                                "imageId": "tc7ppq7ltynngdenq9th",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 12500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.7",
                                    "ratingCount": "26 ratings",
                                    "ratingCountV2": "26"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090124",
                                "name": "Onion Masala Dosai",
                                "category": "Dosa",
                                "description": "Fermented crepe with stuffing of mashed potato and finely chopped onion topping over the dosa Serve up with piping hot sambar and chutney!",
                                "imageId": "zc4ndmw6z36h4j1gnbcs",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 13500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.7",
                                    "ratingCount": "7 ratings",
                                    "ratingCountV2": "7"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090126",
                                "name": "Podi Dosai",
                                "category": "Dosa",
                                "description": "Podi Dosa is a spicy and delicious dosa recipe with idli milagai podi.",
                                "imageId": "pcs3qq2dmmme7kzsy9dk",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 11500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "47 ratings",
                                    "ratingCountV2": "47"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090131",
                                "name": "Onion Rava Roast",
                                "category": "Rava Dosa",
                                "description": "A crisp fried dosa made of all purpose flour, rice and semolina batter topped with finely chopped onions, ginger, chilies and corriander mainly served with chutneys and sambar.",
                                "imageId": "emghhpu6qbyfrk6hgfbf",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 12000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.6",
                                    "ratingCount": "75 ratings",
                                    "ratingCountV2": "75"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090132",
                                "name": "Podi Rava Dosai",
                                "category": "Rava Dosa",
                                "description": "A spicy South Indian delicacy, made using idli podi along with rava dosai",
                                "imageId": "bka1ufon4ex3szmicnvp",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 12000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.0",
                                    "ratingCount": "11 ratings",
                                    "ratingCountV2": "11"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090133",
                                "name": "Rava Dosai",
                                "category": "Rava Dosa",
                                "description": "South Indian breakfast, thin crisp fried crepe made with semolina, rice flour, spices and ghee",
                                "imageId": "gvv1hf3zkncflrlcckdk",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 11000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  "text": "Bestseller",
                                  "textColor": "#ffffff",
                                  "topBackgroundColor": "#d53d4c",
                                  "bottomBackgroundColor": "#b02331"
                                },
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "isBestseller": true,
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "145 ratings",
                                    "ratingCountV2": "145"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090135",
                                "name": "Rava Masala Dosai",
                                "category": "Rava Dosa",
                                "description": "A Palatable dosa made of mildly spiced semolina batter and garnished well, served with sambar, tomato and coconut chutneys.",
                                "imageId": "zv4jtgx3apsguwccfouo",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 12000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "15 ratings",
                                    "ratingCountV2": "15"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "39703251",
                                "name": "Podi Onion Uthappam",
                                "category": "Utthapam",
                                "description": "A variation to Onion Uttapam with Sprinkle top onions, podi, curry leaves.",
                                "imageId": "gxxzu1it1q6lfnlmibbf",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 12500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "30 ratings",
                                    "ratingCountV2": "30"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090136",
                                "name": "Kal Dosai [2 Pcs]",
                                "category": "Utthapam",
                                "description": "One the popular soft and spongy dosa variety in TamilNadu, made on a dosa griddle slightly thicker than regular dosa",
                                "imageId": "e6vpasmyf1bu3xunv3gl",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 11000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "114 ratings",
                                    "ratingCountV2": "114"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090137",
                                "name": "Mixed Uthappam",
                                "category": "Utthapam",
                                "description": "A crisp and spongy breakfast south indian delight made out of finely chop the carrot, onion, tomato, green chillies, capsicum and coriander leaves along with rice flour batter",
                                "imageId": "vhe7o0mhp2lostayfjly",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 14000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.8",
                                    "ratingCount": "15 ratings",
                                    "ratingCountV2": "15"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090140",
                                "name": "Onion Uthappam",
                                "category": "Utthapam",
                                "description": "A delectable thickish south Indian fried dosa made of rice flour batter with a generous topping of thinly sliced onions, green chilies, corriander and ground whole spices.",
                                "imageId": "uu2awgaeebdnbhedue3n",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 11500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "94 ratings",
                                    "ratingCountV2": "94"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090141",
                                "name": "Podi Uthappam",
                                "category": "Utthapam",
                                "description": "Spicy, thick soft fluffy pancakes made with condiment of idli or dosa batter, ghee/oil and idli podi",
                                "imageId": "l15jwdsphmgketyfao43",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 11500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "1.8",
                                    "ratingCount": "4 ratings",
                                    "ratingCountV2": "4"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090143",
                                "name": "Uthappam",
                                "category": "Utthapam",
                                "description": "South Indian Breakfast pancakes made with lentils, rice, onions, herbs & spices",
                                "imageId": "dqagurh0fvvitriiuvon",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "7 ratings",
                                    "ratingCountV2": "7"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "32203242",
                                "name": "Pepper Soup",
                                "category": "Soups",
                                "description": "A spicy soup that has a light, watery texture",
                                "imageId": "smd8th7pcdwox8zpv5je",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.6",
                                    "ratingCount": "18 ratings",
                                    "ratingCountV2": "18"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "32203243",
                                "name": "Mushroom Soup",
                                "category": "Soups",
                                "description": "A deliciously creamy soup with tender bites of mushroom pieces",
                                "imageId": "tyr147nlppqlejodvaal",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.3",
                                    "ratingCount": "12 ratings",
                                    "ratingCountV2": "12"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090152",
                                "name": "Cream Of Tomato Soup",
                                "category": "Soups",
                                "description": "A vegan recipe, combination of tomato puree and other spices",
                                "imageId": "ajozptxleaaoi0nyrjkd",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.8",
                                    "ratingCount": "22 ratings",
                                    "ratingCountV2": "22"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090153",
                                "name": "Veg. Clear Soup",
                                "category": "Soups",
                                "description": "An enchanting Vegetable soup prepared using vegetables, leafy greens, mushrooms, and roots as main ingredients",
                                "imageId": "d3d78japvnnbvowlmr2v",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.0",
                                    "ratingCount": "7 ratings",
                                    "ratingCountV2": "7"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090154",
                                "name": "Veg. Corn Soup",
                                "category": "Soups",
                                "description": "A mouth-watering soup made out of mixed veggies, sweet corn kernels & pepper",
                                "imageId": "hk1olxmms6m25gskazba",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090156",
                                "name": "Veg. Manchow Soup",
                                "category": "Soups",
                                "description": "An Indian Chinese cuisine prepared with various vegetables, scallions,thickened with broth and corn flour, and flavored with generous doses of soy sauce, salt, garlic, chili peppers and, predominantly, ginger",
                                "imageId": "mzdfvry2hcck5jzjyozt",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.8",
                                    "ratingCount": "5 ratings",
                                    "ratingCountV2": "5"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088574",
                                "name": "Mushroom 65",
                                "category": "Indian Starters",
                                "description": "A Scruptious fried starter made of chopped button mushrooms coated with a spicy batter and garnished with sauteed chilies, onions and curry leaves.",
                                "imageId": "udsafqoo1kylubd3s7li",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 27000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.9",
                                    "ratingCount": "7 ratings",
                                    "ratingCountV2": "7"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088575",
                                "name": "Paneer 65",
                                "category": "Indian Starters",
                                "description": "Stir- fried appetizer made of cottage cheese cubes coated with spiced Corn starch and all purpose flour and served with sauteed onions and curry leaves.",
                                "imageId": "jtkjanawh2ibcczpv6es",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 29000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.6",
                                    "ratingCount": "10 ratings",
                                    "ratingCountV2": "10"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5859094",
                                "name": "Paneer Tikka [5 Pcs]",
                                "category": "Indian Starters",
                                "description": "A delicious tandoori snack where paneer arranged  after marinated in a spiced yogurt-based marinade",
                                "imageId": "j4zgyy1x2wpqqkjpblqj",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 29000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.8",
                                    "ratingCount": "5 ratings",
                                    "ratingCountV2": "5"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5859110",
                                "name": "Mushroom Tikka",
                                "category": "Indian Starters",
                                "description": "Indian appetizer made by marinating & grilling mushrooms with spices, herbs and yogurt",
                                "imageId": "o2sfmp1cimzg1w8fmoca",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 29000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090158",
                                "name": "Paneer Pudhina Tikka [5 Pcs]",
                                "category": "Indian Starters",
                                "description": "A mouthwatering starter recipe with a delectable mint flavour on Grilled Cottage of cheese cubes",
                                "imageId": "u9oi1mwhjuwf2zdudqzw",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 30500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "45420085",
                                "name": "Mushroom Manchurian Dry",
                                "category": "Chinese Starters",
                                "description": "Indo-Chinese appetizer made by tossing crisp fried mushrooms in a delicious sweet, spicy and umami tasting manchurian sauce",
                                "imageId": "zrxgnjodtzqps57pbuzi",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 29000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.8",
                                    "ratingCount": "4 ratings",
                                    "ratingCountV2": "4"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090163",
                                "name": "Mushroom Pepper Dry",
                                "category": "Chinese Starters",
                                "description": "Flavoured starter made with sliced mushroom and pepper powder",
                                "imageId": "aihhys3dtjaxymqnrfb0",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 29000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088607",
                                "name": "Kashmiri Pulao",
                                "category": "Biryani & Pulaos",
                                "description": "Delicious variant of rice pulao from Kashmiri cuisine made with nuts, dried fruits, saffron and fresh fruits",
                                "imageId": "lebuebs5eyrqrgrzxjqe",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 28000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "32201995",
                                "name": "Gobi Cashew Pulao",
                                "category": "Biryani & Pulaos",
                                "description": "Indian rice preparation where rice is cooked with ghee, cumin seeds, cloves and later mixed with crispy fried Gobi",
                                "imageId": "mkopamdy4s0r75qi6cvj",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 28000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088622",
                                "name": "Mushroom Fried Rice",
                                "category": "Chinese Rice & Noodles",
                                "description": "A classic Indo-Chinese dish made using rice, mushrooms, and Chinese sauces",
                                "imageId": "g9ykeoqauvd36ol6ex3n",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 27000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.7",
                                    "ratingCount": "17 ratings",
                                    "ratingCountV2": "17"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088623",
                                "name": "Paneer Fried Rice",
                                "category": "Chinese Rice & Noodles",
                                "description": "A sensational fusion dish with a chinese twist made with cooked rice, marinated cottage cheese, assorted diced vegetables and spices served hot with tomato ketchup.",
                                "imageId": "yiu1ryxfguxuendgc2sp",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 28000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "41 ratings",
                                    "ratingCountV2": "41"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088624",
                                "name": "Veg Noodles",
                                "category": "Chinese Rice & Noodles",
                                "description": "Stir-fried noodles made with loads of mix vegetables",
                                "imageId": "bo3ubyvjnll43mjnoyni",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 25000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.8",
                                    "ratingCount": "24 ratings",
                                    "ratingCountV2": "24"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088625",
                                "name": "Mushroom Noodles",
                                "category": "Chinese Rice & Noodles",
                                "description": "A vegan recipe, with combination of noodles, Asian sauce, and sauteed mushrooms",
                                "imageId": "gwee64hf40eybfkp2oia",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 27000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "6 ratings",
                                    "ratingCountV2": "6"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088627",
                                "name": "Paneer Noodles",
                                "category": "Chinese Rice & Noodles",
                                "description": "Indian-chinese appetizer,takes the spicy chilli paneer and turns it into a delicious spicy noodle",
                                "imageId": "lotlajhxt17ilhary4w1",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 28000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "6 ratings",
                                    "ratingCountV2": "6"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090174",
                                "name": "Mixed Fried Rice - Pgm",
                                "category": "Chinese Rice & Noodles",
                                "description": "(Paneer, Gobi, Mushroom).a delectable delight receipe made using mixed vegetables, cooked rice and crispy fried gobi, paneer and mushroom",
                                "imageId": "aikevlu0xlembabfqebe",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 29000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.6",
                                    "ratingCount": "7 ratings",
                                    "ratingCountV2": "7"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090175",
                                "name": "Mixed Veg. Noodles - Pgm",
                                "category": "Chinese Rice & Noodles",
                                "description": "(Paneer, Gobi, Mushroom).A Succulent noodles with combination of stir fried paneer, gobi and mushroom, with flavourful sauce.",
                                "imageId": "a2hwaszyv11chwldthpf",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 29000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.8",
                                    "ratingCount": "4 ratings",
                                    "ratingCountV2": "4"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090176",
                                "name": "Veg. Fried Rice",
                                "category": "Chinese Rice & Noodles",
                                "description": "Asian dish made by stir frying cooked rice in a wok with vegetables, soya sauce",
                                "imageId": "c84hzfohadp4jmjjvook",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 25000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "11 ratings",
                                    "ratingCountV2": "11"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088609",
                                "name": "Plain Roti",
                                "category": "Breads",
                                "description": "Indian flatbread which is made with only 2 ingredients- whole wheat flour (atta) and water",
                                "imageId": "c2u3nt7ukxlrzk5ctzkn",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 6500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "13 ratings",
                                    "ratingCountV2": "13"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088612",
                                "name": "Butter Naan",
                                "category": "Breads",
                                "description": "An Indian flatbread made up of all-purpose flour, oil, and milk",
                                "imageId": "rgo8re0bawh2oenc0mp5",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 8000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "27 ratings",
                                    "ratingCountV2": "27"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088613",
                                "name": "Plain Kulcha",
                                "category": "Breads",
                                "description": "An Indian leavened flatbread with leavening agents to make it soft and give it's texture",
                                "imageId": "js5y3jkkymccw4i6vmbm",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 7500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088615",
                                "name": "Paneer Paratha",
                                "category": "Breads",
                                "description": "North Indian flatbread made with whole wheat flour dough and stuffed with savory, spiced, grated paneer",
                                "imageId": "lbwbeopzrsuvodajuvol",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 12500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.8",
                                    "ratingCount": "5 ratings",
                                    "ratingCountV2": "5"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088617",
                                "name": "Aloo Paratha",
                                "category": "Breads",
                                "description": "Indian flatbreads stuffed with a delicious spiced potato mixture",
                                "imageId": "tvdcze5fhfilskfiexf7",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "21 ratings",
                                    "ratingCountV2": "21"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "32202000",
                                "name": "Masala Kulcha",
                                "category": "Breads",
                                "description": "Flat bread recipe prepared mainly with spiced potatoes and paneer stuffing",
                                "imageId": "xbg5dqdmdmjqfoc2oydc",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 9500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.8",
                                    "ratingCount": "6 ratings",
                                    "ratingCountV2": "6"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088580",
                                "name": "Aloo Gobi Masala",
                                "category": "North Indian Gravy",
                                "description": "A gravy recipe with diced potatoes and cauliflower prepared with onion, tomato and cashew curry paste",
                                "imageId": "wfuciumwcrqanu0xxbpx",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 26500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "5 ratings",
                                    "ratingCountV2": "5"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088593",
                                "name": "Paneer Butter Masala",
                                "category": "North Indian Gravy",
                                "description": "A creamy and mildly sweet gravy made with butter, tomatoes, cashews, spices and paneer.",
                                "imageId": "mpghxw8dz3qwsltmjrlf",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 28000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "46 ratings",
                                    "ratingCountV2": "46"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "32201974",
                                "name": "Malai Kofta",
                                "category": "North Indian Gravy",
                                "description": "A delicious dish of fried balls of potato and paneer in a rich and creamy mild gravy made with sweet onions and tomatoes.",
                                "imageId": "ikci7n5m2hmw3dwclq3a",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 28000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.0",
                                    "ratingCount": "4 ratings",
                                    "ratingCountV2": "4"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "32201980",
                                "name": "Cashew Masala",
                                "category": "North Indian Gravy",
                                "description": "Spiced cashew nut with seasonings or spice powders added to perk up the flavour.",
                                "imageId": "lomgyzw7vlgmmu5jfclt",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 29000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "32201981",
                                "name": "Palak Paneer",
                                "category": "North Indian Gravy",
                                "description": "Classic North Indian cuisine made with fresh spinach, onions, spices, paneer and herbs",
                                "imageId": "kq6uwcwh5qoaqz7u81rw",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 28000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "39703149",
                                "name": "Paneer Tikka Masala",
                                "category": "North Indian Gravy",
                                "description": "North Indian dish of grilled paneer (Indian cheese) served in a spicy gravy known as Tikka masala",
                                "imageId": "atzcfabdnz5ueci5ac2h",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 30000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090183",
                                "name": "Dhal Fry",
                                "category": "North Indian Gravy",
                                "description": "A delicious lentil recipe that is made with tur dal (pigeon pea lentils), onions, tomatoes and spices",
                                "imageId": "whfdpdztpshivopyayzn",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 23000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.8",
                                    "ratingCount": "4 ratings",
                                    "ratingCountV2": "4"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090185",
                                "name": "Dhal Tadka",
                                "category": "North Indian Gravy",
                                "description": "A Delectable Indian dish where cooked spiced lentils are finished with a tempering made of ghee/ oil and spices",
                                "imageId": "jprwaisfetwi3pjid3ah",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 23000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090186",
                                "name": "Kadai Mushroom",
                                "category": "North Indian Gravy",
                                "description": "A hot, spicy, flavorful and delicious North Indian dish of sautéed button mushrooms, onions and bell peppers in a semi-dry gravy of spiced and tangy tomato sauce",
                                "imageId": "ur1wxyfav6z6b7n4c22l",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 26000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.9",
                                    "ratingCount": "10 ratings",
                                    "ratingCountV2": "10"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090187",
                                "name": "Kadai Paneer",
                                "category": "North Indian Gravy",
                                "description": "A spicy, warming, flavorful and super delicious dish made by cooking paneer & bell peppers in a fragrant, fresh ground spices",
                                "imageId": "odyl414nhbex61ikxgiw",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 28000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "21 ratings",
                                    "ratingCountV2": "21"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "32203228",
                                "name": "Ragi Roast",
                                "category": "Evening Special",
                                "description": "Dosa variety made out of an extremely nutritious millet,",
                                "imageId": "cw6qsmcxocm6sm5qzvqk",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 11000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "isGuiltfree": true,
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.9",
                                    "ratingCount": "16 ratings",
                                    "ratingCountV2": "16"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "83920899",
                                "name": "Chinna Venkayam Podi Uthappam",
                                "category": "Evening Special",
                                "description": "Very soft, light and spongy Uthappams and topped with golden brown shallots on top & served with Onion Chutney",
                                "imageId": "tboefx2gx0tejeuoj4gt",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 13500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "9 ratings",
                                    "ratingCountV2": "9"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "83920906",
                                "name": "Ghee Podi Thattu Idly",
                                "category": "Evening Special",
                                "description": "Classic karnataka style plate idly smeared in ghee, tempered with a basic tadka with idli podi sprinkled",
                                "imageId": "qmfdjnx3mj7zw9qddgby",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 8000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.0",
                                    "ratingCount": "46 ratings",
                                    "ratingCountV2": "46"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090191",
                                "name": "Chola Poori [channa & Salad]",
                                "category": "Evening Special",
                                "description": "Very popular lunch/dinner dish in restaurants. Usually, it is served with channa masala.",
                                "imageId": "xqx0d6kodqxocpxlj7bk",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 14500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "85 ratings",
                                    "ratingCountV2": "85"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090193",
                                "name": "Mushroom Masala Dosai",
                                "category": "Evening Special",
                                "description": "Nutritious dosa variety with a mushroom masala stuffing",
                                "imageId": "lx5smfnmjdriquoa0eyz",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 18500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "9 ratings",
                                    "ratingCountV2": "9"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090195",
                                "name": "Paneer Masala Dosai",
                                "category": "Evening Special",
                                "description": "A crispy Indian savory crepe with a delicious filling made from paneer",
                                "imageId": "dsusommcbh4ur9jgd2fw",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 18500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "13 ratings",
                                    "ratingCountV2": "13"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090197",
                                "name": "Set Dosai Vadacurry",
                                "category": "Evening Special",
                                "description": "South indian curry or gravy, fresh, easy, flavorful side dish, with set dosa",
                                "imageId": "a4z96hfxrclhedg8da9b",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 13500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "30 ratings",
                                    "ratingCountV2": "30"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090208",
                                "name": "Bonda [3 Pcs]",
                                "category": "Traditional Delights",
                                "description": "Crispy fried snack with soft & fluffy texture",
                                "imageId": "uampieeoc8d8ehmd4mcu",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 9000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "116 ratings",
                                    "ratingCountV2": "116"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090211",
                                "name": "Kara Paniyaram [3 Pcs]",
                                "category": "Traditional Delights",
                                "description": "Ball shaped dumplings made with fermented urad dal and rice batter.",
                                "imageId": "scy1qqb3xuxlemyhewqo",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 9000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "59 ratings",
                                    "ratingCountV2": "59"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090215",
                                "name": "Sweet Kozhukattai [2 Pcs]",
                                "category": "Traditional Delights",
                                "description": "Festive South Indian sweet of steamed dumplings made with rice flour dough and stuffed with a filling of coconut and jaggery",
                                "imageId": "mbe0yy9issqpubtkbeka",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 8500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.0",
                                    "ratingCount": "48 ratings",
                                    "ratingCountV2": "48"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090216",
                                "name": "Sweet Paniyaram [3 Pcs]",
                                "category": "Traditional Delights",
                                "description": "Traditional South Indian snack prepared with from pulses and rice using a special paniyaram mould",
                                "imageId": "umfn0vrlthjx4m8mtggo",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 9000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "40 ratings",
                                    "ratingCountV2": "40"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "45688664",
                                "name": "French Fries",
                                "category": "Kids Menu",
                                "description": "A thin strips of deep-fried potato topped with a choice of condiments",
                                "imageId": "mbsqv5z2oh2jjlqrx4uf",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 14000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.9",
                                    "ratingCount": "14 ratings",
                                    "ratingCountV2": "14"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090220",
                                "name": "Banana Dosai",
                                "category": "Kids Menu",
                                "description": "An unleavened, south Indian pancake flavored with cardamom and studded with cashew nuts",
                                "imageId": "y5apnkmhkaol7oh2esbf",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 16000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.5",
                                    "ratingCount": "6 ratings",
                                    "ratingCountV2": "6"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090222",
                                "name": "Pizza Dosai",
                                "category": "Kids Menu",
                                "description": "A unique fusion recipe made with a traditional south indian dosa batter and pizza toppings",
                                "imageId": "cjqxgsds3dgfazzxrntf",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 19000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.6",
                                    "ratingCount": "10 ratings",
                                    "ratingCountV2": "10"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090223",
                                "name": "Veg. Spring Roll [3 Pcs]",
                                "category": "Kids Menu",
                                "description": "Hot snack of crispy, crunchy rolls filled with a savory mix of vegetable stuffing",
                                "imageId": "t7wwuh6skudd7vzpkvxe",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 14000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.8",
                                    "ratingCount": "13 ratings",
                                    "ratingCountV2": "13"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090227",
                                "name": "Channa Masala",
                                "category": "Chaat Items",
                                "description": "A North Indian curried dish made with white chickpeas, onions, tomatoes, spices and herbs",
                                "imageId": "p90olicmmta6kh07eoyb",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5859130",
                                "name": "Sukku Coffee",
                                "category": "Hot Beverages",
                                "imageId": "rj1rnffpg3tswri4nsbs",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 4500,
                                "variants": {},
                                "variantsV2": {},
                                "addons": [
                                  {
                                    "groupId": "46387612",
                                    "groupName": "Add On",
                                    "choices": [
                                      {
                                        "id": "32381213",
                                        "name": "Jaggery",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381214",
                                        "name": "Brown Suger",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381215",
                                        "name": "Honey",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 3,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.6",
                                    "ratingCount": "29 ratings",
                                    "ratingCountV2": "29"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5859132",
                                "name": "Filter Coffee",
                                "category": "Hot Beverages",
                                "imageId": "baegcqd3yaesujsqf5h7",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 5500,
                                "variants": {},
                                "variantsV2": {},
                                "addons": [
                                  {
                                    "groupId": "46387599",
                                    "groupName": "Add On",
                                    "choices": [
                                      {
                                        "id": "32381213",
                                        "name": "Jaggery",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381214",
                                        "name": "Brown Suger",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381215",
                                        "name": "Honey",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 3,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "204 ratings",
                                    "ratingCountV2": "204"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5859133",
                                "name": "Masala Tea",
                                "category": "Hot Beverages",
                                "imageId": "rw0alppjtvmibmpvr4te",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 6000,
                                "variants": {},
                                "variantsV2": {},
                                "addons": [
                                  {
                                    "groupId": "46387607",
                                    "groupName": "Add On",
                                    "choices": [
                                      {
                                        "id": "32381213",
                                        "name": "Jaggery",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381214",
                                        "name": "Brown Suger",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381215",
                                        "name": "Honey",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 3,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "27 ratings",
                                    "ratingCountV2": "27"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "32203648",
                                "name": "Horlicks",
                                "category": "Hot Beverages",
                                "imageId": "c5kthocdledk17l6pc8l",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 8000,
                                "variants": {},
                                "variantsV2": {},
                                "addons": [
                                  {
                                    "groupId": "46387601",
                                    "groupName": "Add On",
                                    "choices": [
                                      {
                                        "id": "32381213",
                                        "name": "Jaggery",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381214",
                                        "name": "Brown Suger",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381215",
                                        "name": "Honey",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 3,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "3 ratings",
                                    "ratingCountV2": "3"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "32204008",
                                "name": "Boost",
                                "category": "Hot Beverages",
                                "imageId": "e1sashikhalobs6g9d2s",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 8000,
                                "variants": {},
                                "variantsV2": {},
                                "addons": [
                                  {
                                    "groupId": "46387598",
                                    "groupName": "Add On",
                                    "choices": [
                                      {
                                        "id": "32381213",
                                        "name": "Jaggery",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381214",
                                        "name": "Brown Suger",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381215",
                                        "name": "Honey",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 3,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "4 ratings",
                                    "ratingCountV2": "4"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "33827091",
                                "name": "Milk",
                                "category": "Hot Beverages",
                                "imageId": "hrjnayxv5pq0iu0u5j8n",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 4500,
                                "variants": {},
                                "variantsV2": {},
                                "addons": [
                                  {
                                    "groupId": "46387608",
                                    "groupName": "Add On",
                                    "choices": [
                                      {
                                        "id": "32381213",
                                        "name": "Jaggery",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381214",
                                        "name": "Brown Suger",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381215",
                                        "name": "Honey",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 3,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "18 ratings",
                                    "ratingCountV2": "18"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "39622047",
                                "name": "Lemon Tea",
                                "category": "Hot Beverages",
                                "imageId": "tbeex1krk26rqpp3r5xe",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 4500,
                                "variants": {},
                                "variantsV2": {},
                                "addons": [
                                  {
                                    "groupId": "46387605",
                                    "groupName": "Add On",
                                    "choices": [
                                      {
                                        "id": "32381213",
                                        "name": "Jaggery",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381214",
                                        "name": "Brown Suger",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381215",
                                        "name": "Honey",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 3,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "6 ratings",
                                    "ratingCountV2": "6"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "83920900",
                                "name": "Karupatti Coffee",
                                "category": "Hot Beverages",
                                "imageId": "mwyh6nvshwnifte8uudk",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 7500,
                                "variants": {},
                                "variantsV2": {},
                                "addons": [
                                  {
                                    "groupId": "46387603",
                                    "groupName": "Add On",
                                    "choices": [
                                      {
                                        "id": "32381213",
                                        "name": "Jaggery",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381214",
                                        "name": "Brown Suger",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381215",
                                        "name": "Honey",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 3,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.8",
                                    "ratingCount": "5 ratings",
                                    "ratingCountV2": "5"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "83920901",
                                "name": "Black Coffee",
                                "category": "Hot Beverages",
                                "imageId": "l8v6jovrardfbsfa7jgm",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 4000,
                                "variants": {},
                                "variantsV2": {},
                                "addons": [
                                  {
                                    "groupId": "46387597",
                                    "groupName": "Add On",
                                    "choices": [
                                      {
                                        "id": "32381213",
                                        "name": "Jaggery",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381214",
                                        "name": "Brown Suger",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381215",
                                        "name": "Honey",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 3,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090256",
                                "name": "Panakalkandu Paal",
                                "category": "Hot Beverages",
                                "imageId": "mkmsttslhatkud5ywdqu",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 7000,
                                "variants": {},
                                "variantsV2": {},
                                "addons": [
                                  {
                                    "groupId": "46387611",
                                    "groupName": "Add On",
                                    "choices": [
                                      {
                                        "id": "32381213",
                                        "name": "Jaggery",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381214",
                                        "name": "Brown Suger",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381215",
                                        "name": "Honey",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 3,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.9",
                                    "ratingCount": "13 ratings",
                                    "ratingCountV2": "13"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090261",
                                "name": "Tea",
                                "category": "Hot Beverages",
                                "imageId": "ltzio8qwsdjickdvkkca",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 5000,
                                "variants": {},
                                "variantsV2": {},
                                "addons": [
                                  {
                                    "groupId": "46387613",
                                    "groupName": "Add On",
                                    "choices": [
                                      {
                                        "id": "32381213",
                                        "name": "Jaggery",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381214",
                                        "name": "Brown Suger",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381215",
                                        "name": "Honey",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 3,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.6",
                                    "ratingCount": "73 ratings",
                                    "ratingCountV2": "73"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5859128",
                                "name": "Sweet Lassi",
                                "category": "Cold Beverages",
                                "description": "A yogurt based creamy, sweetened and chilled beverage from Punjabi cuisine",
                                "imageId": "zb3jpqqf0rrngbjwjuee",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "11 ratings",
                                    "ratingCountV2": "11"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "32204009",
                                "name": "Badam Milk",
                                "category": "Cold Beverages",
                                "description": "A flavourfull Indian drink made with milk and almonds and flavored with saffron and cardamom",
                                "imageId": "wbxkdg3y77grh17au1ux",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 12000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "8 ratings",
                                    "ratingCountV2": "8"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "32204010",
                                "name": "Rose Milk",
                                "category": "Cold Beverages",
                                "description": "An aromatic also a flavored drink and is good for beating the summer heat with the addition of rose essence",
                                "imageId": "jbedlr32v8up4adqp7he",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 12000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "11 ratings",
                                    "ratingCountV2": "11"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "83920905",
                                "name": "Cold Coffee",
                                "category": "Cold Beverages",
                                "description": "Prepared by brewing coffee normally and then serving it over ice or in cold milk",
                                "imageId": "lq1u5zjggtyrdrtd8ami",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 12500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "5 ratings",
                                    "ratingCountV2": "5"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090265",
                                "name": "Salt Lassi",
                                "category": "Cold Beverages",
                                "description": "Salted version of lassi is a contrasting variation to the popular sweet lassi spiced and flavored with black salt, roasted cumin powder and garnished with mint leaves",
                                "imageId": "x2vfcb1hw8ipupu4afi2",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090273",
                                "name": "Sweet Fresh Lime Juice",
                                "category": "Fresh Fruit Juices",
                                "description": "Ultimate thirst quencher drink made of refreshing combination of sweetness of Lime",
                                "imageId": "qivgptrnodc1vksssvet",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 9000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "8 ratings",
                                    "ratingCountV2": "8"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090274",
                                "name": "Watermelon Juice",
                                "category": "Fresh Fruit Juices",
                                "description": "With a rosy hue and bright, fresh flavor, this delicious Watermelon Juice is perfect candidate to replace sugary beverages",
                                "imageId": "huuuq8iqcpmoibn7ltcs",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 13500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.8",
                                    "ratingCount": "8 ratings",
                                    "ratingCountV2": "8"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088681",
                                "name": "Chocolate Milkshakes",
                                "category": "Milk Shakes",
                                "description": "A rich and creamy milkshake basically a cold sweet beverage prepared from cocoa powder, full cream milk and vanilla ice cream",
                                "imageId": "wdxdvrur8xi67nj8jpri",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 17000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "98190413",
                                "name": "Extra Vadacurry",
                                "category": "Extra Items",
                                "imageId": "ov7kwazidqeoarwetxaz",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 9000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "showImage": true,
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.9",
                                    "ratingCount": "29 ratings",
                                    "ratingCountV2": "29"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          }
                        ],
                        "type": "CATEGORY_TYPE_RECOMMENDED"
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Swiggy Exclusive",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "108889715",
                                "name": "Crispy Mushrooms",
                                "category": "Swiggy Exclusive",
                                "description": "An Indo Chinese recipe where mushroom are coated in a batter and fried till crisp and then tossed in a spicy oriental sauce.",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 30000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "108889716",
                                "name": "Garbanzo Galouti Keba",
                                "category": "Swiggy Exclusive",
                                "description": "(6Pcs) A literal melt-in-mouth delicacy recipe prepared using chickpeas, all-purpose flour, cinnamon, and an array of spices, this dish is filled with flavors that will treat your taste buds to the max.",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 35000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "108889717",
                                "name": "Idiyappam - Sodhi Khao Suey",
                                "category": "Swiggy Exclusive",
                                "description": "(3Pcs of Idiyappam) A sublime side dish. a vegetable stew prepared with mixed vegetables and coconut milk, the addition of lentils and drumstick, delicate textured rice noodles (Idiyappam) goes well with this veg stew (sodhi).",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 17500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.0",
                                    "ratingCount": "5 ratings",
                                    "ratingCountV2": "5"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "108889718",
                                "name": "Marina Millagai Bhajji",
                                "category": "Swiggy Exclusive",
                                "description": "(2Pcs) Favorite South Indian tea time snack. It tastes amazingly delicious with right mix of spicy & flavorful ingredients. Crispy & hot favorite snack, also irresistible which is divine along with a coffee or Tea.",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 20000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "108889719",
                                "name": "Stuffed Afghani Paneer Tikka",
                                "category": "Swiggy Exclusive",
                                "description": "An Exclusive dish from the kitchens of Mughals, also a North Indian appetizer where chunks of paneer are marinated in yogurt and spices and then grilled in tandoor.",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 30000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Tiffin",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088521",
                                "name": "Ghee Pongal",
                                "category": "Tiffin",
                                "description": "Traditional South Indian dish made with rice, split yellow mung dal, ghee, cumin, ginger, pepper and curry leaves",
                                "imageId": "lwfkm7l36pv8juleoalg",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "309 ratings",
                                    "ratingCountV2": "309"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088684",
                                "name": "Mini Tiffin",
                                "category": "Tiffin",
                                "description": "[Sweet, Idly[1Pc], Mini Vadai, Mini Dosai, Pongal, Poori[1Pc], Sambar,Chutney].Thali has a delicious spread of all the breakfast dishes served in mini forms.",
                                "imageId": "jwixsr2ydidizohkbxiv",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 18500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  "text": "Bestseller",
                                  "textColor": "#ffffff",
                                  "topBackgroundColor": "#d53d4c",
                                  "bottomBackgroundColor": "#b02331"
                                },
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "isBestseller": true,
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "621 ratings",
                                    "ratingCountV2": "621"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "40116382",
                                "name": "Idly Vada Curry",
                                "category": "Tiffin",
                                "description": "A popular south indian curry or gravy,also fresh, easy, flavorful side dish, perfect for any breakfast you make",
                                "imageId": "xcnbjxvca9tu92allh0q",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 11500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.9",
                                    "ratingCount": "105 ratings",
                                    "ratingCountV2": "105"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090103",
                                "name": "Idiyappam [3 Pcs]",
                                "category": "Tiffin",
                                "imageId": "sgs7riavlvcv5mhnyw7h",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 9500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  "text": "Bestseller",
                                  "textColor": "#ffffff",
                                  "topBackgroundColor": "#d53d4c",
                                  "bottomBackgroundColor": "#b02331"
                                },
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "isBestseller": true,
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "327 ratings",
                                    "ratingCountV2": "327"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090107",
                                "name": "Idly [2 Pcs]",
                                "category": "Tiffin",
                                "description": "A Soft & fluffy idly, popular as breakfast foods in Southern India",
                                "imageId": "x0qnrudlu3vjfmre8mjr",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 6000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  "text": "Bestseller",
                                  "textColor": "#ffffff",
                                  "topBackgroundColor": "#d53d4c",
                                  "bottomBackgroundColor": "#b02331"
                                },
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "isBestseller": true,
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "972 ratings",
                                    "ratingCountV2": "972"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090108",
                                "name": "Mini Ghee Idly [14 Pcs]",
                                "category": "Tiffin",
                                "description": "In Hot ghee added mustard with curry leaves, then along with this mixture added Mini Podi Idlies",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 12000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "59 ratings",
                                    "ratingCountV2": "59"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090109",
                                "name": "Mini Podi Idly [14 Pcs]",
                                "category": "Tiffin",
                                "description": "Idlies are steamed cut to cubes and well mixed with idli podi and ghee or sesame oil to make Mini Podi Idly",
                                "imageId": "vwot89roivcpb0ygwir0",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 12000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "134 ratings",
                                    "ratingCountV2": "134"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090110",
                                "name": "Nvvb Special - Sodhi Idly",
                                "category": "Tiffin",
                                "description": "Sodhi is the southern version of a vegetable stew where addition of lentils and drumstick makes this sodhi a sublime one",
                                "imageId": "l2afobgb1gs8t5vqxarr",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 13000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "89 ratings",
                                    "ratingCountV2": "89"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090111",
                                "name": "Podi Idly [2 Pcs]",
                                "category": "Tiffin",
                                "description": "Idli podi is condiment of spiced dry powder made with lentils and red chilies, a mixture of idli podi (milagai podi) and sesame oil or ghee is mixed and then smeared on the idlis.",
                                "imageId": "vniwy8pjuyzosplrhuuh",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 12000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.8",
                                    "ratingCount": "23 ratings",
                                    "ratingCountV2": "23"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090112",
                                "name": "Poori With Potato Masala [3 Pcs]",
                                "category": "Tiffin",
                                "description": "South Indian style potato masala made with boiled, crumbled potatoes in mild, flavorful gravy. It is served with hot Poori which is a deep-fried bread made from unleavened whole-wheat flour",
                                "imageId": "pakjniomzqnw04ktrx78",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 9500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  "text": "Bestseller",
                                  "textColor": "#ffffff",
                                  "topBackgroundColor": "#d53d4c",
                                  "bottomBackgroundColor": "#b02331"
                                },
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "isBestseller": true,
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "560 ratings",
                                    "ratingCountV2": "560"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090113",
                                "name": "Sambar Idly [2 Pcs]",
                                "category": "Tiffin",
                                "description": "Hearty, satisfying, comforting and a healthy meal of soft fluffy idlis served with savory, spiced and lightly tangy sambar",
                                "imageId": "pt1zjujrkdsnd7tivtby",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "39 ratings",
                                    "ratingCountV2": "39"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "99419076",
                                "name": "Rawa Kesari",
                                "category": "Tiffin",
                                "description": "Delicious South Indian sweet made from rava (cream of wheat), sugar, ghee (clarified butter), saffron and dry fruits",
                                "imageId": "cxupymqb3tgsj58z6c22",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 8000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  "text": "Bestseller",
                                  "textColor": "#ffffff",
                                  "topBackgroundColor": "#d53d4c",
                                  "bottomBackgroundColor": "#b02331"
                                },
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "isBestseller": true,
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "139 ratings",
                                    "ratingCountV2": "139"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Vadai",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090114",
                                "name": "Medhu Vadai [1 Pc]",
                                "category": "Vadai",
                                "description": "South Indian cuisine made in a doughnut shape, with a crispy exterior and soft interior.",
                                "imageId": "fkvjekmnyfcyap5ydj7p",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 5000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "368 ratings",
                                    "ratingCountV2": "368"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090115",
                                "name": "Sambar Vadai [1 Pc]",
                                "category": "Vadai",
                                "description": "South Indian recipe prepared by combining the spiced and flavoured sambar with medu vada",
                                "imageId": "awbi53cmijrppovjmvna",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 8500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "71 ratings",
                                    "ratingCountV2": "71"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090116",
                                "name": "Thayir Vadai [1 Pc]",
                                "category": "Vadai",
                                "description": "South Indian snack, where Vadai soaked in the spicy curd mixture garnished with green coriander leaves and crispy boondis",
                                "imageId": "j0c2yebkkmxrwlg4h9c7",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 8500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "81 ratings",
                                    "ratingCountV2": "81"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Dosa",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090117",
                                "name": "Butter Dosai",
                                "category": "Dosa",
                                "description": "Butter Dosa is just one of the many varieties prevalent in the South Indian cuisine; it has a thick base yet is thin and crispy with the butter",
                                "imageId": "jvpb3lclajccdbu87muj",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 17500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.8",
                                    "ratingCount": "10 ratings",
                                    "ratingCountV2": "10"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090118",
                                "name": "Dosai",
                                "category": "Dosa",
                                "description": "A Thin, spicy, crispy crêpe-like food made from fermented rice",
                                "imageId": "vzsvaogphxuj95s53j3g",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  "text": "Bestseller",
                                  "textColor": "#ffffff",
                                  "topBackgroundColor": "#d53d4c",
                                  "bottomBackgroundColor": "#b02331"
                                },
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "isBestseller": true,
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "363 ratings",
                                    "ratingCountV2": "363"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090119",
                                "name": "Ghee Masala Dosai",
                                "category": "Dosa",
                                "description": "A delicious variant of dosa, prepared from the usual dosa batter and Tangy filling of Masala where ghee is poured on the batter after spreading along with Masala.",
                                "imageId": "x2qvrzfda5ivwwnt0nas",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 17500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "6 ratings",
                                    "ratingCountV2": "6"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090120",
                                "name": "Ghee Roast",
                                "category": "Dosa",
                                "description": "A classic South Indian Breakfast Tiffin that is made with fresh homemade idli dosa batter along with ghee.",
                                "imageId": "z3yfesfj3yufxjf7ouyo",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 17000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "94 ratings",
                                    "ratingCountV2": "94"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090121",
                                "name": "Masala Dosai",
                                "category": "Dosa",
                                "description": "Variation of the popular South Indian dosa made from rice, spicy potatoes, served with Chutney, Sambar",
                                "imageId": "gjpfgfzulmfetcfythcl",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 11000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  "text": "Bestseller",
                                  "textColor": "#ffffff",
                                  "topBackgroundColor": "#d53d4c",
                                  "bottomBackgroundColor": "#b02331"
                                },
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "isBestseller": true,
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "180 ratings",
                                    "ratingCountV2": "180"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090122",
                                "name": "Mysore Masala Dosai",
                                "category": "Dosa",
                                "description": "Appetizing crispy fried Dosa with chilli and garlic chutney spread on the inside and stuffed with a potato bhaji and served with a south indian coconut chutney.",
                                "imageId": "pdzgv4ootjotfrrmcqt2",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 13500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "87 ratings",
                                    "ratingCountV2": "87"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090123",
                                "name": "Onion Dosai",
                                "category": "Dosa",
                                "description": "Recipe with finely chopped onion topping over the dosa which gives the plain dosa a very yummy and unique flavor",
                                "imageId": "tc7ppq7ltynngdenq9th",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 12500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.7",
                                    "ratingCount": "26 ratings",
                                    "ratingCountV2": "26"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090124",
                                "name": "Onion Masala Dosai",
                                "category": "Dosa",
                                "description": "Fermented crepe with stuffing of mashed potato and finely chopped onion topping over the dosa Serve up with piping hot sambar and chutney!",
                                "imageId": "zc4ndmw6z36h4j1gnbcs",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 13500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.7",
                                    "ratingCount": "7 ratings",
                                    "ratingCountV2": "7"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090126",
                                "name": "Podi Dosai",
                                "category": "Dosa",
                                "description": "Podi Dosa is a spicy and delicious dosa recipe with idli milagai podi.",
                                "imageId": "pcs3qq2dmmme7kzsy9dk",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 11500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "47 ratings",
                                    "ratingCountV2": "47"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Rava Dosa",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090128",
                                "name": "Cashewnut Rava Dosai",
                                "category": "Rava Dosa",
                                "description": "A delectable Indian crepe dosa with crunchy Cashews to regular Rava dosa batter",
                                "imageId": "a2ioi29x0rz849pipjmz",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 22000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090129",
                                "name": "Dry Fruit Rava Dosai",
                                "category": "Rava Dosa",
                                "description": "An appetizing dosa made with dry fruits and nuts like cashews, almonds, pista, dates, tutti frutti, raisins.",
                                "imageId": "nzxke24z38lmjjpcawfn",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 22000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.7",
                                    "ratingCount": "3 ratings",
                                    "ratingCountV2": "3"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090130",
                                "name": "Ghee Rava Masala Dosai",
                                "category": "Rava Dosa",
                                "description": "A Mouth watering breakfast variety made of crispy rice and lentil crepe and a spiced masala potato filling",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 18000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.8",
                                    "ratingCount": "6 ratings",
                                    "ratingCountV2": "6"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090131",
                                "name": "Onion Rava Roast",
                                "category": "Rava Dosa",
                                "description": "A crisp fried dosa made of all purpose flour, rice and semolina batter topped with finely chopped onions, ginger, chilies and corriander mainly served with chutneys and sambar.",
                                "imageId": "emghhpu6qbyfrk6hgfbf",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 12000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.6",
                                    "ratingCount": "75 ratings",
                                    "ratingCountV2": "75"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090132",
                                "name": "Podi Rava Dosai",
                                "category": "Rava Dosa",
                                "description": "A spicy South Indian delicacy, made using idli podi along with rava dosai",
                                "imageId": "bka1ufon4ex3szmicnvp",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 12000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.0",
                                    "ratingCount": "11 ratings",
                                    "ratingCountV2": "11"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090133",
                                "name": "Rava Dosai",
                                "category": "Rava Dosa",
                                "description": "South Indian breakfast, thin crisp fried crepe made with semolina, rice flour, spices and ghee",
                                "imageId": "gvv1hf3zkncflrlcckdk",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 11000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  "text": "Bestseller",
                                  "textColor": "#ffffff",
                                  "topBackgroundColor": "#d53d4c",
                                  "bottomBackgroundColor": "#b02331"
                                },
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "isBestseller": true,
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "145 ratings",
                                    "ratingCountV2": "145"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090135",
                                "name": "Rava Masala Dosai",
                                "category": "Rava Dosa",
                                "description": "A Palatable dosa made of mildly spiced semolina batter and garnished well, served with sambar, tomato and coconut chutneys.",
                                "imageId": "zv4jtgx3apsguwccfouo",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 12000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "15 ratings",
                                    "ratingCountV2": "15"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Utthapam",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "39703251",
                                "name": "Podi Onion Uthappam",
                                "category": "Utthapam",
                                "description": "A variation to Onion Uttapam with Sprinkle top onions, podi, curry leaves.",
                                "imageId": "gxxzu1it1q6lfnlmibbf",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 12500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "30 ratings",
                                    "ratingCountV2": "30"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090136",
                                "name": "Kal Dosai [2 Pcs]",
                                "category": "Utthapam",
                                "description": "One the popular soft and spongy dosa variety in TamilNadu, made on a dosa griddle slightly thicker than regular dosa",
                                "imageId": "e6vpasmyf1bu3xunv3gl",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 11000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "114 ratings",
                                    "ratingCountV2": "114"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090137",
                                "name": "Mixed Uthappam",
                                "category": "Utthapam",
                                "description": "A crisp and spongy breakfast south indian delight made out of finely chop the carrot, onion, tomato, green chillies, capsicum and coriander leaves along with rice flour batter",
                                "imageId": "vhe7o0mhp2lostayfjly",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 14000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.8",
                                    "ratingCount": "15 ratings",
                                    "ratingCountV2": "15"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090140",
                                "name": "Onion Uthappam",
                                "category": "Utthapam",
                                "description": "A delectable thickish south Indian fried dosa made of rice flour batter with a generous topping of thinly sliced onions, green chilies, corriander and ground whole spices.",
                                "imageId": "uu2awgaeebdnbhedue3n",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 11500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "94 ratings",
                                    "ratingCountV2": "94"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090141",
                                "name": "Podi Uthappam",
                                "category": "Utthapam",
                                "description": "Spicy, thick soft fluffy pancakes made with condiment of idli or dosa batter, ghee/oil and idli podi",
                                "imageId": "l15jwdsphmgketyfao43",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 11500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "1.8",
                                    "ratingCount": "4 ratings",
                                    "ratingCountV2": "4"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090142",
                                "name": "Seven Taste Uthappam",
                                "category": "Utthapam",
                                "description": "Unique varieties of utthapam with varient toppings made and served with delicious sambar and chutney",
                                "imageId": "lbqsclzg8vqzmdjrmbkx",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 17000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.0",
                                    "ratingCount": "21 ratings",
                                    "ratingCountV2": "21"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090143",
                                "name": "Uthappam",
                                "category": "Utthapam",
                                "description": "South Indian Breakfast pancakes made with lentils, rice, onions, herbs & spices",
                                "imageId": "dqagurh0fvvitriiuvon",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "7 ratings",
                                    "ratingCountV2": "7"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "South Indian Bread",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090149",
                                "name": "Chapathi [2 Pcs]",
                                "category": "South Indian Bread",
                                "imageId": "fexqmc46aewi9quva95o",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  "text": "Bestseller",
                                  "textColor": "#ffffff",
                                  "topBackgroundColor": "#d53d4c",
                                  "bottomBackgroundColor": "#b02331"
                                },
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "isBestseller": true,
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "158 ratings",
                                    "ratingCountV2": "158"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "87952361",
                                "name": "Parotta [2 Pcs]",
                                "category": "South Indian Bread",
                                "imageId": "mdvl0gciantjxhyfzisl",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  "text": "Bestseller",
                                  "textColor": "#ffffff",
                                  "topBackgroundColor": "#d53d4c",
                                  "bottomBackgroundColor": "#b02331"
                                },
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "isBestseller": true,
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.9",
                                    "ratingCount": "147 ratings",
                                    "ratingCountV2": "147"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "97214772",
                                "name": "Ceylon Paratha",
                                "category": "South Indian Bread",
                                "imageId": "fqslmzy6mmhpzpdqpkuw",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 16000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "12 ratings",
                                    "ratingCountV2": "12"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Salad & Raita",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "83920936",
                                "name": "Fresh Garden Salad",
                                "category": "Salad & Raita",
                                "description": "An appetizing salad made of Combining the salad greens, croutons, beans, red pepper, carrot, and cucumber",
                                "imageId": "wyyg9fwxbugz8egmbbci",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.7",
                                    "ratingCount": "6 ratings",
                                    "ratingCountV2": "6"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090151",
                                "name": "Mixed Veg. Raitha",
                                "category": "Salad & Raita",
                                "description": "An indian salad dressed with thick yogurt and finely chopped mixed vegies",
                                "imageId": "dyxudv0jcazaf6cdsdge",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 9000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "8 ratings",
                                    "ratingCountV2": "8"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Soups",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "32203242",
                                "name": "Pepper Soup",
                                "category": "Soups",
                                "description": "A spicy soup that has a light, watery texture",
                                "imageId": "smd8th7pcdwox8zpv5je",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.6",
                                    "ratingCount": "18 ratings",
                                    "ratingCountV2": "18"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "32203243",
                                "name": "Mushroom Soup",
                                "category": "Soups",
                                "description": "A deliciously creamy soup with tender bites of mushroom pieces",
                                "imageId": "tyr147nlppqlejodvaal",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.3",
                                    "ratingCount": "12 ratings",
                                    "ratingCountV2": "12"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090152",
                                "name": "Cream Of Tomato Soup",
                                "category": "Soups",
                                "description": "A vegan recipe, combination of tomato puree and other spices",
                                "imageId": "ajozptxleaaoi0nyrjkd",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.8",
                                    "ratingCount": "22 ratings",
                                    "ratingCountV2": "22"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090153",
                                "name": "Veg. Clear Soup",
                                "category": "Soups",
                                "description": "An enchanting Vegetable soup prepared using vegetables, leafy greens, mushrooms, and roots as main ingredients",
                                "imageId": "d3d78japvnnbvowlmr2v",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.0",
                                    "ratingCount": "7 ratings",
                                    "ratingCountV2": "7"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090154",
                                "name": "Veg. Corn Soup",
                                "category": "Soups",
                                "description": "A mouth-watering soup made out of mixed veggies, sweet corn kernels & pepper",
                                "imageId": "hk1olxmms6m25gskazba",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090155",
                                "name": "Veg. Hot & Sour Soup",
                                "category": "Soups",
                                "description": "A typical soup made with mixed fresh vegetables, mushrooms, spices and soy sauce",
                                "imageId": "vl3uwquun9nsl1z2naal",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090156",
                                "name": "Veg. Manchow Soup",
                                "category": "Soups",
                                "description": "An Indian Chinese cuisine prepared with various vegetables, scallions,thickened with broth and corn flour, and flavored with generous doses of soy sauce, salt, garlic, chili peppers and, predominantly, ginger",
                                "imageId": "mzdfvry2hcck5jzjyozt",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.8",
                                    "ratingCount": "5 ratings",
                                    "ratingCountV2": "5"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Indian Starters",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088568",
                                "name": "Gobi 65",
                                "category": "Indian Starters",
                                "description": "A Delicious crisply fried appetizer made of cauliflower florets coated with a spiced corn flour batter and garnished with corriander, onion and curry leaves",
                                "imageId": "mcfkvjjimv3z8fukpaxo",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 26000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.8",
                                    "ratingCount": "26 ratings",
                                    "ratingCountV2": "26"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088574",
                                "name": "Mushroom 65",
                                "category": "Indian Starters",
                                "description": "A Scruptious fried starter made of chopped button mushrooms coated with a spicy batter and garnished with sauteed chilies, onions and curry leaves.",
                                "imageId": "udsafqoo1kylubd3s7li",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 27000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.9",
                                    "ratingCount": "7 ratings",
                                    "ratingCountV2": "7"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088575",
                                "name": "Paneer 65",
                                "category": "Indian Starters",
                                "description": "Stir- fried appetizer made of cottage cheese cubes coated with spiced Corn starch and all purpose flour and served with sauteed onions and curry leaves.",
                                "imageId": "jtkjanawh2ibcczpv6es",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 29000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.6",
                                    "ratingCount": "10 ratings",
                                    "ratingCountV2": "10"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5859094",
                                "name": "Paneer Tikka [5 Pcs]",
                                "category": "Indian Starters",
                                "description": "A delicious tandoori snack where paneer arranged  after marinated in a spiced yogurt-based marinade",
                                "imageId": "j4zgyy1x2wpqqkjpblqj",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 29000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.8",
                                    "ratingCount": "5 ratings",
                                    "ratingCountV2": "5"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5859110",
                                "name": "Mushroom Tikka",
                                "category": "Indian Starters",
                                "description": "Indian appetizer made by marinating & grilling mushrooms with spices, herbs and yogurt",
                                "imageId": "o2sfmp1cimzg1w8fmoca",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 29000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "83920818",
                                "name": "Afgani Paneer Tikka [5 Pcs]",
                                "category": "Indian Starters",
                                "description": "A North Indian appetizer where chunks of paneer are marinated in yogurt and spices and then grilled in tandoor",
                                "imageId": "oek1pjaxyhxsso34eeyr",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 32000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "3 ratings",
                                    "ratingCountV2": "3"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "83920819",
                                "name": "Golden Fry Baby Corn",
                                "category": "Indian Starters",
                                "description": "Crunchy starter made out of baby corn dipped in batter of Maida flour, rice flour, chilli powder,cumin and fried",
                                "imageId": "pgzszal24aq7tjsri6jz",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 28000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.0",
                                    "ratingCount": "7 ratings",
                                    "ratingCountV2": "7"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090158",
                                "name": "Paneer Pudhina Tikka [5 Pcs]",
                                "category": "Indian Starters",
                                "description": "A mouthwatering starter recipe with a delectable mint flavour on Grilled Cottage of cheese cubes",
                                "imageId": "u9oi1mwhjuwf2zdudqzw",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 30500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "92595365",
                                "name": "Masala Pappad",
                                "category": "Indian Starters",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 7000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "9 ratings",
                                    "ratingCountV2": "9"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Chinese Starters",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088594",
                                "name": "Paneer Manchurian Dry",
                                "category": "Chinese Starters",
                                "description": "Firm cottage cheese cubes tossed in a manchurian sauce",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 30000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5859112",
                                "name": "Chilly Gobi",
                                "category": "Chinese Starters",
                                "description": "Truly delicious Indian snack which has crispy texture with a spicy, sweet and sour taste",
                                "imageId": "yys7d5owlci2wsb0ocps",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 25000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.0",
                                    "ratingCount": "4 ratings",
                                    "ratingCountV2": "4"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5859116",
                                "name": "Chilly Paneer",
                                "category": "Chinese Starters",
                                "description": "An appetizer where crisp batter fried paneer is tossed in slightly sweet, spicy, hot and sour Chilli Sauce",
                                "imageId": "ojulbeigwnanqzx8shuf",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 29000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "2.6",
                                    "ratingCount": "5 ratings",
                                    "ratingCountV2": "5"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5859117",
                                "name": "Gobi Manchurian Dry",
                                "category": "Chinese Starters",
                                "description": "Indo Chinese appetizer made with cauliflower, corn flour, soya sauce, vinegar, chilli sauce, ginger & garlic",
                                "imageId": "xib2gesnx64yfmcu0tnf",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 27000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "19 ratings",
                                    "ratingCountV2": "19"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5859123",
                                "name": "Gobi Manchurian Gravy",
                                "category": "Chinese Starters",
                                "description": "A tempting combination of deep fried cauliflower florets and a spicy cornflour based thick gravy",
                                "imageId": "bwhtuy9ihmie3k0bwala",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 25000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "9 ratings",
                                    "ratingCountV2": "9"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5859124",
                                "name": "Mushroom Manchurian Gravy",
                                "category": "Chinese Starters",
                                "description": "An appetizing dish made of fried mixed batter coated button mushrooms mixed with sauteed diced ginger, garlic and spring onions and Manchurian sauce served in gravy",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 29000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.0",
                                    "ratingCount": "4 ratings",
                                    "ratingCountV2": "4"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5859125",
                                "name": "Paneer Manchurian Gravy",
                                "category": "Chinese Starters",
                                "description": "A snack of fried paneer cubes (firm cottage cheese cubes) tossed in a manchurian sauce",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 30000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "45420085",
                                "name": "Mushroom Manchurian Dry",
                                "category": "Chinese Starters",
                                "description": "Indo-Chinese appetizer made by tossing crisp fried mushrooms in a delicious sweet, spicy and umami tasting manchurian sauce",
                                "imageId": "zrxgnjodtzqps57pbuzi",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 29000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.8",
                                    "ratingCount": "4 ratings",
                                    "ratingCountV2": "4"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "83920845",
                                "name": "Chilli Babycorn",
                                "category": "Chinese Starters",
                                "description": "Indo Chinese fusion side and snack, Fried pieces of baby corn are combined with a spicy, sweet, umami sauce",
                                "imageId": "xwiyhp2xqifvc2wv5efg",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 28000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "83920877",
                                "name": "Crispy Honey Chilli Baby Corn",
                                "category": "Chinese Starters",
                                "description": "Tasty, flavorful and easy Indo - Chinese starter recipe,where,  Crispy baby corn tossed in a sweet & spicy sauce along with cubed bell peppers",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 29000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "5.0",
                                    "ratingCount": "6 ratings",
                                    "ratingCountV2": "6"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "83920880",
                                "name": "Crispy Honey Mushroom",
                                "category": "Chinese Starters",
                                "description": "Flavourful recipe made up of clarified mushroom,onion,green capsicum,red bell pepper,garlic,cornflour,black pepper,soy,chilly sauce,tomato sauce,honey",
                                "imageId": "asyx8evbvxbzh5hbfj36",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 30000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.2",
                                    "ratingCount": "5 ratings",
                                    "ratingCountV2": "5"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090159",
                                "name": "Babycorn Manchurian Dry",
                                "category": "Chinese Starters",
                                "description": "A spicy, sweet and sour gravy made of baby corn, onion, bell pepper and sauteed in a sweet-spicy Chinese sauce",
                                "imageId": "qtiicdyqfskiuvhwro6v",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 29000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090160",
                                "name": "Babycorn Manchurian Gravy",
                                "category": "Chinese Starters",
                                "description": "A spicy, sweet and sour gravy in which baby corn fried until it turns slightly soft yet crunchy enough to bite",
                                "imageId": "lesmwe4afrsizt5zy0nr",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 28000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090161",
                                "name": "Chilli Mushroom",
                                "category": "Chinese Starters",
                                "description": "Enticingly crunchy deep-fried mushrooms sautéed with spicy green chillies, pungent onions, crispy capsicum and tossed in a sweet and spicy chilli sauce",
                                "imageId": "i9ksdvqhqlivnyyuu4bv",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 29000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090163",
                                "name": "Mushroom Pepper Dry",
                                "category": "Chinese Starters",
                                "description": "Flavoured starter made with sliced mushroom and pepper powder",
                                "imageId": "aihhys3dtjaxymqnrfb0",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 29000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090164",
                                "name": "Veg. Balls In Hot Garlic Sauce",
                                "category": "Chinese Starters",
                                "description": "A real fiery starter, perfect to get your meal off to a hot start! Balls of boiled and mashed veggies are deep-fried till crisp",
                                "imageId": "y8iwupcgvrfvahxvodxy",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 25000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Biryani & Pulaos",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088602",
                                "name": "Jeera Rice",
                                "category": "Biryani & Pulaos",
                                "description": "Exquisitely flavoured basmati rice cooked and blended with clarified butter cumin seeds, bay leaves green chilies and chopped coriander.",
                                "imageId": "pkt9n48loj9hqruhdhd6",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 25000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "5.0",
                                    "ratingCount": "4 ratings",
                                    "ratingCountV2": "4"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088607",
                                "name": "Kashmiri Pulao",
                                "category": "Biryani & Pulaos",
                                "description": "Delicious variant of rice pulao from Kashmiri cuisine made with nuts, dried fruits, saffron and fresh fruits",
                                "imageId": "lebuebs5eyrqrgrzxjqe",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 28000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "32201992",
                                "name": "Veg Pulao",
                                "category": "Biryani & Pulaos",
                                "description": "A Delightfully, mild spiced flavoured rice dish made along with long grain rice and finely diced vegetables.",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 25000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "6 ratings",
                                    "ratingCountV2": "6"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "32201995",
                                "name": "Gobi Cashew Pulao",
                                "category": "Biryani & Pulaos",
                                "description": "Indian rice preparation where rice is cooked with ghee, cumin seeds, cloves and later mixed with crispy fried Gobi",
                                "imageId": "mkopamdy4s0r75qi6cvj",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 28000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "39703146",
                                "name": "Mushroom Cashew Pulao",
                                "category": "Biryani & Pulaos",
                                "description": "A mild spiced flavoured rice dish made along with long grain rice and finely diced mushroom along with rice cashew.",
                                "imageId": "pzaklr5mv3cxqdfoazgq",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 31000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090167",
                                "name": "Mushroom 65 Briyani",
                                "category": "Biryani & Pulaos",
                                "description": "Flavorful biryani with marinated mushrooms and spices",
                                "imageId": "hk7qwgpq07ply3q0fcsf",
                                "isVeg": 1,
                                "price": 29000,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 6:23 pm, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.2",
                                    "ratingCount": "10 ratings",
                                    "ratingCountV2": "10"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090168",
                                "name": "Mushroom Briyani",
                                "category": "Biryani & Pulaos",
                                "description": "Delicious one pot dish made with rice, mushrooms, masala powder & herbs.",
                                "imageId": "nneayna6f7yqwlkvw2ie",
                                "isVeg": 1,
                                "price": 28000,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 6:23 pm, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.9",
                                    "ratingCount": "22 ratings",
                                    "ratingCountV2": "22"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090169",
                                "name": "Nvvb Special Kari Briyani",
                                "category": "Biryani & Pulaos",
                                "description": "A lovely combination variety of briyani served in NVVB",
                                "imageId": "yr6ddcqjvg02mze2rse4",
                                "isVeg": 1,
                                "price": 27000,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 6:23 pm, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.0",
                                    "ratingCount": "10 ratings",
                                    "ratingCountV2": "10"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090170",
                                "name": "Paneer 65 Briyani",
                                "category": "Biryani & Pulaos",
                                "description": "An ideal vegetarian biriyani made with marinated paneer cubes and long grain rice",
                                "imageId": "p73ljljzi8k7wgkbd7fh",
                                "isVeg": 1,
                                "price": 30000,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 6:23 pm, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.5",
                                    "ratingCount": "4 ratings",
                                    "ratingCountV2": "4"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090171",
                                "name": "Paneer Briyani",
                                "category": "Biryani & Pulaos",
                                "description": "Dum style cooked biriyani recipe made with marinated paneer cubes and long grain rice",
                                "imageId": "oumzww07pr4ckp0fyfna",
                                "isVeg": 1,
                                "price": 29000,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 6:23 pm, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.4",
                                    "ratingCount": "14 ratings",
                                    "ratingCountV2": "14"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090172",
                                "name": "Vegetable Briyani",
                                "category": "Biryani & Pulaos",
                                "description": "An aromatic rice dish made with spices & mixed veggies",
                                "imageId": "w8solzch6on23rsfilxd",
                                "isVeg": 1,
                                "price": 23000,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 6:23 pm, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.7",
                                    "ratingCount": "35 ratings",
                                    "ratingCountV2": "35"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Chinese Rice & Noodles",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088622",
                                "name": "Mushroom Fried Rice",
                                "category": "Chinese Rice & Noodles",
                                "description": "A classic Indo-Chinese dish made using rice, mushrooms, and Chinese sauces",
                                "imageId": "g9ykeoqauvd36ol6ex3n",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 27000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.7",
                                    "ratingCount": "17 ratings",
                                    "ratingCountV2": "17"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088623",
                                "name": "Paneer Fried Rice",
                                "category": "Chinese Rice & Noodles",
                                "description": "A sensational fusion dish with a chinese twist made with cooked rice, marinated cottage cheese, assorted diced vegetables and spices served hot with tomato ketchup.",
                                "imageId": "yiu1ryxfguxuendgc2sp",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 28000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "41 ratings",
                                    "ratingCountV2": "41"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088624",
                                "name": "Veg Noodles",
                                "category": "Chinese Rice & Noodles",
                                "description": "Stir-fried noodles made with loads of mix vegetables",
                                "imageId": "bo3ubyvjnll43mjnoyni",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 25000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.8",
                                    "ratingCount": "24 ratings",
                                    "ratingCountV2": "24"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088625",
                                "name": "Mushroom Noodles",
                                "category": "Chinese Rice & Noodles",
                                "description": "A vegan recipe, with combination of noodles, Asian sauce, and sauteed mushrooms",
                                "imageId": "gwee64hf40eybfkp2oia",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 27000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "6 ratings",
                                    "ratingCountV2": "6"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088627",
                                "name": "Paneer Noodles",
                                "category": "Chinese Rice & Noodles",
                                "description": "Indian-chinese appetizer,takes the spicy chilli paneer and turns it into a delicious spicy noodle",
                                "imageId": "lotlajhxt17ilhary4w1",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 28000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "6 ratings",
                                    "ratingCountV2": "6"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "32201986",
                                "name": "Gobi Noodles",
                                "category": "Chinese Rice & Noodles",
                                "description": "A slightly spicy noodles made with mixed vegies and fried Gobi",
                                "imageId": "atksburrcuvxzoeyb0ua",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 26000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.0",
                                    "ratingCount": "6 ratings",
                                    "ratingCountV2": "6"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "32202004",
                                "name": "Gobi Fried Rice",
                                "category": "Chinese Rice & Noodles",
                                "description": "Indulgent Indo-Chinese style fried rice recipe prepared with mixed vegetables, cooked rice and crispy fried gobi",
                                "imageId": "pbnehbhwk0lwy5rn4ipl",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 26000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.6",
                                    "ratingCount": "23 ratings",
                                    "ratingCountV2": "23"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090173",
                                "name": "Add On  Schezwan Sauce",
                                "category": "Chinese Rice & Noodles",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 3000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090174",
                                "name": "Mixed Fried Rice - Pgm",
                                "category": "Chinese Rice & Noodles",
                                "description": "(Paneer, Gobi, Mushroom).a delectable delight receipe made using mixed vegetables, cooked rice and crispy fried gobi, paneer and mushroom",
                                "imageId": "aikevlu0xlembabfqebe",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 29000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.6",
                                    "ratingCount": "7 ratings",
                                    "ratingCountV2": "7"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090175",
                                "name": "Mixed Veg. Noodles - Pgm",
                                "category": "Chinese Rice & Noodles",
                                "description": "(Paneer, Gobi, Mushroom).A Succulent noodles with combination of stir fried paneer, gobi and mushroom, with flavourful sauce.",
                                "imageId": "a2hwaszyv11chwldthpf",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 29000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.8",
                                    "ratingCount": "4 ratings",
                                    "ratingCountV2": "4"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090176",
                                "name": "Veg. Fried Rice",
                                "category": "Chinese Rice & Noodles",
                                "description": "Asian dish made by stir frying cooked rice in a wok with vegetables, soya sauce",
                                "imageId": "c84hzfohadp4jmjjvook",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 25000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "11 ratings",
                                    "ratingCountV2": "11"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Breads",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088609",
                                "name": "Plain Roti",
                                "category": "Breads",
                                "description": "Indian flatbread which is made with only 2 ingredients- whole wheat flour (atta) and water",
                                "imageId": "c2u3nt7ukxlrzk5ctzkn",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 6500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "13 ratings",
                                    "ratingCountV2": "13"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088610",
                                "name": "Butter Roti",
                                "category": "Breads",
                                "description": "Unleavened whole wheat flat breads made with wheat flour",
                                "imageId": "dokr31688tpdi1lsthhx",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 8000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "5.0",
                                    "ratingCount": "4 ratings",
                                    "ratingCountV2": "4"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088611",
                                "name": "Plain Naan",
                                "category": "Breads",
                                "description": "An oven-baked or tawa-fried flatbread",
                                "imageId": "ddae929599d5abbc23b2772073ed6ec3",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 6500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.1",
                                    "ratingCount": "9 ratings",
                                    "ratingCountV2": "9"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088612",
                                "name": "Butter Naan",
                                "category": "Breads",
                                "description": "An Indian flatbread made up of all-purpose flour, oil, and milk",
                                "imageId": "rgo8re0bawh2oenc0mp5",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 8000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "27 ratings",
                                    "ratingCountV2": "27"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088613",
                                "name": "Plain Kulcha",
                                "category": "Breads",
                                "description": "An Indian leavened flatbread with leavening agents to make it soft and give it's texture",
                                "imageId": "js5y3jkkymccw4i6vmbm",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 7500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088615",
                                "name": "Paneer Paratha",
                                "category": "Breads",
                                "description": "North Indian flatbread made with whole wheat flour dough and stuffed with savory, spiced, grated paneer",
                                "imageId": "lbwbeopzrsuvodajuvol",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 12500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.8",
                                    "ratingCount": "5 ratings",
                                    "ratingCountV2": "5"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088617",
                                "name": "Aloo Paratha",
                                "category": "Breads",
                                "description": "Indian flatbreads stuffed with a delicious spiced potato mixture",
                                "imageId": "tvdcze5fhfilskfiexf7",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "21 ratings",
                                    "ratingCountV2": "21"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "32202000",
                                "name": "Masala Kulcha",
                                "category": "Breads",
                                "description": "Flat bread recipe prepared mainly with spiced potatoes and paneer stuffing",
                                "imageId": "xbg5dqdmdmjqfoc2oydc",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 9500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.8",
                                    "ratingCount": "6 ratings",
                                    "ratingCountV2": "6"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "32202001",
                                "name": "Garlic Naan",
                                "category": "Breads",
                                "description": "A soft and fluffy Indian flatbread that is nicely infused with an irresistible garlic flavor",
                                "imageId": "rihzlwor2n9fxgaqypkz",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 9500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "32202002",
                                "name": "Cheese Paratha",
                                "category": "Breads",
                                "description": "Crispy unleavened flatbread stuffed with a cheesy, savory filling of cheddar cheese, onions, green chilies",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 13500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "32202003",
                                "name": "Cheese Naan",
                                "category": "Breads",
                                "description": "A delicious naan recipe stuffed with gooey cheese and flavoured with garlic",
                                "imageId": "cjcqjtpfayn0ykkvcdxn",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 12000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "40207705",
                                "name": "Rumali Roti",
                                "category": "Breads",
                                "description": "An exotic thin indian flatbread recipe made with plain flour or maida atta",
                                "imageId": "wylkqxnk4h2yvssk6nuj",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 9500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.9",
                                    "ratingCount": "7 ratings",
                                    "ratingCountV2": "7"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "40232723",
                                "name": "Butter Rumali Roti",
                                "category": "Breads",
                                "description": "Flavourful recipe made up of butter and herbs",
                                "imageId": "upmln63n6hixkudii0sg",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090179",
                                "name": "Lachha Paratha",
                                "category": "Breads",
                                "description": "Crispy flaky layered whole wheat flatbreads made with a simple unleavened dough consisting of whole wheat flour,salt and ghee or oil",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 9500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090180",
                                "name": "Phulka [2 Pcs]",
                                "category": "Breads",
                                "description": "A puffy indian food made with wheat flour",
                                "imageId": "b9onb8q0lizx06q3esp8",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 6500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "27 ratings",
                                    "ratingCountV2": "27"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "North Indian Gravy",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088580",
                                "name": "Aloo Gobi Masala",
                                "category": "North Indian Gravy",
                                "description": "A gravy recipe with diced potatoes and cauliflower prepared with onion, tomato and cashew curry paste",
                                "imageId": "wfuciumwcrqanu0xxbpx",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 26500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "5 ratings",
                                    "ratingCountV2": "5"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088593",
                                "name": "Paneer Butter Masala",
                                "category": "North Indian Gravy",
                                "description": "A creamy and mildly sweet gravy made with butter, tomatoes, cashews, spices and paneer.",
                                "imageId": "mpghxw8dz3qwsltmjrlf",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 28000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "46 ratings",
                                    "ratingCountV2": "46"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "32201974",
                                "name": "Malai Kofta",
                                "category": "North Indian Gravy",
                                "description": "A delicious dish of fried balls of potato and paneer in a rich and creamy mild gravy made with sweet onions and tomatoes.",
                                "imageId": "ikci7n5m2hmw3dwclq3a",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 28000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.0",
                                    "ratingCount": "4 ratings",
                                    "ratingCountV2": "4"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "32201980",
                                "name": "Cashew Masala",
                                "category": "North Indian Gravy",
                                "description": "Spiced cashew nut with seasonings or spice powders added to perk up the flavour.",
                                "imageId": "lomgyzw7vlgmmu5jfclt",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 29000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "32201981",
                                "name": "Palak Paneer",
                                "category": "North Indian Gravy",
                                "description": "Classic North Indian cuisine made with fresh spinach, onions, spices, paneer and herbs",
                                "imageId": "kq6uwcwh5qoaqz7u81rw",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 28000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "39703149",
                                "name": "Paneer Tikka Masala",
                                "category": "North Indian Gravy",
                                "description": "North Indian dish of grilled paneer (Indian cheese) served in a spicy gravy known as Tikka masala",
                                "imageId": "atzcfabdnz5ueci5ac2h",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 30000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090183",
                                "name": "Dhal Fry",
                                "category": "North Indian Gravy",
                                "description": "A delicious lentil recipe that is made with tur dal (pigeon pea lentils), onions, tomatoes and spices",
                                "imageId": "whfdpdztpshivopyayzn",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 23000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.8",
                                    "ratingCount": "4 ratings",
                                    "ratingCountV2": "4"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090185",
                                "name": "Dhal Tadka",
                                "category": "North Indian Gravy",
                                "description": "A Delectable Indian dish where cooked spiced lentils are finished with a tempering made of ghee/ oil and spices",
                                "imageId": "jprwaisfetwi3pjid3ah",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 23000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090186",
                                "name": "Kadai Mushroom",
                                "category": "North Indian Gravy",
                                "description": "A hot, spicy, flavorful and delicious North Indian dish of sautéed button mushrooms, onions and bell peppers in a semi-dry gravy of spiced and tangy tomato sauce",
                                "imageId": "ur1wxyfav6z6b7n4c22l",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 26000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.9",
                                    "ratingCount": "10 ratings",
                                    "ratingCountV2": "10"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090187",
                                "name": "Kadai Paneer",
                                "category": "North Indian Gravy",
                                "description": "A spicy, warming, flavorful and super delicious dish made by cooking paneer & bell peppers in a fragrant, fresh ground spices",
                                "imageId": "odyl414nhbex61ikxgiw",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 28000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "21 ratings",
                                    "ratingCountV2": "21"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090189",
                                "name": "Mixed Veg Curry",
                                "category": "North Indian Gravy",
                                "description": "Yummy curry made by cooking a mixture of vegetables together in a traditional Indian onion-tomato gravy",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 26000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.7",
                                    "ratingCount": "7 ratings",
                                    "ratingCountV2": "7"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Evening Special",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "32202014",
                                "name": "Kothu Parotta",
                                "category": "Evening Special",
                                "description": "Flavourful food where flaky shredded flatbreads are cooked in a spicy curry masala",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 16000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.0",
                                    "ratingCount": "52 ratings",
                                    "ratingCountV2": "52"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "32203228",
                                "name": "Ragi Roast",
                                "category": "Evening Special",
                                "description": "Dosa variety made out of an extremely nutritious millet,",
                                "imageId": "cw6qsmcxocm6sm5qzvqk",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 11000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "isGuiltfree": true,
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.9",
                                    "ratingCount": "16 ratings",
                                    "ratingCountV2": "16"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "40232721",
                                "name": "Chilly Chinese Idly",
                                "category": "Evening Special",
                                "description": "An interesting Indo-Chinese dish made with Idlis served with Chutney and Sambar",
                                "imageId": "wbpa7imzodqzb3fueoeh",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 13000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.7",
                                    "ratingCount": "10 ratings",
                                    "ratingCountV2": "10"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "40372864",
                                "name": "Wheat Parotta",
                                "category": "Evening Special",
                                "imageId": "dlvvabh7jtowok5e9ajq",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 13000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "28 ratings",
                                    "ratingCountV2": "28"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "40474819",
                                "name": "Ragi Uthappam",
                                "category": "Evening Special",
                                "description": "Well nutrious uthappam made using ragi flour, rice flour, onions, coriander, curds, green chillies",
                                "imageId": "arxn0rivu0n54ypzfa5d",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 11500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "isGuiltfree": true,
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.7",
                                    "ratingCount": "9 ratings",
                                    "ratingCountV2": "9"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "83920899",
                                "name": "Chinna Venkayam Podi Uthappam",
                                "category": "Evening Special",
                                "description": "Very soft, light and spongy Uthappams and topped with golden brown shallots on top & served with Onion Chutney",
                                "imageId": "tboefx2gx0tejeuoj4gt",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 13500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "9 ratings",
                                    "ratingCountV2": "9"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "83920903",
                                "name": "Wheat Uthappam",
                                "category": "Evening Special",
                                "description": "An instantly ready and healthy recipe also a fun twist to the regular uttapam",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 12500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "6 ratings",
                                    "ratingCountV2": "6"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "83920906",
                                "name": "Ghee Podi Thattu Idly",
                                "category": "Evening Special",
                                "description": "Classic karnataka style plate idly smeared in ghee, tempered with a basic tadka with idli podi sprinkled",
                                "imageId": "qmfdjnx3mj7zw9qddgby",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 8000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.0",
                                    "ratingCount": "46 ratings",
                                    "ratingCountV2": "46"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090190",
                                "name": "Chilly Parotta",
                                "category": "Evening Special",
                                "description": "One of the many flaky and crunchy parottas involves cutting the flaky parottas into bite sized pieces, dipping them in a thin batter of spiced flour",
                                "imageId": "rhmxglgtakpfyh6uyzq9",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 16000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "81 ratings",
                                    "ratingCountV2": "81"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090191",
                                "name": "Chola Poori [channa & Salad]",
                                "category": "Evening Special",
                                "description": "Very popular lunch/dinner dish in restaurants. Usually, it is served with channa masala.",
                                "imageId": "xqx0d6kodqxocpxlj7bk",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 14500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "85 ratings",
                                    "ratingCountV2": "85"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090192",
                                "name": "Gobi Masala Dosai",
                                "category": "Evening Special",
                                "description": "The soft, creamy and spicy cauliflower masala with crispy dosa taste divine.",
                                "imageId": "jynd0cw2xwu050sqjzvv",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 17000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.8",
                                    "ratingCount": "5 ratings",
                                    "ratingCountV2": "5"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090193",
                                "name": "Mushroom Masala Dosai",
                                "category": "Evening Special",
                                "description": "Nutritious dosa variety with a mushroom masala stuffing",
                                "imageId": "lx5smfnmjdriquoa0eyz",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 18500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "9 ratings",
                                    "ratingCountV2": "9"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090195",
                                "name": "Paneer Masala Dosai",
                                "category": "Evening Special",
                                "description": "A crispy Indian savory crepe with a delicious filling made from paneer",
                                "imageId": "dsusommcbh4ur9jgd2fw",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 18500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "13 ratings",
                                    "ratingCountV2": "13"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090197",
                                "name": "Set Dosai Vadacurry",
                                "category": "Evening Special",
                                "description": "South indian curry or gravy, fresh, easy, flavorful side dish, with set dosa",
                                "imageId": "a4z96hfxrclhedg8da9b",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 13500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "30 ratings",
                                    "ratingCountV2": "30"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Traditional Delights",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090202",
                                "name": "Adai Aviyal",
                                "category": "Traditional Delights",
                                "description": "A protein rich dosa variety made from rice and a mix of lentils goes best with aviyal, a creamy vegetarian curry that is made with curd and coconut milk, along with a variety of seasonal vegetables",
                                "imageId": "i4gvlp9cm5rt7wkziwyn",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 11000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "40 ratings",
                                    "ratingCountV2": "40"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090203",
                                "name": "Chilli Bhajji [3 Pcs]",
                                "category": "Traditional Delights",
                                "description": "A type of fritter made from spicy hot vegetable like chilly",
                                "imageId": "hafbhzcpezuhm6g3r4db",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 9000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "29 ratings",
                                    "ratingCountV2": "29"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090204",
                                "name": "Onion Bhajji [3 Pcs]",
                                "category": "Traditional Delights",
                                "description": "A type of fritter made from spicy hot vegetable like onion",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 9000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.9",
                                    "ratingCount": "35 ratings",
                                    "ratingCountV2": "35"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090205",
                                "name": "Plantain Bhajji [3 Pcs]",
                                "category": "Traditional Delights",
                                "description": "A type of fritter made from spicy hot vegetable like plantain",
                                "imageId": "xpgkefxbc7klqcgp6ppb",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 9000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "69 ratings",
                                    "ratingCountV2": "69"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090206",
                                "name": "Potato Bhajji [3 Pcs]",
                                "category": "Traditional Delights",
                                "description": "A type of fritter made from spicy hot vegetable like potato",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 9000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "13 ratings",
                                    "ratingCountV2": "13"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090208",
                                "name": "Bonda [3 Pcs]",
                                "category": "Traditional Delights",
                                "description": "Crispy fried snack with soft & fluffy texture",
                                "imageId": "uampieeoc8d8ehmd4mcu",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 9000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "116 ratings",
                                    "ratingCountV2": "116"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090211",
                                "name": "Kara Paniyaram [3 Pcs]",
                                "category": "Traditional Delights",
                                "description": "Ball shaped dumplings made with fermented urad dal and rice batter.",
                                "imageId": "scy1qqb3xuxlemyhewqo",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 9000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "59 ratings",
                                    "ratingCountV2": "59"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090213",
                                "name": "Seeragasamba Ghee Pongal",
                                "category": "Traditional Delights",
                                "description": "A delish South Indian savory porridge of seeragasamba rice and mung lentils laced with spices, herbs and ghee",
                                "imageId": "vdodpqqhdtxbssvgz6lx",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 12000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "20 ratings",
                                    "ratingCountV2": "20"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090214",
                                "name": "Special Vadai",
                                "category": "Traditional Delights",
                                "description": "Savoury snack made from soaked or fermented pulses moulded into balls or a doughnut shape and then deep fried",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 6500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.8",
                                    "ratingCount": "10 ratings",
                                    "ratingCountV2": "10"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090215",
                                "name": "Sweet Kozhukattai [2 Pcs]",
                                "category": "Traditional Delights",
                                "description": "Festive South Indian sweet of steamed dumplings made with rice flour dough and stuffed with a filling of coconut and jaggery",
                                "imageId": "mbe0yy9issqpubtkbeka",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 8500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.0",
                                    "ratingCount": "48 ratings",
                                    "ratingCountV2": "48"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090216",
                                "name": "Sweet Paniyaram [3 Pcs]",
                                "category": "Traditional Delights",
                                "description": "Traditional South Indian snack prepared with from pulses and rice using a special paniyaram mould",
                                "imageId": "umfn0vrlthjx4m8mtggo",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 9000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "40 ratings",
                                    "ratingCountV2": "40"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "93196150",
                                "name": "Aappam",
                                "category": "Traditional Delights",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "24 ratings",
                                    "ratingCountV2": "24"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090209",
                                "name": "Kara Kozhukattai [2 Pcs]",
                                "category": "Traditional Delights",
                                "description": "Savory version of kozhukattai varieties, made by steaming rice flour and seasoning mix",
                                "imageId": "gzx72lnsrghok9irzoch",
                                "isVeg": 1,
                                "price": 8500,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 6:30 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "2.8",
                                    "ratingCount": "4 ratings",
                                    "ratingCountV2": "4"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090212",
                                "name": "Kara Poli [1 Pc]",
                                "category": "Traditional Delights",
                                "description": "A perfect power packed delicacy with the added goodness of veggies",
                                "isVeg": 1,
                                "price": 5000,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 6:30 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090217",
                                "name": "Sweet Poli [1 Pc]",
                                "category": "Traditional Delights",
                                "description": "South Indian food which is Soft flat bread filled with a sweet lentil and coconut filling.",
                                "isVeg": 1,
                                "price": 6000,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 6:30 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.5",
                                    "ratingCount": "8 ratings",
                                    "ratingCountV2": "8"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Kids Menu",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "45688664",
                                "name": "French Fries",
                                "category": "Kids Menu",
                                "description": "A thin strips of deep-fried potato topped with a choice of condiments",
                                "imageId": "mbsqv5z2oh2jjlqrx4uf",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 14000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.9",
                                    "ratingCount": "14 ratings",
                                    "ratingCountV2": "14"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090220",
                                "name": "Banana Dosai",
                                "category": "Kids Menu",
                                "description": "An unleavened, south Indian pancake flavored with cardamom and studded with cashew nuts",
                                "imageId": "y5apnkmhkaol7oh2esbf",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 16000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.5",
                                    "ratingCount": "6 ratings",
                                    "ratingCountV2": "6"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090221",
                                "name": "Nutella Dosai",
                                "category": "Kids Menu",
                                "description": "A humble dosa transform into a rich and westernized treat! Coated with Nutella spread, dark chocolate and cheese to boot",
                                "imageId": "najv73b9og3ubpn0wcji",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 16000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.8",
                                    "ratingCount": "4 ratings",
                                    "ratingCountV2": "4"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090222",
                                "name": "Pizza Dosai",
                                "category": "Kids Menu",
                                "description": "A unique fusion recipe made with a traditional south indian dosa batter and pizza toppings",
                                "imageId": "cjqxgsds3dgfazzxrntf",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 19000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.6",
                                    "ratingCount": "10 ratings",
                                    "ratingCountV2": "10"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090223",
                                "name": "Veg. Spring Roll [3 Pcs]",
                                "category": "Kids Menu",
                                "description": "Hot snack of crispy, crunchy rolls filled with a savory mix of vegetable stuffing",
                                "imageId": "t7wwuh6skudd7vzpkvxe",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 14000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.8",
                                    "ratingCount": "13 ratings",
                                    "ratingCountV2": "13"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Chaat Items",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "40759989",
                                "name": "Channa Cutlet",
                                "category": "Chaat Items",
                                "description": "A delicious protein vegetarian kabab recipe also rich indian snack that made by shallow frying a coarse batter of chana",
                                "imageId": "bgctmipatbp9khyoctb5",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "40760016",
                                "name": "Sev Poori",
                                "category": "Chaat Items",
                                "description": "A canape like snack where crispy fried flour discs are topped with flavorful condiments, veggies, herbs, ground spices",
                                "imageId": "otpn9y7hcocbualu89zy",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 9000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.0",
                                    "ratingCount": "4 ratings",
                                    "ratingCountV2": "4"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "40760027",
                                "name": "Bhel Poori",
                                "category": "Chaat Items",
                                "description": "Very popular delicious food snack made with puffed rice, puri, boiled potatoes, onions, various chutneys, herbs",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 9000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.0",
                                    "ratingCount": "4 ratings",
                                    "ratingCountV2": "4"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "40760048",
                                "name": "Channa Samosa",
                                "category": "Chaat Items",
                                "description": "Tangy and spicy dish where Spicy chole (chickpeas) are served with samosa and dollops of yogurt and chutney",
                                "imageId": "dztptisl0vo262yvctnz",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.8",
                                    "ratingCount": "4 ratings",
                                    "ratingCountV2": "4"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "40760111",
                                "name": "Dahi Poori",
                                "category": "Chaat Items",
                                "description": "A mouth watering snack made by stuffing crispy puffed puris with boiled potatoes and topping it curd, green chutney, tamarind or sweet chutney and finely chopped onions and tomatoes",
                                "imageId": "jktgesbnzrqdpvirt6wt",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 9500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.9",
                                    "ratingCount": "8 ratings",
                                    "ratingCountV2": "8"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090227",
                                "name": "Channa Masala",
                                "category": "Chaat Items",
                                "description": "A North Indian curried dish made with white chickpeas, onions, tomatoes, spices and herbs",
                                "imageId": "p90olicmmta6kh07eoyb",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090229",
                                "name": "Cutlet [2 Pcs]",
                                "category": "Chaat Items",
                                "description": "A Delectable combination of mashed and spiced vegetable patty that is dipped in batter, later dredged in bread crumbs and fried in oil",
                                "imageId": "j4kar2rcx85skhfihcfl",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 7000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "9 ratings",
                                    "ratingCountV2": "9"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090232",
                                "name": "Dahi Papdi Chaat [5 Pcs]",
                                "category": "Chaat Items",
                                "description": "An easy and quick yoghurt based chaat recipe made with deep-fried flat puri with other chaat chutneys",
                                "imageId": "ogl86n9vs2mbeowdx3er",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "5.0",
                                    "ratingCount": "3 ratings",
                                    "ratingCountV2": "3"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090235",
                                "name": "Pani Poori [8 Pcs]",
                                "category": "Chaat Items",
                                "description": "An appetizing food of crispy, fried, hollow dough balls that are stuffed with boiled potatoes, steamed moong sprouts",
                                "imageId": "hwxog1mbjotcccvupgb9",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 8000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.3",
                                    "ratingCount": "4 ratings",
                                    "ratingCountV2": "4"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090236",
                                "name": "Samosa [2 Pcs]",
                                "category": "Chaat Items",
                                "description": "A triangular cone/ half moon shaped baked pastry with a savory filling, including ingredients such as spiced potatoes, onions, peas",
                                "imageId": "bp2vbpgrsnujahfs14y4",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 7000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.2",
                                    "ratingCount": "5 ratings",
                                    "ratingCountV2": "5"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "40760006",
                                "name": "Kachodi",
                                "category": "Chaat Items",
                                "description": "A spicy Indian snack shaped like a round flattened ball, consisting of a flour-based shell with different fillings",
                                "isVeg": 1,
                                "price": 10500,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 10:05 pm, today",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "40760056",
                                "name": "Pav Bhaji",
                                "category": "Chaat Items",
                                "description": "A spicy curry of mixed vegetables (bhaji) cooked in a special blend of spices and served with soft buttered pav (bread bun shallow fried)",
                                "imageId": "p3drjrc1n8kbfzxnus92",
                                "isVeg": 1,
                                "price": 10000,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 10:05 pm, today",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090224",
                                "name": "Add On Pav",
                                "category": "Chaat Items",
                                "isVeg": 1,
                                "price": 4000,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 10:05 pm, today",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090225",
                                "name": "Aloo Tokiri",
                                "category": "Chaat Items",
                                "description": "Crisp potato basket stuffed with a delicious, sweet, tangy and spicy filling and topped with sweetened curd, chutneys and crunch of Nylon Sev- taste",
                                "isVeg": 1,
                                "price": 10500,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 10:05 pm, today",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090226",
                                "name": "Chaat Thaali",
                                "category": "Chaat Items",
                                "description": "[Pav Bhaji -1Nos, Pani Poori -2 Nos, Channa Masala, Dhai Poori - 1Nos, Dahi Papdi Chat].An unresistable combination of chat items with flavourfull taste varieties.",
                                "imageId": "ivhzf4oelcxyemxcjlm2",
                                "isVeg": 1,
                                "price": 18500,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 10:05 pm, today",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090228",
                                "name": "Cheese Pav Bajji",
                                "category": "Chaat Items",
                                "description": "A mouthwatering street food pav bhaji recipe topped with a lot of cheese.",
                                "imageId": "uafrhtpl8xdxscbvfzvr",
                                "isVeg": 1,
                                "price": 11500,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 10:05 pm, today",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Hot Beverages",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5859130",
                                "name": "Sukku Coffee",
                                "category": "Hot Beverages",
                                "imageId": "rj1rnffpg3tswri4nsbs",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 4500,
                                "variants": {},
                                "variantsV2": {},
                                "addons": [
                                  {
                                    "groupId": "46387612",
                                    "groupName": "Add On",
                                    "choices": [
                                      {
                                        "id": "32381213",
                                        "name": "Jaggery",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381214",
                                        "name": "Brown Suger",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381215",
                                        "name": "Honey",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 3,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.6",
                                    "ratingCount": "29 ratings",
                                    "ratingCountV2": "29"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5859132",
                                "name": "Filter Coffee",
                                "category": "Hot Beverages",
                                "imageId": "baegcqd3yaesujsqf5h7",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 5500,
                                "variants": {},
                                "variantsV2": {},
                                "addons": [
                                  {
                                    "groupId": "46387599",
                                    "groupName": "Add On",
                                    "choices": [
                                      {
                                        "id": "32381213",
                                        "name": "Jaggery",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381214",
                                        "name": "Brown Suger",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381215",
                                        "name": "Honey",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 3,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "204 ratings",
                                    "ratingCountV2": "204"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5859133",
                                "name": "Masala Tea",
                                "category": "Hot Beverages",
                                "imageId": "rw0alppjtvmibmpvr4te",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 6000,
                                "variants": {},
                                "variantsV2": {},
                                "addons": [
                                  {
                                    "groupId": "46387607",
                                    "groupName": "Add On",
                                    "choices": [
                                      {
                                        "id": "32381213",
                                        "name": "Jaggery",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381214",
                                        "name": "Brown Suger",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381215",
                                        "name": "Honey",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 3,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "27 ratings",
                                    "ratingCountV2": "27"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "32203648",
                                "name": "Horlicks",
                                "category": "Hot Beverages",
                                "imageId": "c5kthocdledk17l6pc8l",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 8000,
                                "variants": {},
                                "variantsV2": {},
                                "addons": [
                                  {
                                    "groupId": "46387601",
                                    "groupName": "Add On",
                                    "choices": [
                                      {
                                        "id": "32381213",
                                        "name": "Jaggery",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381214",
                                        "name": "Brown Suger",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381215",
                                        "name": "Honey",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 3,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "3 ratings",
                                    "ratingCountV2": "3"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "32204008",
                                "name": "Boost",
                                "category": "Hot Beverages",
                                "imageId": "e1sashikhalobs6g9d2s",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 8000,
                                "variants": {},
                                "variantsV2": {},
                                "addons": [
                                  {
                                    "groupId": "46387598",
                                    "groupName": "Add On",
                                    "choices": [
                                      {
                                        "id": "32381213",
                                        "name": "Jaggery",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381214",
                                        "name": "Brown Suger",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381215",
                                        "name": "Honey",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 3,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "4 ratings",
                                    "ratingCountV2": "4"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "33827091",
                                "name": "Milk",
                                "category": "Hot Beverages",
                                "imageId": "hrjnayxv5pq0iu0u5j8n",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 4500,
                                "variants": {},
                                "variantsV2": {},
                                "addons": [
                                  {
                                    "groupId": "46387608",
                                    "groupName": "Add On",
                                    "choices": [
                                      {
                                        "id": "32381213",
                                        "name": "Jaggery",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381214",
                                        "name": "Brown Suger",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381215",
                                        "name": "Honey",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 3,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "18 ratings",
                                    "ratingCountV2": "18"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "39622047",
                                "name": "Lemon Tea",
                                "category": "Hot Beverages",
                                "imageId": "tbeex1krk26rqpp3r5xe",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 4500,
                                "variants": {},
                                "variantsV2": {},
                                "addons": [
                                  {
                                    "groupId": "46387605",
                                    "groupName": "Add On",
                                    "choices": [
                                      {
                                        "id": "32381213",
                                        "name": "Jaggery",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381214",
                                        "name": "Brown Suger",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381215",
                                        "name": "Honey",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 3,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "6 ratings",
                                    "ratingCountV2": "6"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "83920900",
                                "name": "Karupatti Coffee",
                                "category": "Hot Beverages",
                                "imageId": "mwyh6nvshwnifte8uudk",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 7500,
                                "variants": {},
                                "variantsV2": {},
                                "addons": [
                                  {
                                    "groupId": "46387603",
                                    "groupName": "Add On",
                                    "choices": [
                                      {
                                        "id": "32381213",
                                        "name": "Jaggery",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381214",
                                        "name": "Brown Suger",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381215",
                                        "name": "Honey",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 3,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.8",
                                    "ratingCount": "5 ratings",
                                    "ratingCountV2": "5"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "83920901",
                                "name": "Black Coffee",
                                "category": "Hot Beverages",
                                "imageId": "l8v6jovrardfbsfa7jgm",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 4000,
                                "variants": {},
                                "variantsV2": {},
                                "addons": [
                                  {
                                    "groupId": "46387597",
                                    "groupName": "Add On",
                                    "choices": [
                                      {
                                        "id": "32381213",
                                        "name": "Jaggery",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381214",
                                        "name": "Brown Suger",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381215",
                                        "name": "Honey",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 3,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090238",
                                "name": "Add Ons [brown Sugar]",
                                "category": "Hot Beverages",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 1000,
                                "variants": {},
                                "variantsV2": {},
                                "addons": [
                                  {
                                    "groupId": "46387593",
                                    "groupName": "Add On",
                                    "choices": [
                                      {
                                        "id": "32381213",
                                        "name": "Jaggery",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381214",
                                        "name": "Brown Suger",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381215",
                                        "name": "Honey",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 3,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.5",
                                    "ratingCount": "6 ratings",
                                    "ratingCountV2": "6"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090240",
                                "name": "Add Ons [honey]",
                                "category": "Hot Beverages",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 1000,
                                "variants": {},
                                "variantsV2": {},
                                "addons": [
                                  {
                                    "groupId": "46387594",
                                    "groupName": "Add On",
                                    "choices": [
                                      {
                                        "id": "32381213",
                                        "name": "Jaggery",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381214",
                                        "name": "Brown Suger",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381215",
                                        "name": "Honey",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 3,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090242",
                                "name": "Add Ons [jaggery]",
                                "category": "Hot Beverages",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 1000,
                                "variants": {},
                                "variantsV2": {},
                                "addons": [
                                  {
                                    "groupId": "46387595",
                                    "groupName": "Add On",
                                    "choices": [
                                      {
                                        "id": "32381213",
                                        "name": "Jaggery",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381214",
                                        "name": "Brown Suger",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381215",
                                        "name": "Honey",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 3,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090256",
                                "name": "Panakalkandu Paal",
                                "category": "Hot Beverages",
                                "imageId": "mkmsttslhatkud5ywdqu",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 7000,
                                "variants": {},
                                "variantsV2": {},
                                "addons": [
                                  {
                                    "groupId": "46387611",
                                    "groupName": "Add On",
                                    "choices": [
                                      {
                                        "id": "32381213",
                                        "name": "Jaggery",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381214",
                                        "name": "Brown Suger",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381215",
                                        "name": "Honey",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 3,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.9",
                                    "ratingCount": "13 ratings",
                                    "ratingCountV2": "13"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090261",
                                "name": "Tea",
                                "category": "Hot Beverages",
                                "imageId": "ltzio8qwsdjickdvkkca",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 5000,
                                "variants": {},
                                "variantsV2": {},
                                "addons": [
                                  {
                                    "groupId": "46387613",
                                    "groupName": "Add On",
                                    "choices": [
                                      {
                                        "id": "32381213",
                                        "name": "Jaggery",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381214",
                                        "name": "Brown Suger",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381215",
                                        "name": "Honey",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 3,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.6",
                                    "ratingCount": "73 ratings",
                                    "ratingCountV2": "73"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "92595366",
                                "name": "Hot Beverages",
                                "category": "Hot Beverages",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 4200,
                                "variants": {},
                                "variantsV2": {},
                                "addons": [
                                  {
                                    "groupId": "51725134",
                                    "groupName": "Add On",
                                    "choices": [
                                      {
                                        "id": "32381213",
                                        "name": "Jaggery",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381214",
                                        "name": "Brown Suger",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "32381215",
                                        "name": "Honey",
                                        "price": 1000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 3,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Cold Beverages",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5859128",
                                "name": "Sweet Lassi",
                                "category": "Cold Beverages",
                                "description": "A yogurt based creamy, sweetened and chilled beverage from Punjabi cuisine",
                                "imageId": "zb3jpqqf0rrngbjwjuee",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "11 ratings",
                                    "ratingCountV2": "11"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "32204009",
                                "name": "Badam Milk",
                                "category": "Cold Beverages",
                                "description": "A flavourfull Indian drink made with milk and almonds and flavored with saffron and cardamom",
                                "imageId": "wbxkdg3y77grh17au1ux",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 12000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "8 ratings",
                                    "ratingCountV2": "8"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "32204010",
                                "name": "Rose Milk",
                                "category": "Cold Beverages",
                                "description": "An aromatic also a flavored drink and is good for beating the summer heat with the addition of rose essence",
                                "imageId": "jbedlr32v8up4adqp7he",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 12000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "11 ratings",
                                    "ratingCountV2": "11"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "83920904",
                                "name": "Nannari",
                                "category": "Cold Beverages",
                                "description": "A wonder herb most effective in cooling the body in summer, when mixed with lime juice and palm sugar",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "83920905",
                                "name": "Cold Coffee",
                                "category": "Cold Beverages",
                                "description": "Prepared by brewing coffee normally and then serving it over ice or in cold milk",
                                "imageId": "lq1u5zjggtyrdrtd8ami",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 12500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "5 ratings",
                                    "ratingCountV2": "5"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090265",
                                "name": "Salt Lassi",
                                "category": "Cold Beverages",
                                "description": "Salted version of lassi is a contrasting variation to the popular sweet lassi spiced and flavored with black salt, roasted cumin powder and garnished with mint leaves",
                                "imageId": "x2vfcb1hw8ipupu4afi2",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Fresh Fruit Juices",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088668",
                                "name": "Apple Juice",
                                "category": "Fresh Fruit Juices",
                                "description": "A healthy fruit juice made by the maceration and pressing of an apple",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 14500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090268",
                                "name": "Salt Fresh Lime Juice",
                                "category": "Fresh Fruit Juices",
                                "description": "Ultimate thirst quencher drink made of refreshing combination of saltiness of Lime",
                                "imageId": "yimey2nn3zl7wnahonq2",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 9000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090269",
                                "name": "Orange [seasonal]",
                                "category": "Fresh Fruit Juices",
                                "description": "An aromatic liquid while squeezing orange provided with any add on like sugar or honey which is rich in vitamins.",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 13500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "2.8",
                                    "ratingCount": "4 ratings",
                                    "ratingCountV2": "4"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090270",
                                "name": "Pineapple",
                                "category": "Fresh Fruit Juices",
                                "description": "A best nutrient rich juice among all fruit juices with unique mesmerising flavour",
                                "imageId": "oadpr4kaoptyo78qtsuq",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 14000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.8",
                                    "ratingCount": "4 ratings",
                                    "ratingCountV2": "4"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090271",
                                "name": "Pomegranate",
                                "category": "Fresh Fruit Juices",
                                "description": "A natural juice isolated from the fruit of the plant Punica granatum",
                                "imageId": "r0bqveio5nksa54i7j6x",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 16000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "18 ratings",
                                    "ratingCountV2": "18"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090272",
                                "name": "Sathukudi [seasonal]",
                                "category": "Fresh Fruit Juices",
                                "description": "A refreshing and healthy juice made with sweet lime",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 13500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.4",
                                    "ratingCount": "7 ratings",
                                    "ratingCountV2": "7"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090273",
                                "name": "Sweet Fresh Lime Juice",
                                "category": "Fresh Fruit Juices",
                                "description": "Ultimate thirst quencher drink made of refreshing combination of sweetness of Lime",
                                "imageId": "qivgptrnodc1vksssvet",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 9000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "8 ratings",
                                    "ratingCountV2": "8"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090274",
                                "name": "Watermelon Juice",
                                "category": "Fresh Fruit Juices",
                                "description": "With a rosy hue and bright, fresh flavor, this delicious Watermelon Juice is perfect candidate to replace sugary beverages",
                                "imageId": "huuuq8iqcpmoibn7ltcs",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 13500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.8",
                                    "ratingCount": "8 ratings",
                                    "ratingCountV2": "8"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Milk Shakes",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088677",
                                "name": "Mango Milkshakes",
                                "category": "Milk Shakes",
                                "description": "Tempting fruit drink prepared by blending ripe mango pieces, milk and sugar",
                                "imageId": "dkq4f8zrwsdp16x4uw8f",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 17000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088681",
                                "name": "Chocolate Milkshakes",
                                "category": "Milk Shakes",
                                "description": "A rich and creamy milkshake basically a cold sweet beverage prepared from cocoa powder, full cream milk and vanilla ice cream",
                                "imageId": "wdxdvrur8xi67nj8jpri",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 17000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "83920914",
                                "name": "Nutella & Oreo Milkshakes",
                                "category": "Milk Shakes",
                                "description": "Oreo milkshake will knock your socks off! It's packed with Oreo chunks and vanilla ice cream and drizzled with hot fudge",
                                "imageId": "w2ktz4qjez3gtupbtbt6",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 18000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090275",
                                "name": "Apple Milkshakes",
                                "category": "Milk Shakes",
                                "description": "A delicious and protein rich shake made with apples, nuts & milk",
                                "imageId": "lmdofs8vmpbyupsgikz6",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 16000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090277",
                                "name": "Banana Milkshakes",
                                "category": "Milk Shakes",
                                "description": "A healthy shake prepared with ripe banana and milk",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 16000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090280",
                                "name": "Dates Milkshakes",
                                "category": "Milk Shakes",
                                "description": "Creamy,  recipe prepared by using Dates, almonds, and milk",
                                "imageId": "pss6hnifsrb7iqpkhnio",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 17000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.7",
                                    "ratingCount": "3 ratings",
                                    "ratingCountV2": "3"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090281",
                                "name": "Strawberry Milkshakes",
                                "category": "Milk Shakes",
                                "description": "A delicious drink made with strawberries, milk, ice cream and flavoring ingredients like vanilla extract or strawberry",
                                "imageId": "dbqf6xnc2jdg92l896k7",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 17000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090282",
                                "name": "Vannila Milkshakes",
                                "category": "Milk Shakes",
                                "description": "A smooth and creamy concoction of vanilla ice cream, milk, vanilla extract topped up with whipped cream",
                                "imageId": "xaoj1s5bipedja2wwknb",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 16000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "92595368",
                                "name": "Coffee Milkshakes",
                                "category": "Milk Shakes",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 18000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Desserts",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090283",
                                "name": "Basundhi",
                                "category": "Desserts",
                                "description": "A sweetened condensed milk made by boiling milk on low heat until the milk is reduced by half.",
                                "imageId": "itu9l2n9uys36kocmayd",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 9000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "25 ratings",
                                    "ratingCountV2": "25"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090284",
                                "name": "Gulab Jamun [1 Pc]",
                                "category": "Desserts",
                                "description": "A milk-solid-based dessert consisting of delicious doughnuts made of powdered milk that are soaked in rose-flavored sugar syrup",
                                "imageId": "y0xixfkn7p4enz4b39b5",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 6000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.8",
                                    "ratingCount": "12 ratings",
                                    "ratingCountV2": "12"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090286",
                                "name": "Rasamalai",
                                "category": "Desserts",
                                "description": "An appetizing dessert consists of flattened balls of chhena soaked in malai (clotted cream) flavoured with cardamom.",
                                "imageId": "mvdhqewskdrihk1xtptm",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 8000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.0",
                                    "ratingCount": "23 ratings",
                                    "ratingCountV2": "23"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090287",
                                "name": "Sweet Of The Day",
                                "category": "Desserts",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.5",
                                    "ratingCount": "6 ratings",
                                    "ratingCountV2": "6"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090285",
                                "name": "Rasagula",
                                "category": "Desserts",
                                "description": "A syrupy dessert made from ball-shaped dumplings of chhena (an Indian cottage cheese) and semolina dough, cooked in light sugar syrup made of sugar",
                                "isVeg": 1,
                                "price": 7000,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 6:30 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Extra Items",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "98150184",
                                "name": "Extra Kurma",
                                "category": "Extra Items",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 7000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.0",
                                    "ratingCount": "6 ratings",
                                    "ratingCountV2": "6"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "98150185",
                                "name": "Extra Sambar",
                                "category": "Extra Items",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 7000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "41 ratings",
                                    "ratingCountV2": "41"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "98190413",
                                "name": "Extra Vadacurry",
                                "category": "Extra Items",
                                "imageId": "ov7kwazidqeoarwetxaz",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 9000,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.9",
                                    "ratingCount": "29 ratings",
                                    "ratingCountV2": "29"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "50105230",
                                "name": "Extra Rasam",
                                "category": "Extra Items",
                                "isVeg": 1,
                                "price": 7000,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 11:02 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.7",
                                    "ratingCount": "9 ratings",
                                    "ratingCountV2": "9"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "50105240",
                                "name": "Extra Rice",
                                "category": "Extra Items",
                                "isVeg": 1,
                                "price": 8000,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 11:02 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.0",
                                    "ratingCount": "4 ratings",
                                    "ratingCountV2": "4"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "50105242",
                                "name": "Extra Poriyal",
                                "category": "Extra Items",
                                "isVeg": 1,
                                "price": 7000,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 11:02 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "12 ratings",
                                    "ratingCountV2": "12"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "98150182",
                                "name": "Extra Kara Kuzhambu",
                                "category": "Extra Items",
                                "isVeg": 1,
                                "price": 7000,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 11:02 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.8",
                                    "ratingCount": "6 ratings",
                                    "ratingCountV2": "6"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "98150183",
                                "name": "Extra Kottu",
                                "category": "Extra Items",
                                "isVeg": 1,
                                "price": 7000,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 11:02 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.6",
                                    "ratingCount": "9 ratings",
                                    "ratingCountV2": "9"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Thokku ",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "98150189",
                                "name": "Puli Thokku",
                                "category": "Thokku ",
                                "description": "A paste used to make puli saadam or puliodharai/ Tamarind rice.",
                                "imageId": "x4u1st17z8xuia5f23hv",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 11905,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "98150190",
                                "name": "Sundakkai Vatha Kulambu",
                                "category": "Thokku ",
                                "description": "A traditional, tangy gravy made by tempering veggies with spices, onion, tomato and cooking it with tamarind extract & spice powders.",
                                "imageId": "fwliu0vqhx4kufcckm16",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 11905,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.9",
                                    "ratingCount": "7 ratings",
                                    "ratingCountV2": "7"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "98150191",
                                "name": "Tomato Thokku",
                                "category": "Thokku ",
                                "description": "A spicy, tangy tomato-based gravy which can be used as side dish for steamed rice, idli or dosa and even for roti and chapathi.",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 11905,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.7",
                                    "ratingCount": "3 ratings",
                                    "ratingCountV2": "3"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "98150192",
                                "name": "Onion Thokku",
                                "category": "Thokku ",
                                "description": "A relish made with onions and tomatoes cooked in few spice powders.",
                                "imageId": "uhixr80mr4oa3jeojswo",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 11905,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.7",
                                    "ratingCount": "3 ratings",
                                    "ratingCountV2": "3"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "98150186",
                                "name": "Curry Leaves Thokku",
                                "category": "Thokku ",
                                "description": "A thick spicy gravy made by cooking curry leaves paste in the tamarind based gravy with spices.",
                                "imageId": "qkmhc952fo6swirvgc76",
                                "isVeg": 1,
                                "price": 11905,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 6:30 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "98150187",
                                "name": "Malli Thokku",
                                "category": "Thokku ",
                                "description": "Sweet and tangy kothamalli thokku Perfect accompaniment for chapati and dosa.",
                                "isVeg": 1,
                                "price": 11905,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 6:30 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "98150188",
                                "name": "Pudina Thokku",
                                "category": "Thokku ",
                                "description": "A spicy, tangy, salty and flavorful multipurpose dish.",
                                "isVeg": 1,
                                "price": 11905,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 6:30 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Podi",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "98150169",
                                "name": "Andhra Paruppu Podi",
                                "category": "Podi",
                                "description": "Podi made using various dals and red chillies, A quick, easy boost of flavor to any meal.",
                                "imageId": "hdekarhx3oookdqu81h6",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 11500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.8",
                                    "ratingCount": "5 ratings",
                                    "ratingCountV2": "5"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "98150172",
                                "name": "Black Till Idli Podi",
                                "category": "Podi",
                                "description": "A flavourful powder made by grinding roasted lentils, ellu (sesame /til) spices & herbs.",
                                "imageId": "r0cr4ogampthrsebev9c",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 13500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.7",
                                    "ratingCount": "3 ratings",
                                    "ratingCountV2": "3"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "98150173",
                                "name": "Poondu Podi",
                                "category": "Podi",
                                "description": "An aromatic South Indian spice powder made using chana dal, urad dal, red chili and garlic.",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 11500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "98150174",
                                "name": "Idli Podi",
                                "category": "Podi",
                                "description": "A flavorful condiment made of lentils, seeds and spices.",
                                "imageId": "hjdtwivrbsx6m7f5ry7i",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 11500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "98150179",
                                "name": "Pakarkai Podi",
                                "category": "Podi",
                                "description": "A simple and easy podi made using bitter gourd, pairs well with hot rice and even curd rice too.",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 13500,
                                "variants": {},
                                "variantsV2": {},
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "98150170",
                                "name": "Curry Leaves Podi",
                                "category": "Podi",
                                "description": "Aromatic spice powder used as taste enhancer",
                                "isVeg": 1,
                                "price": 10476,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 6:30 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "98150177",
                                "name": "Nellikai Podi",
                                "category": "Podi",
                                "description": "Spice, Gluten Free and Vegan Recipe made out of Gooseberry after removal of seeds, which is rich in nutrition",
                                "imageId": "ah77lckrcogg27cyf8ir",
                                "isVeg": 1,
                                "price": 13500,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 6:30 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "98150181",
                                "name": "Pudina Podi",
                                "category": "Podi",
                                "description": "An aromatic and flavorful spice mix made by roasting and blending udad dhall , chillies and fresh mint leaves.",
                                "isVeg": 1,
                                "price": 13500,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 6:30 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Pongal Special Combo",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "108889713",
                                "name": "Pongal Feast",
                                "category": "Pongal Special Combo",
                                "description": "Sakarai Pongal – vellam, Seeraga samba Pongal – Ven pongal, Iyengar Sakarai Pongal - Karupatti",
                                "imageId": "39aaa5dda26ae184ce3149f0c4e2ce36",
                                "isVeg": 1,
                                "price": 32500,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 6:30 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "108889714",
                                "name": "Pongal O Pongal",
                                "category": "Pongal Special Combo",
                                "description": "Sarkarai Pongal, Semiya Payasam , Special Vadai, Boiled Rice, Kadhamba sambar, Pineapple rasam, Vendakkai More kuzhambu, Red Pumpkin Pachadi, Aviyal, Poli, Urulai Pattani Poriyal, Appalam, Pickle,  Potato chips, Banana, Thuvayal, Biriyani , Raitha",
                                "imageId": "e1854b34cc5e82e24274430a2ef3b084",
                                "isVeg": 1,
                                "price": 35000,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 6:30 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Meals",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088563",
                                "name": "Sambar Rice",
                                "category": "Meals",
                                "description": "A typical south indian tangy spicy sambar rice meal, made of cooked rice, well chopped lentils, vegetables, dried red chilies, asafoetida, herbs and ground spices.",
                                "imageId": "qe1tgvk5j6i5jochnocr",
                                "isVeg": 1,
                                "price": 10000,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 3:26 pm, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "145 ratings",
                                    "ratingCountV2": "145"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088564",
                                "name": "Rice Of The Day",
                                "category": "Meals",
                                "description": "Items are subjective to change based on the availability",
                                "imageId": "duveufvofjtbfj0yf8ax",
                                "isVeg": 1,
                                "price": 10000,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 3:26 pm, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.0",
                                    "ratingCount": "27 ratings",
                                    "ratingCountV2": "27"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088565",
                                "name": "Curd Rice",
                                "category": "Meals",
                                "description": "A yummy rice dish made of creamy yoghurt with sauteed split chickpeas, black gram, mustard and herbs served with spicy pickle.",
                                "imageId": "cvbaipv4w9g8xtgcgp8w",
                                "isVeg": 1,
                                "price": 10000,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 3:26 pm, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "161 ratings",
                                    "ratingCountV2": "161"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "5088566",
                                "name": "Business Meals",
                                "category": "Meals",
                                "description": "[Sweet, Chapathi, Veg Kuruma, Sambar Rice, Veg Briyani, Vadams, Poriyal, Raitha & Curd Rice With Pickle].An appetizing Meal variety with condiment of sambar rice veg briyani chappathi  curd rice with fabulaous side dishes served.",
                                "imageId": "f64270da42593f9b3626adedfb7e3d7a",
                                "isVeg": 1,
                                "price": 19000,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 3:26 pm, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.6",
                                    "ratingCount": "143 ratings",
                                    "ratingCountV2": "143"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "47166318",
                                "name": "North Indian Meals",
                                "category": "Meals",
                                "description": "[Soup, Starters Of The Day, Naan Or Rotti, Curry Of The Day, Dal Fry, Tandoori Papad, Briyani, Jeera Rice, Sweet & Fruit Salad With Icecream].A Palatable meal variety with taste of North indian special Naan/Roti, curry of day, dal fry, briyani and dashing Tandoori Papad with jeera Rice along with sweet and fruit salad.",
                                "imageId": "d8bvqlek4b917yroj2ee",
                                "isVeg": 1,
                                "price": 29000,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 3:26 pm, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.2",
                                    "ratingCount": "38 ratings",
                                    "ratingCountV2": "38"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "85090147",
                                "name": "NVVB Special Meals",
                                "category": "Meals",
                                "description": "[Sweet, Payasam, Soup, Chapathi, Veg Kuruma, Veg Briyani, Raitha, Boiled Rice, Dhall Powder With Ghee, Sambar, Rasam, Spl Kulambu, Kootu, Poriyal , Spl Poriyal, Curd, Pickle, Appalam & Fruit Salad With Icecream].A combination of meal variety consisting different varient of sweet, soup, chappathi with kurma and raitha, veg briyani, typical dhall powder along with ghee and south indian meal side dishes like kootu, sambar, poriyal, appalam. Delicious Fruit salad also added to this meal variety.",
                                "imageId": "uwcl3a45peawavgjyoid",
                                "isVeg": 1,
                                "price": 29000,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 3:26 pm, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.5",
                                    "ratingCount": "80 ratings",
                                    "ratingCountV2": "80"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "90777111",
                                "name": "Madras Box Meals",
                                "category": "Meals",
                                "description": "(Sweet, Boiled Rice, Sambar, Rasam, Spl Kulambu, Kootu, Poriyal, Curd, Pickle, Appalam, More Milagai).A scrumptious south indian meal consist of cooked rice, traditional sweet and well assorted spiced vegan side dishes.",
                                "imageId": "q5bsppxqzjmjvdmf4unq",
                                "isVeg": 1,
                                "price": 19000,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 3:26 pm, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.8",
                                    "ratingCount": "318 ratings",
                                    "ratingCountV2": "318"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "98188816",
                                "name": "Banana Leaf",
                                "category": "Meals",
                                "isVeg": 1,
                                "price": 600,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 3:26 pm, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.8",
                                    "ratingCount": "4 ratings",
                                    "ratingCountV2": "4"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Sunday Special Pongal",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "92595375",
                                "name": "Sweet Pongal(50gm)",
                                "category": "Sunday Special Pongal",
                                "isVeg": 1,
                                "price": 4000,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 10 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.3",
                                    "ratingCount": "3 ratings",
                                    "ratingCountV2": "3"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Chithirai Special Meals",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "90457120",
                                "name": "Chithirai Special Meals",
                                "category": "Chithirai Special Meals",
                                "description": "Nannari Sarbath,Tirunelveli Halwa,Ada Pradhaman,Maravalli Kizhangu Poriyal,Nellai Avial,Poosanikai Kootu,Pulungal Arisi Sadham,Nei Paruppu,Kadamba Sambar,Thakkali Rasam,Saiva Eral Kuzhambu,Thool Kuzhambu,Kool Vathal,Masala Vadai,Thayir,Mangai Urugai,Inji Puli,Nagercoil Matti Pazham,Beeda",
                                "isVeg": 1,
                                "price": 39900,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 3:30 pm, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Chikki",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "98150171",
                                "name": "Till Chikki",
                                "category": "Chikki",
                                "description": "A crunchy and nutty sweet made primarily with white sesame seeds or ellu and Jaggery.",
                                "imageId": "abqqehv0ok1duujjhvnd",
                                "isVeg": 1,
                                "price": 10000,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 6:30 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "98150178",
                                "name": "Ompodi Chikki",
                                "category": "Chikki",
                                "description": "A simple, light and also a versatile snack of India.",
                                "imageId": "wbtjsbvssh99obw7lzzt",
                                "isVeg": 1,
                                "price": 10000,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 6:30 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "98150180",
                                "name": "Pottu Kadala Chikki",
                                "category": "Chikki",
                                "description": "A healthy and protein rich snack made with roasted gram and jaggery.",
                                "isVeg": 1,
                                "price": 10000,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 6:30 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.0",
                                    "ratingCount": "3 ratings",
                                    "ratingCountV2": "3"
                                  }
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "101619184",
                                "name": "Crushed Peanut Chikki",
                                "category": "Chikki",
                                "description": "A very popular Indian brittle (sweet) recipe made of two main ingredients crushed roasted peanuts mixed with melted jaggery syrup.",
                                "isVeg": 1,
                                "price": 12500,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 6:30 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "101619186",
                                "name": "Karuppatti Peanut Chikki",
                                "category": "Chikki",
                                "description": "A protein rich snack which is made up of natural Karupatti/Palm Jaggery.",
                                "imageId": "lptkbfma3aae2exkf9dy",
                                "isVeg": 1,
                                "price": 12500,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 6:30 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "101619187",
                                "name": "Peanut Chikki",
                                "category": "Chikki",
                                "description": "Traditional rectangle cut Peanut Candy, toothsome to rejoice",
                                "imageId": "a9xwfcbza0nvar0ywtan",
                                "isVeg": 1,
                                "price": 9524,
                                "variants": {},
                                "variantsV2": {},
                                "nextAvailableAtMessage": "Next available at 6:30 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {},
                                "type": "ITEM",
                                "itemBadge": {},
                                "badgesV2": {},
                                "ratings": {
                                  "aggregatedRating": {}
                                }
                              },
                              "analytics": {},
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                        "type": "FSSAI",
                        "imageId": "fssai_final_edss9i",
                        "text": [
                          "License No. 12418008004534"
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                        "name": "Namma Veedu Vasanta Bhavan",
                        "area": "Medavakkam",
                        "completeAddress": "5/521, Velachery Main Road, Medavakkam, Chennai"
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "firstOffsetRequest": true
    },
    "tid": "c3a9cada-0981-490c-b145-dcf73118937e",
    "sid": "636cbdf3-1287-4804-9104-1dd1c8cc18b3",
    "deviceId": "3993225c-7d54-3bb6-2769-07fc63cf9b72",
    "csrfToken": "VO8enfGjDjJO-L-4k-5R9wewdC1RrUTiZnV46XPk"
  }
  ]