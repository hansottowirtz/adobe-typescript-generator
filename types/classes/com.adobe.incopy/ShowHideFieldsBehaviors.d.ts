/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ShowHideFieldsBehaviors extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any ShowHideFieldsBehavior in the collection.
			 * @returns {Adobe.Incopy.ShowHideFieldsBehavior}
			 */
			public anyItem(): Adobe.Incopy.ShowHideFieldsBehavior;
			/**
			 * Displays the number of elements in the 
			 * ShowHideFieldsBehavior.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every ShowHideFieldsBehavior in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first ShowHideFieldsBehavior in the collection.
			 * @returns {Adobe.Incopy.ShowHideFieldsBehavior}
			 */
			public firstItem(): Adobe.Incopy.ShowHideFieldsBehavior;
			/**
			 * Returns the ShowHideFieldsBehavior with the specified index 
			 * or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.ShowHideFieldsBehavior}
			 */
			public item(indexParam: any): Adobe.Incopy.ShowHideFieldsBehavior;
			/**
			 * Returns the ShowHideFieldsBehavior with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.ShowHideFieldsBehavior}
			 */
			public itemByID(idParam: number): Adobe.Incopy.ShowHideFieldsBehavior;
			/**
			 * Returns the ShowHideFieldsBehavior with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.ShowHideFieldsBehavior}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.ShowHideFieldsBehavior;
			/**
			 * Returns the ShowHideFieldsBehaviors within the specified 
			 * range.
			 * @param {any} fromParam The ShowHideFieldsBehavior, index, or 
			 * name at the beginning of the range. Can accept: 
			 * ShowHideFieldsBehavior, Long Integer or String.
			 * @param {any} toParam The ShowHideFieldsBehavior, index, or 
			 * name at the end of the range. Can accept: 
			 * ShowHideFieldsBehavior, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last ShowHideFieldsBehavior in the collection.
			 * @returns {Adobe.Incopy.ShowHideFieldsBehavior}
			 */
			public lastItem(): Adobe.Incopy.ShowHideFieldsBehavior;
			/**
			 * Returns the middle ShowHideFieldsBehavior in the collection.
			 * @returns {Adobe.Incopy.ShowHideFieldsBehavior}
			 */
			public middleItem(): Adobe.Incopy.ShowHideFieldsBehavior;
			/**
			 * Returns the ShowHideFieldsBehavior whose index follows the 
			 * specified ShowHideFieldsBehavior in the collection.
			 * @param {ShowHideFieldsBehavior} objParam The 
			 * ShowHideFieldsBehavior whose index comes before the desired 
			 * ShowHideFieldsBehavior. 
			 * @returns {Adobe.Incopy.ShowHideFieldsBehavior}
			 */
			public nextItem(objParam: ShowHideFieldsBehavior): Adobe.Incopy.ShowHideFieldsBehavior;
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
			 * Returns the ShowHideFieldsBehavior with the index previous 
			 * to the specified index.
			 * @param {ShowHideFieldsBehavior} objParam The index of the 
			 * ShowHideFieldsBehavior that follows the desired 
			 * ShowHideFieldsBehavior.
			 * @returns {Adobe.Incopy.ShowHideFieldsBehavior}
			 */
			public previousItem(objParam: ShowHideFieldsBehavior): Adobe.Incopy.ShowHideFieldsBehavior;
		}
	}
}