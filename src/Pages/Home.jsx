import React, { Fragment, Suspense } from "react";
import MasterLayout from "../MasterLayout/MasterLayout";
const HomeComponents = React.lazy(() =>
  import("../Components/RootComponents/HomeComponent")
);
const Home = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={""}>
          <HomeComponents />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default Home;
