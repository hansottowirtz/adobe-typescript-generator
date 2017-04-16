/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class NumberingLists extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Create a new list style.
			 * @param {string} nameParam Name
			 * @param {boolean} continueNumbersAcrossStoriesParam If true, 
			 * numbering will continue across stories. (Optional)
			 * @param {boolean} continueNumbersAcrossDocumentsParam If 
			 * true, numbering will continue across book documents. 
			 * (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new NumberingList (Optional)
			 * @returns {Adobe.Incopy.NumberingList}
			 */
			public add(nameParam: string, continueNumbersAcrossStoriesParam: boolean, continueNumbersAcrossDocumentsParam: boolean, withPropertiesParam: any): Adobe.Incopy.NumberingList;
			/**
			 * Returns any NumberingList in the collection.
			 * @returns {Adobe.Incopy.NumberingList}
			 */
			public anyItem(): Adobe.Incopy.NumberingList;
			/**
			 * Displays the number of elements in the NumberingList.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every NumberingList in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first NumberingList in the collection.
			 * @returns {Adobe.Incopy.NumberingList}
			 */
			public firstItem(): Adobe.Incopy.NumberingList;
			/**
			 * Returns the NumberingList with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.NumberingList}
			 */
			public item(indexParam: any): Adobe.Incopy.NumberingList;
			/**
			 * Returns the NumberingList with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.NumberingList}
			 */
			public itemByID(idParam: number): Adobe.Incopy.NumberingList;
			/**
			 * Returns the NumberingList with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.NumberingList}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.NumberingList;
			/**
			 * Returns the NumberingLists within the specified range.
			 * @param {any} fromParam The NumberingList, index, or name at 
			 * the beginning of the range. Can accept: NumberingList, Long 
			 * Integer or String.
			 * @param {any} toParam The NumberingList, index, or name at 
			 * the end of the range. Can accept: NumberingList, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last NumberingList in the collection.
			 * @returns {Adobe.Incopy.NumberingList}
			 */
			public lastItem(): Adobe.Incopy.NumberingList;
			/**
			 * Returns the middle NumberingList in the collection.
			 * @returns {Adobe.Incopy.NumberingList}
			 */
			public middleItem(): Adobe.Incopy.NumberingList;
			/**
			 * Returns the NumberingList whose index follows the specified 
			 * NumberingList in the collection.
			 * @param {NumberingList} objParam The NumberingList whose 
			 * index comes before the desired NumberingList. 
			 * @returns {Adobe.Incopy.NumberingList}
			 */
			public nextItem(objParam: NumberingList): Adobe.Incopy.NumberingList;
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
			 * Returns the NumberingList with the index previous to the 
			 * specified index.
			 * @param {NumberingList} objParam The index of the 
			 * NumberingList that follows the desired NumberingList.
			 * @returns {Adobe.Incopy.NumberingList}
			 */
			public previousItem(objParam: NumberingList): Adobe.Incopy.NumberingList;
		}
	}
}