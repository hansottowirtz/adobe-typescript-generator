/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class CompositeFonts extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new CompositeFont.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new CompositeFont (Optional)
			 * @returns {Adobe.Indesign.CompositeFont}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.CompositeFont;
			/**
			 * Returns any CompositeFont in the collection.
			 * @returns {Adobe.Indesign.CompositeFont}
			 */
			public anyItem(): Adobe.Indesign.CompositeFont;
			/**
			 * Displays the number of elements in the CompositeFont.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every CompositeFont in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first CompositeFont in the collection.
			 * @returns {Adobe.Indesign.CompositeFont}
			 */
			public firstItem(): Adobe.Indesign.CompositeFont;
			/**
			 * Returns the CompositeFont with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.CompositeFont}
			 */
			public item(indexParam: any): Adobe.Indesign.CompositeFont;
			/**
			 * Returns the CompositeFont with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.CompositeFont}
			 */
			public itemByID(idParam: number): Adobe.Indesign.CompositeFont;
			/**
			 * Returns the CompositeFont with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.CompositeFont}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.CompositeFont;
			/**
			 * Returns the CompositeFonts within the specified range.
			 * @param {any} fromParam The CompositeFont, index, or name at 
			 * the beginning of the range. Can accept: CompositeFont, Long 
			 * Integer or String.
			 * @param {any} toParam The CompositeFont, index, or name at 
			 * the end of the range. Can accept: CompositeFont, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last CompositeFont in the collection.
			 * @returns {Adobe.Indesign.CompositeFont}
			 */
			public lastItem(): Adobe.Indesign.CompositeFont;
			/**
			 * Returns the middle CompositeFont in the collection.
			 * @returns {Adobe.Indesign.CompositeFont}
			 */
			public middleItem(): Adobe.Indesign.CompositeFont;
			/**
			 * Returns the CompositeFont whose index follows the specified 
			 * CompositeFont in the collection.
			 * @param {CompositeFont} objParam The CompositeFont whose 
			 * index comes before the desired CompositeFont. 
			 * @returns {Adobe.Indesign.CompositeFont}
			 */
			public nextItem(objParam: CompositeFont): Adobe.Indesign.CompositeFont;
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
			 * Returns the CompositeFont with the index previous to the 
			 * specified index.
			 * @param {CompositeFont} objParam The index of the 
			 * CompositeFont that follows the desired CompositeFont.
			 * @returns {Adobe.Indesign.CompositeFont}
			 */
			public previousItem(objParam: CompositeFont): Adobe.Indesign.CompositeFont;
		}
	}
}