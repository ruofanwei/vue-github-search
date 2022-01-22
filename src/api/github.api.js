const { Octokit } = require("@octokit/core");
const octokit = new Octokit({
  auth: process.env.VUE_APP_GITHUB_TOKEN,
});

/**
 * get repositories
 */
export const getRepositories = async (queryString, page) => {
  const { data: repositories } = await octokit.request(
    "GET /search/repositories",
    {
      q: queryString,
      per_page: 20,
      page: page
    }
  );
  return repositories;
};

/**
 * get topics
 */
export const getTopics = async (queryString, page) => {
  const { data: topics } = await octokit.request("GET /search/topics", {
    q: queryString,
    per_page: 20,
    page: page
  });
  return topics;
};

/**
 * get users
 */
export const getUsers = async (queryString, page) => {
  const { data: users } = await octokit.request("GET /search/users", {
    q: queryString,
    per_page: 20,
    page: page
  });
  return users;
};
