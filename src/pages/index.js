import React from "react";
import { Redirect } from "@docusaurus/router";
import useBaseUrl from "@docusaurus/useBaseUrl";

function Home() {
  // Use useBaseUrl so the homepage redirect respects the site baseUrl. In
  // production baseUrl is "/" (target unchanged), but PR previews are served
  // from a sub-path (e.g. /<repo>/pr-preview/pr-<N>/); a bare "/cartesi-rollups/1.5/"
  // would resolve outside the preview and 404.
  return <Redirect to={useBaseUrl("/cartesi-rollups/1.5/")} />;
}

export default Home;
