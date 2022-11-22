import React, { Fragment, Suspense } from "react";
import MasterLayout from "../MasterLayout/MasterLayout";
const ContactComponent = React.lazy(() =>
  import("../Components/RootComponents/ContactComponent")
);

const Contact = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={""}>
          <ContactComponent />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default Contact;
