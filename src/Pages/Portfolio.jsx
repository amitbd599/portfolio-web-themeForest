import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import FullScreenLoader from "../MasterLayout/FullScreenLoader";
import MasterLayout from "../MasterLayout/MasterLayout";
const PortfolioComponent = React.lazy(() =>
  import("../Components/PortfolioComponent")
);

const Portfolio = () => {
  return (
    <Fragment>
      <MasterLayout>
      <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>Portfolio || NetGrid - React Portfolio Template</title>
            <meta
              name='description'
              content='NetGrid - React Portfolio Template'
            />
          </Helmet>
          <PortfolioComponent />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default Portfolio;
