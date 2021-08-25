//React17のアップデートより、JSXを使用するだけの場合、Reactのimportは必須ではなくなった
import React from "react";
import ReactDom from "react-dom";

import App from "./App"; //コンポーネント名を指定
// import Hoge from "./App"; //別名も指定できる
// ReactDom.render(<Hoge />, document.getElementById("root"));

ReactDom.render(<App />, document.getElementById("root"));
