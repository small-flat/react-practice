import React from "react";

// const ColorfulMessage = (props) => {
export const ColorfulMessage = (props) => {
  // console.log(props);

  //分割代入してコードをすっきりさせる
  const { color, children } = props; //props.color, props.children
  const contentStyle = {
    color, //JSの変数名とCSSのプロパティが同名の場合、省略可能
    // color: color,
    fontSize: "2rem" //本来cssでは font-sizeとなるが、Reactではキャメルケースとなる
  };

  // props.childrenで XMLタグ内のテキストを取得できる 例：<ColorfulMessage>お元気ですか？</ColorfulMessage>
  return <p style={contentStyle}>{children}</p>;
};

// export default ColorfulMessage;
// 上記以外に、constの前に export を記述してexportすることもできる
// 例：export const ColorfulMessage = (props) => {
//ただし、その際はimportする側で代入分割してやる必要がある。命名が厳粛になるのこちらの方が良い
// 例：import { ColorfulMessage } from "./components/ColorfulMessage";
