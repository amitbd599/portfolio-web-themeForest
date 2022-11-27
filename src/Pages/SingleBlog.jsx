import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import FullScreenLoader from "../MasterLayout/FullScreenLoader";
import MasterLayout from "../MasterLayout/MasterLayout";
const SingleBlogComponents = React.lazy(() =>
  import("../Components/SingleBlogComponents")
);

const SingleBlog = () => {
  return (
    <Fragment>
      <MasterLayout>
      <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>Single Blog || NetGrid - React Portfolio Template</title>
            <meta
              name='description'
              content='NetGrid - React Portfolio Template'
            />
          </Helmet>
          <SingleBlogComponents />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default SingleBlog;
