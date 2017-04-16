/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class RealEditboxes extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new RealEditbox.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new RealEditbox (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.RealEditbox;
			/** Returns any RealEditbox in the collection. */
			public anyItem(): Adobe.Incopy.RealEditbox;
			/** Displays the number of elements in the RealEditbox. */
			public count(): number;
			/** Returns every RealEditbox in the collection. */
			public everyItem(): any;
			/** Returns the first RealEditbox in the collection. */
			public firstItem(): Adobe.Incopy.RealEditbox;
			/**
			 * Returns the RealEditbox with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.RealEditbox;
			/**
			 * Returns the RealEditbox with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.RealEditbox;
			/**
			 * Returns the RealEditboxes within the specified range.
			 * @param {any} fromParam The RealEditbox, index, or name at 
			 * the beginning of the range. Can accept: RealEditbox, Long 
			 * Integer or String.
			 * @param {any} toParam The RealEditbox, index, or name at the 
			 * end of the range. Can accept: RealEditbox, Long Integer or 
			 * String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last RealEditbox in the collection. */
			public lastItem(): Adobe.Incopy.RealEditbox;
			/** Returns the middle RealEditbox in the collection. */
			public middleItem(): Adobe.Incopy.RealEditbox;
			/**
			 * Returns the RealEditbox whose index follows the specified 
			 * RealEditbox in the collection.
			 * @param {RealEditbox} objParam The RealEditbox whose index 
			 * comes before the desired RealEditbox. 
			 */
			public nextItem(objParam: RealEditbox): Adobe.Incopy.RealEditbox;
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
			 * Returns the RealEditbox with the index previous to the 
			 * specified index.
			 * @param {RealEditbox} objParam The index of the RealEditbox 
			 * that follows the desired RealEditbox.
			 */
			public previousItem(objParam: RealEditbox): Adobe.Incopy.RealEditbox;
		}
	}
}