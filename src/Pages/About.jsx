import React, { Fragment, Suspense } from "react";
import MasterLayout from "../MasterLayout/MasterLayout";
const AboutComponent = React.lazy(() =>
  import("../Components/RootComponents/AboutComponent")
);

const About = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={""}>
          <AboutComponent />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default About;
