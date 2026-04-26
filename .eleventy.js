module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({"src/logo.svg": "assets/logo.svg"});
  eleventyConfig.addPassthroughCopy({"src/background.mp4": "assets/background.mp4"});

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data"
    }
  };
};
