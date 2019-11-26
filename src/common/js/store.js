// 存储缓存函数
export function saveToLocal(id, key, value) {
    let seller = window.localStorage.__seller__;
  // 如果localStorage.__seller__不存在,初始化一个seller对象;
    if (!seller) {
        seller = {};
        seller[id] = {};
    } else {
    // 如果localStorage.__seller__已经存在,用JSON.parse()方法把缓存JSON字符串seller传换成seller对象;
        seller = JSON.parse(seller);
        if (!seller[id]) {
            seller[id] = {};
        }
    }
  // 存储seller对象的key:value
    seller[id][key] = value;
  // 把seller对象转化成JSON字符串存储在localStorage中
    window.localStorage.__seller__ = JSON.stringify(seller);
};
// 读取缓存函数
export function loadFromLocal(id, key, def) {
    let seller = window.localStorage.__seller__;
  // 如果没有seller,返回默认值;
    if (!seller) {
        return def;
    }
  // 如果localStorage.__seller__已经存在,用JSON.parse()方法把缓存JSON字符串seller传换成seller对象,并返回对应ID的对象;
    seller = JSON.parse(seller)[id];
    // 如果返回ID的对象不存在，返回默认值
    if (!seller) {
        return def;
    }
    // 否则取得当前ID[key]的值;
    let ret = seller[key];
    // 如果ret有返回ret;没有则返回def
    return ret || def;
};
