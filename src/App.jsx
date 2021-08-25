/**
 * ファイル名は　.js以外にも、 .jsxでもOK
 * Reactのコンポーネントを分かりやすくするため、 jsx にしておく方が良い
 *
 * ★コンポーネントの命名規則
 * コンポーネント名は必ず先頭を大文字からはじめる！ここでいうAppやReact
 * パスカルケース（アッパーキャメルケース）
 */

import React, { useEffect, useState } from "react";
// import ColorfulMessage from "./components/ColorfulMessage";
import { ColorfulMessage } from "./components/ColorfulMessage";

/**
 * JSの中でXMLを記述していく手法をJSX手法という。
 * JSX = Javascript ＋ XML
 * ほぼXML構文をJavascriptに変換して、プログラマがJavascriptを使用する代わりに
 * XML構文でReactJSをコーディングできるようにしてる
 */
const App = () => {
  console.log("start!!");
  /**
   * useStateを使用する。
   * コンポーネント内で動的に値が変更される個所は useState で定義して
   * 変数と更新関数を使用することになる。
   * 1つ目の引数にStateの変数名num、2つ目にnumを更新するsetNum関数を定義
   * useState()の第1引数は初期値。今回はの場合は0とする
   */
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchFaceShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  //setFaceShowFlag()がコールされる度に const App = () => {} の頭から処理が走る
  //よって無限ループのような状態になるため、以下がエラーとして発生する
  // Too many re-renders. React limits the number of renders to prevent an infinite loop.
  // if (num % 3 === 0) {
  //   setFaceShowFlag(true);
  // } else {
  //   setFaceShowFlag(false);
  // }

  /**
   * useEffect()の第2引数に値を設定すると最初の1度しか処理されない
   * 画面更新時に1度だけ処理したい場合に有効
   */
  // useEffect(() => {
  //   console.log("userEffect!!!");
  // }, []);

  // 第2引数にnumを設定すれば、numに関してのみ関心を持つことになる。
  // よって、numに変化があった場合のみコールされることになる。
  useEffect(() => {
    console.log("userEffect!!!");
    if (num > 0 && num % 3 === 0) {
      //faceShowFlagがfalseの場合のみ、setFaceShowFlag(true)を実行
      faceShowFlag || setFaceShowFlag(true);
    } else {
      //faceShowFlagがtrueの場合のみ、setFaceShowFlag(false)を実行
      faceShowFlag && setFaceShowFlag(false);
    }
  }, [num]);
  // eslintでuseEffect()内でfaceShowFlagも使っているから、
  // 2引数に設定した方が良いとアラートがあるが、numのみに関心を寄せたいので
  // こういった場合は、Lintの方を無視しても良い。
  // その場合、以下のコメントアウトでファイル全体に設定可能
  /* eslint react-hooks/exhaustive-deps: off */
  // 一行のみに設定する場合は、以下の記述
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // 大抵はプロジェクトでeslintを統一すると思うので、それに従う

  /**
   * returnを複数行返す場合、大枠をタグで囲む必要がある
   * エラー回避のため、<React.Fragment>で囲むのが一般的。
   * <React.Fragment>は省略記述として、<> で表現できる。
   *
   * {}内はJSを記述できる
   *
   * styleを記述する際は {} 内にオブジェクトとしてstyleを記述する
   * style={{}}の場合、外側{}がReactのJS記述を表し、内側{}がJSのオブジェクト記述を表すことなる
   * cssの値を渡す際は必ず文字列で渡す。文字列でない場合、JSの変数と判断される。
   */
  return (
    <>
      <h1 style={{ color: "#f00" }}>こんにちは</h1>
      <ColorfulMessage color="#0ff">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="#00f">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchFaceShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(^_-)-☆</p>}
    </>
  );
};

export default App;
