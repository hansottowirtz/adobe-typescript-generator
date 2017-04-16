/// <reference path="../../packages/com.adobe.csawlib/references.d.ts"/>

declare namespace Adobe {
	namespace Csawlib {
		class CSGlobalCache {
			/**
			 * @returns {void}
			 */
			public constructor();
			/**
			 * @returns {any[]}
			 */
			public getAllQualNames(): any[];
			/**
			 * @returns {Adobe.Csawlib.CSGlobalCache}
			 */
			public getInstance(): Adobe.Csawlib.CSGlobalCache;
			/**
			 * @param {string} qualifiedClassName
			 * @returns {Adobe.Csawlib.CSEnumSharedCache}
			 */
			public getItem(qualifiedClassName: string): Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @param {string} qualifiedClassName
			 * @param {Adobe.Csawlib.CSEnumSharedCache} csenumCache
			 * @returns {void}
			 */
			public putItem(qualifiedClassName: string, csenumCache: Adobe.Csawlib.CSEnumSharedCache): void;
		}
	}
}