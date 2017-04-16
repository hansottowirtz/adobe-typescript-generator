/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class AngleEditboxes extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new AngleEditbox.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new AngleEditbox (Optional)
			 * @returns {Adobe.Indesign.AngleEditbox}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.AngleEditbox;
			/**
			 * Returns any AngleEditbox in the collection.
			 * @returns {Adobe.Indesign.AngleEditbox}
			 */
			public anyItem(): Adobe.Indesign.AngleEditbox;
			/**
			 * Displays the number of elements in the AngleEditbox.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every AngleEditbox in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first AngleEditbox in the collection.
			 * @returns {Adobe.Indesign.AngleEditbox}
			 */
			public firstItem(): Adobe.Indesign.AngleEditbox;
			/**
			 * Returns the AngleEditbox with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.AngleEditbox}
			 */
			public item(indexParam: any): Adobe.Indesign.AngleEditbox;
			/**
			 * Returns the AngleEditbox with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.AngleEditbox}
			 */
			public itemByID(idParam: number): Adobe.Indesign.AngleEditbox;
			/**
			 * Returns the AngleEditboxes within the specified range.
			 * @param {any} fromParam The AngleEditbox, index, or name at 
			 * the beginning of the range. Can accept: AngleEditbox, Long 
			 * Integer or String.
			 * @param {any} toParam The AngleEditbox, index, or name at the 
			 * end of the range. Can accept: AngleEditbox, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last AngleEditbox in the collection.
			 * @returns {Adobe.Indesign.AngleEditbox}
			 */
			public lastItem(): Adobe.Indesign.AngleEditbox;
			/**
			 * Returns the middle AngleEditbox in the collection.
			 * @returns {Adobe.Indesign.AngleEditbox}
			 */
			public middleItem(): Adobe.Indesign.AngleEditbox;
			/**
			 * Returns the AngleEditbox whose index follows the specified 
			 * AngleEditbox in the collection.
			 * @param {AngleEditbox} objParam The AngleEditbox whose index 
			 * comes before the desired AngleEditbox. 
			 * @returns {Adobe.Indesign.AngleEditbox}
			 */
			public nextItem(objParam: AngleEditbox): Adobe.Indesign.AngleEditbox;
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
			 * Returns the AngleEditbox with the index previous to the 
			 * specified index.
			 * @param {AngleEditbox} objParam The index of the AngleEditbox 
			 * that follows the desired AngleEditbox.
			 * @returns {Adobe.Indesign.AngleEditbox}
			 */
			public previousItem(objParam: AngleEditbox): Adobe.Indesign.AngleEditbox;
		}
	}
}