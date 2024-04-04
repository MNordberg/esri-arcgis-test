import "./App.css";
import { useState } from "react";

import {
  ArcgisMap,
  ArcgisSearch,
  ArcgisLegend,
  ArcgisBasemapGallery,
  ArcgisBasemapToggle,
} from "@arcgis/map-components-react";
import { defineCustomElements as defineMapElements } from "@arcgis/map-components/dist/loader";
import esriConfig from "@arcgis/core/config";

esriConfig.apiKey =
  "AAPK5a96e9abe16949bbbc85396fae068d4bRqPSsKvzG8YP4op2Jr4iZhdgZFc5hGIASPfc1BrzzFAQh8lRJoxFYNubq7e5frF6";

// Register custom elements
defineMapElements(window, {
  resourcesUrl: "https://js.arcgis.com/map-components/4.29/assets",
});

function App() {
  const [itemId, setItemId] = useState("2e8a3ccdfd6d42a995b79812b3b0ebc6");

  return (
    <>
      <div className="full">
        <ArcgisMap
          itemId={itemId}
          center="-98.5795,39.828175"
          zoom={4}
          onArcgisViewReadyChange={(event: any) => {
            console.log("MapView ready", event);
          }}
        >
          <ArcgisSearch position="top-right"></ArcgisSearch>
          <ArcgisBasemapToggle position="bottom-right"></ArcgisBasemapToggle>
        </ArcgisMap>
      </div>
    </>
  );
}

export default App;
