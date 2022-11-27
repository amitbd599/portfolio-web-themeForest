import React, { Fragment, Suspense } from "react";
import MasterLayout from "../MasterLayout/MasterLayout";
import { Helmet } from "react-helmet";
import FullScreenLoader from "../MasterLayout/FullScreenLoader";
const HomeComponent = React.lazy(() => import("../Components/HomeComponent"));
const Home = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>Home || NetGrid - React Portfolio Template</title>
            <meta
              name='description'
              content='NetGrid - React Portfolio Template'
            />
          </Helmet>
          <HomeComponent />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default Home;
