/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Footnotes extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new footnote.
			 * @param {LocationOptions} atParam The location of the 
			 * footnote reference number in the main text relative to the 
			 * reference object or within the story. (Optional)
			 * @param {any} referenceParam The reference object. Note: Must 
			 * be an insertion point or a note. Required when the at 
			 * parameter specifies before or after. Can accept: Note or 
			 * InsertionPoint. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new Footnote (Optional)
			 * @returns {Adobe.Indesign.Footnote}
			 */
			public add(atParam: LocationOptions, referenceParam: any, withPropertiesParam: any): Adobe.Indesign.Footnote;
			/**
			 * Returns any Footnote in the collection.
			 * @returns {Adobe.Indesign.Footnote}
			 */
			public anyItem(): Adobe.Indesign.Footnote;
			/**
			 * Displays the number of elements in the Footnote.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Footnote in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Footnote in the collection.
			 * @returns {Adobe.Indesign.Footnote}
			 */
			public firstItem(): Adobe.Indesign.Footnote;
			/**
			 * Returns the Footnote with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.Footnote}
			 */
			public item(indexParam: any): Adobe.Indesign.Footnote;
			/**
			 * Returns the Footnote with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.Footnote}
			 */
			public itemByID(idParam: number): Adobe.Indesign.Footnote;
			/**
			 * Returns the Footnote with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.Footnote}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Footnote;
			/**
			 * Returns the Footnotes within the specified range.
			 * @param {any} fromParam The Footnote, index, or name at the 
			 * beginning of the range. Can accept: Footnote, Long Integer 
			 * or String.
			 * @param {any} toParam The Footnote, index, or name at the end 
			 * of the range. Can accept: Footnote, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Footnote in the collection.
			 * @returns {Adobe.Indesign.Footnote}
			 */
			public lastItem(): Adobe.Indesign.Footnote;
			/**
			 * Returns the middle Footnote in the collection.
			 * @returns {Adobe.Indesign.Footnote}
			 */
			public middleItem(): Adobe.Indesign.Footnote;
			/**
			 * Returns the Footnote whose index follows the specified 
			 * Footnote in the collection.
			 * @param {Footnote} objParam The Footnote whose index comes 
			 * before the desired Footnote. 
			 * @returns {Adobe.Indesign.Footnote}
			 */
			public nextItem(objParam: Footnote): Adobe.Indesign.Footnote;
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
			 * Returns the Footnote with the index previous to the 
			 * specified index.
			 * @param {Footnote} objParam The index of the Footnote that 
			 * follows the desired Footnote.
			 * @returns {Adobe.Indesign.Footnote}
			 */
			public previousItem(objParam: Footnote): Adobe.Indesign.Footnote;
		}
	}
}