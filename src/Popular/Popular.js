import React from "react";
import Collection from "../Collection/Collection.js";

function Popular() {
  return (
    <div>
      <Collection sorting={"popularity.desc"}></Collection>
    </div>
  );
}
export default Popular;
