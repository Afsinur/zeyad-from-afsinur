//Cassis24kLongSleave
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import RelatedViewCollection from "../../../components/home/relatedViewCollection";
import Customize from "../../../components/customize/Customize";

const Cassis24kLongSleave = () => {
  let imgDataArr = [
    {
      name_: "Cassic 24k Long Sleave",
      price_: "$124.24",
      colors_: "white, black, yellow, gray, pink, beige, gold, purple, blue",
      sizes_: ["S", "X", " L"],
      color1_: "#eff1b7",
      color2_: "#9cf1ff",
      color3_: "#cfcfcf",
      dtImgArr: [
        {
          src: `/img/customize/Cassis24kLongSleave/1.jpg`,
        },
        {
          src: `/img/customize/Cassis24kLongSleave/2.jpg`,
        },
      ],
    },
  ];

  return (
    <>
      <main>
        <Header />
        {imgDataArr &&
          imgDataArr.map((itm, i) => <Customize itm={itm} key={i} />)}
        <RelatedViewCollection />
        <Footer />
      </main>
    </>
  );
};

export default Cassis24kLongSleave;
