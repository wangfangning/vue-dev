/** 解析url参数
 * @example ?id=1234&a=b
 * @return Object {id:1234,a:b}
*/
export function urlParam() {
  let url = window.location.search;
  let obj = {};
  // 匹配[?&](?&)后面[^?&](非?&)得字符，+代表匹配多次；
  console.log(url);
  let reg = /[?&][^?&]+=[^?&]+/g;
  let arr = url.match(reg);
  console.log(arr);
  if (arr) {
    arr.forEach((item) => {
      let tempArr = item.substring(1).split('=');
      let key = decodeURIComponent(tempArr[0]);
      let val = decodeURIComponent(tempArr[1]);
      obj[key] = val;
    });
    // console.log(obj);
    return obj;
  }
};
