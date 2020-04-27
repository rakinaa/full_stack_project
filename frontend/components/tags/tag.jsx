import React from 'react'

const Tag = (props) =>  {
  const { name, id } = props.tag;
  // if (!this.props.users || !this.props.photo) return null;
  return (
    <div className="tag">
      {name}
    </div>
  )
}

export default Tag;