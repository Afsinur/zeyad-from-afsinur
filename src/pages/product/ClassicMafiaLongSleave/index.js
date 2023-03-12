import Header from "../../../components/header";
import Footer from "../../../components/footer";
import RelatedViewCollection from "../../../components/home/relatedViewCollection";
import Customize from "../../../components/customize/Customize";

const ClassicMafiaLongSleave = () => {
  let imgDataArr = [
    {
      name_: "Classic Mafia Long Sleave",
      price_: "$48.98",
      colors_: "white, black, yellow, gray, pink, beige, gold, purple, blue",
      sizes_: ["S", "X", " L"],
      color1_: "#eff1b7",
      color2_: "#9cf1ff",
      color3_: "#cfcfcf",
      dtImgArr: [
        {
          src: `/img/customize/ClassicMafiaLongSleave/1.jpg`,
        },
        {
          src: `/img/customize/ClassicMafiaLongSleave/2.jpg`,
        },
        {
          src: `/img/customize/ClassicMafiaLongSleave/3.jpg`,
        },
        {
          src: `/img/customize/ClassicMafiaLongSleave/4.jpg`,
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

export default ClassicMafiaLongSleave;
