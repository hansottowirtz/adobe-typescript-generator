/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class DottedStrokeStyles extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new DottedStrokeStyle.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new DottedStrokeStyle (Optional)
			 * @returns {Adobe.Indesign.DottedStrokeStyle}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.DottedStrokeStyle;
			/**
			 * Returns any DottedStrokeStyle in the collection.
			 * @returns {Adobe.Indesign.DottedStrokeStyle}
			 */
			public anyItem(): Adobe.Indesign.DottedStrokeStyle;
			/**
			 * Displays the number of elements in the DottedStrokeStyle.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every DottedStrokeStyle in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first DottedStrokeStyle in the collection.
			 * @returns {Adobe.Indesign.DottedStrokeStyle}
			 */
			public firstItem(): Adobe.Indesign.DottedStrokeStyle;
			/**
			 * Returns the DottedStrokeStyle with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.DottedStrokeStyle}
			 */
			public item(indexParam: any): Adobe.Indesign.DottedStrokeStyle;
			/**
			 * Returns the DottedStrokeStyle with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.DottedStrokeStyle}
			 */
			public itemByID(idParam: number): Adobe.Indesign.DottedStrokeStyle;
			/**
			 * Returns the DottedStrokeStyle with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.DottedStrokeStyle}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.DottedStrokeStyle;
			/**
			 * Returns the DottedStrokeStyles within the specified range.
			 * @param {any} fromParam The DottedStrokeStyle, index, or name 
			 * at the beginning of the range. Can accept: 
			 * DottedStrokeStyle, Long Integer or String.
			 * @param {any} toParam The DottedStrokeStyle, index, or name 
			 * at the end of the range. Can accept: DottedStrokeStyle, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last DottedStrokeStyle in the collection.
			 * @returns {Adobe.Indesign.DottedStrokeStyle}
			 */
			public lastItem(): Adobe.Indesign.DottedStrokeStyle;
			/**
			 * Returns the middle DottedStrokeStyle in the collection.
			 * @returns {Adobe.Indesign.DottedStrokeStyle}
			 */
			public middleItem(): Adobe.Indesign.DottedStrokeStyle;
			/**
			 * Returns the DottedStrokeStyle whose index follows the 
			 * specified DottedStrokeStyle in the collection.
			 * @param {DottedStrokeStyle} objParam The DottedStrokeStyle 
			 * whose index comes before the desired DottedStrokeStyle. 
			 * @returns {Adobe.Indesign.DottedStrokeStyle}
			 */
			public nextItem(objParam: DottedStrokeStyle): Adobe.Indesign.DottedStrokeStyle;
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
			 * Returns the DottedStrokeStyle with the index previous to the 
			 * specified index.
			 * @param {DottedStrokeStyle} objParam The index of the 
			 * DottedStrokeStyle that follows the desired 
			 * DottedStrokeStyle.
			 * @returns {Adobe.Indesign.DottedStrokeStyle}
			 */
			public previousItem(objParam: DottedStrokeStyle): Adobe.Indesign.DottedStrokeStyle;
		}
	}
}