/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
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
			 * @returns {Adobe.Indesign.NavigationPoint}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.NavigationPoint;
			/**
			 * Returns any NavigationPoint in the collection.
			 * @returns {Adobe.Indesign.NavigationPoint}
			 */
			public anyItem(): Adobe.Indesign.NavigationPoint;
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
			 * @returns {Adobe.Indesign.NavigationPoint}
			 */
			public firstItem(): Adobe.Indesign.NavigationPoint;
			/**
			 * Returns the NavigationPoint with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.NavigationPoint}
			 */
			public item(indexParam: any): Adobe.Indesign.NavigationPoint;
			/**
			 * Returns the NavigationPoint with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.NavigationPoint}
			 */
			public itemByID(idParam: number): Adobe.Indesign.NavigationPoint;
			/**
			 * Returns the NavigationPoint with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.NavigationPoint}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.NavigationPoint;
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
			 * @returns {Adobe.Indesign.NavigationPoint}
			 */
			public lastItem(): Adobe.Indesign.NavigationPoint;
			/**
			 * Returns the middle NavigationPoint in the collection.
			 * @returns {Adobe.Indesign.NavigationPoint}
			 */
			public middleItem(): Adobe.Indesign.NavigationPoint;
			/**
			 * Returns the NavigationPoint whose index follows the 
			 * specified NavigationPoint in the collection.
			 * @param {NavigationPoint} objParam The NavigationPoint whose 
			 * index comes before the desired NavigationPoint. 
			 * @returns {Adobe.Indesign.NavigationPoint}
			 */
			public nextItem(objParam: NavigationPoint): Adobe.Indesign.NavigationPoint;
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
			 * @returns {Adobe.Indesign.NavigationPoint}
			 */
			public previousItem(objParam: NavigationPoint): Adobe.Indesign.NavigationPoint;
		}
	}
}