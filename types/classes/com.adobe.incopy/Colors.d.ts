/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
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
			 * @returns {Adobe.Incopy.Color}
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.Color;
			/**
			 * Returns any Color in the collection.
			 * @returns {Adobe.Incopy.Color}
			 */
			public anyItem(): Adobe.Incopy.Color;
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
			 * @returns {Adobe.Incopy.Color}
			 */
			public firstItem(): Adobe.Incopy.Color;
			/**
			 * Returns the Color with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.Color}
			 */
			public item(indexParam: any): Adobe.Incopy.Color;
			/**
			 * Returns the Color with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.Color}
			 */
			public itemByID(idParam: number): Adobe.Incopy.Color;
			/**
			 * Returns the Color with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.Color}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.Color;
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
			 * @returns {Adobe.Incopy.Color}
			 */
			public lastItem(): Adobe.Incopy.Color;
			/**
			 * Returns the middle Color in the collection.
			 * @returns {Adobe.Incopy.Color}
			 */
			public middleItem(): Adobe.Incopy.Color;
			/**
			 * Returns the Color whose index follows the specified Color in 
			 * the collection.
			 * @param {Color} objParam The Color whose index comes before 
			 * the desired Color. 
			 * @returns {Adobe.Incopy.Color}
			 */
			public nextItem(objParam: Color): Adobe.Incopy.Color;
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
			 * @returns {Adobe.Incopy.Color}
			 */
			public previousItem(objParam: Color): Adobe.Incopy.Color;
		}
	}
}