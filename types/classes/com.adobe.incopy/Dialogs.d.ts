/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Dialogs extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new Dialog.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new Dialog (Optional)
			 * @returns {Adobe.Incopy.Dialog}
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.Dialog;
			/**
			 * Returns any Dialog in the collection.
			 * @returns {Adobe.Incopy.Dialog}
			 */
			public anyItem(): Adobe.Incopy.Dialog;
			/**
			 * Displays the number of elements in the Dialog.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Dialog in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Dialog in the collection.
			 * @returns {Adobe.Incopy.Dialog}
			 */
			public firstItem(): Adobe.Incopy.Dialog;
			/**
			 * Returns the Dialog with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.Dialog}
			 */
			public item(indexParam: any): Adobe.Incopy.Dialog;
			/**
			 * Returns the Dialog with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.Dialog}
			 */
			public itemByID(idParam: number): Adobe.Incopy.Dialog;
			/**
			 * Returns the Dialog with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.Dialog}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.Dialog;
			/**
			 * Returns the Dialogs within the specified range.
			 * @param {any} fromParam The Dialog, index, or name at the 
			 * beginning of the range. Can accept: Dialog, Long Integer or 
			 * String.
			 * @param {any} toParam The Dialog, index, or name at the end 
			 * of the range. Can accept: Dialog, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Dialog in the collection.
			 * @returns {Adobe.Incopy.Dialog}
			 */
			public lastItem(): Adobe.Incopy.Dialog;
			/**
			 * Returns the middle Dialog in the collection.
			 * @returns {Adobe.Incopy.Dialog}
			 */
			public middleItem(): Adobe.Incopy.Dialog;
			/**
			 * Returns the Dialog whose index follows the specified Dialog 
			 * in the collection.
			 * @param {Dialog} objParam The Dialog whose index comes before 
			 * the desired Dialog. 
			 * @returns {Adobe.Incopy.Dialog}
			 */
			public nextItem(objParam: Dialog): Adobe.Incopy.Dialog;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx
			 * @returns {number}
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index
			 * @returns {any}
			 */
			public nextValue(index: number): any;
			/**
			 * Returns the Dialog with the index previous to the specified 
			 * index.
			 * @param {Dialog} objParam The index of the Dialog that 
			 * follows the desired Dialog.
			 * @returns {Adobe.Incopy.Dialog}
			 */
			public previousItem(objParam: Dialog): Adobe.Incopy.Dialog;
		}
	}
}