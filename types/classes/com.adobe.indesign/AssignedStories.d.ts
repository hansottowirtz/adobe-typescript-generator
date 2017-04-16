/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class AssignedStories extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any AssignedStory in the collection. */
			public anyItem(): Adobe.Indesign.AssignedStory;
			/** Displays the number of elements in the AssignedStory. */
			public count(): number;
			/** Returns every AssignedStory in the collection. */
			public everyItem(): any;
			/** Returns the first AssignedStory in the collection. */
			public firstItem(): Adobe.Indesign.AssignedStory;
			/**
			 * Returns the AssignedStory with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.AssignedStory;
			/**
			 * Returns the AssignedStory with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.AssignedStory;
			/**
			 * Returns the AssignedStory with the specified name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.AssignedStory;
			/**
			 * Returns the AssignedStories within the specified range.
			 * @param {any} fromParam The AssignedStory, index, or name at 
			 * the beginning of the range. Can accept: AssignedStory, Long 
			 * Integer or String.
			 * @param {any} toParam The AssignedStory, index, or name at 
			 * the end of the range. Can accept: AssignedStory, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last AssignedStory in the collection. */
			public lastItem(): Adobe.Indesign.AssignedStory;
			/** Returns the middle AssignedStory in the collection. */
			public middleItem(): Adobe.Indesign.AssignedStory;
			/**
			 * Returns the AssignedStory whose index follows the specified 
			 * AssignedStory in the collection.
			 * @param {AssignedStory} objParam The AssignedStory whose 
			 * index comes before the desired AssignedStory. 
			 */
			public nextItem(objParam: AssignedStory): Adobe.Indesign.AssignedStory;
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
			 * Returns the AssignedStory with the index previous to the 
			 * specified index.
			 * @param {AssignedStory} objParam The index of the 
			 * AssignedStory that follows the desired AssignedStory.
			 */
			public previousItem(objParam: AssignedStory): Adobe.Indesign.AssignedStory;
		}
	}
}