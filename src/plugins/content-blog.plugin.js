const blogPluginExports = require('@docusaurus/plugin-content-blog');

const defaultBlogPlugin = blogPluginExports.default;
// docusaurus-plugin-content-blog

async function blogPluginExtended(...pluginArgs) {
  const blogPluginInstance = await defaultBlogPlugin(...pluginArgs);

  return {
    ...blogPluginInstance,
    contentLoaded: async function (data) {
      const { setGlobalData } = data.actions;
      const X = await blogPluginInstance.contentLoaded(data);
      setGlobalData({
        __FrontMatters__: data.content.blogPosts.map((p) => {
          return p.metadata.frontMatter;
        }),
      });
      return X;
    },
  };
}
module.exports = {
  ...blogPluginExports,
  default: blogPluginExtended,
};
