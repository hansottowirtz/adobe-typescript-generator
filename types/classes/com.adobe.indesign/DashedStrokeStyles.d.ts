/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class DashedStrokeStyles extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new DashedStrokeStyle.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new DashedStrokeStyle (Optional)
			 * @returns {Adobe.Indesign.DashedStrokeStyle}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.DashedStrokeStyle;
			/**
			 * Returns any DashedStrokeStyle in the collection.
			 * @returns {Adobe.Indesign.DashedStrokeStyle}
			 */
			public anyItem(): Adobe.Indesign.DashedStrokeStyle;
			/**
			 * Displays the number of elements in the DashedStrokeStyle.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every DashedStrokeStyle in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first DashedStrokeStyle in the collection.
			 * @returns {Adobe.Indesign.DashedStrokeStyle}
			 */
			public firstItem(): Adobe.Indesign.DashedStrokeStyle;
			/**
			 * Returns the DashedStrokeStyle with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.DashedStrokeStyle}
			 */
			public item(indexParam: any): Adobe.Indesign.DashedStrokeStyle;
			/**
			 * Returns the DashedStrokeStyle with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.DashedStrokeStyle}
			 */
			public itemByID(idParam: number): Adobe.Indesign.DashedStrokeStyle;
			/**
			 * Returns the DashedStrokeStyle with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.DashedStrokeStyle}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.DashedStrokeStyle;
			/**
			 * Returns the DashedStrokeStyles within the specified range.
			 * @param {any} fromParam The DashedStrokeStyle, index, or name 
			 * at the beginning of the range. Can accept: 
			 * DashedStrokeStyle, Long Integer or String.
			 * @param {any} toParam The DashedStrokeStyle, index, or name 
			 * at the end of the range. Can accept: DashedStrokeStyle, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last DashedStrokeStyle in the collection.
			 * @returns {Adobe.Indesign.DashedStrokeStyle}
			 */
			public lastItem(): Adobe.Indesign.DashedStrokeStyle;
			/**
			 * Returns the middle DashedStrokeStyle in the collection.
			 * @returns {Adobe.Indesign.DashedStrokeStyle}
			 */
			public middleItem(): Adobe.Indesign.DashedStrokeStyle;
			/**
			 * Returns the DashedStrokeStyle whose index follows the 
			 * specified DashedStrokeStyle in the collection.
			 * @param {DashedStrokeStyle} objParam The DashedStrokeStyle 
			 * whose index comes before the desired DashedStrokeStyle. 
			 * @returns {Adobe.Indesign.DashedStrokeStyle}
			 */
			public nextItem(objParam: DashedStrokeStyle): Adobe.Indesign.DashedStrokeStyle;
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
			 * Returns the DashedStrokeStyle with the index previous to the 
			 * specified index.
			 * @param {DashedStrokeStyle} objParam The index of the 
			 * DashedStrokeStyle that follows the desired 
			 * DashedStrokeStyle.
			 * @returns {Adobe.Indesign.DashedStrokeStyle}
			 */
			public previousItem(objParam: DashedStrokeStyle): Adobe.Indesign.DashedStrokeStyle;
		}
	}
}