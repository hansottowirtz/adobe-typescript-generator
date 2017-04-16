/// <reference path="../../packages/com.adobe.csawlib.flashpro/index.d.ts"/>

declare namespace Adobe {
	namespace CsawlibFlashpro {
		class FlashPro {
			public static readonly app: Adobe.Flashpro.Flash;
			public static readonly flBridge: Adobe.Flashpro.FLBridge;
			public static readonly flFile: Adobe.Flashpro.FLfile;
			public static readonly rootHostObject: HostObject;
			/**
			 * @param {boolean} promptToSave
			 */
			public closeAll(promptToSave: boolean): void;
			/**
			 * @param {string} nameToSearchFor
			 * @param {Document} doc
			 */
			public findObjectInDocByName(nameToSearchFor: string, doc: Document): any;
			/**
			 * @param {string} typeToSearchFor
			 * @param {Document} doc
			 */
			public findObjectInDocByType(typeToSearchFor: string, doc: Document): any;
			public FlashUtils_clearGlobalArrays(): void;
			/**
			 * @param {string} msg
			 */
			public FlashUtils_debugString(msg: string): void;
			/**
			 * @param {string} objName
			 * @param {Timeline} objTimeline
			 * @param {any} elementParent
			 */
			public FlashUtils_findObjectInTimelineByName(objName: string, objTimeline: Timeline, elementParent: any): void;
			/**
			 * @param {string} objType
			 * @param {Timeline} objTimeline
			 * @param {any} elementParent
			 */
			public FlashUtils_findObjectInTimelineByType(objType: string, objTimeline: Timeline, elementParent: any): void;
			/**
			 * @param {any[]} objArray
			 * @param {any} obj
			 */
			public FlashUtils_getIndexOfObject(objArray: any[], obj: any): number;
			/**
			 * @param {LibraryItem} item
			 */
			public FlashUtils_libraryItemWasNotSearched(item: LibraryItem): boolean;
			/**
			 * @param {boolean} flag
			 */
			public FlashUtils_setDebug(flag: boolean): void;
			/**
			 * @param {any} elementData
			 * @param {boolean} editSymbol
			 */
			public selectElement(elementData: any, editSymbol: boolean): boolean;
		}
	}
}