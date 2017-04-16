/// <reference path="../../packages/com.adobe.bridge/references.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		class Documents extends Adobe.Csawlib.CSHostObject {
			/**
			 * @param {number} index
			 * @returns {Adobe.Bridge.Document}
			 */
			public item(index: number): Adobe.Bridge.Document;
		}
	}
}