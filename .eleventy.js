module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({"src/logo.svg": "assets/logo.svg"});
  eleventyConfig.addPassthroughCopy({"src/background.mp4": "assets/background.mp4"});

  eleventyConfig.addGlobalData("eleventyComputed", {
    serviceData: (data) => {
      if (data.serviceSlug && data.services) {
        return data.services.items.find(s => s.slug === data.serviceSlug);
      }
    },
    svc: (data) => {
      if (data.serviceSlug && data.services && data.locale) {
        const found = data.services.items.find(s => s.slug === data.serviceSlug);
        return found ? found[data.locale] : undefined;
      }
    }
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data"
    }
  };
};
