import React, { Fragment, Suspense } from "react";
import MasterLayout from "../MasterLayout/MasterLayout";
const HomeComponent = React.lazy(() =>
  import("../Components/RootComponents/HomeComponent")
);
const Home = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={""}>
          <HomeComponent />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default Home;
