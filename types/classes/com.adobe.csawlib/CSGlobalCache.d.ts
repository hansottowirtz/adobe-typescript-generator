/// <reference path="../../packages/com.adobe.csawlib/index.d.ts"/>

declare namespace Adobe {
	namespace Csawlib {
		class CSGlobalCache {
			public constructor();
			public getAllQualNames(): any[];
			public getInstance(): Adobe.Csawlib.CSGlobalCache;
			/**
			 * @param {string} qualifiedClassName
			 */
			public getItem(qualifiedClassName: string): Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @param {string} qualifiedClassName
			 * @param {Adobe.Csawlib.CSEnumSharedCache} csenumCache
			 */
			public putItem(qualifiedClassName: string, csenumCache: Adobe.Csawlib.CSEnumSharedCache): void;
		}
	}
}