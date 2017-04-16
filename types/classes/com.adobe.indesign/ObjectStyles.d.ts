/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ObjectStyles extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new ObjectStyle.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new ObjectStyle (Optional)
			 * @returns {Adobe.Indesign.ObjectStyle}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.ObjectStyle;
			/**
			 * Returns any ObjectStyle in the collection.
			 * @returns {Adobe.Indesign.ObjectStyle}
			 */
			public anyItem(): Adobe.Indesign.ObjectStyle;
			/**
			 * Displays the number of elements in the ObjectStyle.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every ObjectStyle in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first ObjectStyle in the collection.
			 * @returns {Adobe.Indesign.ObjectStyle}
			 */
			public firstItem(): Adobe.Indesign.ObjectStyle;
			/**
			 * Returns the ObjectStyle with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.ObjectStyle}
			 */
			public item(indexParam: any): Adobe.Indesign.ObjectStyle;
			/**
			 * Returns the ObjectStyle with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.ObjectStyle}
			 */
			public itemByID(idParam: number): Adobe.Indesign.ObjectStyle;
			/**
			 * Returns the ObjectStyle with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.ObjectStyle}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.ObjectStyle;
			/**
			 * Returns the ObjectStyles within the specified range.
			 * @param {any} fromParam The ObjectStyle, index, or name at 
			 * the beginning of the range. Can accept: ObjectStyle, Long 
			 * Integer or String.
			 * @param {any} toParam The ObjectStyle, index, or name at the 
			 * end of the range. Can accept: ObjectStyle, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last ObjectStyle in the collection.
			 * @returns {Adobe.Indesign.ObjectStyle}
			 */
			public lastItem(): Adobe.Indesign.ObjectStyle;
			/**
			 * Returns the middle ObjectStyle in the collection.
			 * @returns {Adobe.Indesign.ObjectStyle}
			 */
			public middleItem(): Adobe.Indesign.ObjectStyle;
			/**
			 * Returns the ObjectStyle whose index follows the specified 
			 * ObjectStyle in the collection.
			 * @param {ObjectStyle} objParam The ObjectStyle whose index 
			 * comes before the desired ObjectStyle. 
			 * @returns {Adobe.Indesign.ObjectStyle}
			 */
			public nextItem(objParam: ObjectStyle): Adobe.Indesign.ObjectStyle;
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
			 * Returns the ObjectStyle with the index previous to the 
			 * specified index.
			 * @param {ObjectStyle} objParam The index of the ObjectStyle 
			 * that follows the desired ObjectStyle.
			 * @returns {Adobe.Indesign.ObjectStyle}
			 */
			public previousItem(objParam: ObjectStyle): Adobe.Indesign.ObjectStyle;
		}
	}
}