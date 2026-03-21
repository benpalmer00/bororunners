/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://bororunners.co.uk",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
