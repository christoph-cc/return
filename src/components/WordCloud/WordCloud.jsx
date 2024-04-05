import React from "react";
import { TagCloud } from "react-tagcloud";
import './WorldCloud.scss';



const data = [
  { value: "Wrong item", count: 25 },
  { value: "Uncomfortable", count: 18 },
  { value: "Inaccurate description", count: 55 },
  { value: "Material", count: 30 },
  { value: "Change of mind", count: 28 },
  { value: "Allergic reaction", count: 25 },
  { value: "Received as a duplicate", count: 33 },
  { value: "Comfort", count: 20 },
  { value: "Too Small", count: 22 },
  { value: "Style", count: 7 },
  { value: "Color", count: 25 },
];


// custom random color options
// see randomColor package: https://github.com/davidmerfield/randomColor
const options = {
  luminosity: "light",
  hue: "blue",
};

export default function WordCloud() {
  return (
    <TagCloud
    className="cloud"
      minSize={12}
      maxSize={35}
      colorOptions={options}
      tags={data}
      onClick={(tag) => console.log("clicking on tag:", tag)}
    />
  );
}
