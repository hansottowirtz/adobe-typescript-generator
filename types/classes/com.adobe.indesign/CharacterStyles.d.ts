/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
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
			 * @returns {Adobe.Indesign.CharacterStyle}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.CharacterStyle;
			/**
			 * Returns any CharacterStyle in the collection.
			 * @returns {Adobe.Indesign.CharacterStyle}
			 */
			public anyItem(): Adobe.Indesign.CharacterStyle;
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
			 * @returns {Adobe.Indesign.CharacterStyle}
			 */
			public firstItem(): Adobe.Indesign.CharacterStyle;
			/**
			 * Returns the CharacterStyle with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.CharacterStyle}
			 */
			public item(indexParam: any): Adobe.Indesign.CharacterStyle;
			/**
			 * Returns the CharacterStyle with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.CharacterStyle}
			 */
			public itemByID(idParam: number): Adobe.Indesign.CharacterStyle;
			/**
			 * Returns the CharacterStyle with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.CharacterStyle}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.CharacterStyle;
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
			 * @returns {Adobe.Indesign.CharacterStyle}
			 */
			public lastItem(): Adobe.Indesign.CharacterStyle;
			/**
			 * Returns the middle CharacterStyle in the collection.
			 * @returns {Adobe.Indesign.CharacterStyle}
			 */
			public middleItem(): Adobe.Indesign.CharacterStyle;
			/**
			 * Returns the CharacterStyle whose index follows the specified 
			 * CharacterStyle in the collection.
			 * @param {CharacterStyle} objParam The CharacterStyle whose 
			 * index comes before the desired CharacterStyle. 
			 * @returns {Adobe.Indesign.CharacterStyle}
			 */
			public nextItem(objParam: CharacterStyle): Adobe.Indesign.CharacterStyle;
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
			 * @returns {Adobe.Indesign.CharacterStyle}
			 */
			public previousItem(objParam: CharacterStyle): Adobe.Indesign.CharacterStyle;
		}
	}
}