/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class AssignedStories extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any AssignedStory in the collection.
			 * @returns {Adobe.Incopy.AssignedStory}
			 */
			public anyItem(): Adobe.Incopy.AssignedStory;
			/**
			 * Displays the number of elements in the AssignedStory.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every AssignedStory in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first AssignedStory in the collection.
			 * @returns {Adobe.Incopy.AssignedStory}
			 */
			public firstItem(): Adobe.Incopy.AssignedStory;
			/**
			 * Returns the AssignedStory with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.AssignedStory}
			 */
			public item(indexParam: any): Adobe.Incopy.AssignedStory;
			/**
			 * Returns the AssignedStory with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.AssignedStory}
			 */
			public itemByID(idParam: number): Adobe.Incopy.AssignedStory;
			/**
			 * Returns the AssignedStory with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.AssignedStory}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.AssignedStory;
			/**
			 * Returns the AssignedStories within the specified range.
			 * @param {any} fromParam The AssignedStory, index, or name at 
			 * the beginning of the range. Can accept: AssignedStory, Long 
			 * Integer or String.
			 * @param {any} toParam The AssignedStory, index, or name at 
			 * the end of the range. Can accept: AssignedStory, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last AssignedStory in the collection.
			 * @returns {Adobe.Incopy.AssignedStory}
			 */
			public lastItem(): Adobe.Incopy.AssignedStory;
			/**
			 * Returns the middle AssignedStory in the collection.
			 * @returns {Adobe.Incopy.AssignedStory}
			 */
			public middleItem(): Adobe.Incopy.AssignedStory;
			/**
			 * Returns the AssignedStory whose index follows the specified 
			 * AssignedStory in the collection.
			 * @param {AssignedStory} objParam The AssignedStory whose 
			 * index comes before the desired AssignedStory. 
			 * @returns {Adobe.Incopy.AssignedStory}
			 */
			public nextItem(objParam: AssignedStory): Adobe.Incopy.AssignedStory;
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
			 * Returns the AssignedStory with the index previous to the 
			 * specified index.
			 * @param {AssignedStory} objParam The index of the 
			 * AssignedStory that follows the desired AssignedStory.
			 * @returns {Adobe.Incopy.AssignedStory}
			 */
			public previousItem(objParam: AssignedStory): Adobe.Incopy.AssignedStory;
		}
	}
}