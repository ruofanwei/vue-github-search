import { Octokit } from "https://cdn.skypack.dev/octokit";
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
  });
  return topics;
};

/**
 * get users
 */
export const getUsers = async (queryString) => {
  const { data: users } = await octokit.request("GET /search/users", {
    q: queryString,
  });
  return users;
};
