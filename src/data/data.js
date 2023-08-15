import logo from './../assets/logo.png';
import basket from "../assets/icon-basket.svg";
import between from "../assets/Product-categories/between.png";
import vases from "../assets/Product-categories/vase-intro.png";
import mugs from "../assets/Product-categories/mugs-intro.png";
import plates from "../assets/Product-categories/plates-intro.png";
import blackGold from "../assets/Gold-black-pottery/gold-black-things.png";
import orangeCeramic from "../assets/Orange-ceramic/orange-ceramic-thinks.png";

import card1 from "../assets/Collection/card1.png";
import card2 from "../assets/Collection/card2.png";
import card3 from "../assets/Collection/card3.png";
import card4 from "../assets/Collection/card4.png";
import card5 from "../assets/Collection/card5.png";
import card6 from "../assets/Collection/card6.png";


const state = {
    header: {
        links: [
            {
                name: "HOME",
                path: "/"

            },
            {
                name: "ABOUT",
                path: "/about"
            },
            {
                name: "SHOP",
                path: "/cards"
            },
            {
                name: "CONTACTS",
                path: "/contacts"
            }
        ],
        logo: {
            logo: logo
        },
        basket: {
           basket: basket
        },
        titleH1: {
            overTitle: "POMPEO POTTERY",
            title1: "Unique Porcelain",
            title2: "Stone Collection",
            subTitle: "Unique & modern pottery made by our master in porcelain & stones",
            button: "SHOP COLLECTION"
        }
    },

    productCategories: {
        overTitle: "PRODUCT CATEGORIES",
        title1: "Porcelain",
        between: between,
        title2: "Pottery",
        imgVases: vases,
        vases: "VASES",
        imgMugs: mugs,
        mugs: "MUGS",
        imgPlates: plates,
        plates: "PLATES",
        flexTitle1: "We Provide Premium Pottery",
        flexText1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.",
        flexTitle2: "Hand Grafter Pottery since 1990",
        flexText2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere."
  },
    potteryAndCeramic: {
        img1: blackGold,
        title1: "Gold&Black Pottery",
        text1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute.",
        title2: "Orange Ceramic",
        text2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute.",
        img2: orangeCeramic
    },
    productData: {
        overTitle: "OUR ONLINE STORE",
        title: "Pottery Collection",
        cards: [
            {
                id: 1,
                img: card1,
                title: "Decor Plate",
                price: "$ 65.00 USD"
            },
            {
                id: 2,
                img: card2,
                title: "Mint Pottery",
                price: "$ 75.00 USD"
            },
            {
                id: 3,
                img: card3,
                title: "Set Of Potters",
                price: "$ 125.00 USD"
            },
            {
                id: 4,
                img: card4,
                title: "Orange Ceramic",
                price: "$ 55.00 USD"
            },
            {
                id: 5,
                img: card5,
                title: "Dark Bowl",
                price: "$ 115.00 USD"
            },
            {
                id: 6,
                img: card6,
                title: "Square Pottery",
                price: "$ 75.00 USD"
            }
        ]
    }

}


export { state };