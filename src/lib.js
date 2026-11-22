// Helpers for the base path, so the site works both on a custom domain ("/")
// and on a github.io project URL ("/the-main-branch/").
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path) => (/^(https?:|mailto:|tel:|#)/.test(path) ? path : base + path);

export const isExternal = (path) => /^https?:/.test(path);
