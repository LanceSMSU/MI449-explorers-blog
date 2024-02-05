// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");


  eleventyConfig.addShortcode(
    'blogPost',
    (blog_name, author_name) => `
      <div class="blogPostHeader">
        <div class="blog_name">${blog_name}</div>
        <div class="author_name">Author: ${author_name}</div>
      </div>
    `
  );
};