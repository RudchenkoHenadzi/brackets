module.exports = function check(str, bracketsConfig) {

  let arrStr = str.split('');
  let arrStrBrakets = String(bracketsConfig).split('');
  let arrCom = arrStr.concat(arrStrBrakets);

  function searchSymbolRBR (value) {
      return value === '(';
  }

  function searchSymbolRBL (value) {
      return value === ')';
  }

  let a = arrCom.filter(searchSymbolRBR);
  let b = arrCom.filter(searchSymbolRBL);

  function searchSymbolSBR (value) {
      return value === '[';
  }

  function searchSymbolSBL (value) {
      return value === ']';
  }

  let c = arrCom.filter(searchSymbolSBR);
  let d = arrCom.filter(searchSymbolSBL);

  function searchSymbolCBR (value) {
      return value === '{';
  }

  function searchSymbolCBL (value) {
      return value === '}';
  }

  let i = arrCom.filter(searchSymbolCBR);
  let f = arrCom.filter(searchSymbolCBL);

  function searchSymbolStick (value) {
    return value === '|';
  }

  let g = arrCom.filter(searchSymbolStick);

  if(str[str.length -1] === '(' || str[str.length -1] === '[' || str[str.length -1] === '{') {
    return false;
  } else if (a.length === b.length && c.length === d.length && i.length === f.length && g.length % 2 === 0) {
    return true;
  } else {
    return false;
  }

}
