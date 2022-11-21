import React, { Fragment, Suspense } from "react";
import MasterLayout from "../MasterLayout/MasterLayout";
const PortfolioComponent = React.lazy(() =>
  import("../Components/RootComponents/PortfolioComponent")
);

const Portfolio = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={""}>
          <PortfolioComponent />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default Portfolio;
