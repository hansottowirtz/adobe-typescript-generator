/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ViewZoomBehaviors extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new ViewZoomBehavior.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new ViewZoomBehavior (Optional)
			 * @returns {Adobe.Indesign.ViewZoomBehavior}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.ViewZoomBehavior;
			/**
			 * Returns any ViewZoomBehavior in the collection.
			 * @returns {Adobe.Indesign.ViewZoomBehavior}
			 */
			public anyItem(): Adobe.Indesign.ViewZoomBehavior;
			/**
			 * Displays the number of elements in the ViewZoomBehavior.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every ViewZoomBehavior in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first ViewZoomBehavior in the collection.
			 * @returns {Adobe.Indesign.ViewZoomBehavior}
			 */
			public firstItem(): Adobe.Indesign.ViewZoomBehavior;
			/**
			 * Returns the ViewZoomBehavior with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.ViewZoomBehavior}
			 */
			public item(indexParam: any): Adobe.Indesign.ViewZoomBehavior;
			/**
			 * Returns the ViewZoomBehavior with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.ViewZoomBehavior}
			 */
			public itemByID(idParam: number): Adobe.Indesign.ViewZoomBehavior;
			/**
			 * Returns the ViewZoomBehavior with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.ViewZoomBehavior}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.ViewZoomBehavior;
			/**
			 * Returns the ViewZoomBehaviors within the specified range.
			 * @param {any} fromParam The ViewZoomBehavior, index, or name 
			 * at the beginning of the range. Can accept: ViewZoomBehavior, 
			 * Long Integer or String.
			 * @param {any} toParam The ViewZoomBehavior, index, or name at 
			 * the end of the range. Can accept: ViewZoomBehavior, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last ViewZoomBehavior in the collection.
			 * @returns {Adobe.Indesign.ViewZoomBehavior}
			 */
			public lastItem(): Adobe.Indesign.ViewZoomBehavior;
			/**
			 * Returns the middle ViewZoomBehavior in the collection.
			 * @returns {Adobe.Indesign.ViewZoomBehavior}
			 */
			public middleItem(): Adobe.Indesign.ViewZoomBehavior;
			/**
			 * Returns the ViewZoomBehavior whose index follows the 
			 * specified ViewZoomBehavior in the collection.
			 * @param {ViewZoomBehavior} objParam The ViewZoomBehavior 
			 * whose index comes before the desired ViewZoomBehavior. 
			 * @returns {Adobe.Indesign.ViewZoomBehavior}
			 */
			public nextItem(objParam: ViewZoomBehavior): Adobe.Indesign.ViewZoomBehavior;
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
			 * Returns the ViewZoomBehavior with the index previous to the 
			 * specified index.
			 * @param {ViewZoomBehavior} objParam The index of the 
			 * ViewZoomBehavior that follows the desired ViewZoomBehavior.
			 * @returns {Adobe.Indesign.ViewZoomBehavior}
			 */
			public previousItem(objParam: ViewZoomBehavior): Adobe.Indesign.ViewZoomBehavior;
		}
	}
}