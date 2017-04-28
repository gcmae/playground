/*
  Name: General
  Desc: 他に縛られない一般汎用的関数群-JavaScript(ES6)
  Version: v1.0
*/
/* ///////////////////////////////////
■記載ルール
・以下のコメントを関数の上に記述すること,version以降は自由です。
   Name: メソッド名
   Desc: 詳細
   Version: version
■記載するメソッド
以下に当てはまるものをGeneralとする。
1. 他の関数(標準関数以外)を利用しない
2. ブラウザに依存せず利用できる
3. 非同期通信を行わない
4. prototype以外
レベル追加予定
■新規追加ルール
1. ○○系を守って記載する事
2. 他からimportして動作する関数は記載しない事
3. 1文字でも変更、修正した際はバージョンをあげる事
4. General内でGeneralの関数を呼ばない事
5. 関数名はできる限り短く、かつ意味が何となく分かる様にする事
6. 関数内にコメントを記載しない事
7. 出来る限り引数に初期値を設定する事
8. 出来る限りコードは短くミニファイに書く事(分かりやすさは不要)
9. その他には、特に必要ないレベルの関数を記載する。
/////////////////////////////////// */

/* -- 真偽系 -- */

/* -- 日付系 -- */

/* -- 数値系 -- */
/* Name: mkArr
   Desc: n ~ enまでの配列を作って返す。
   Version: v1.0
   Option: spは間隔 */
export const mkArr = (n = 0, en = 100, sp = 1) => {
  const results = [];
  for (let i = n; i < en; i += sp) {
    results.push(i);
  }
  return results;
};

/* Name: mkRv
   Desc: n ~ enまでの乱数取得
   Version: v1.0 */
export const mkRv = (n = 0, en = 100) => {
  return Math.floor(Math.random() * ((en + 1) - n)) + n;
};

/* -- 文字列系 -- */

/* -- 配列、オブジェクト系 -- */
/* Name: devideArr
   Desc: 一覧系配列(またはオブジェクト)をページネーション型にする.
   Version: v1.0
   処理：arr(Array)をn個毎の分割にする。
   例: arr = [1,2,3,4,5,6,7,8,9,10]
       n = 5
   結果
       Array = [[1,2,3,4,5],[6,7,8,9,10]]
       Array[0] = [1,2,3,4,5] , Array[1] = [6,7,8,9,10] */
export const devideArr = (arr, n) => {
  if (!(arr instanceof Array)) { return arr; }
  if (typeof n !== 'number') { return n; }
  const array = arr;
  let index = 0;
  const results = [];
  const length = array.length;
  while (index + n < length) {
    const result = array.slice(index, index + n);
    results.push(result);
    const i = index;
    index = i + n;
  }
  const rest = array.slice(index, length + 1);
  results.push(rest);
  return results;
};

/* -- 非同期系 -- */
/* Name: PseAjTime
   Desc: 擬似的非同期通信-文字
   Version: v1.0 */
export const PseAjTime = (d = 2000) => {
  setTimeout(() => {
    return new Date();
  }, d);
};

/* Name: PseAjValAr
   Desc: 擬似的非同期通信-単一配列
   Version: v1.0 */
export const PseAjValAr = (d = 2000, Arr = [1, 2, 3, 4, 5]) => {
  const array = Arr;
  setTimeout(() => {
    return array;
  }, d);
};

/* Name: PseAjObjAr
   Desc: 擬似的非同期通信-オブジェクト配列
   Version: v1.0 */
export const PseAjObjAr = (d = 2000, Arr = [{ A: { N: 'ABC', A: 'DEF' }, B: { O: 'ABC', E: 'DEF' }, E: { I: 'ABC', N: 'DEF' } }]) => {
  const array = Arr;
  setTimeout(() => {
    return array;
  }, d);
};

/* -- 環境系 -- */
/* Name: gUrl
   Desc: URL取得
   Version: v1.0
   @param
     property
   @return
     string
     paramがなければ以下のプロパティをそのまま返す
     https://developer.mozilla.org/ja/docs/Web/API/Window/location */
export const gUrl = (p = null) => {
  if (window.location[p]) {
    return window.location[p];
  }
  return window.location;
};

/* Name: gOs
   Desc: OS取得
   Version: v1.0 */
export const gOs = () => {
  return window.navigator.platform;
};

/* Name: gBrowser
   Desc: ブラウザ取得
   Version: v1.0 */
export const gBrowser = () => {
  const ua = window.navigator.userAgent.toLowerCase();
  const ver = window.navigator.appVersion.toLowerCase();
  let name = 'unknown';

  if (ua.indexOf('msie') !== -1) {
    if (ver.indexOf('msie 6.') !== -1) {
      name = 'ie6';
    } else if (ver.indexOf('msie 7.') !== -1) {
      name = 'ie7';
    } else if (ver.indexOf('msie 8.') !== -1) {
      name = 'ie8';
    } else if (ver.indexOf('msie 9.') !== -1) {
      name = 'ie9';
    } else if (ver.indexOf('msie 10.') !== -1) {
      name = 'ie10';
    } else {
      name = 'ie';
    }
  } else if (ua.indexOf('trident/7') !== -1) {
    name = 'ie11';
  } else if (ua.indexOf('chrome') !== -1) {
    name = 'chrome';
  } else if (ua.indexOf('safari') !== -1) {
    name = 'safari';
  } else if (ua.indexOf('opera') !== -1) {
    name = 'opera';
  } else if (ua.indexOf('firefox') !== -1) {
    name = 'firefox';
  }
  return name;
};

/* -- ブラウザ系 -- */
/* Name: setLocal, getLocal
   Desc: WebStorage取得
   Version: v1.0 */
// SET
export const setLocal = (key = 'storage', item = null) => {
  localStorage.setItem(key, JSON.stringify(item));
  return item;
};
// GET
export const getLocal = (key = 'storage') => {
  const results = JSON.parse(localStorage.getItem(key));
  return results;
};

/* -- レイアウト系 -- */
/* Name: isBrPoint
   Desc: ブレークポイントの取得
   Version: v0.0 */
export const isBrPoint = (bp = 320, bps = [320, 480, 768, 1024]) => {
  const w = document(window).width();
  let min;
  let max;
  for (let i = 0, l = bps.length; i < l; i += 1) {
    if (bps[i] === bp) {
      min = bps[i - 1] || 0;
      max = bps[i];
      break;
    }
  }
  return w > min && w <= max;
};

/* -- その他 -- */
/* Name: cEr
   Desc: 例外を発生させる
   Version: v1.0 */
export const cEr = (str = 'AwakeError') => {
  throw new Error(str);
};

/* Name: nVo
   Desc: 何もしない
   Version: v1.0 */
export const nVo = () => {};

/* Name: cLo
   Desc: ログを出力する。
   Version: v1.0 */
export const cLo = (v = 'nothingLog') => {
  console.log(v);
};
