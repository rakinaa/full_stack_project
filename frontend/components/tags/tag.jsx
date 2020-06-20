import React from "react";

const Tag = (props) => {
  const { name, id } = props.tag;
  return <div className="tag">{name}</div>;
};

export default Tag;
