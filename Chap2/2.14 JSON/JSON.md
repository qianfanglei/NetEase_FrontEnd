## 2.14 JSON ##
1. JS → JSON
	- `JSON.stringify(value[,replacer [,space]])`
	- ['a','b']其中所填为我们只返回该 JSON 中的 a 和 b 属性。
2. JSON → JS
	- `JSON.parse(text[, reviver])`
3. IE6/7等低版本不兼容 JSON 方法，我们可以通过自己封装一个JSON方法来实现：
	<pre>if(!window.JSON){
	    window.JSON = {
		parse:function(sJSON){
		    return eval('('+sJSON+')');
		},
		stringify:function(){
		    //...
		}
	    }	
	}</pre>