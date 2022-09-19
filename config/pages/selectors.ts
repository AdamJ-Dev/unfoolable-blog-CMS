import { applyIds } from '../../src/app/utility/routing/parse-routes';
import pages from './pages.json';

// home

export const getHomePath = () => {
  return pages.home.path;
};

// blogs

export const getBlogsPath = () => {
  return pages.blogs.path;
};

// login

export const getLoginPath = () => {
  return pages.login.path;
};

// signup

export const getSignupPath = () => {
  return pages.signup.path;
};

// drafts

export const getDraftsPath = () => {
  return pages.drafts.path;
};

// workspace

export const getWorkspacePath = (id: string) => {
  return applyIds(pages.workspace.path, [[':id', id]]);
};

export const getAutosaveInterval = () => {
  return pages.workspace.autosave.interval;
};

export const getNewBlogFormatting = () => {
  return pages.workspace.formatting;
};

// comments

export const getCommentsPath = (blogId: string) => {
  return applyIds(pages.comments.path, [[':blog_id', blogId]]);
};

export const getCommentsFormatting = () => {
  return pages.comments.formatting;
};
