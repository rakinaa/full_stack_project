export const createComment = (comment) =>
  $.ajax({
    method: "POST",
    url: "/api/comments",
    data: { comment },
  });

export const updateComment = (commentId, commentData) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/comments/${commentId}`,
    data: commentData,
  });
};

export const deleteComment = (commentId) =>
  $.ajax({
    method: "DELETE",
    url: `/api/comments/${commentId}`,
  });
