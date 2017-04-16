/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
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
			 * @returns {Adobe.Indesign.Dialog}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.Dialog;
			/**
			 * Returns any Dialog in the collection.
			 * @returns {Adobe.Indesign.Dialog}
			 */
			public anyItem(): Adobe.Indesign.Dialog;
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
			 * @returns {Adobe.Indesign.Dialog}
			 */
			public firstItem(): Adobe.Indesign.Dialog;
			/**
			 * Returns the Dialog with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.Dialog}
			 */
			public item(indexParam: any): Adobe.Indesign.Dialog;
			/**
			 * Returns the Dialog with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.Dialog}
			 */
			public itemByID(idParam: number): Adobe.Indesign.Dialog;
			/**
			 * Returns the Dialog with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.Dialog}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Dialog;
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
			 * @returns {Adobe.Indesign.Dialog}
			 */
			public lastItem(): Adobe.Indesign.Dialog;
			/**
			 * Returns the middle Dialog in the collection.
			 * @returns {Adobe.Indesign.Dialog}
			 */
			public middleItem(): Adobe.Indesign.Dialog;
			/**
			 * Returns the Dialog whose index follows the specified Dialog 
			 * in the collection.
			 * @param {Dialog} objParam The Dialog whose index comes before 
			 * the desired Dialog. 
			 * @returns {Adobe.Indesign.Dialog}
			 */
			public nextItem(objParam: Dialog): Adobe.Indesign.Dialog;
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
			 * @returns {Adobe.Indesign.Dialog}
			 */
			public previousItem(objParam: Dialog): Adobe.Indesign.Dialog;
		}
	}
}