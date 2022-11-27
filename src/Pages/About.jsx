import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import FullScreenLoader from "../MasterLayout/FullScreenLoader";
import MasterLayout from "../MasterLayout/MasterLayout";
const AboutComponent = React.lazy(() => import("../Components/AboutComponent"));

const About = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>About || NetGrid - React Portfolio Template</title>
            <meta
              name='description'
              content='NetGrid - React Portfolio Template'
            />
          </Helmet>
          <AboutComponent />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default About;
