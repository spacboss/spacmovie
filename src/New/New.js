import React from "react";
import Collection from "../Collection/Collection.js";
function New() {
  return (
    <div>
      <Collection sorting={"release_date.desc"}></Collection>
    </div>
  );
}
export default New;
