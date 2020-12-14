!function(e){var t,r;!function(){var e,t,r,i,n,s,o,a,u,l,h,d,c,f,p,g,m,y,x,v,w,b,k,S,Q,L,_,T,P=function(e){var t=new P.Builder;return t.pipeline.add(P.trimmer,P.stopWordFilter,P.stemmer),t.searchPipeline.add(P.stemmer),e.call(t,t),t.build()};P.version="2.1.5",P.utils={},P.utils.warn=(e=this,function(t){e.console&&console.warn&&console.warn(t)}),P.utils.asString=function(e){return null==e?"":e.toString()},P.FieldRef=function(e,t,r){this.docRef=e,this.fieldName=t,this._stringValue=r},P.FieldRef.joiner="/",P.FieldRef.fromString=function(e){var t=e.indexOf(P.FieldRef.joiner);if(-1===t)throw"malformed field ref string";var r=e.slice(0,t),i=e.slice(t+1);return new P.FieldRef(i,r,e)},P.FieldRef.prototype.toString=function(){return null==this._stringValue&&(this._stringValue=this.fieldName+P.FieldRef.joiner+this.docRef),this._stringValue},P.idf=function(e,t){var r=0;for(var i in e)"_index"!=i&&(r+=Object.keys(e[i]).length);var n=(t-r+.5)/(r+.5);return Math.log(1+Math.abs(n))},P.Token=function(e,t){this.str=e||"",this.metadata=t||{}},P.Token.prototype.toString=function(){return this.str},P.Token.prototype.update=function(e){return this.str=e(this.str,this.metadata),this},P.Token.prototype.clone=function(e){return e=e||function(e){return e},new P.Token(e(this.str,this.metadata),this.metadata)},P.tokenizer=function(e){if(null==e||null==e)return[];if(Array.isArray(e))return e.map(function(e){return new P.Token(P.utils.asString(e).toLowerCase())});for(var t=e.toString().trim().toLowerCase(),r=t.length,i=[],n=0,s=0;n<=r;n++){var o=n-s;(t.charAt(n).match(P.tokenizer.separator)||n==r)&&(o>0&&i.push(new P.Token(t.slice(s,n),{position:[s,o],index:i.length})),s=n+1)}return i},P.tokenizer.separator=/[\s\-]+/,P.Pipeline=function(){this._stack=[]},P.Pipeline.registeredFunctions=Object.create(null),P.Pipeline.registerFunction=function(e,t){t in this.registeredFunctions&&P.utils.warn("Overwriting existing registered function: "+t),e.label=t,P.Pipeline.registeredFunctions[e.label]=e},P.Pipeline.warnIfFunctionNotRegistered=function(e){e.label&&e.label in this.registeredFunctions||P.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n",e)},P.Pipeline.load=function(e){var t=new P.Pipeline;return e.forEach(function(e){var r=P.Pipeline.registeredFunctions[e];if(!r)throw new Error("Cannot load unregistered function: "+e);t.add(r)}),t},P.Pipeline.prototype.add=function(){Array.prototype.slice.call(arguments).forEach(function(e){P.Pipeline.warnIfFunctionNotRegistered(e),this._stack.push(e)},this)},P.Pipeline.prototype.after=function(e,t){P.Pipeline.warnIfFunctionNotRegistered(t);var r=this._stack.indexOf(e);if(-1==r)throw new Error("Cannot find existingFn");r+=1,this._stack.splice(r,0,t)},P.Pipeline.prototype.before=function(e,t){P.Pipeline.warnIfFunctionNotRegistered(t);var r=this._stack.indexOf(e);if(-1==r)throw new Error("Cannot find existingFn");this._stack.splice(r,0,t)},P.Pipeline.prototype.remove=function(e){var t=this._stack.indexOf(e);-1!=t&&this._stack.splice(t,1)},P.Pipeline.prototype.run=function(e){for(var t=this._stack.length,r=0;r<t;r++){var i=this._stack[r];e=e.reduce(function(t,r,n){var s=i(r,n,e);return void 0===s||""===s?t:t.concat(s)},[])}return e},P.Pipeline.prototype.runString=function(e){var t=new P.Token(e);return this.run([t]).map(function(e){return e.toString()})},P.Pipeline.prototype.reset=function(){this._stack=[]},P.Pipeline.prototype.toJSON=function(){return this._stack.map(function(e){return P.Pipeline.warnIfFunctionNotRegistered(e),e.label})},P.Vector=function(e){this._magnitude=0,this.elements=e||[]},P.Vector.prototype.positionForIndex=function(e){if(0==this.elements.length)return 0;for(var t=0,r=this.elements.length/2,i=r-t,n=Math.floor(i/2),s=this.elements[2*n];i>1&&(s<e&&(t=n),s>e&&(r=n),s!=e);)i=r-t,n=t+Math.floor(i/2),s=this.elements[2*n];return s==e?2*n:s>e?2*n:s<e?2*(n+1):void 0},P.Vector.prototype.insert=function(e,t){this.upsert(e,t,function(){throw"duplicate index"})},P.Vector.prototype.upsert=function(e,t,r){this._magnitude=0;var i=this.positionForIndex(e);this.elements[i]==e?this.elements[i+1]=r(this.elements[i+1],t):this.elements.splice(i,0,e,t)},P.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude;for(var e=0,t=this.elements.length,r=1;r<t;r+=2){var i=this.elements[r];e+=i*i}return this._magnitude=Math.sqrt(e)},P.Vector.prototype.dot=function(e){for(var t=0,r=this.elements,i=e.elements,n=r.length,s=i.length,o=0,a=0,u=0,l=0;u<n&&l<s;)(o=r[u])<(a=i[l])?u+=2:o>a?l+=2:o==a&&(t+=r[u+1]*i[l+1],u+=2,l+=2);return t},P.Vector.prototype.similarity=function(e){return this.dot(e)/(this.magnitude()*e.magnitude())},P.Vector.prototype.toArray=function(){for(var e=new Array(this.elements.length/2),t=1,r=0;t<this.elements.length;t+=2,r++)e[r]=this.elements[t];return e},P.Vector.prototype.toJSON=function(){return this.elements},P.stemmer=(t={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},r={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},i="[aeiouy]",n="[^aeiou][^aeiouy]*",s=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),o=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),a=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$"),u=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]"),l=/^(.+?)(ss|i)es$/,h=/^(.+?)([^s])s$/,d=/^(.+?)eed$/,c=/^(.+?)(ed|ing)$/,f=/.$/,p=/(at|bl|iz)$/,g=new RegExp("([^aeiouylsz])\\1$"),m=new RegExp("^"+n+i+"[^aeiouwxy]$"),y=/^(.+?[^aeiou])y$/,x=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,v=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,w=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,b=/^(.+?)(s|t)(ion)$/,k=/^(.+?)e$/,S=/ll$/,Q=new RegExp("^"+n+i+"[^aeiouwxy]$"),L=function(e){var i,n,L,_,T,P,I;if(e.length<3)return e;if("y"==(L=e.substr(0,1))&&(e=L.toUpperCase()+e.substr(1)),T=h,(_=l).test(e)?e=e.replace(_,"$1$2"):T.test(e)&&(e=e.replace(T,"$1$2")),T=c,(_=d).test(e)){var O=_.exec(e);(_=s).test(O[1])&&(_=f,e=e.replace(_,""))}else if(T.test(e)){i=(O=T.exec(e))[1],(T=u).test(i)&&(P=g,I=m,(T=p).test(e=i)?e+="e":P.test(e)?(_=f,e=e.replace(_,"")):I.test(e)&&(e+="e"))}if((_=y).test(e)&&(e=(i=(O=_.exec(e))[1])+"i"),(_=x).test(e)&&(i=(O=_.exec(e))[1],n=O[2],(_=s).test(i)&&(e=i+t[n])),(_=v).test(e)&&(i=(O=_.exec(e))[1],n=O[2],(_=s).test(i)&&(e=i+r[n])),T=b,(_=w).test(e))i=(O=_.exec(e))[1],(_=o).test(i)&&(e=i);else if(T.test(e)){i=(O=T.exec(e))[1]+O[2],(T=o).test(i)&&(e=i)}return(_=k).test(e)&&(i=(O=_.exec(e))[1],T=a,P=Q,((_=o).test(i)||T.test(i)&&!P.test(i))&&(e=i)),T=o,(_=S).test(e)&&T.test(e)&&(_=f,e=e.replace(_,"")),"y"==L&&(e=L.toLowerCase()+e.substr(1)),e},function(e){return e.update(L)}),P.Pipeline.registerFunction(P.stemmer,"stemmer"),P.generateStopWordFilter=function(e){var t=e.reduce(function(e,t){return e[t]=t,e},{});return function(e){if(e&&t[e.toString()]!==e.toString())return e}},P.stopWordFilter=P.generateStopWordFilter(["a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"]),P.Pipeline.registerFunction(P.stopWordFilter,"stopWordFilter"),P.trimmer=function(e){return e.update(function(e){return e.replace(/^\W+/,"").replace(/\W+$/,"")})},P.Pipeline.registerFunction(P.trimmer,"trimmer"),P.TokenSet=function(){this.final=!1,this.edges={},this.id=P.TokenSet._nextId,P.TokenSet._nextId+=1},P.TokenSet._nextId=1,P.TokenSet.fromArray=function(e){for(var t=new P.TokenSet.Builder,r=0,i=e.length;r<i;r++)t.insert(e[r]);return t.finish(),t.root},P.TokenSet.fromClause=function(e){return"editDistance"in e?P.TokenSet.fromFuzzyString(e.term,e.editDistance):P.TokenSet.fromString(e.term)},P.TokenSet.fromFuzzyString=function(e,t){for(var r=new P.TokenSet,i=[{node:r,editsRemaining:t,str:e}];i.length;){var n,s,o,a=i.pop();if(a.str.length>0)(s=a.str.charAt(0))in a.node.edges?n=a.node.edges[s]:(n=new P.TokenSet,a.node.edges[s]=n),1==a.str.length?n.final=!0:i.push({node:n,editsRemaining:a.editsRemaining,str:a.str.slice(1)});if(a.editsRemaining>0&&a.str.length>1)(s=a.str.charAt(1))in a.node.edges?o=a.node.edges[s]:(o=new P.TokenSet,a.node.edges[s]=o),a.str.length<=2?o.final=!0:i.push({node:o,editsRemaining:a.editsRemaining-1,str:a.str.slice(2)});if(a.editsRemaining>0&&1==a.str.length&&(a.node.final=!0),a.editsRemaining>0&&a.str.length>=1){if("*"in a.node.edges)var u=a.node.edges["*"];else{u=new P.TokenSet;a.node.edges["*"]=u}1==a.str.length?u.final=!0:i.push({node:u,editsRemaining:a.editsRemaining-1,str:a.str.slice(1)})}if(a.editsRemaining>0){if("*"in a.node.edges)var l=a.node.edges["*"];else{l=new P.TokenSet;a.node.edges["*"]=l}0==a.str.length?l.final=!0:i.push({node:l,editsRemaining:a.editsRemaining-1,str:a.str})}if(a.editsRemaining>0&&a.str.length>1){var h,d=a.str.charAt(0),c=a.str.charAt(1);c in a.node.edges?h=a.node.edges[c]:(h=new P.TokenSet,a.node.edges[c]=h),1==a.str.length?h.final=!0:i.push({node:h,editsRemaining:a.editsRemaining-1,str:d+a.str.slice(2)})}}return r},P.TokenSet.fromString=function(e){for(var t=new P.TokenSet,r=t,i=!1,n=0,s=e.length;n<s;n++){var o=e[n],a=n==s-1;if("*"==o)i=!0,t.edges[o]=t,t.final=a;else{var u=new P.TokenSet;u.final=a,t.edges[o]=u,t=u,i&&(t.edges["*"]=r)}}return r},P.TokenSet.prototype.toArray=function(){for(var e=[],t=[{prefix:"",node:this}];t.length;){var r=t.pop(),i=Object.keys(r.node.edges),n=i.length;r.node.final&&e.push(r.prefix);for(var s=0;s<n;s++){var o=i[s];t.push({prefix:r.prefix.concat(o),node:r.node.edges[o]})}}return e},P.TokenSet.prototype.toString=function(){if(this._str)return this._str;for(var e=this.final?"1":"0",t=Object.keys(this.edges).sort(),r=t.length,i=0;i<r;i++){var n=t[i];e=e+n+this.edges[n].id}return e},P.TokenSet.prototype.intersect=function(e){for(var t=new P.TokenSet,r=void 0,i=[{qNode:e,output:t,node:this}];i.length;){r=i.pop();for(var n=Object.keys(r.qNode.edges),s=n.length,o=Object.keys(r.node.edges),a=o.length,u=0;u<s;u++)for(var l=n[u],h=0;h<a;h++){var d=o[h];if(d==l||"*"==l){var c=r.node.edges[d],f=r.qNode.edges[l],p=c.final&&f.final,g=void 0;d in r.output.edges?(g=r.output.edges[d]).final=g.final||p:((g=new P.TokenSet).final=p,r.output.edges[d]=g),i.push({qNode:f,output:g,node:c})}}}return t},P.TokenSet.Builder=function(){this.previousWord="",this.root=new P.TokenSet,this.uncheckedNodes=[],this.minimizedNodes={}},P.TokenSet.Builder.prototype.insert=function(e){var t,r=0;if(e<this.previousWord)throw new Error("Out of order word insertion");for(var i=0;i<e.length&&i<this.previousWord.length&&e[i]==this.previousWord[i];i++)r++;this.minimize(r),t=0==this.uncheckedNodes.length?this.root:this.uncheckedNodes[this.uncheckedNodes.length-1].child;for(i=r;i<e.length;i++){var n=new P.TokenSet,s=e[i];t.edges[s]=n,this.uncheckedNodes.push({parent:t,char:s,child:n}),t=n}t.final=!0,this.previousWord=e},P.TokenSet.Builder.prototype.finish=function(){this.minimize(0)},P.TokenSet.Builder.prototype.minimize=function(e){for(var t=this.uncheckedNodes.length-1;t>=e;t--){var r=this.uncheckedNodes[t],i=r.child.toString();i in this.minimizedNodes?r.parent.edges[r.char]=this.minimizedNodes[i]:(r.child._str=i,this.minimizedNodes[i]=r.child),this.uncheckedNodes.pop()}},P.Index=function(e){this.invertedIndex=e.invertedIndex,this.fieldVectors=e.fieldVectors,this.tokenSet=e.tokenSet,this.fields=e.fields,this.pipeline=e.pipeline},P.Index.prototype.search=function(e){return this.query(function(t){new P.QueryParser(e,t).parse()})},P.Index.prototype.query=function(e){var t=new P.Query(this.fields),r=Object.create(null),i=Object.create(null),n=Object.create(null);e.call(t,t);for(var s=0;s<t.clauses.length;s++){var o=t.clauses[s],a=null;a=o.usePipeline?this.pipeline.runString(o.term):[o.term];for(var u=0;u<a.length;u++){var l=a[u];(o=JSON.parse(JSON.stringify(o))).term=l;for(var h=P.TokenSet.fromClause(o),d=this.tokenSet.intersect(h).toArray(),c=0;c<d.length;c++){var f=d[c],p=this.invertedIndex[f];if(p)for(var g=p._index,m=0;m<o.fields.length;m++){var y=o.fields[m],x=p[y],v=Object.keys(x),w=f+"/"+y;if(void 0===i[y]&&(i[y]=new P.Vector),i[y].upsert(g,1*o.boost,function(e,t){return e+t}),!n[w]){for(var b=0;b<v.length;b++){var k,S=v[b],Q=new P.FieldRef(S,y),L=x[S];void 0===(k=r[Q])?r[Q]=new P.MatchData(f,y,L):k.add(f,y,L)}n[w]=!0}}}}}var _=Object.keys(r),T=[],I=Object.create(null);for(s=0;s<_.length;s++){var O,E=P.FieldRef.fromString(_[s]),F=E.docRef,D=this.fieldVectors[E],j=i[E.fieldName].similarity(D);if(void 0!==(O=I[F]))O.score+=j,O.matchData.combine(r[E]);else{var R={ref:F,score:j,matchData:r[E]};I[F]=R,T.push(R)}}return T.sort(function(e,t){return t.score-e.score})},P.Index.prototype.toJSON=function(){var e=Object.keys(this.invertedIndex).sort().map(function(e){return[e,this.invertedIndex[e]]},this),t=Object.keys(this.fieldVectors).map(function(e){return[e,this.fieldVectors[e].toJSON()]},this);return{version:P.version,fields:this.fields,fieldVectors:t,invertedIndex:e,pipeline:this.pipeline.toJSON()}},P.Index.load=function(e){var t={},r={},i=e.fieldVectors,n={},s=e.invertedIndex,o=new P.TokenSet.Builder,a=P.Pipeline.load(e.pipeline);e.version!=P.version&&P.utils.warn("Version mismatch when loading serialised index. Current version of lunr '"+P.version+"' does not match serialized index '"+e.version+"'");for(var u=0;u<i.length;u++){var l=(d=i[u])[0],h=d[1];r[l]=new P.Vector(h)}for(u=0;u<s.length;u++){var d,c=(d=s[u])[0],f=d[1];o.insert(c),n[c]=f}return o.finish(),t.fields=e.fields,t.fieldVectors=r,t.invertedIndex=n,t.tokenSet=o.root,t.pipeline=a,new P.Index(t)},P.Builder=function(){this._ref="id",this._fields=[],this.invertedIndex=Object.create(null),this.fieldTermFrequencies={},this.fieldLengths={},this.tokenizer=P.tokenizer,this.pipeline=new P.Pipeline,this.searchPipeline=new P.Pipeline,this.documentCount=0,this._b=.75,this._k1=1.2,this.termIndex=0,this.metadataWhitelist=[]},P.Builder.prototype.ref=function(e){this._ref=e},P.Builder.prototype.field=function(e){this._fields.push(e)},P.Builder.prototype.b=function(e){this._b=e<0?0:e>1?1:e},P.Builder.prototype.k1=function(e){this._k1=e},P.Builder.prototype.add=function(e){var t=e[this._ref];this.documentCount+=1;for(var r=0;r<this._fields.length;r++){var i=this._fields[r],n=e[i],s=this.tokenizer(n),o=this.pipeline.run(s),a=new P.FieldRef(t,i),u=Object.create(null);this.fieldTermFrequencies[a]=u,this.fieldLengths[a]=0,this.fieldLengths[a]+=o.length;for(var l=0;l<o.length;l++){var h=o[l];if(null==u[h]&&(u[h]=0),u[h]+=1,null==this.invertedIndex[h]){var d=Object.create(null);d._index=this.termIndex,this.termIndex+=1;for(var c=0;c<this._fields.length;c++)d[this._fields[c]]=Object.create(null);this.invertedIndex[h]=d}null==this.invertedIndex[h][i][t]&&(this.invertedIndex[h][i][t]=Object.create(null));for(var f=0;f<this.metadataWhitelist.length;f++){var p=this.metadataWhitelist[f],g=h.metadata[p];null==this.invertedIndex[h][i][t][p]&&(this.invertedIndex[h][i][t][p]=[]),this.invertedIndex[h][i][t][p].push(g)}}}},P.Builder.prototype.calculateAverageFieldLengths=function(){for(var e=Object.keys(this.fieldLengths),t=e.length,r={},i={},n=0;n<t;n++){var s=P.FieldRef.fromString(e[n]);i[o=s.fieldName]||(i[o]=0),i[o]+=1,r[o]||(r[o]=0),r[o]+=this.fieldLengths[s]}for(n=0;n<this._fields.length;n++){var o;r[o=this._fields[n]]=r[o]/i[o]}this.averageFieldLength=r},P.Builder.prototype.createFieldVectors=function(){for(var e={},t=Object.keys(this.fieldTermFrequencies),r=t.length,i=Object.create(null),n=0;n<r;n++){for(var s=P.FieldRef.fromString(t[n]),o=s.fieldName,a=this.fieldLengths[s],u=new P.Vector,l=this.fieldTermFrequencies[s],h=Object.keys(l),d=h.length,c=0;c<d;c++){var f,p,g,m=h[c],y=l[m],x=this.invertedIndex[m]._index;void 0===i[m]?(f=P.idf(this.invertedIndex[m],this.documentCount),i[m]=f):f=i[m],p=f*((this._k1+1)*y)/(this._k1*(1-this._b+this._b*(a/this.averageFieldLength[o]))+y),g=Math.round(1e3*p)/1e3,u.insert(x,g)}e[s]=u}this.fieldVectors=e},P.Builder.prototype.createTokenSet=function(){this.tokenSet=P.TokenSet.fromArray(Object.keys(this.invertedIndex).sort())},P.Builder.prototype.build=function(){return this.calculateAverageFieldLengths(),this.createFieldVectors(),this.createTokenSet(),new P.Index({invertedIndex:this.invertedIndex,fieldVectors:this.fieldVectors,tokenSet:this.tokenSet,fields:this._fields,pipeline:this.searchPipeline})},P.Builder.prototype.use=function(e){var t=Array.prototype.slice.call(arguments,1);t.unshift(this),e.apply(this,t)},P.MatchData=function(e,t,r){for(var i=Object.create(null),n=Object.keys(r),s=0;s<n.length;s++){var o=n[s];i[o]=r[o].slice()}this.metadata=Object.create(null),this.metadata[e]=Object.create(null),this.metadata[e][t]=i},P.MatchData.prototype.combine=function(e){for(var t=Object.keys(e.metadata),r=0;r<t.length;r++){var i=t[r],n=Object.keys(e.metadata[i]);null==this.metadata[i]&&(this.metadata[i]=Object.create(null));for(var s=0;s<n.length;s++){var o=n[s],a=Object.keys(e.metadata[i][o]);null==this.metadata[i][o]&&(this.metadata[i][o]=Object.create(null));for(var u=0;u<a.length;u++){var l=a[u];null==this.metadata[i][o][l]?this.metadata[i][o][l]=e.metadata[i][o][l]:this.metadata[i][o][l]=this.metadata[i][o][l].concat(e.metadata[i][o][l])}}}},P.MatchData.prototype.add=function(e,t,r){if(!(e in this.metadata))return this.metadata[e]=Object.create(null),void(this.metadata[e][t]=r);if(t in this.metadata[e])for(var i=Object.keys(r),n=0;n<i.length;n++){var s=i[n];s in this.metadata[e][t]?this.metadata[e][t][s]=this.metadata[e][t][s].concat(r[s]):this.metadata[e][t][s]=r[s]}else this.metadata[e][t]=r},P.Query=function(e){this.clauses=[],this.allFields=e},P.Query.wildcard=new String("*"),P.Query.wildcard.NONE=0,P.Query.wildcard.LEADING=1,P.Query.wildcard.TRAILING=2,P.Query.prototype.clause=function(e){return"fields"in e||(e.fields=this.allFields),"boost"in e||(e.boost=1),"usePipeline"in e||(e.usePipeline=!0),"wildcard"in e||(e.wildcard=P.Query.wildcard.NONE),e.wildcard&P.Query.wildcard.LEADING&&e.term.charAt(0)!=P.Query.wildcard&&(e.term="*"+e.term),e.wildcard&P.Query.wildcard.TRAILING&&e.term.slice(-1)!=P.Query.wildcard&&(e.term=e.term+"*"),this.clauses.push(e),this},P.Query.prototype.term=function(e,t){var r=t||{};return r.term=e,this.clause(r),this},P.QueryParseError=function(e,t,r){this.name="QueryParseError",this.message=e,this.start=t,this.end=r},P.QueryParseError.prototype=new Error,P.QueryLexer=function(e){this.lexemes=[],this.str=e,this.length=e.length,this.pos=0,this.start=0,this.escapeCharPositions=[]},P.QueryLexer.prototype.run=function(){for(var e=P.QueryLexer.lexText;e;)e=e(this)},P.QueryLexer.prototype.sliceString=function(){for(var e=[],t=this.start,r=this.pos,i=0;i<this.escapeCharPositions.length;i++)r=this.escapeCharPositions[i],e.push(this.str.slice(t,r)),t=r+1;return e.push(this.str.slice(t,this.pos)),this.escapeCharPositions.length=0,e.join("")},P.QueryLexer.prototype.emit=function(e){this.lexemes.push({type:e,str:this.sliceString(),start:this.start,end:this.pos}),this.start=this.pos},P.QueryLexer.prototype.escapeCharacter=function(){this.escapeCharPositions.push(this.pos-1),this.pos+=1},P.QueryLexer.prototype.next=function(){if(this.pos>=this.length)return P.QueryLexer.EOS;var e=this.str.charAt(this.pos);return this.pos+=1,e},P.QueryLexer.prototype.width=function(){return this.pos-this.start},P.QueryLexer.prototype.ignore=function(){this.start==this.pos&&(this.pos+=1),this.start=this.pos},P.QueryLexer.prototype.backup=function(){this.pos-=1},P.QueryLexer.prototype.acceptDigitRun=function(){var e,t;do{t=(e=this.next()).charCodeAt(0)}while(t>47&&t<58);e!=P.QueryLexer.EOS&&this.backup()},P.QueryLexer.prototype.more=function(){return this.pos<this.length},P.QueryLexer.EOS="EOS",P.QueryLexer.FIELD="FIELD",P.QueryLexer.TERM="TERM",P.QueryLexer.EDIT_DISTANCE="EDIT_DISTANCE",P.QueryLexer.BOOST="BOOST",P.QueryLexer.lexField=function(e){return e.backup(),e.emit(P.QueryLexer.FIELD),e.ignore(),P.QueryLexer.lexText},P.QueryLexer.lexTerm=function(e){if(e.width()>1&&(e.backup(),e.emit(P.QueryLexer.TERM)),e.ignore(),e.more())return P.QueryLexer.lexText},P.QueryLexer.lexEditDistance=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(P.QueryLexer.EDIT_DISTANCE),P.QueryLexer.lexText},P.QueryLexer.lexBoost=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(P.QueryLexer.BOOST),P.QueryLexer.lexText},P.QueryLexer.lexEOS=function(e){e.width()>0&&e.emit(P.QueryLexer.TERM)},P.QueryLexer.termSeparator=P.tokenizer.separator,P.QueryLexer.lexText=function(e){for(;;){var t=e.next();if(t==P.QueryLexer.EOS)return P.QueryLexer.lexEOS;if(92!=t.charCodeAt(0)){if(":"==t)return P.QueryLexer.lexField;if("~"==t)return e.backup(),e.width()>0&&e.emit(P.QueryLexer.TERM),P.QueryLexer.lexEditDistance;if("^"==t)return e.backup(),e.width()>0&&e.emit(P.QueryLexer.TERM),P.QueryLexer.lexBoost;if(t.match(P.QueryLexer.termSeparator))return P.QueryLexer.lexTerm}else e.escapeCharacter()}},P.QueryParser=function(e,t){this.lexer=new P.QueryLexer(e),this.query=t,this.currentClause={},this.lexemeIdx=0},P.QueryParser.prototype.parse=function(){this.lexer.run(),this.lexemes=this.lexer.lexemes;for(var e=P.QueryParser.parseFieldOrTerm;e;)e=e(this);return this.query},P.QueryParser.prototype.peekLexeme=function(){return this.lexemes[this.lexemeIdx]},P.QueryParser.prototype.consumeLexeme=function(){var e=this.peekLexeme();return this.lexemeIdx+=1,e},P.QueryParser.prototype.nextClause=function(){var e=this.currentClause;this.query.clause(e),this.currentClause={}},P.QueryParser.parseFieldOrTerm=function(e){var t=e.peekLexeme();if(null!=t)switch(t.type){case P.QueryLexer.FIELD:return P.QueryParser.parseField;case P.QueryLexer.TERM:return P.QueryParser.parseTerm;default:var r="expected either a field or a term, found "+t.type;throw t.str.length>=1&&(r+=" with value '"+t.str+"'"),new P.QueryParseError(r,t.start,t.end)}},P.QueryParser.parseField=function(e){var t=e.consumeLexeme();if(null!=t){if(-1==e.query.allFields.indexOf(t.str)){var r=e.query.allFields.map(function(e){return"'"+e+"'"}).join(", "),i="unrecognised field '"+t.str+"', possible fields: "+r;throw new P.QueryParseError(i,t.start,t.end)}e.currentClause.fields=[t.str];var n=e.peekLexeme();if(null==n){i="expecting term, found nothing";throw new P.QueryParseError(i,t.start,t.end)}switch(n.type){case P.QueryLexer.TERM:return P.QueryParser.parseTerm;default:i="expecting term, found '"+n.type+"'";throw new P.QueryParseError(i,n.start,n.end)}}},P.QueryParser.parseTerm=function(e){var t=e.consumeLexeme();if(null!=t){e.currentClause.term=t.str.toLowerCase(),-1!=t.str.indexOf("*")&&(e.currentClause.usePipeline=!1);var r=e.peekLexeme();if(null!=r)switch(r.type){case P.QueryLexer.TERM:return e.nextClause(),P.QueryParser.parseTerm;case P.QueryLexer.FIELD:return e.nextClause(),P.QueryParser.parseField;case P.QueryLexer.EDIT_DISTANCE:return P.QueryParser.parseEditDistance;case P.QueryLexer.BOOST:return P.QueryParser.parseBoost;default:var i="Unexpected lexeme type '"+r.type+"'";throw new P.QueryParseError(i,r.start,r.end)}else e.nextClause()}},P.QueryParser.parseEditDistance=function(e){var t=e.consumeLexeme();if(null!=t){var r=parseInt(t.str,10);if(isNaN(r)){var i="edit distance must be numeric";throw new P.QueryParseError(i,t.start,t.end)}e.currentClause.editDistance=r;var n=e.peekLexeme();if(null!=n)switch(n.type){case P.QueryLexer.TERM:return e.nextClause(),P.QueryParser.parseTerm;case P.QueryLexer.FIELD:return e.nextClause(),P.QueryParser.parseField;case P.QueryLexer.EDIT_DISTANCE:return P.QueryParser.parseEditDistance;case P.QueryLexer.BOOST:return P.QueryParser.parseBoost;default:i="Unexpected lexeme type '"+n.type+"'";throw new P.QueryParseError(i,n.start,n.end)}else e.nextClause()}},P.QueryParser.parseBoost=function(e){var t=e.consumeLexeme();if(null!=t){var r=parseInt(t.str,10);if(isNaN(r)){var i="boost must be numeric";throw new P.QueryParseError(i,t.start,t.end)}e.currentClause.boost=r;var n=e.peekLexeme();if(null!=n)switch(n.type){case P.QueryLexer.TERM:return e.nextClause(),P.QueryParser.parseTerm;case P.QueryLexer.FIELD:return e.nextClause(),P.QueryParser.parseField;case P.QueryLexer.EDIT_DISTANCE:return P.QueryParser.parseEditDistance;case P.QueryLexer.BOOST:return P.QueryParser.parseBoost;default:i="Unexpected lexeme type '"+n.type+"'";throw new P.QueryParseError(i,n.start,n.end)}else e.nextClause()}},_=this,T=function(){return P},"function"==typeof define&&define.amd?define(T):"object"==typeof exports?module.exports=T():_.lunr=T()}(),t=this,r=function(e){function t(e,t){var r,i;for(r=-1,i=e.length;++r<i;)t(e[r],r,e)}function r(e,r){var i;return i=Array(e.length),t(e,function(e,t,n){i.push(r(e,t,n))}),i}function i(e,r,i){return t(e,function(e,t,n){i=r(e,t,n)}),i}function n(e,t){return e.charAt(t)}function s(e,t){return e[t]}function o(e,r){var i,o,a,u;if("string"==typeof e&&"string"==typeof r)u=n;else{if("object"!=typeof e||"object"!=typeof r)throw"Levensthtein: input must be two strings or two arrays";u=s}return a=this._matrix=[],e==r?this.distance=0:""==e?this.distance=r.length:""==r?this.distance=e.length:(i=[0],t(e,function(e,t){i[++t]=t}),a[0]=i,t(r,function(n,s){o=[++s],t(e,function(t,n){u(e,++n-1)==u(r,s-1)?o[n]=i[n-1]:o[n]=Math.min(i[n]+1,o[n-1]+1,i[n-1]+1)}),i=o,a[a.length]=i}),this.distance=o[o.length-1])}return o.prototype.toString=o.prototype.inspect=function(e){var t,n,s,o;for(n=i(t=this.getMatrix(),function(e,t){return Math.max(e,i(t,Math.max,0))},0),s=Array((n+"").length).join(" "),o=[];o.length<(t[0]&&t[0].length||0);)o[o.length]=Array(s.length+1).join("-");return o=o.join("-+")+"-",r(t,function(e){return r(e,function(e){return(s+e).slice(-s.length)}).join(" |")+" "}).join("\n"+o+"\n")},o.prototype.getSteps=function(){var e,t,r,i,n,s,o,a;for(e=[],r=(t=this.getMatrix()).length-1,i=t[0].length-1;0!==r||0!==i;)n=i>0?t[r][i-1]:Number.MAX_VALUE,s=r>0?t[r-1][i]:Number.MAX_VALUE,o=i>0&&r>0?t[r-1][i-1]:Number.MAX_VALUE,(a=Math.min(n,s,o))===o?(o<t[r][i]&&e.push(["substitute",i,r]),r--,i--):a===s?(e.push(["insert",i,r]),r--):(e.push(["delete",i,r]),i--);return e},o.prototype.getMatrix=function(){return this._matrix.slice()},o.prototype.valueOf=function(){return this.distance},o},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return r()}):"object"==typeof module&&module&&module.exports?module.exports=r():t.Levenshtein=r(),e.fn.ghostHunter=function(t){var r=e.extend({},e.fn.ghostHunter.defaults,t);if(r.results)return a.init(this,r),a},e.fn.ghostHunter.defaults={resultsData:!1,onPageLoad:!1,onKeyUp:!1,result_template:"<a id='gh-{{ref}}' class='gh-search-item' href='{{link}}'><p><h2>{{title}}</h2><h4>{{prettyPubDate}}</h4></p></a>",info_template:"<p>Number of posts found: {{amount}}</p>",displaySearchInfo:!0,zeroResultsInfo:!0,before:!1,onComplete:!1,filterfields:!1,subpath:"",item_preprocessor:!1,indexing_start:!1,indexing_end:!1,includebodysearch:!1};var i=function(e){return e.replace(/^\//,"").replace(/\//g,"-")},n=null,s=function(){e(".gh-search-item").each(function(){var e=this.getAttribute("id").replace(/^new-/,"");this.setAttribute("id",e)})},o=function(){this.blogData={},this.latestPost=0;var t=(ghost_root_url||"/ghost/api/v2")+"/content/posts/?key="+ghosthunter_key+"&limit=all&include=tags",r={limit:"all",include:"tags"};this.includebodysearch?(r.formats=["plaintext"],t+="&formats=plaintext"):r.formats=[""];var n=this;e.get(t).done(function(e){var t=e.posts;n.index=lunr(function(){this.ref("id"),this.field("title"),this.field("description"),n.includebodysearch&&this.field("plaintext"),this.field("pubDate"),this.field("tag"),t.forEach(function(e){new Date(e.updated_at).getTime()>new Date(n.latestPost).getTime()&&(n.latestPost=e.updated_at);var t=e.tags.map(function(e){return e.name});null==e.meta_description&&(e.meta_description="");var r=t.join(", ");r.length<1&&(r="undefined");var i={id:String(e.id),title:String(e.title),description:String(e.custom_excerpt),pubDate:String(e.published_at),tag:r};n.includebodysearch&&(i.plaintext=String(e.plaintext)),this.add(i);var s,o,a=n.subpath+e.url;n.blogData[e.id]={title:e.title,description:e.custom_excerpt,pubDate:(s=i.pubDate,o=new Date(s),o.getDate()+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][o.getMonth()]+" "+o.getFullYear()),link:a,tags:t},n.item_preprocessor&&Object.assign(n.blogData[e.id],n.item_preprocessor(e))},this)});try{var r=i(n.subpath);localStorage.setItem("ghost_"+r+"_lunrIndex",JSON.stringify(n.index)),localStorage.setItem("ghost_"+r+"_blogData",JSON.stringify(n.blogData)),localStorage.setItem("ghost_"+r+"_latestPost",n.latestPost)}catch(e){console.warn("ghostHunter: save to localStorage failed: "+e)}n.indexing_end&&n.indexing_end(),n.isInit=!0})},a={isInit:!1,init:function(e,t){var r=this;if(r.target=e,Object.assign(this,t),t.onPageLoad){window.setTimeout(function(){r.loadAPI()},1)}else e.focus(function(){r.loadAPI()});e.closest("form").submit(function(t){t.preventDefault(),r.find(e.val())}),t.onKeyUp&&(e.keydown(function(e){if(13===e.which)return!1}),e.keyup(function(t){r.find(e.val())}))},loadAPI:function(){if(!this.isInit){this.indexing_start&&this.indexing_start();try{var t=i(this.subpath);this.index=localStorage.getItem("ghost_"+t+"_lunrIndex"),this.blogData=localStorage.getItem("ghost_"+t+"_blogData"),this.latestPost=localStorage.getItem("ghost_"+t+"_latestPost"),this.latestPost&&this.index&&this.blogData&&(this.latestPost=this.latestPost,this.index=lunr.Index.load(JSON.parse(this.index)),this.blogData=JSON.parse(this.blogData),this.isInit=!0)}catch(e){console.warn("ghostHunter: retrieve from localStorage failed: "+e)}}if(this.isInit){this.latestPost.replace(/\..*/,"").replace(/T/," ");var r=(ghost_root_url||"/ghost/api/v2")+"/content/posts/?key="+ghosthunter_key+"&limit=all&fields=id&filter=updated_at:>'"+this.latestPost.replace(/\..*/,"").replace(/T/," ")+"'",n=this;e.get(r).done(function(e){e.posts.length>0?o.call(n):(n.indexing_end&&n.indexing_end(),n.isInit=!0)})}else o.call(this)},find:function(t){clearTimeout(n),t||(t=""),t=t.toLowerCase(),n=setTimeout(function(){for(var r=[],i=t.split(/\s+/),n=0,o=i.length;n<o;n++){var a=i[n];a&&r.push(this.index.query(function(e){e.term(a,{usePipeline:!0,boost:100}),e.term(a,{usePipeline:!1,boost:10,wildcard:lunr.Query.wildcard.TRAILING}),e.term(a,{usePipeline:!1,editDistance:1,boost:1})}))}if(r.length>1){var u=r[0];r=r.slice(1);for(n=u.length-1;n>-1;n--){var l=u[n].ref;for(j=0,jlen=r.length;j<jlen;j++){for(var h={},d=0,c=r[j].length;d<c;d++)h[r[j][d].ref]=!0;if(!h[l]){u=u.slice(0,n).concat(u.slice(n+1));break}}}}else u=1===r.length?r[0]:[];var f=e(this.results),p=[];0===u.length?(f.empty(),this.displaySearchInfo&&this.zeroResultsInfo&&f.append(this.format(this.info_template,{amount:0}))):this.displaySearchInfo&&(f.length>0?f.children().eq(0).replaceWith(this.format(this.info_template,{amount:u.length})):f.append(this.format(this.info_template,{amount:u.length}))),this.before&&this.before();for(n=0;n<u.length;n++){var g=u[n].ref,m=this.blogData[g];m?(m.ref=g,p.push(m)):console.warn("ghostHunter: index/data mismatch. Ouch.")}var y=e(".gh-search-item"),x=y.map(function(){return this.id.slice(3)}).get();if(0===x.length){for(n=0,o=p.length;n<o;n++)f.append(this.format(this.result_template,p[n]));s()}else{var v=[];for(n=0,o=u.length;n<o;n++)v.push(u[n].ref);var w=new Levenshtein(x,v).getSteps();(function(e,t,r){for(var i=0,n=r.length;i<n;i++){var o=r[i];if("delete"==o[0])e.eq(o[1]-1).remove();else{var a=t[o[2]-1].ref,u=this.blogData[a],l=this.format(this.result_template,u);if("substitute"===o[0])e.eq(o[1]-1).replaceWith(l);else if("insert"===o[0]){var h;h=0===o[1]?null:o[1]-1,e.eq(h).after(l)}}}s()}).call(this,y,u,w)}this.onComplete&&this.onComplete(p)}.bind(this),100)},clear:function(){e(this.results).empty(),this.target.val("")},format:function(e,t){return e.replace(/{{([^{}]*)}}/g,function(e,r){var i=t[r];return"string"==typeof i||"number"==typeof i?i:e})}}}(jQuery);
