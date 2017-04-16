/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class CompositeFonts extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new CompositeFont.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new CompositeFont (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.CompositeFont;
			/** Returns any CompositeFont in the collection. */
			public anyItem(): Adobe.Indesign.CompositeFont;
			/** Displays the number of elements in the CompositeFont. */
			public count(): number;
			/** Returns every CompositeFont in the collection. */
			public everyItem(): any;
			/** Returns the first CompositeFont in the collection. */
			public firstItem(): Adobe.Indesign.CompositeFont;
			/**
			 * Returns the CompositeFont with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.CompositeFont;
			/**
			 * Returns the CompositeFont with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.CompositeFont;
			/**
			 * Returns the CompositeFont with the specified name.
			 * @param {string} nameParam The name.
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
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last CompositeFont in the collection. */
			public lastItem(): Adobe.Indesign.CompositeFont;
			/** Returns the middle CompositeFont in the collection. */
			public middleItem(): Adobe.Indesign.CompositeFont;
			/**
			 * Returns the CompositeFont whose index follows the specified 
			 * CompositeFont in the collection.
			 * @param {CompositeFont} objParam The CompositeFont whose 
			 * index comes before the desired CompositeFont. 
			 */
			public nextItem(objParam: CompositeFont): Adobe.Indesign.CompositeFont;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index
			 */
			public nextValue(index: number): any;
			/**
			 * Returns the CompositeFont with the index previous to the 
			 * specified index.
			 * @param {CompositeFont} objParam The index of the 
			 * CompositeFont that follows the desired CompositeFont.
			 */
			public previousItem(objParam: CompositeFont): Adobe.Indesign.CompositeFont;
		}
	}
}