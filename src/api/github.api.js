const { Octokit } = require("@octokit/core");
const octokit = new Octokit({
  auth: `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`,
});

/**
 * get repositories
 */
export const getRepositories = async (queryString) => {
  const { data: repositories } = await octokit.request(
    "GET /search/repositories",
    {
      q: queryString,
      per_page: 20
    }
  );
  return repositories;
};

/**
 * get topics
 */
export const getTopics = async (queryString) => {
  const { data: topics } = await octokit.request("GET /search/topics", {
    q: queryString,
    per_page: 20,
  });
  return topics;
};

/**
 * get users
 */
export const getUsers = async (queryString) => {
  const { data: users } = await octokit.request("GET /search/users", {
    q: queryString,
    per_page: 20,
  });
  return users;
};
