import React, { Fragment, Suspense } from "react";
import MasterLayout from "../MasterLayout/MasterLayout";
const BlogComponent = React.lazy(() =>
  import("../Components/RootComponents/BlogComponent")
);

const Blog = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={""}>
          <BlogComponent />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default Blog;
