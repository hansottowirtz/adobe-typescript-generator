/// <reference path="../../packages/com.adobe.csawlib.flashpro/references.d.ts"/>

declare namespace Adobe {
	namespace CsawlibFlashpro {
		class FlashPro {
			/**
			 * @type {Adobe.Flashpro.Flash}
			 * @readonly
			 */
			public static readonly app: Adobe.Flashpro.Flash;
			/**
			 * @type {Adobe.Flashpro.FLBridge}
			 * @readonly
			 */
			public static readonly flBridge: Adobe.Flashpro.FLBridge;
			/**
			 * @type {Adobe.Flashpro.FLfile}
			 * @readonly
			 */
			public static readonly flFile: Adobe.Flashpro.FLfile;
			/**
			 * @type {Adobe.Flex.HostObject}
			 * @readonly
			 */
			public static readonly rootHostObject: Adobe.Flex.HostObject;
			/**
			 * @param {boolean} promptToSave
			 * @returns {void}
			 */
			public closeAll(promptToSave: boolean): void;
			/**
			 * @param {string} nameToSearchFor
			 * @param {Document} doc
			 * @returns {any}
			 */
			public findObjectInDocByName(nameToSearchFor: string, doc: Document): any;
			/**
			 * @param {string} typeToSearchFor
			 * @param {Document} doc
			 * @returns {any}
			 */
			public findObjectInDocByType(typeToSearchFor: string, doc: Document): any;
			/**
			 * @returns {void}
			 */
			public FlashUtils_clearGlobalArrays(): void;
			/**
			 * @param {string} msg
			 * @returns {void}
			 */
			public FlashUtils_debugString(msg: string): void;
			/**
			 * @param {string} objName
			 * @param {Timeline} objTimeline
			 * @param {any} elementParent
			 * @returns {void}
			 */
			public FlashUtils_findObjectInTimelineByName(objName: string, objTimeline: Timeline, elementParent: any): void;
			/**
			 * @param {string} objType
			 * @param {Timeline} objTimeline
			 * @param {any} elementParent
			 * @returns {void}
			 */
			public FlashUtils_findObjectInTimelineByType(objType: string, objTimeline: Timeline, elementParent: any): void;
			/**
			 * @param {any[]} objArray
			 * @param {any} obj
			 * @returns {number}
			 */
			public FlashUtils_getIndexOfObject(objArray: any[], obj: any): number;
			/**
			 * @param {LibraryItem} item
			 * @returns {boolean}
			 */
			public FlashUtils_libraryItemWasNotSearched(item: LibraryItem): boolean;
			/**
			 * @param {boolean} flag
			 * @returns {void}
			 */
			public FlashUtils_setDebug(flag: boolean): void;
			/**
			 * @param {any} elementData
			 * @param {boolean} editSymbol
			 * @returns {boolean}
			 */
			public selectElement(elementData: any, editSymbol: boolean): boolean;
		}
	}
}