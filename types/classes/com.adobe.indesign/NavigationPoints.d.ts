/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class NavigationPoints extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new NavigationPoint.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new NavigationPoint (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.NavigationPoint;
			/** Returns any NavigationPoint in the collection. */
			public anyItem(): Adobe.Indesign.NavigationPoint;
			/** Displays the number of elements in the NavigationPoint. */
			public count(): number;
			/** Returns every NavigationPoint in the collection. */
			public everyItem(): any;
			/** Returns the first NavigationPoint in the collection. */
			public firstItem(): Adobe.Indesign.NavigationPoint;
			/**
			 * Returns the NavigationPoint with the specified index or 
			 * name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.NavigationPoint;
			/**
			 * Returns the NavigationPoint with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.NavigationPoint;
			/**
			 * Returns the NavigationPoint with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.NavigationPoint;
			/**
			 * Returns the NavigationPoints within the specified range.
			 * @param {any} fromParam - The NavigationPoint, index, or name 
			 * at the beginning of the range. Can accept: NavigationPoint, 
			 * Long Integer or String.
			 * @param {any} toParam - The NavigationPoint, index, or name 
			 * at the end of the range. Can accept: NavigationPoint, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last NavigationPoint in the collection. */
			public lastItem(): Adobe.Indesign.NavigationPoint;
			/** Returns the middle NavigationPoint in the collection. */
			public middleItem(): Adobe.Indesign.NavigationPoint;
			/**
			 * Returns the NavigationPoint whose index follows the 
			 * specified NavigationPoint in the collection.
			 * @param {NavigationPoint} objParam - The NavigationPoint 
			 * whose index comes before the desired NavigationPoint. 
			 */
			public nextItem(objParam: NavigationPoint): Adobe.Indesign.NavigationPoint;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx - 
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index - 
			 */
			public nextValue(index: number): any;
			/**
			 * Returns the NavigationPoint with the index previous to the 
			 * specified index.
			 * @param {NavigationPoint} objParam - The index of the 
			 * NavigationPoint that follows the desired NavigationPoint.
			 */
			public previousItem(objParam: NavigationPoint): Adobe.Indesign.NavigationPoint;
		}
	}
}