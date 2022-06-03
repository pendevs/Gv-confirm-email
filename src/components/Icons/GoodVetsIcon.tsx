/* eslint-disable max-len */
import React, { FC } from "react";
import { defaultTheme } from "../../styles/muiTheme";

type IProps = {
  width?: number;
  height?: number;
  color?: string;
};

const GoodVetsIcon: FC<IProps> = ({ width = 65, height = 38, color = defaultTheme.palette.primary.main }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 65 38"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <path
        d="M23.413 13.547a1.84 1.84 0 0 1 1.792.04c.3.179 5.66 3.408 10.571 8.702 4.059-.43 11.637-.6 16.341 3.224 2.088 1.696 3.302 3.936 3.624 6.672h2.59c3.034 0 5.52 2.226 5.658 5.072.083 1.725-.237 5.056-3.336 7.97-2.138 2.016-5.152 3.419-9.01 4.203-2.44.496-8.235.573-11.344.573h-.869l-.852-.001h-.16L37.78 50h-.19c.573-.27 2.015-1.384 3.37-3.182 2.888-.032 8.307-.2 10.501-.698 2.912-.662 5.182-1.728 6.728-3.184 2.163-2.035 2.387-4.34 2.328-5.534-.053-1.104-1.013-1.968-2.186-1.968h-4.24c-.464 0-.907-.173-1.235-.48a1.58 1.58 0 0 1-.504-1.157c.021-2.53-.8-4.44-2.515-5.832-2.304-1.872-5.736-2.49-8.78-2.613-.772-.03-2.932-.075-3.297-.086 1.067.814 1.795 2.019 2.027 3.518.157 1.024.152 2.072.15 3.085v.427c0 1.032-.62 1.613-1.74 1.637-.8.016-1.88-.128-1.986-1.557-.024-.34-.019-.678-.016-1.016.005-.304.008-.608-.01-.912-.03-.443-.08-.958-.23-1.422-.174-.544-.595-1.2-1.608-1.232-.432-.016-2.13-.058-2.13-.058-1.84 0-3.54.672-4.79 1.893-1.198 1.173-1.814 2.71-1.734 4.328v10.11s-.04.727 0 1.087c.043.358.272.843.46 1.064.338.398.84.614 1.484.63.216.008.47.013.744.018v.006h1.171c1.821 0 3.581-.702 4.827-1.92 1.21-1.187 1.834-2.736 1.754-4.36v-1.054h-3.16c-.584 0-1.24-.056-1.653-.461-.416-.408-.443-1.032-.416-1.587.053-1.064.675-1.63 1.792-1.632 1.707-.005 3.413-.008 5.12 0 1.23.008 1.963.57 2.101 1.598l.04 2.06.008 1.158c.051 2.523-.944 4.91-2.82 6.75-1.332 1.3-3.028 2.448-4.873 2.909-.88.221-4.8.181-5.277.141-2.347-.197-4.043-1.464-4.766-3.47-.138-.388-.309-1.063-.309-1.578 0-.517-.11-11.346-.11-11.346-.114-2.603.883-5.075 2.809-6.96a10.491 10.491 0 0 1 3.81-2.36c.587-.211 1.654-.451 2.616-.58.83-.111 1.595-.127 1.742-.124-3.286-3.443-6.75-5.947-8.424-7.067-1.486 1.635-2.158 5.192-2.254 6.91-.042.778-.672 1.42-1.496 1.527-2.392.31-9.162 1.587-11.749 3.747-2.403 2.003-2.787 6.568-2.733 8.157.024.662-.384 1.27-1.03 1.539-.322.141-1.973.955-1.549 2.53.659 2.451 3.15 3.72 5.973 4.35 2.66.595 7.902 1.013 9.896.933.264 1.155.736 2.374 1.72 3.158-.055.006-.189.01-.384.012h-.579c-.736-.004-1.797-.018-2.889-.028l-.505-.004c-.421-.003-.84-.004-1.24-.004-5.293 0-13.656-1.262-15.363-7.622-.746-2.784.955-4.744 2.486-5.746.085-2.104.642-7 3.885-9.704 3.093-2.58 9.376-3.864 12.219-4.334.317-2.376 1.352-7.112 4.642-8.864Zm23.379 18.746c1.152 0 2.085.872 2.085 1.95 0 1.076-.933 1.948-2.085 1.948-1.15 0-2.083-.872-2.083-1.949s.934-1.95 2.083-1.95Zm-33.607 0c1.15 0 2.083.872 2.083 1.95 0 1.076-.933 1.948-2.083 1.948-1.152 0-2.085-.872-2.085-1.949s.933-1.95 2.085-1.95Z"
        id="a"
      />
    </defs>
    <g transform="translate(.5 -13)" fill="none" fillRule="evenodd">
      <mask id="b" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <g mask="url(#b)" fill={color}>
        <path d="M0 0h64v64H0z" />
      </g>
    </g>
  </svg>
);

export default GoodVetsIcon;