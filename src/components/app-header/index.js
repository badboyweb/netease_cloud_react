import React, { memo } from "react";

import { NavLink } from "react-router-dom";
import {Input} from 'antd';
import {SearchOutlined} from "@ant-design/icons"

import HeaderWrap from "./style";

const AppHeader = memo(function (props) {
  return (
    <div>
      <HeaderWrap>
        <div className="wrap-v1 wrap">
          <div className="wrap-left">
            <a href="/" className="logo sprite_01">
              {" "}
            </a>
            <div className="nav">
              <NavLink  to="/discovery" >
                发现音乐
              </NavLink>
              <NavLink to="/mine">我的音乐</NavLink>
              <NavLink to="/friend">朋友</NavLink>
              <a
                href="https://music.163.com/store/product"
                target="_blank"
                rel="noopener noreferrer"
              >
                商城
              </a>
              <a
                href="https://music.163.com/nmusician/web/index#/"
                target="_blank"
                rel="noopener noreferrer"
              >
                音乐人
              </a>
              <a
                href="https://music.163.com/#/download"
                target="_blank"
                rel="noopener noreferrer"
              >
                下载客户端
              </a>
            </div>
          </div>
          <div className="wrap-right">
            <Input placeholder="音乐/视频/电台/用户"  className="input-wrapper" prefix={<SearchOutlined/>}/>
            <button className="btn ">创作者中心</button>
            <button className="btn ">登录</button>
          </div>
        </div>
      </HeaderWrap>
    </div>
  );
});

export default AppHeader;
