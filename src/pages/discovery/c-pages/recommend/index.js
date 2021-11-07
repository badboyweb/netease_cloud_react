import React, { memo } from "react";


import TopBanner from "./c-cpns/top-banner";
import HYHotRecommend from './c-cpns/hot-recommend'

import {
    RecommendWrapper,
    Content,
    RecommendLeft
} from "./style";


function Recommend(props) {
  return (
    <RecommendWrapper>
      <TopBanner />
        <Content className="wrap-v2">
            <RecommendLeft>
                <HYHotRecommend/>
            </RecommendLeft>
        </Content>
    </RecommendWrapper>
  );
}

export default memo(Recommend);
