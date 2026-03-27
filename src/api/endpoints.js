export const API_ENDPOINTS = {
  // Auth
  AUTH: {
    LOGIN: "/login",
    SIGNUP: "/signup",
    CHECK_USER: "/users/check",
  },

  // Blogs
  BLOGS: {
    GET_ALL: "/get/blogs",
    GET_BY_ID: (id) => `/blogs/${id}`,
    CREATE: "/blogs",
    UPDATE: (id) => `/blogs/${id}`,
    DELETE: (id) => `/blogs/${id}`,
    GET_BY_USER: "/users/blogs",
    GET_DRAFTS: "/users/drafts",
    GET_SCHEDULED: "/get/scheduled_blogs",
    GET_SCHEDULED_BY_ID: "/get/scheduled_blog",
    SCHEDULE: "/post/schedule_blog",
    GET_SCHEDULED_TIME: "/get/scheduled_time",
  },

  // Blog Media
  MEDIA: {
    GET_IMAGES: (id) => `/get/blogs/images/${id}`,
    UPLOAD_IMAGES: "/blogs/images",
    EDIT_IMAGES: "/edit/blogs/images",
    GET_VIDEOS: (id) => `/get/blogs/videos/${id}`,
    UPLOAD_VIDEOS: "/blogs/videos",
    EDIT_VIDEOS: "/edit/blogs/videos",
  },

  // Comments
  COMMENTS: {
    GET_BY_BLOG: (id) => `/get/${id}/comment`,
    ADD: "/add/comment",
    DELETE: (id) => `/delete/comments/${id}`,
    REPORT: "/post/report-comments",
  },

  // Likes & Bookmarks
  ENGAGEMENT: {
    GET_LIKE_STATUS: "/get/blogs/like_status",
    GET_LIKES_COUNT: "/get/blogs/likes_count",
    ADD_LIKE: "/blogs/likes",
    CHECK_BOOKMARK: "/bookmark-checker",
    ADD_BOOKMARK: "/add/bookmark",
    GET_BOOKMARKS: "/bookmarks",
  },

  // User & Profile
  USER: {
    GET_DETAILS: "/user-details",
    UPDATE_DETAILS: "/update-user-details",
    SEARCH: (query) => `/users/search?q=${query}`,
  },

  // Network/Follow
  NETWORK: {
    GET_FOLLOWERS: (id) => `/followers/${id}`,
    GET_FOLLOWING: (id) => `/following/${id}`,
    CONNECT: "/connect",
    UNFOLLOW: "/unfollow",
    REMOVE_FOLLOWER: "/remove-follower",
    GET_SUGGESTIONS: (id) => `/suggestions/${id}`,
  },

  // Notifications
  NOTIFICATIONS: {
    GET_ALL: "/notifications/all",
    MARK_READ: "/notifications/read",
  },

  // Reports
  REPORTS: {
    REPORT_POST: "/post/report-posts",
  },
};