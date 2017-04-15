/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.csawlib/index.d.ts"/>

declare namespace Adobe {
	namespace Csawlib {
		class CSGlobalCache {
			public constructor();
			public getAllQualNames(): any[];
			public getInstance(): Adobe.Csawlib.CSGlobalCache;
			/**
			 * @param {string} qualifiedClassName - 
			 */
			public getItem(qualifiedClassName: string): Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @param {string} qualifiedClassName - 
			 * @param {CSEnumSharedCache} csenumCache - 
			 */
			public putItem(qualifiedClassName: string, csenumCache: CSEnumSharedCache): void;
		}
	}
}