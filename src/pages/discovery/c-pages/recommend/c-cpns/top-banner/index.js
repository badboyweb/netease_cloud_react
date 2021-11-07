import React, {memo, useEffect,useRef,useCallback,useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";


import {getTopBannersActions} from "../../store/actionCreator";

import {Carousel} from 'antd'
import {
    BannerControl,
    BannerLeft, BannerRight,
    BannerWrapper
} from "./style";


export default memo(function TopBanner() {

    const bannerRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    const {topBanners} = useSelector(state => ({
        topBanners:state.getIn(['recommend','topBanners'])
    }),shallowEqual);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getTopBannersActions())
    },[dispatch]);

    const bannerChange= useCallback( (from,to)=>{
        setCurrentIndex(to);
    },[]);

    const  bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl+"?imageView&blur=40x20");

    return (
        <BannerWrapper bgImage={bgImage}>
            <div className="banner wrap-v2">
                <BannerLeft>
                    <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
                        {
                            topBanners.map((item, index) => {
                                return (
                                    <div className="banner-item" key={item.imageUrl}>
                                        <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </BannerLeft>
                <BannerRight/>
                <BannerControl>
                    <button className="btn left" onClick={e => bannerRef.current.prev()}> </button>
                    <button className="btn right" onClick={e => bannerRef.current.next()}> </button>
                </BannerControl>
            </div>
        </BannerWrapper>
    );
});
