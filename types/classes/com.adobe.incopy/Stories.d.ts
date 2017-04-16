/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Stories extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any Story in the collection.
			 * @returns {Adobe.Incopy.Story}
			 */
			public anyItem(): Adobe.Incopy.Story;
			/**
			 * Displays the number of elements in the Story.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Story in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Story in the collection.
			 * @returns {Adobe.Incopy.Story}
			 */
			public firstItem(): Adobe.Incopy.Story;
			/**
			 * Returns the Story with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.Story}
			 */
			public item(indexParam: any): Adobe.Incopy.Story;
			/**
			 * Returns the Story with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.Story}
			 */
			public itemByID(idParam: number): Adobe.Incopy.Story;
			/**
			 * Returns the Story with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.Story}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.Story;
			/**
			 * Returns the Stories within the specified range.
			 * @param {any} fromParam The Story, index, or name at the 
			 * beginning of the range. Can accept: Story, Long Integer or 
			 * String.
			 * @param {any} toParam The Story, index, or name at the end of 
			 * the range. Can accept: Story, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Story in the collection.
			 * @returns {Adobe.Incopy.Story}
			 */
			public lastItem(): Adobe.Incopy.Story;
			/**
			 * Returns the middle Story in the collection.
			 * @returns {Adobe.Incopy.Story}
			 */
			public middleItem(): Adobe.Incopy.Story;
			/**
			 * Returns the Story whose index follows the specified Story in 
			 * the collection.
			 * @param {Story} objParam The Story whose index comes before 
			 * the desired Story. 
			 * @returns {Adobe.Incopy.Story}
			 */
			public nextItem(objParam: Story): Adobe.Incopy.Story;
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
			 * Returns the Story with the index previous to the specified 
			 * index.
			 * @param {Story} objParam The index of the Story that follows 
			 * the desired Story.
			 * @returns {Adobe.Incopy.Story}
			 */
			public previousItem(objParam: Story): Adobe.Incopy.Story;
		}
	}
}