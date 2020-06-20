import React from "react";
import Tag from "./tag";

const TagIndex = (props) => {
  const { tags } = props;
  // if (!this.props.users || !this.props.photo) return null;
  return (
    <div className="tag-index-container">
      <h3 className="tag-header">Tags:</h3>
      <div className="tags">
        {tags.map((tag) => (
          <Tag key={tag.id} tag={tag} />
        ))}
        <div className="add-tag"></div>
      </div>
    </div>
  );
};

export default TagIndex;
