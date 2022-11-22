import React, { Fragment, Suspense } from "react";
import MasterLayout from "../MasterLayout/MasterLayout";
const SingleBlogComponents = React.lazy(() =>
  import("../Components/RootComponents/SingleBlogComponents")
);

const SingleBlog = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={""}>
          <SingleBlogComponents />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default SingleBlog;
