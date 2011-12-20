/*!
 * Copyright (c) 2010 Chris O'Hara <cohara87@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
(function(exports){function h(a){for(var b in f)a=a.replace(f[b],"");return a}function i(){return"!*$^#(@*#&"}function j(a){return a.replace(">","&gt;").replace("<","&lt;").replace("\\","\\\\")}function k(a){return out="",a.replace(/\\s*[a-z\-]+\\s*=\\s*(?:\042|\047)(?:[^\\1]*?)\\1/gi,function(a){$out+=a.replace(/\/\*.*?\*\//g,"")}),out}var a={"&nbsp;":" ","&iexcl;":"¡","&cent;":"¢","&pound;":"£","&curren;":"€","&yen;":"¥","&brvbar;":"Š","&sect;":"§","&uml;":"š","&copy;":"©","&ordf;":"ª","&laquo;":"«","&not;":"¬","&shy;":"­","&reg;":"®","&macr;":"¯","&deg;":"°","&plusmn;":"±","&sup2;":"²","&sup3;":"³","&acute;":"Ž","&micro;":"µ","&para;":"¶","&middot;":"·","&cedil;":"ž","&sup1;":"¹","&ordm;":"º","&raquo;":"»","&frac14;":"Œ","&frac12;":"œ","&frac34;":"Ÿ","&iquest;":"¿","&Agrave;":"À","&Aacute;":"Á","&Acirc;":"Â","&Atilde;":"Ã","&Auml;":"Ä","&Aring;":"Å","&AElig;":"Æ","&Ccedil;":"Ç","&Egrave;":"È","&Eacute;":"É","&Ecirc;":"Ê","&Euml;":"Ë","&Igrave;":"Ì","&Iacute;":"Í","&Icirc;":"Î","&Iuml;":"Ï","&ETH;":"Ð","&Ntilde;":"Ñ","&Ograve;":"Ò","&Oacute;":"Ó","&Ocirc;":"Ô","&Otilde;":"Õ","&Ouml;":"Ö","&times;":"×","&Oslash;":"Ø","&Ugrave;":"Ù","&Uacute;":"Ú","&Ucirc;":"Û","&Uuml;":"Ü","&Yacute;":"Ý","&THORN;":"Þ","&szlig;":"ß","&agrave;":"à","&aacute;":"á","&acirc;":"â","&atilde;":"ã","&auml;":"ä","&aring;":"å","&aelig;":"æ","&ccedil;":"ç","&egrave;":"è","&eacute;":"é","&ecirc;":"ê","&euml;":"ë","&igrave;":"ì","&iacute;":"í","&icirc;":"î","&iuml;":"ï","&eth;":"ð","&ntilde;":"ñ","&ograve;":"ò","&oacute;":"ó","&ocirc;":"ô","&otilde;":"õ","&ouml;":"ö","&divide;":"÷","&oslash;":"ø","&ugrave;":"ù","&uacute;":"ú","&ucirc;":"û","&uuml;":"ü","&yacute;":"ý","&thorn;":"þ","&yuml;":"ÿ","&quot;":'"',"&lt;":"<","&gt;":">","&apos;":"'","&minus;":"−","&circ;":"ˆ","&tilde;":"˜","&Scaron;":"Š","&lsaquo;":"‹","&OElig;":"Œ","&lsquo;":"‘","&rsquo;":"’","&ldquo;":"“","&rdquo;":"”","&bull;":"•","&ndash;":"–","&mdash;":"—","&trade;":"™","&scaron;":"š","&rsaquo;":"›","&oelig;":"œ","&Yuml;":"Ÿ","&fnof;":"ƒ","&Alpha;":"Α","&Beta;":"Β","&Gamma;":"Γ","&Delta;":"Δ","&Epsilon;":"Ε","&Zeta;":"Ζ","&Eta;":"Η","&Theta;":"Θ","&Iota;":"Ι","&Kappa;":"Κ","&Lambda;":"Λ","&Mu;":"Μ","&Nu;":"Ν","&Xi;":"Ξ","&Omicron;":"Ο","&Pi;":"Π","&Rho;":"Ρ","&Sigma;":"Σ","&Tau;":"Τ","&Upsilon;":"Υ","&Phi;":"Φ","&Chi;":"Χ","&Psi;":"Ψ","&Omega;":"Ω","&alpha;":"α","&beta;":"β","&gamma;":"γ","&delta;":"δ","&epsilon;":"ε","&zeta;":"ζ","&eta;":"η","&theta;":"θ","&iota;":"ι","&kappa;":"κ","&lambda;":"λ","&mu;":"μ","&nu;":"ν","&xi;":"ξ","&omicron;":"ο","&pi;":"π","&rho;":"ρ","&sigmaf;":"ς","&sigma;":"σ","&tau;":"τ","&upsilon;":"υ","&phi;":"φ","&chi;":"χ","&psi;":"ψ","&omega;":"ω","&thetasym;":"ϑ","&upsih;":"ϒ","&piv;":"ϖ","&ensp;":" ","&emsp;":" ","&thinsp;":" ","&zwnj;":"‌","&zwj;":"‍","&lrm;":"‎","&rlm;":"‏","&sbquo;":"‚","&bdquo;":"„","&dagger;":"†","&Dagger;":"‡","&hellip;":"…","&permil;":"‰","&prime;":"′","&Prime;":"″","&oline;":"‾","&frasl;":"⁄","&euro;":"€","&image;":"ℑ","&weierp;":"℘","&real;":"ℜ","&alefsym;":"ℵ","&larr;":"←","&uarr;":"↑","&rarr;":"→","&darr;":"↓","&harr;":"↔","&crarr;":"↵","&lArr;":"⇐","&uArr;":"⇑","&rArr;":"⇒","&dArr;":"⇓","&hArr;":"⇔","&forall;":"∀","&part;":"∂","&exist;":"∃","&empty;":"∅","&nabla;":"∇","&isin;":"∈","&notin;":"∉","&ni;":"∋","&prod;":"∏","&sum;":"∑","&lowast;":"∗","&radic;":"√","&prop;":"∝","&infin;":"∞","&ang;":"∠","&and;":"∧","&or;":"∨","&cap;":"∩","&cup;":"∪","&int;":"∫","&there4;":"∴","&sim;":"∼","&cong;":"≅","&asymp;":"≈","&ne;":"≠","&equiv;":"≡","&le;":"≤","&ge;":"≥","&sub;":"⊂","&sup;":"⊃","&nsub;":"⊄","&sube;":"⊆","&supe;":"⊇","&oplus;":"⊕","&otimes;":"⊗","&perp;":"⊥","&sdot;":"⋅","&lceil;":"⌈","&rceil;":"⌉","&lfloor;":"⌊","&rfloor;":"⌋","&lang;":"〈","&rang;":"〉","&loz;":"◊","&spades;":"♠","&clubs;":"♣","&hearts;":"♥","&diams;":"♦"},b=function(b){if(!~b.indexOf("&"))return b;for(var c in a)b=b.replace(new RegExp(c,"g"),a[c]);return b=b.replace(/&#x(0*[0-9a-f]{2,5});?/gi,function(a,b){return String.fromCharCode(parseInt(+b,16))}),b=b.replace(/&#([0-9]{2,4});?/gi,function(a,b){return String.fromCharCode(+b)}),b=b.replace(/&amp;/g,"&"),b},c=function(b){b=b.replace(/&/g,"&amp;"),b=b.replace(/'/g,"&#39;");for(var c in a)b=b.replace(new RegExp(a[c],"g"),c);return b};exports.entities={encode:c,decode:b};var d={"document.cookie":"[removed]","document.write":"[removed]",".parentNode":"[removed]",".innerHTML":"[removed]","window.location":"[removed]","-moz-binding":"[removed]","<!--":"&lt;!--","-->":"--&gt;","<![CDATA[":"&lt;![CDATA["},e={"javascript\\s*:":"[removed]","expression\\s*(\\(|&\\#40;)":"[removed]","vbscript\\s*:":"[removed]","Redirect\\s+302":"[removed]"},f=[/%0[0-8bcef]/g,/%1[0-9a-f]/g,/[\x00-\x08]/g,/\x0b/g,/\x0c/g,/[\x0e-\x1f]/g],g=["javascript","expression","vbscript","script","applet","alert","document","write","cookie","window"];exports.xssClean=function(a,b){if(a instanceof Array||typeof a=="object"){for(var c in a)a[c]=exports.xssClean(a[c]);return a}a=h(a),a=a.replace(/\&([a-z\_0-9]+)\=([a-z\_0-9]+)/i,i()+"$1=$2"),a=a.replace(/(&\#?[0-9a-z]{2,})([\x00-\x20])*;?/i,"$1;$2"),a=a.replace(/(&\#x?)([0-9A-F]+);?/i,"$1;$2"),a=a.replace(i(),"&"),a=decodeURIComponent(a),a=a.replace(/[a-z]+=([\'\"]).*?\\1/gi,function(a,b){return a.replace(b,j(b))}),a=h(a),a=a.replace("\t"," ");var f=a;for(var c in d)a=a.replace(c,d[c]);for(var c in e)a=a.replace(new RegExp(c,"i"),e[c]);for(var c in g){var l=g[c].split("").join("\\s*")+"\\s*";a=a.replace(new RegExp("("+l+")(\\W)","ig"),function(a,b,c){return b.replace(/\s+/g,"")+c})}do{var m=a;a.match(/<a/i)&&(a=a.replace(/<a\\s+([^>]*?)(>|$)/gi,function(a,b,c){return b=k(b.replace("<","").replace(">","")),a.replace(b,b.replace(/href=.*?(alert\(|alert&\#40;|javascript\:|charset\=|window\.|document\.|\.cookie|<script|<xss|base64\\s*,)/gi,""))})),a.match(/<img/i)&&(a=a.replace(/<img\\s+([^>]*?)(\\s?\/?>|$)/gi,function(a,b,c){return b=k(b.replace("<","").replace(">","")),a.replace(b,b.replace(/src=.*?(alert\(|alert&\#40;|javascript\:|charset\=|window\.|document\.|\.cookie|<script|<xss|base64\\s*,)/gi,""))}));if(a.match(/script/i)||a.match(/xss/i))a=a.replace(/<(\/*)(script|xss)(.*?)\>/gi,"[removed]")}while(m!=a);event_handlers=["[^a-z_-]onw*"],b||event_handlers.push("xmlns"),a=a.replace(new RegExp("<([^><]+?)("+event_handlers.join("|")+")(\\s*=\\s*[^><]*)([><]*)","i"),"<$1$4"),naughty="alert|applet|audio|basefont|base|behavior|bgsound|blink|body|embed|expression|form|frameset|frame|head|html|ilayer|iframe|input|isindex|layer|link|meta|object|plaintext|style|script|textarea|title|video|xml|xss",a=a.replace(new RegExp("<(/*\\s*)("+naughty+")([^><]*)([><]*)","gi"),function(a,b,c,d,e){return"&lt;"+b+c+d+e.replace(">","&gt;").replace("<","&lt;")}),a=a.replace(/(alert|cmd|passthru|eval|exec|expression|system|fopen|fsockopen|file|file_get_contents|readfile|unlink)(\\s*)\((.*?)\)/gi,"$1$2&#40;$3&#41;");for(var c in d)a=a.replace(c,d[c]);for(var c in e)a=a.replace(new RegExp(c,"i"),e[c]);if(b&&a!==f)throw new Error("Image may contain XSS");return a};var l=exports.Validator=function(){};l.prototype.check=function(a,b){return this.str=a==null||isNaN(a)&&a.length==undefined?"":a+"",this.msg=b,this._errors=[],this},l.prototype.validate=l.prototype.check,l.prototype.assert=l.prototype.check,l.prototype.error=function(a){throw new Error(a)},l.prototype.isEmail=function(){return this.str.match(/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/)?this:this.error(this.msg||"Invalid email")},l.prototype.isUrl=function(){return this.str.match(/^(?:(?:ht|f)tp(?:s?)\:\/\/|~\/|\/)?(?:\w+:\w+@)?((?:(?:[-\w\d{1-3}]+\.)+(?:com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|edu|co\.uk|ac\.uk|it|fr|tv|museum|asia|local|travel|[a-z]{2}))|((\b25[0-5]\b|\b[2][0-4][0-9]\b|\b[0-1]?[0-9]?[0-9]\b)(\.(\b25[0-5]\b|\b[2][0-4][0-9]\b|\b[0-1]?[0-9]?[0-9]\b)){3}))(?::[\d]{1,5})?(?:(?:(?:\/(?:[-\w~!$+|.,=]|%[a-f\d]{2})+)+|\/)+|\?|#)?(?:(?:\?(?:[-\w~!$+|.,*:]|%[a-f\d{2}])+=?(?:[-\w~!$+|.,*:=]|%[a-f\d]{2})*)(?:&(?:[-\w~!$+|.,*:]|%[a-f\d{2}])+=?(?:[-\w~!$+|.,*:=]|%[a-f\d]{2})*)*)*(?:#(?:[-\w~!$ |\/.,*:;=]|%[a-f\d]{2})*)?$/)?this:this.error(this.msg||"Invalid URL")},l.prototype.isIP=function(){return this.str.match(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)?this:this.error(this.msg||"Invalid IP")},l.prototype.isAlpha=function(){return this.str.match(/^[a-zA-Z]+$/)?this:this.error(this.msg||"Invalid characters")},l.prototype.isAlphanumeric=function(){return this.str.match(/^[a-zA-Z0-9]+$/)?this:this.error(this.msg||"Invalid characters")},l.prototype.isNumeric=function(){return this.str.match(/^-?[0-9]+$/)?this:this.error(this.msg||"Invalid number")},l.prototype.isLowercase=function(){return this.str.match(/^[a-z0-9]+$/)?this:this.error(this.msg||"Invalid characters")},l.prototype.isUppercase=function(){return this.str.match(/^[A-Z0-9]+$/)?this:this.error(this.msg||"Invalid characters")},l.prototype.isInt=function(){return this.str.match(/^(?:-?(?:0|[1-9][0-9]*))$/)?this:this.error(this.msg||"Invalid integer")},l.prototype.isDecimal=function(){return this.str.match(/^(?:-?(?:0|[1-9][0-9]*))?(?:\.[0-9]*)?$/)?this:this.error(this.msg||"Invalid decimal")},l.prototype.isFloat=function(){return this.isDecimal()},l.prototype.notNull=function(){return this.str===""?this.error(this.msg||"Invalid characters"):this},l.prototype.isNull=function(){return this.str!==""?this.error(this.msg||"Invalid characters"):this},l.prototype.notEmpty=function(){return this.str.match(/^[\s\t\r\n]*$/)?this.error(this.msg||"String is whitespace"):this},l.prototype.equals=function(a){return this.str!=a?this.error(this.msg||"Not equal"):this},l.prototype.contains=function(a){return this.str.indexOf(a)===-1?this.error(this.msg||"Invalid characters"):this},l.prototype.notContains=function(a){return this.str.indexOf(a)<0?this:this.error(this.msg||"Invalid characters")},l.prototype.regex=l.prototype.is=function(a,b){return typeof a!="function"&&(a=new RegExp(a,b)),this.str.match(a)?this:this.error(this.msg||"Invalid characters")},l.prototype.notRegex=l.prototype.not=function(a,b){return typeof a!="function"&&(a=new RegExp(a,b)),this.str.match(a)&&this.error(this.msg||"Invalid characters"),this},l.prototype.len=function(a,b){return this.str.length<a&&this.error(this.msg||"String is too small"),typeof b!==undefined&&this.str.length>b?this.error(this.msg||"String is too large"):this},l.prototype.isUUID=function(a){return a==3||a=="v3"?pattern=/[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i:a==4||a=="v4"?pattern=/[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i:pattern=/[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,this.str.match(pattern)?this:this.error(this.msg||"Not a UUID")},l.prototype.isDate=function(){var a=/^([0-1]{0,1}[0-9]{1})\/([0-3]{0,1}[0-9]{1})\/([0-9]{4})$/,b=a.exec(this.str);if(!b||b.length!=4)return this.error(this.msg||"Not a date");var c=new Date(this.str);return c.getFullYear()!=parseInt(b[3])||c.getMonth()+1!=parseInt(b[1])||c.getDate()!=parseInt(b[2])?this.error(this.msg||"Not a date"):this},l.prototype["in"]=function(a){return a&&typeof a.indexOf=="function"?~a.indexOf(this.str)?this:this.error(this.msg||"Unexpected value"):this.error(this.msg||"Invalid in() argument")},l.prototype.notIn=function(a){return a&&typeof a.indexOf=="function"?a.indexOf(this.str)!==-1?this.error(this.msg||"Unexpected value"):this:this.error(this.msg||"Invalid notIn() argument")};var m=exports.Filter=function(){},n="\\r\\n\\t\\s";m.prototype.modify=function(a){this.str=a},m.prototype.convert=m.prototype.sanitize=function(a){return this.str=a,this},m.prototype.xss=function(a){return this.modify(xssClean(this.str,a)),this.str},m.prototype.entityDecode=function(){return this.modify(b(this.str)),this.str},m.prototype.entityEncode=function(){return this.modify(c(this.str)),this.str},m.prototype.ltrim=function(a){return a=a||n,this.modify(this.str.replace(new RegExp("^["+a+"]+","g"),"")),this.str},m.prototype.rtrim=function(a){return a=a||n,this.modify(this.str.replace(new RegExp("["+a+"]+$","g"),"")),this.str},m.prototype.trim=function(a){return a=a||n,this.modify(this.str.replace(new RegExp("^["+a+"]+|["+a+"]+$","g"),"")),this.str},m.prototype.ifNull=function(a){return(!this.str||this.str==="")&&this.modify(a),this.str},m.prototype.toFloat=function(){return this.modify(parseFloat(this.str)),this.str},m.prototype.toInt=function(a){return a=a||10,this.modify(parseInt(this.str),a),this.str},m.prototype.toBoolean=function(){return!this.str||this.str=="0"||this.str=="false"||this.str==""?this.modify(!1):this.modify(!0),this.str},m.prototype.toBooleanStrict=function(){return this.str=="1"||this.str=="true"?this.modify(!0):this.modify(!1),this.str},exports.sanitize=exports.convert=function(a){var b=new exports.Filter;return b.sanitize(a)},exports.check=exports.validate=exports.assert=function(a,b){var c=new exports.Validator;return c.check(a,b)}})(this)