import React, { Fragment, Suspense } from "react";
import MasterLayout from "../MasterLayout/MasterLayout";
const ServicesComponent = React.lazy(() =>
  import("../Components/RootComponents/ServicesComponent")
);

const Services = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={""}>
          <ServicesComponent />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default Services;
