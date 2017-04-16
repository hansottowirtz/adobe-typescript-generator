/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class NavigationPoints extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new NavigationPoint.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new NavigationPoint (Optional)
			 * @returns {Adobe.Incopy.NavigationPoint}
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.NavigationPoint;
			/**
			 * Returns any NavigationPoint in the collection.
			 * @returns {Adobe.Incopy.NavigationPoint}
			 */
			public anyItem(): Adobe.Incopy.NavigationPoint;
			/**
			 * Displays the number of elements in the NavigationPoint.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every NavigationPoint in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first NavigationPoint in the collection.
			 * @returns {Adobe.Incopy.NavigationPoint}
			 */
			public firstItem(): Adobe.Incopy.NavigationPoint;
			/**
			 * Returns the NavigationPoint with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.NavigationPoint}
			 */
			public item(indexParam: any): Adobe.Incopy.NavigationPoint;
			/**
			 * Returns the NavigationPoint with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.NavigationPoint}
			 */
			public itemByID(idParam: number): Adobe.Incopy.NavigationPoint;
			/**
			 * Returns the NavigationPoint with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.NavigationPoint}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.NavigationPoint;
			/**
			 * Returns the NavigationPoints within the specified range.
			 * @param {any} fromParam The NavigationPoint, index, or name 
			 * at the beginning of the range. Can accept: NavigationPoint, 
			 * Long Integer or String.
			 * @param {any} toParam The NavigationPoint, index, or name at 
			 * the end of the range. Can accept: NavigationPoint, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last NavigationPoint in the collection.
			 * @returns {Adobe.Incopy.NavigationPoint}
			 */
			public lastItem(): Adobe.Incopy.NavigationPoint;
			/**
			 * Returns the middle NavigationPoint in the collection.
			 * @returns {Adobe.Incopy.NavigationPoint}
			 */
			public middleItem(): Adobe.Incopy.NavigationPoint;
			/**
			 * Returns the NavigationPoint whose index follows the 
			 * specified NavigationPoint in the collection.
			 * @param {NavigationPoint} objParam The NavigationPoint whose 
			 * index comes before the desired NavigationPoint. 
			 * @returns {Adobe.Incopy.NavigationPoint}
			 */
			public nextItem(objParam: NavigationPoint): Adobe.Incopy.NavigationPoint;
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
			 * Returns the NavigationPoint with the index previous to the 
			 * specified index.
			 * @param {NavigationPoint} objParam The index of the 
			 * NavigationPoint that follows the desired NavigationPoint.
			 * @returns {Adobe.Incopy.NavigationPoint}
			 */
			public previousItem(objParam: NavigationPoint): Adobe.Incopy.NavigationPoint;
		}
	}
}