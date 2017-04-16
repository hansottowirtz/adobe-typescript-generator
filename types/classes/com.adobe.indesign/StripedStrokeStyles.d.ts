/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class StripedStrokeStyles extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new StripedStrokeStyle.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new StripedStrokeStyle (Optional)
			 * @returns {Adobe.Indesign.StripedStrokeStyle}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.StripedStrokeStyle;
			/**
			 * Returns any StripedStrokeStyle in the collection.
			 * @returns {Adobe.Indesign.StripedStrokeStyle}
			 */
			public anyItem(): Adobe.Indesign.StripedStrokeStyle;
			/**
			 * Displays the number of elements in the StripedStrokeStyle.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every StripedStrokeStyle in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first StripedStrokeStyle in the collection.
			 * @returns {Adobe.Indesign.StripedStrokeStyle}
			 */
			public firstItem(): Adobe.Indesign.StripedStrokeStyle;
			/**
			 * Returns the StripedStrokeStyle with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.StripedStrokeStyle}
			 */
			public item(indexParam: any): Adobe.Indesign.StripedStrokeStyle;
			/**
			 * Returns the StripedStrokeStyle with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.StripedStrokeStyle}
			 */
			public itemByID(idParam: number): Adobe.Indesign.StripedStrokeStyle;
			/**
			 * Returns the StripedStrokeStyle with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.StripedStrokeStyle}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.StripedStrokeStyle;
			/**
			 * Returns the StripedStrokeStyles within the specified range.
			 * @param {any} fromParam The StripedStrokeStyle, index, or 
			 * name at the beginning of the range. Can accept: 
			 * StripedStrokeStyle, Long Integer or String.
			 * @param {any} toParam The StripedStrokeStyle, index, or name 
			 * at the end of the range. Can accept: StripedStrokeStyle, 
			 * Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last StripedStrokeStyle in the collection.
			 * @returns {Adobe.Indesign.StripedStrokeStyle}
			 */
			public lastItem(): Adobe.Indesign.StripedStrokeStyle;
			/**
			 * Returns the middle StripedStrokeStyle in the collection.
			 * @returns {Adobe.Indesign.StripedStrokeStyle}
			 */
			public middleItem(): Adobe.Indesign.StripedStrokeStyle;
			/**
			 * Returns the StripedStrokeStyle whose index follows the 
			 * specified StripedStrokeStyle in the collection.
			 * @param {StripedStrokeStyle} objParam The StripedStrokeStyle 
			 * whose index comes before the desired StripedStrokeStyle. 
			 * @returns {Adobe.Indesign.StripedStrokeStyle}
			 */
			public nextItem(objParam: StripedStrokeStyle): Adobe.Indesign.StripedStrokeStyle;
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
			 * Returns the StripedStrokeStyle with the index previous to 
			 * the specified index.
			 * @param {StripedStrokeStyle} objParam The index of the 
			 * StripedStrokeStyle that follows the desired 
			 * StripedStrokeStyle.
			 * @returns {Adobe.Indesign.StripedStrokeStyle}
			 */
			public previousItem(objParam: StripedStrokeStyle): Adobe.Indesign.StripedStrokeStyle;
		}
	}
}