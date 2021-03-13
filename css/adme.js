function jump(){
var u = navigator.userAgent; 
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; 
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); 

document.getElementById('mao1').innerHTML = 'FA25E83C';
var text = document.getElementById("mao1").innerText;
  inputed.value = text; // 修改文本框的内容
  inputed.select(); // 选中文本
  document.execCommand("copy"); // 执行浏览器复制命令

    if (isiOS) {
        window.location.href="itms-appss://apps.apple.com/cn/app/%E5%A5%BD%E7%9C%81-%E5%A5%BD%E7%9A%84%E7%94%9F%E6%B4%BB-%E7%9C%9F%E7%9A%84%E5%BE%88%E7%9C%81/id1052974929"  
    }

    else{
        window.location.href="https://api.pingping6.com/tools/lanzou/?down&url=https://www.lanzoux.com/iB8whggicif"
    }

}