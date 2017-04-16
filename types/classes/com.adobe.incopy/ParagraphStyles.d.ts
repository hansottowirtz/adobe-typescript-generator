/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ParagraphStyles extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new ParagraphStyle.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new ParagraphStyle (Optional)
			 * @returns {Adobe.Incopy.ParagraphStyle}
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.ParagraphStyle;
			/**
			 * Returns any ParagraphStyle in the collection.
			 * @returns {Adobe.Incopy.ParagraphStyle}
			 */
			public anyItem(): Adobe.Incopy.ParagraphStyle;
			/**
			 * Displays the number of elements in the ParagraphStyle.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every ParagraphStyle in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first ParagraphStyle in the collection.
			 * @returns {Adobe.Incopy.ParagraphStyle}
			 */
			public firstItem(): Adobe.Incopy.ParagraphStyle;
			/**
			 * Returns the ParagraphStyle with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.ParagraphStyle}
			 */
			public item(indexParam: any): Adobe.Incopy.ParagraphStyle;
			/**
			 * Returns the ParagraphStyle with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.ParagraphStyle}
			 */
			public itemByID(idParam: number): Adobe.Incopy.ParagraphStyle;
			/**
			 * Returns the ParagraphStyle with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.ParagraphStyle}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.ParagraphStyle;
			/**
			 * Returns the ParagraphStyles within the specified range.
			 * @param {any} fromParam The ParagraphStyle, index, or name at 
			 * the beginning of the range. Can accept: ParagraphStyle, Long 
			 * Integer or String.
			 * @param {any} toParam The ParagraphStyle, index, or name at 
			 * the end of the range. Can accept: ParagraphStyle, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last ParagraphStyle in the collection.
			 * @returns {Adobe.Incopy.ParagraphStyle}
			 */
			public lastItem(): Adobe.Incopy.ParagraphStyle;
			/**
			 * Returns the middle ParagraphStyle in the collection.
			 * @returns {Adobe.Incopy.ParagraphStyle}
			 */
			public middleItem(): Adobe.Incopy.ParagraphStyle;
			/**
			 * Returns the ParagraphStyle whose index follows the specified 
			 * ParagraphStyle in the collection.
			 * @param {ParagraphStyle} objParam The ParagraphStyle whose 
			 * index comes before the desired ParagraphStyle. 
			 * @returns {Adobe.Incopy.ParagraphStyle}
			 */
			public nextItem(objParam: ParagraphStyle): Adobe.Incopy.ParagraphStyle;
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
			 * Returns the ParagraphStyle with the index previous to the 
			 * specified index.
			 * @param {ParagraphStyle} objParam The index of the 
			 * ParagraphStyle that follows the desired ParagraphStyle.
			 * @returns {Adobe.Incopy.ParagraphStyle}
			 */
			public previousItem(objParam: ParagraphStyle): Adobe.Incopy.ParagraphStyle;
		}
	}
}