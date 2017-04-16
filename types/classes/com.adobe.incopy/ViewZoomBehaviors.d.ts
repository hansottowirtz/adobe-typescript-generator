/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ViewZoomBehaviors extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any ViewZoomBehavior in the collection. */
			public anyItem(): Adobe.Incopy.ViewZoomBehavior;
			/** Displays the number of elements in the ViewZoomBehavior. */
			public count(): number;
			/** Returns every ViewZoomBehavior in the collection. */
			public everyItem(): any;
			/** Returns the first ViewZoomBehavior in the collection. */
			public firstItem(): Adobe.Incopy.ViewZoomBehavior;
			/**
			 * Returns the ViewZoomBehavior with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.ViewZoomBehavior;
			/**
			 * Returns the ViewZoomBehavior with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.ViewZoomBehavior;
			/**
			 * Returns the ViewZoomBehavior with the specified name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.ViewZoomBehavior;
			/**
			 * Returns the ViewZoomBehaviors within the specified range.
			 * @param {any} fromParam The ViewZoomBehavior, index, or name 
			 * at the beginning of the range. Can accept: ViewZoomBehavior, 
			 * Long Integer or String.
			 * @param {any} toParam The ViewZoomBehavior, index, or name at 
			 * the end of the range. Can accept: ViewZoomBehavior, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last ViewZoomBehavior in the collection. */
			public lastItem(): Adobe.Incopy.ViewZoomBehavior;
			/** Returns the middle ViewZoomBehavior in the collection. */
			public middleItem(): Adobe.Incopy.ViewZoomBehavior;
			/**
			 * Returns the ViewZoomBehavior whose index follows the 
			 * specified ViewZoomBehavior in the collection.
			 * @param {ViewZoomBehavior} objParam The ViewZoomBehavior 
			 * whose index comes before the desired ViewZoomBehavior. 
			 */
			public nextItem(objParam: ViewZoomBehavior): Adobe.Incopy.ViewZoomBehavior;
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
			 * Returns the ViewZoomBehavior with the index previous to the 
			 * specified index.
			 * @param {ViewZoomBehavior} objParam The index of the 
			 * ViewZoomBehavior that follows the desired ViewZoomBehavior.
			 */
			public previousItem(objParam: ViewZoomBehavior): Adobe.Incopy.ViewZoomBehavior;
		}
	}
}