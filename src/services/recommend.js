import request from "./request";

function getTopBanners() {
  return request({
    url: "/banner",
  });
}

 function getHotRecommends(limit) {
  return request({
    url: "/personalized",
    params: {
      limit,
    },
  });
}

export { getTopBanners, getHotRecommends };
