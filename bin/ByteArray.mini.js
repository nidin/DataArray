var nid;
(function(l){(function(l){var n=function(){function a(b){this.BUFFER_EXT_SIZE=1024;this.EOF_code_point=this.EOF_byte=-1;this.UNDEFINED_TYPE=0;this.NULL_TYPE=1;this.FALSE_TYPE=2;this.TRUE_TYPE=3;this.INTEGER_TYPE=4;this.DOUBLE_TYPE=5;this.STRING_TYPE=6;this.XML_DOC_TYPE=7;this.DATE_TYPE=8;this.ARRAY_TYPE=9;this.OBJECT_TYPE=10;this.XML_TYPE=11;this.BYTE_ARRAY_TYPE=12;this.HAS_NEXT_FLAG=128;this.BODY_FLAG=1;this.CLIENT_ID_FLAG=2;this.DESTINATION_FLAG=4;this.HEADERS_FLAG=8;this.MESSAGE_ID_FLAG=16;this.TIMESTAMP_FLAG=
32;this.TIME_TO_LIVE_FLAG=64;this.CLIENT_ID_BYTES_FLAG=1;this.MESSAGE_ID_BYTES_FLAG=2;this.CORRELATION_ID_FLAG=1;this.CORRELATION_ID_BYTES_FLAG=2;this.OPERATION_FLAG=1;this.CLASS_ALIAS_REGISTRY={DSK:"flex.messaging.messages.AcknowledgeMessageExt",DSA:"flex.messaging.messages.AsyncMessageExt",DSC:"flex.messaging.messages.CommandMessageExt"};this.Flex=null;this.readStringCache=[];this.readTraitsCache=[];this.readObjectCache=[];"undefined"===typeof b?(b=new ArrayBuffer(this.BUFFER_EXT_SIZE),this.write_position=
0):this.write_position=b.byteLength;this.data=new DataView(b);this._position=0;this.endian=a.BIG_ENDIAN}Object.defineProperty(a.prototype,"buffer",{get:function(){return this.data.buffer},set:function(b){this.data=new DataView(b)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"dataView",{get:function(){return this.data},set:function(b){this.data=b},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"position",{get:function(){return this._position},set:function(b){this._position=
b;this.write_position=b>this.write_position?b:this.write_position},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"length",{get:function(){return this.data.byteLength},set:function(b){this.validateBuffer(b)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"bytesAvailable",{get:function(){return this.data.byteLength-this._position},enumerable:!0,configurable:!0});a.prototype.clear=function(){this._position=0};a.prototype.compress=function(b){};a.prototype.uncompress=
function(b){};a.prototype.deflate=function(){};a.prototype.inflate=function(){};a.prototype.readBoolean=function(){return this.validate(a.SIZE_OF_BOOLEAN)?0!=this.data.getUint8(this._position++):null};a.prototype.readByte=function(){return this.validate(a.SIZE_OF_INT8)?this.data.getInt8(this._position++):null};a.prototype.readBytes=function(b,c,a){"undefined"===typeof a&&(a=0);this.validate(a)&&(c=new DataView(this.data.buffer,this._position,a),this._position+=a,b.dataView=c)};a.prototype.readDouble=
function(){if(!this.validate(a.SIZE_OF_FLOAT64))return null;var b=this.data.getFloat64(this._position);this._position+=a.SIZE_OF_FLOAT64;return b};a.prototype.readFloat=function(){if(!this.validate(a.SIZE_OF_FLOAT32))return null;var b=this.data.getFloat32(this._position);this._position+=a.SIZE_OF_FLOAT32;return b};a.prototype.readInt=function(){if(!this.validate(a.SIZE_OF_INT32))return null;var b=this.data.getInt32(this._position,this.endian==a.LITTLE_ENDIAN);this._position+=a.SIZE_OF_INT32;return b};
a.prototype.readMultiByte=function(b,c){return this.validate(b)?"":null};a.prototype.readObject=function(){return this.readAmfObject()};a.prototype.readShort=function(){if(!this.validate(a.SIZE_OF_INT16))return null;var b=this.data.getInt16(this._position,this.endian==a.LITTLE_ENDIAN);this._position+=a.SIZE_OF_INT16;return b};a.prototype.readUnsignedByte=function(){return this.validate(a.SIZE_OF_UINT8)?this.data.getUint8(this._position++):null};a.prototype.readUnsignedInt=function(){if(!this.validate(a.SIZE_OF_UINT32))return null;
var b=this.data.getUint32(this._position,this.endian==a.LITTLE_ENDIAN);this._position+=a.SIZE_OF_UINT32;return b};a.prototype.readUnsignedShort=function(){if(!this.validate(a.SIZE_OF_UINT16))return null;var b=this.data.getUint16(this._position,this.endian==a.LITTLE_ENDIAN);this._position+=a.SIZE_OF_UINT16;return b};a.prototype.readUTF=function(){if(!this.validate(a.SIZE_OF_UINT16))return null;var b=this.data.getUint16(this._position,this.endian==a.LITTLE_ENDIAN);this._position+=a.SIZE_OF_UINT16;return 0<
b?this.readUTFBytes(b):""};a.prototype.readUTFBytes=function(b){if(!this.validate(b))return null;for(var c=new Uint8Array(new ArrayBuffer(b)),a=0;a<b;a++)c[a]=this.data.getUint8(this._position++);return this.decodeUTF8(c)};a.prototype.writeBoolean=function(b){this.validateBuffer(a.SIZE_OF_BOOLEAN);this.data.setUint8(this._position++,b?1:0)};a.prototype.writeByte=function(b){this.validateBuffer(a.SIZE_OF_INT8);this.data.setInt8(this._position++,b)};a.prototype.writeUnsignedByte=function(b){this.validateBuffer(a.SIZE_OF_UINT8);
this.data.setUint8(this._position++,b)};a.prototype.writeBytes=function(b,c,a){"undefined"===typeof a&&(a=0);this.validateBuffer(a);c=new DataView(b.buffer);for(a=0;a<b.length;a++)this.data.setUint8(this._position++,c.getUint8(a))};a.prototype.writeDouble=function(b){this.validateBuffer(a.SIZE_OF_FLOAT64);this.data.setFloat64(this._position,b,this.endian==a.LITTLE_ENDIAN);this._position+=a.SIZE_OF_FLOAT64};a.prototype.writeFloat=function(b){this.validateBuffer(a.SIZE_OF_FLOAT32);this.data.setFloat32(this._position,
b,this.endian==a.LITTLE_ENDIAN);this._position+=a.SIZE_OF_FLOAT32};a.prototype.writeInt=function(b){this.validateBuffer(a.SIZE_OF_INT32);this.data.setInt32(this._position,b,this.endian==a.LITTLE_ENDIAN);this._position+=a.SIZE_OF_INT32};a.prototype.writeMultiByte=function(b,c){};a.prototype.writeObject=function(b){};a.prototype.writeShort=function(b){this.validateBuffer(a.SIZE_OF_INT16);this.data.setInt16(this._position,b,this.endian==a.LITTLE_ENDIAN);this._position+=a.SIZE_OF_INT16};a.prototype.writeUnsignedShort=
function(b){this.validateBuffer(a.SIZE_OF_UINT16);this.data.setUint16(this._position,b,this.endian==a.LITTLE_ENDIAN);this._position+=a.SIZE_OF_UINT16};a.prototype.writeUnsignedInt=function(b){this.validateBuffer(a.SIZE_OF_UINT32);this.data.setUint32(this._position,b,this.endian==a.LITTLE_ENDIAN);this._position+=a.SIZE_OF_UINT32};a.prototype.writeUTF=function(b){b=this.encodeUTF8(b);var c=b.length;this.validateBuffer(a.SIZE_OF_UINT16+c);this.data.setUint16(this._position,c,this.endian===a.LITTLE_ENDIAN);
this._position+=a.SIZE_OF_UINT16;this.writeUint8Array(b)};a.prototype.writeUTFBytes=function(b){this.writeUint8Array(this.encodeUTF8(b))};a.prototype.toString=function(){return"[ByteArray]"};a.prototype.writeUint8Array=function(b){this.validateBuffer(this._position+b.length);for(var c=0;c<b.length;c++)this.data.setUint8(this._position++,b[c])};a.prototype.writeUint16Array=function(b){this.validateBuffer(this._position+b.length);for(var c=0;c<b.length;c++)this.data.setUint16(this._position,b[c],this.endian===
a.LITTLE_ENDIAN),this._position+=a.SIZE_OF_UINT16};a.prototype.writeUint32Array=function(b){this.validateBuffer(this._position+b.length);for(var c=0;c<b.length;c++)this.data.setUint32(this._position,b[c],this.endian===a.LITTLE_ENDIAN),this._position+=a.SIZE_OF_UINT32};a.prototype.writeInt8Array=function(b){this.validateBuffer(this.position+b.length);for(var c=0;c<b.length;c++)this.data.setInt8(this._position++,b[c])};a.prototype.writeInt16Array=function(b){this.validateBuffer(this.position+b.length);
for(var c=0;c<b.length;c++)this.data.setInt16(this._position,b[c],this.endian===a.LITTLE_ENDIAN),this._position+=a.SIZE_OF_INT16};a.prototype.writeInt32Array=function(b){this.validateBuffer(this.position+b.length);for(var c=0;c<b.length;c++)this.data.setInt32(this._position,b[c],this.endian===a.LITTLE_ENDIAN),this._position+=a.SIZE_OF_INT32};a.prototype.writeFloat32Array=function(b){this.validateBuffer(this.position+b.length);for(var c=0;c<b.length;c++)this.data.setFloat32(this._position,b[c],this.endian===
a.LITTLE_ENDIAN),this._position+=a.SIZE_OF_FLOAT32};a.prototype.writeFloat64Array=function(b){this.validateBuffer(this.position+b.length);for(var c=0;c<b.length;c++)this.data.setFloat64(this._position,b[c],this.endian===a.LITTLE_ENDIAN),this._position+=a.SIZE_OF_FLOAT64};a.prototype.readUint8Array=function(b){if(!this.validate(b))return null;for(var c=new Uint8Array(new ArrayBuffer(b)),d=0;d<b;d++)c[d]=this.data.getUint8(this._position),this.position+=a.SIZE_OF_UINT8;return c};a.prototype.readUint16Array=
function(b){var c=b*a.SIZE_OF_UINT16;if(!this.validate(c))return null;for(var c=new Uint16Array(new ArrayBuffer(c)),d=0;d<b;d++)c[d]=this.data.getUint16(this._position),this.position+=a.SIZE_OF_UINT16;return c};a.prototype.readUint32Array=function(b){var c=b*a.SIZE_OF_UINT32;if(!this.validate(c))return null;for(var c=new Uint32Array(new ArrayBuffer(c)),d=0;d<b;d++)c[d]=this.data.getUint32(this._position),this.position+=a.SIZE_OF_UINT32;return c};a.prototype.readInt8Array=function(b){if(!this.validate(b))return null;
for(var c=new Int8Array(new ArrayBuffer(b)),d=0;d<b;d++)c[d]=this.data.getInt8(this._position),this.position+=a.SIZE_OF_INT8;return c};a.prototype.readInt16Array=function(b){var c=b*a.SIZE_OF_INT16;if(!this.validate(c))return null;for(var c=new Int16Array(new ArrayBuffer(c)),d=0;d<b;d++)c[d]=this.data.getInt16(this._position),this.position+=a.SIZE_OF_INT16;return c};a.prototype.readInt32Array=function(b){var c=b*a.SIZE_OF_INT32;if(!this.validate(c))return null;for(var c=new Int32Array(new ArrayBuffer(c)),
d=0;d<b;d++)c[d]=this.data.getUint32(this._position),this.position+=a.SIZE_OF_INT32;return c};a.prototype.readFloat32Array=function(b){var c=b*a.SIZE_OF_FLOAT32;if(!this.validate(c))return null;for(var c=new Float32Array(new ArrayBuffer(c)),d=0;d<b;d++)c[d]=this.data.getFloat32(this._position),this.position+=a.SIZE_OF_FLOAT32;return c};a.prototype.readFloat64Array=function(b){var c=b*a.SIZE_OF_FLOAT64;if(!this.validate(c))return null;for(var c=new Float64Array(new ArrayBuffer(c)),d=0;d<b;d++)c[d]=
this.data.getFloat64(this._position),this.position+=a.SIZE_OF_FLOAT64;return c};a.prototype.validate=function(b){if(0<this.data.byteLength&&this._position+b<=this.data.byteLength)return!0;throw{name:"Error",message:"Error #2030: End of file was encountered.",errorID:2030};};a.prototype.validateBuffer=function(b){if(this.data.byteLength<b){b=new DataView(new ArrayBuffer(b+this.BUFFER_EXT_SIZE));for(var c=0;c<this.data.byteLength;c++)b.setUint8(c,this.data.getUint8(c));this.data=null;this.data=b}};
a.prototype.encodeUTF8=function(b){var c=0;b=this.stringToCodePoints(b);for(var a=[];b.length>c;){var e=b[c++];if(this.inRange(e,55296,57343))this.encoderError(e);else if(this.inRange(e,0,127))a.push(e);else{var f,g;this.inRange(e,128,2047)?(f=1,g=192):this.inRange(e,2048,65535)?(f=2,g=224):this.inRange(e,65536,1114111)&&(f=3,g=240);for(a.push(this.div(e,Math.pow(64,f))+g);0<f;){var h=this.div(e,Math.pow(64,f-1));a.push(128+h%64);f-=1}}}return new Uint8Array(a)};a.prototype.decodeUTF8=function(b){for(var c=
0,a="",e,f=0,g=0,h=0,k=0;b.length>c;){e=b[c++];if(e===this.EOF_byte)e=0!==g?this.decoderError(!1):this.EOF_code_point;else if(0===g)this.inRange(e,0,127)||(this.inRange(e,194,223)?(g=1,k=128,f=e-192):this.inRange(e,224,239)?(g=2,k=2048,f=e-224):this.inRange(e,240,244)?(g=3,k=65536,f=e-240):this.decoderError(!1),f*=Math.pow(64,g),e=null);else if(this.inRange(e,128,191))if(h+=1,f+=(e-128)*Math.pow(64,g-h),h!==g)e=null;else{var m=f,l=k,k=h=g=f=0;e=this.inRange(m,l,1114111)&&!this.inRange(m,55296,57343)?
m:this.decoderError(!1,e)}else k=h=g=f=0,c--,e=this.decoderError(!1,e);null!==e&&e!==this.EOF_code_point&&(65535>=e?0<e&&(a+=String.fromCharCode(e)):(e-=65536,a+=String.fromCharCode(55296+(e>>10&1023)),a+=String.fromCharCode(56320+(e&1023))))}return a};a.prototype.encoderError=function(b){throw{name:"EncodingError",message:"The code point "+b+" could not be encoded.",code:0};};a.prototype.decoderError=function(b,a){if(b)throw{name:"DecodingError",message:"DecodingError.",code:0};return a||65533};
a.prototype.inRange=function(b,a,d){return a<=b&&b<=d};a.prototype.div=function(b,a){return Math.floor(b/a)};a.prototype.stringToCodePoints=function(b){for(var a=[],d=0,e=b.length;d<b.length;){var f=b.charCodeAt(d);if(this.inRange(f,55296,57343))if(this.inRange(f,56320,57343))a.push(65533);else if(d===e-1)a.push(65533);else{var g=b.charCodeAt(d+1);this.inRange(g,56320,57343)?(f&=1023,g&=1023,d+=1,a.push(65536+(f<<10)+g)):a.push(65533)}else a.push(f);d+=1}return a};a.prototype.initFlex=function(){this.Flex.AbstractMessage=
function(){this.body=this.headers=this.timeToLive=this.timestamp=this.messageId=this.destination=this.clientId=null};this.Flex.AbstractMessage.prototype={readExternal:function(b,a){for(var d=this.readFlags(b),e=0;e<d.length;e++){var f=d[e],g=0;console.log(e+"/"+d.length,f);0==e?(0!=(f&this.BODY_FLAG)&&this.readExternalBody(b,a),0!=(f&this.CLIENT_ID_FLAG)&&(this.clientId=a.readData(b)),0!=(f&this.DESTINATION_FLAG)&&(this.destination=a.readData(b)),0!=(f&this.HEADERS_FLAG)&&(this.headers=a.readData(b)),
0!=(f&this.MESSAGE_ID_FLAG)&&(this.messageId=a.readData(b)),0!=(f&this.TIMESTAMP_FLAG)&&(this.timestamp=a.readData(b)),0!=(f&this.TIME_TO_LIVE_FLAG)&&(this.timeToLive=a.readData(b)),g=7):1==e&&(0!=(f&this.CLIENT_ID_BYTES_FLAG)&&(g=a.readData(b),this.clientId=this.UUIDUtils.fromByteArray(g)),0!=(f&this.MESSAGE_ID_BYTES_FLAG)&&(g=a.readData(b),this.messageId=this.UUIDUtils.fromByteArray(g)),g=2);if(0!=f>>g)for(;6>g;g++)0!=(f>>g&1)&&a.readData(b)}return this},readExternalBody:function(b,a){this.body=
a.readData(b)},readFlags:function(b){for(var a=!0,d=[],e=0;a;)a=b.readUnsignedByte(),d[e]=a,a=0!=(a&this.HAS_NEXT_FLAG)?!0:!1,e++;return d}};this.Flex.AsyncMessage=function(){this.correlationId=null};this.Flex.AsyncMessage.prototype=new this.Flex.AbstractMessage;this.Flex.AsyncMessage.constructor=this.Flex.AsyncMessage;this.Flex.AsyncMessage.prototype.readExternal=function(b,a){this.Flex.AbstractMessage.prototype.readExternal.call(this,b,a);for(var d=this.readFlags(b),e=0;e<d.length;e++){var f=d[e],
g=0;0==e&&(0!=(f&this.CORRELATION_ID_FLAG)&&(this.correlationId=a.readData(b)),0!=(f&this.CORRELATION_ID_BYTES_FLAG)&&(g=a.readData(b),this.correlationId=this.UUIDUtils.fromByteArray(g)),g=2);if(0!=f>>g)for(;6>g;++g)0!=(f>>g&1)&&a.readData(b)}return this};this.Flex.AsyncMessageExt=function(){};this.Flex.AsyncMessageExt.prototype=new this.Flex.AsyncMessage;this.Flex.AsyncMessageExt.constructor=this.Flex.AsyncMessageExt;this.Flex.AcknowledgeMessage=function(){};this.Flex.AcknowledgeMessage.prototype=
new this.Flex.AsyncMessage;this.Flex.AcknowledgeMessage.constructor=this.Flex.AcknowledgeMessage;this.Flex.AcknowledgeMessage.prototype.readExternal=function(b,a){this.Flex.AsyncMessage.prototype.readExternal.call(this,b,a);for(var d=this.readFlags(b),e=0;e<d.length;++e){var f=d[e];if(0!=f>>0)for(var g=0;6>g;++g)0!=(f>>g&1)&&a.readData(b)}return this};this.Flex.AcknowledgeMessageExt=function(){};this.Flex.AcknowledgeMessageExt.prototype=new this.Flex.AcknowledgeMessage;this.Flex.AcknowledgeMessageExt.constructor=
this.Flex.AcknowledgeMessageExt;this.Flex.CommandMessage=function(){this.operation=1E3;this.operationName="unknown"};this.Flex.CommandMessage.prototype=new this.Flex.AsyncMessage;this.Flex.CommandMessage.constructor=this.Flex.CommandMessage;this.Flex.CommandMessage.prototype.readExternal=function(b,a){this.Flex.AsyncMessage.prototype.readExternal.call(this,b,a);for(var d=this.readFlags(b),e=0;e<d.length;++e){var f=d[e],g=0,h="subscribe unsubscribe poll unused3 client_sync client_ping unused6 cluster_request login logout subscription_invalidate multi_subscribe disconnect trigger_connect".split(" ");
0==e&&(0!=(f&this.OPERATION_FLAG)&&(this.operation=a.readData(b),this.operationName=0>this.operation||this.operation>=h.length?"invalid."+this.operation+"":h[this.operation]),g=1);if(0!=f>>g)for(;6>g;++g)0!=(f>>g&1)&&a.readData(b)}return this};this.Flex.CommandMessageExt=function(){};this.Flex.CommandMessageExt.prototype=new this.Flex.CommandMessage;this.Flex.CommandMessageExt.constructor=this.Flex.CommandMessageExt;this.Flex.ErrorMessage=function(){this.faultDetail=this.faultString=this.faultCode=
"";this.rootCause;this.extendedData};this.Flex.ErrorMessage.prototype=new this.Flex.AcknowledgeMessage;this.Flex.ErrorMessage.constructor=this.Flex.ErrorMessage;this.Flex.RPCPMessage=function(){this.remotePassword=this.remoteUsername=""};this.Flex.RPCPMessage.prototype=new this.Flex.AbstractMessage;this.Flex.RPCPMessage.constructor=this.Flex.RPCPMessage;this.Flex.HTTPMessage=function(){this.url=this.method=this.contentType="";this.httpHeaders={};this.recordHeaders=!1};this.Flex.HTTPMessage.prototype=
new this.Flex.RPCPMessage;this.Flex.HTTPMessage.constructor=this.Flex.HTTPMessage;this.Flex.RemotingMessage=function(){this.source=this.operation="";this.parameters=[];this.parameterList=[]};this.Flex.RemotingMessage.prototype=new this.Flex.RPCPMessage;this.Flex.RemotingMessage.constructor=this.Flex.RemotingMessage;this.Flex.SOAPMessage=function(){this.remotePassword=this.remoteUsername=""};this.Flex.SOAPMessage.prototype=new this.Flex.HTTPMessage;this.Flex.SOAPMessage.constructor=this.Flex.SOAPMessage;
this.Flex.ArrayCollection=function(){this.source=null};this.Flex.ArrayCollection.prototype.readExternal=function(b,a){this.source=a.readData(b);return this};this.Flex.ArrayList=function(){};this.Flex.ArrayList.prototype=new this.Flex.ArrayCollection;this.Flex.ArrayList.constructor=this.Flex.ArrayList;this.Flex.ObjectProxy=function(){};this.Flex.ObjectProxy.prototype.readExternal=function(b,a){var d=a.readData(b),e;for(e in d)this[e]=d[e];return this};this.Flex.ManagedObjectProxy=function(){};this.Flex.ManagedObjectProxy.prototype=
new this.Flex.ObjectProxy;this.Flex.ManagedObjectProxy.constructor=this.Flex.ManagedObjectProxy;this.Flex.SerializationProxy=function(){this.defaultInstance=null};this.Flex.SerializationProxy.prototype.readExternal=function(b,a){this.defaultInstance=a.readData(b);return this}};a.prototype.serialize=function(){return null};a.prototype.deserialize=function(){};a.prototype.readAmfData=function(){null==this.Flex&&this.initFlex();var b=this.readByte();switch(b){case this.UNDEFINED_TYPE:break;case this.NULL_TYPE:return null;
case this.FALSE_TYPE:return!1;case this.TRUE_TYPE:return!0;case this.INTEGER_TYPE:return this.readInt();case this.DOUBLE_TYPE:return this.readDouble();case this.STRING_TYPE:return this.readString();case this.XML_DOC_TYPE:return this.readXMLDoc();case this.DATE_TYPE:return this.readDate();case this.ARRAY_TYPE:return this.readArray();case this.OBJECT_TYPE:return this.readAmfObject();case this.XML_TYPE:return this.readXML();case this.BYTE_ARRAY_TYPE:return this.readByteArray();default:throw Error("AMF3::readAmfData - Error : Undefined AMF3 type encountered '"+
b+"'");}};a.prototype.getStringReference=function(b){return b>=this.readStringCache.length?(console.log("AMF3::getStringReference - Error : Undefined string reference '"+b+"'"),null):this.readStringCache[b]};a.prototype.getTraitReference=function(b){return b>=this.readTraitsCache.length?(console.log("AMF3::getTraitReference - Error : Undefined trait reference '"+b+"'"),null):this.readTraitsCache[b]};a.prototype.getObjectReference=function(b){return b>=this.readObjectCache.length?(console.log("AMF3::getObjectReference - Error : Undefined object reference '"+
b+"'"),null):this.readObjectCache[b]};a.prototype.readU29=function(){var b=0,a=this.readUnsignedByte();if(128>a)return a;b=(a&127)<<7;a=this.readUnsignedByte();if(128>a)return b|a;b=(b|a&127)<<7;a=this.readUnsignedByte();if(128>a)return b|a;b=(b|a&127)<<8;a=this.readUnsignedByte();return b|a};a.prototype.readI29=function(){var b=this.readU29();return b<<3>>3};a.prototype.readString=function(){var b=this.readU29();if(0==(b&1))return this.getStringReference(b>>1);var b=b>>1,a="";0<b&&(a=this.readUTFBytes(b),
this.readStringCache.push(a));return a};a.prototype.readXMLDoc=function(){var b=this.readU29();if(0==(b&1))return this.getObjectReference(b>>1);b=this.readUTFBytes(b>>1);this.readObjectCache.push(b);return b};a.prototype.readDate=function(){var b=this.readU29();if(0==(b&1))return this.getObjectReference(b>>1);b=new Date(this.readDouble());this.readObjectCache.push(b);return b};a.prototype.readArray=function(){var b=this.readU29();if(0==(b&1))return this.getObjectReference(b>>1);var a=[];this.readObjectCache.push(a);
for(var d=this.readString();""!=d;)a[d]=this.readAmfData(),d=this.readString();b>>=1;for(d=0;d<b;d++)a[d]=this.readAmfData();return a};a.prototype.readAmfObject=function(){var b=this.readU29();if(0==(b&1))return this.getObjectReference(b>>1);var a;if(1==(b&3))a=this.getTraitReference(b>>2);else{a=4==(b&4);for(var d=8==(b&8),e=this.readString(),b=b>>4,f=[],g=0;g<b;++g)f.push(this.readString());0==e.length&&(e="Object");a={type:e,members:f,count:b,externalizable:a,dynamic:d};this.readTraitsCache.push(a)}d=
this.CLASS_ALIAS_REGISTRY[a.type];null!=d&&(a.type=d);d={};this.readObjectCache.push(d);if(a.externalizable)try{if(0==a.type.indexOf("flex."))var h=a.type.split("."),k=h[h.length-1],d=k&&this.Flex[k]?(new this.Flex[k]).readExternal(this,this):this.readAmfData()}catch(l){console.log("AMF3::readObject - Error : Unable to read externalizable data type '"+a.type+"'  |  "+l),d="Unable to read externalizable data type '"+a.type+"'"}else{k=a.members.length;for(e=0;e<k;++e)b=this.readAmfData(),h=a.members[e],
d[h]=b;if(a.dynamic)for(h=this.readString();""!=h;)k=this.readAmfData(),d[h]=k,h=this.readString()}a&&(d.__traits=a);return d};a.prototype.readXML=function(){var a=this.readU29();if(0==(a&1))return this.getObjectReference(a>>1);a=this.readUTFBytes(a>>1);this.readObjectCache.push(a);return a};a.prototype.readByteArray=function(){var b=this.readU29();if(0==(b&1))return this.getObjectReference(b>>1);var b=b>>1,c=new a(new ArrayBuffer(b));this.readBytes(c,0,b);this.readObjectCache.push(c);return c};a.BIG_ENDIAN=
"bigEndian";a.LITTLE_ENDIAN="littleEndian";a.SIZE_OF_BOOLEAN=1;a.SIZE_OF_INT8=1;a.SIZE_OF_INT16=2;a.SIZE_OF_INT32=4;a.SIZE_OF_UINT8=1;a.SIZE_OF_UINT16=2;a.SIZE_OF_UINT32=4;a.SIZE_OF_FLOAT32=4;a.SIZE_OF_FLOAT64=8;return a}();l.ByteArray=n})(l.utils||(l.utils={}))})(nid||(nid={}));
