import styled from "@emotion/styled";
import PrintOneImgBox from "../collections/PrintOneImgBox";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const CatalogContentDivForViewCollection = styled.div`
  width: 100%;

  .view-collection-txt {
    text-align: right;
  }

  h4 {
    position: relative;
    font-weight: 500;
    font-size: 0.75rem;
    cursor: pointer;
    text-transform: uppercase;

    .fixed-bracket {
      position: relative;
      margin-left: 10px;

      ::before {
        position: absolute;
        content: "[";
        left: -5px;
      }
      ::after {
        position: absolute;
        content: "]";
      }
    }
  }

  .dynamic-bracket {
    position: relative;

    :hover::before {
      position: absolute;
      content: "[";
      left: -5px;
    }

    :hover::after {
      position: absolute;
      content: "]";
    }
  }

  .top-div {
    padding: 20px 10px 0px 10px;
    display: flex;
    justify-content: space-between;
  }

  .img-arr-container {
    width: 100%;
  }

  .dynamic-img-title-container {
    flex-direction: row !important;
    align-items: flex-start;
    justify-content: space-between;

    li {
      margin-top: unset;
      margin-right: 16px;
    }
  }

  .single-img-container {
    margin-bottom: 30px;
  }
`;

const ViewCollection = () => {
  let imgDataArr = [
    {
      onLoadImg: `/img/topProductImage/01Product_home.jPG`,
      onLoadTitle: "Classic mafia tee",
      onLoadSubTitles: "$24.98",
      hoverSubTitles: ["s", "m", "l"],
      customize: "ClassicMafiaTee",
    },
    {
      onLoadImg: `/img/topProductImage/02Product_home.jpg`,
      onLoadTitle: "Classic mafia long sleave",
      onLoadSubTitles: "$48.98",
      hoverSubTitles: ["s", "m", "l"],
      customize: "ClassicMafiaLongSleave",
    },
    {
      onLoadImg: `/img/topProductImage/03Product_home.JPG`,
      onLoadTitle: "Classic 24k tee",
      onLoadSubTitles: "$27.98",
      hoverSubTitles: ["s", "m", "l"],
      customize: "Classsic24ktTee",
    },
    {
      onLoadImg: `/img/topProductImage/04Product_home.JPG`,
      onLoadTitle: "Classic 24k hoodie signature edition",
      onLoadSubTitles: "$124.24",
      hoverSubTitles: ["s", "m", "l"],
      customize: "Classic24kHoddieSignatureEditrion",
    },
  ];

  return (
    <CatalogContentDivForViewCollection>
      <div className="top-div">
        <Grid
          container
          spacing={1.3}
          style={{
            padding: "0 10px",
          }}
        >
          <Grid item xs={3}>
            <div>
              <h4>24k 2023</h4>
            </div>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                display: {
                  sm: "none",
                  md: "inherit",
                },
              }}
            >
              <div>
                <h4>NEW ARRIVALS</h4>
              </div>
            </Box>
          </Grid>
        </Grid>
      </div>

      <div className="img-arr-container">
        <Grid
          container
          spacing={1.3}
          style={{
            padding: "10px",
          }}
        >
          {imgDataArr &&
            imgDataArr.map((obj, i) => {
              return (
                <Grid item sm={6} md={3} key={i}>
                  <Link to={`/product/${obj.customize}`}>
                    <div className="single-img-container">
                      <PrintOneImgBox obj={obj} />
                    </div>
                  </Link>
                </Grid>
              );
            })}
        </Grid>
      </div>
    </CatalogContentDivForViewCollection>
  );
};

export default ViewCollection;
