/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Colors extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new Color.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new Color (Optional)
			 * @returns {Adobe.Indesign.Color}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.Color;
			/**
			 * Returns any Color in the collection.
			 * @returns {Adobe.Indesign.Color}
			 */
			public anyItem(): Adobe.Indesign.Color;
			/**
			 * Displays the number of elements in the Color.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Color in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Color in the collection.
			 * @returns {Adobe.Indesign.Color}
			 */
			public firstItem(): Adobe.Indesign.Color;
			/**
			 * Returns the Color with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.Color}
			 */
			public item(indexParam: any): Adobe.Indesign.Color;
			/**
			 * Returns the Color with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.Color}
			 */
			public itemByID(idParam: number): Adobe.Indesign.Color;
			/**
			 * Returns the Color with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.Color}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Color;
			/**
			 * Returns the Colors within the specified range.
			 * @param {any} fromParam The Color, index, or name at the 
			 * beginning of the range. Can accept: Color, Long Integer or 
			 * String.
			 * @param {any} toParam The Color, index, or name at the end of 
			 * the range. Can accept: Color, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Color in the collection.
			 * @returns {Adobe.Indesign.Color}
			 */
			public lastItem(): Adobe.Indesign.Color;
			/**
			 * Returns the middle Color in the collection.
			 * @returns {Adobe.Indesign.Color}
			 */
			public middleItem(): Adobe.Indesign.Color;
			/**
			 * Returns the Color whose index follows the specified Color in 
			 * the collection.
			 * @param {Color} objParam The Color whose index comes before 
			 * the desired Color. 
			 * @returns {Adobe.Indesign.Color}
			 */
			public nextItem(objParam: Color): Adobe.Indesign.Color;
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
			 * Returns the Color with the index previous to the specified 
			 * index.
			 * @param {Color} objParam The index of the Color that follows 
			 * the desired Color.
			 * @returns {Adobe.Indesign.Color}
			 */
			public previousItem(objParam: Color): Adobe.Indesign.Color;
		}
	}
}