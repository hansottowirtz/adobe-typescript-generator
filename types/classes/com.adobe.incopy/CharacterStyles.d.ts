/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class CharacterStyles extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new CharacterStyle.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new CharacterStyle (Optional)
			 * @returns {Adobe.Incopy.CharacterStyle}
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.CharacterStyle;
			/**
			 * Returns any CharacterStyle in the collection.
			 * @returns {Adobe.Incopy.CharacterStyle}
			 */
			public anyItem(): Adobe.Incopy.CharacterStyle;
			/**
			 * Displays the number of elements in the CharacterStyle.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every CharacterStyle in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first CharacterStyle in the collection.
			 * @returns {Adobe.Incopy.CharacterStyle}
			 */
			public firstItem(): Adobe.Incopy.CharacterStyle;
			/**
			 * Returns the CharacterStyle with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.CharacterStyle}
			 */
			public item(indexParam: any): Adobe.Incopy.CharacterStyle;
			/**
			 * Returns the CharacterStyle with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.CharacterStyle}
			 */
			public itemByID(idParam: number): Adobe.Incopy.CharacterStyle;
			/**
			 * Returns the CharacterStyle with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.CharacterStyle}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.CharacterStyle;
			/**
			 * Returns the CharacterStyles within the specified range.
			 * @param {any} fromParam The CharacterStyle, index, or name at 
			 * the beginning of the range. Can accept: CharacterStyle, Long 
			 * Integer or String.
			 * @param {any} toParam The CharacterStyle, index, or name at 
			 * the end of the range. Can accept: CharacterStyle, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last CharacterStyle in the collection.
			 * @returns {Adobe.Incopy.CharacterStyle}
			 */
			public lastItem(): Adobe.Incopy.CharacterStyle;
			/**
			 * Returns the middle CharacterStyle in the collection.
			 * @returns {Adobe.Incopy.CharacterStyle}
			 */
			public middleItem(): Adobe.Incopy.CharacterStyle;
			/**
			 * Returns the CharacterStyle whose index follows the specified 
			 * CharacterStyle in the collection.
			 * @param {CharacterStyle} objParam The CharacterStyle whose 
			 * index comes before the desired CharacterStyle. 
			 * @returns {Adobe.Incopy.CharacterStyle}
			 */
			public nextItem(objParam: CharacterStyle): Adobe.Incopy.CharacterStyle;
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
			 * Returns the CharacterStyle with the index previous to the 
			 * specified index.
			 * @param {CharacterStyle} objParam The index of the 
			 * CharacterStyle that follows the desired CharacterStyle.
			 * @returns {Adobe.Incopy.CharacterStyle}
			 */
			public previousItem(objParam: CharacterStyle): Adobe.Incopy.CharacterStyle;
		}
	}
}