/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Stories extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any Story in the collection.
			 * @returns {Adobe.Indesign.Story}
			 */
			public anyItem(): Adobe.Indesign.Story;
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
			 * @returns {Adobe.Indesign.Story}
			 */
			public firstItem(): Adobe.Indesign.Story;
			/**
			 * Returns the Story with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.Story}
			 */
			public item(indexParam: any): Adobe.Indesign.Story;
			/**
			 * Returns the Story with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.Story}
			 */
			public itemByID(idParam: number): Adobe.Indesign.Story;
			/**
			 * Returns the Story with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.Story}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Story;
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
			 * @returns {Adobe.Indesign.Story}
			 */
			public lastItem(): Adobe.Indesign.Story;
			/**
			 * Returns the middle Story in the collection.
			 * @returns {Adobe.Indesign.Story}
			 */
			public middleItem(): Adobe.Indesign.Story;
			/**
			 * Returns the Story whose index follows the specified Story in 
			 * the collection.
			 * @param {Story} objParam The Story whose index comes before 
			 * the desired Story. 
			 * @returns {Adobe.Indesign.Story}
			 */
			public nextItem(objParam: Story): Adobe.Indesign.Story;
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
			 * @returns {Adobe.Indesign.Story}
			 */
			public previousItem(objParam: Story): Adobe.Indesign.Story;
		}
	}
}