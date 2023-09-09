import React, { Fragment } from "react";
import { MainSearchSection } from "../../components/pagesComponents/homePage";
import ImageAlbum from "../../components/pagesComponents/homePage/ImageAlbum";
const Home = () => {
  return (
    <Fragment>
      <MainSearchSection />
      <ImageAlbum />
    </Fragment>
  );
};

export default Home;
