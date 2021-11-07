import { CHANGE_RECOMMEND_BANNER ,CHANGE_HOT_RECOMMEND} from "./constants";
import {getTopBanners,getHotRecommends} from '@/services/recommend'


const changeTopBannerAction = (banner) => ({
  type: CHANGE_RECOMMEND_BANNER,
  banner,
});

const  changeHotRecommendAction = (hotRecommends) =>({
  type: CHANGE_HOT_RECOMMEND,
  hotRecommends
});


// 获取推荐页面banner数据 写成返回一个函数，方便调用时传参数
const getTopBannersActions = () => {
  return (dispatch,getState)=>{
    getTopBanners().then(res=>{
      dispatch(changeTopBannerAction(res.banners))
    },err=>{
      console.log(err);
    })
  }
};

// 获取热门推荐数据
const getHotRecommendsAction = limit =>{
  return dispatch => {
    getHotRecommends(limit).then(res=>{
      dispatch(changeHotRecommendAction(res.result))
    })
  }
};


export { getTopBannersActions,getHotRecommendsAction};
