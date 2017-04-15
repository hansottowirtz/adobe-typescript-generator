/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.bridge/index.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		class Documents extends Adobe.Csawlib.CSHostObject {
			/**
			 * @param {number} index - 
			 */
			public item(index: number): Adobe.Bridge.Document;
		}
	}
}