import logo from "./../assets/logo.png";
import basket from "./../assets/icon-basket.svg";
import between from "./../assets/Product-categories/between.png";
import vases from "./../assets/Product-categories/vase-intro.png";
import mugs from "./../assets/Product-categories/mugs-intro.png";
import plates from "./../assets/Product-categories/plates-intro.png";
import blackGold from "./../assets/Gold-black-pottery/gold-black-things.png";
import orangeCeramic from "./../assets/Orange-ceramic/orange-ceramic-thinks.png";

let state = {
    header: {
        links: [
            {
                name: "HOME",
                address: "/"

            },
            {
                name: "ABOUT",
                address: "/about"
            },
            {
                name: "SHOP",
                address: "/shop"
            },
            {
                name: "CONTACTS",
                address: "/contacts"
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
        img: mugs,
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
    cards: {
        overTitle: "OUR ONLINE STORE",
        title: "Pottery Collection"
    }

}

export default state;