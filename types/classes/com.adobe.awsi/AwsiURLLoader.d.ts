/// <reference path="../../packages/com.adobe.awsi/references.d.ts"/>

declare namespace Adobe {
	namespace Awsi {
		/**
		 * Extends the URLLoader by providing an 'returnType' property 
		 * which should be  set either to HttpResponseReturnType.TEXT, 
		 * HttpResponseReturnType.BINARY or 
		 * HttpResponseReturnType.UTF8_TEXT.  This indicates whether 
		 * any binary data loaded by the URL loader is binary (file) 
		 * data or encoded string (textual) data
		 */
		class AwsiURLLoader extends Adobe.Flash.Net.URLLoader {
			
		}
	}
}