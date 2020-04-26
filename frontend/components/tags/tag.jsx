import React from 'react'

class TagIndex extends React.Component {
  render() {
    const { tags } = this.props;
    // if (!this.props.users || !this.props.photo) return null;
    return (
      <div className="tag-index-container">
        <h3 className="tag-header">Tags:</h3>
        <div className="tags">
          {tags.map(tag => <Tag tag={tag} />)}
        </div>
      </div>
    )
  }
}

export default TagIndex;