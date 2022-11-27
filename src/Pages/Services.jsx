import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import FullScreenLoader from "../MasterLayout/FullScreenLoader";
import MasterLayout from "../MasterLayout/MasterLayout";
const ServicesComponent = React.lazy(() =>
  import("../Components/ServicesComponent")
);

const Services = () => {
  return (
    <Fragment>
      <MasterLayout>
      <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>Services || NetGrid - React Portfolio Template</title>
            <meta
              name='description'
              content='NetGrid - React Portfolio Template'
            />
          </Helmet>
          <ServicesComponent />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default Services;
