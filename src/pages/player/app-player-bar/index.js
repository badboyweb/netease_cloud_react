import React, { memo, useState, useEffect, useRef, useCallback } from "react";

import { getCurrentSongAction } from "../store";

import { getSizeImage, formatDate, getPlaySong } from "@/utils/format-utils.js";
import { NavLink } from "react-router-dom";
import { Slider } from "antd";
import { PlaybarWrapper, Control, PlayInfo, Operator } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

export default memo(function HYAppPlayerBar() {
  const [isSlider, setIsSlider] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef();

  const { currentSong } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentSongAction(167876));
  }, [dispatch]);

  useEffect(() => {
    console.log(getPlaySong(currentSong.id));
    audioRef.current.src = getPlaySong(currentSong.id);
  }, [currentSong]);

  const picUrl = (currentSong.al && currentSong.al.picUrl) || "";

  const sliderChange = useCallback((val) => {
    setIsSlider(true);
    setProgress(val);
  }, []);

  const playMusic = () => {
    const audio = audioRef.current;
    isPlaying ? audio.pause() : audio.play();
    setIsPlaying(!isPlaying);
  };

  const sliderAfterChange = useCallback(
    (val) => {
      setIsSlider(false);
      setProgress(val);
      audioRef.current.currentTime = (currentSong.dt * val) / 100 / 1000;
      if (!isPlaying) {
        playMusic();
      }
    },
    [currentSong.dt, isPlaying]
  );

  const currentTime = currentSong ? (currentSong.dt * progress) / 100 : 0;

  const timeUpdate = (e) => {
    if (!isSlider) {
      setProgress(((e.target.currentTime * 1000) / currentSong.dt) * 100);
    }
  };

  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_player prev"> </button>
          <button className="sprite_player play" onClick={playMusic}>
            {" "}
          </button>
          <button className="sprite_player next"> </button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img alt="" src={currentSong ? getSizeImage(picUrl, 34) : ""} />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong?.name}</span>
              <a href="#/" className="singer-name">
                {currentSong?.ar?.[0].name}
              </a>
            </div>
            <div className="progress">
              <Slider
                defaultValue={0}
                value={progress}
                onAfterChange={sliderAfterChange}
                onChange={sliderChange}
              />
              <div className="time">
                <span className="now-time">
                  {formatDate(currentTime, "mm:ss")}
                </span>
                <span className="divider">/</span>
                <span className="duration">
                  {formatDate(currentSong?.dt, "mm:ss")}
                </span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="sprite_player btn favor"> </button>
            <button className="sprite_player btn share"> </button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"> </button>
            <button className="sprite_player btn loop"> </button>
            <button className="sprite_player btn playlist"> </button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={timeUpdate} />
    </PlaybarWrapper>
  );
});
