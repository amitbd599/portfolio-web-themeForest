import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import FullScreenLoader from "../MasterLayout/FullScreenLoader";
import MasterLayout from "../MasterLayout/MasterLayout";
const ContactComponent = React.lazy(() =>
  import("../Components/ContactComponent")
);

const Contact = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>Contact || NetGrid - React Portfolio Template</title>
            <meta
              name='description'
              content='NetGrid - React Portfolio Template'
            />
          </Helmet>
          <ContactComponent />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default Contact;
