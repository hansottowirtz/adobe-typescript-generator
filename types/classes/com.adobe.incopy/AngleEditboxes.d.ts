/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class AngleEditboxes extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new AngleEditbox.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new AngleEditbox (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.AngleEditbox;
			/** Returns any AngleEditbox in the collection. */
			public anyItem(): Adobe.Incopy.AngleEditbox;
			/** Displays the number of elements in the AngleEditbox. */
			public count(): number;
			/** Returns every AngleEditbox in the collection. */
			public everyItem(): any;
			/** Returns the first AngleEditbox in the collection. */
			public firstItem(): Adobe.Incopy.AngleEditbox;
			/**
			 * Returns the AngleEditbox with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.AngleEditbox;
			/**
			 * Returns the AngleEditbox with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.AngleEditbox;
			/**
			 * Returns the AngleEditboxes within the specified range.
			 * @param {any} fromParam The AngleEditbox, index, or name at 
			 * the beginning of the range. Can accept: AngleEditbox, Long 
			 * Integer or String.
			 * @param {any} toParam The AngleEditbox, index, or name at the 
			 * end of the range. Can accept: AngleEditbox, Long Integer or 
			 * String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last AngleEditbox in the collection. */
			public lastItem(): Adobe.Incopy.AngleEditbox;
			/** Returns the middle AngleEditbox in the collection. */
			public middleItem(): Adobe.Incopy.AngleEditbox;
			/**
			 * Returns the AngleEditbox whose index follows the specified 
			 * AngleEditbox in the collection.
			 * @param {AngleEditbox} objParam The AngleEditbox whose index 
			 * comes before the desired AngleEditbox. 
			 */
			public nextItem(objParam: AngleEditbox): Adobe.Incopy.AngleEditbox;
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
			 * Returns the AngleEditbox with the index previous to the 
			 * specified index.
			 * @param {AngleEditbox} objParam The index of the AngleEditbox 
			 * that follows the desired AngleEditbox.
			 */
			public previousItem(objParam: AngleEditbox): Adobe.Incopy.AngleEditbox;
		}
	}
}