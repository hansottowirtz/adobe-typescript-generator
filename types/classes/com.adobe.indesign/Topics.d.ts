/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Topics extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new index topic.
			 * @param {string} nameParam The name of the topic. Note: This 
			 * is the text that appears in the index. 
			 * @param {string} sortByParam The string to sort this topic by 
			 * instead of the topic name. Note: The actual topic text, 
			 * rather than the sort order text, appears in the index. 
			 * (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new Topic (Optional)
			 * @returns {Adobe.Indesign.Topic}
			 */
			public add(nameParam: string, sortByParam: string, withPropertiesParam: any): Adobe.Indesign.Topic;
			/**
			 * Returns any Topic in the collection.
			 * @returns {Adobe.Indesign.Topic}
			 */
			public anyItem(): Adobe.Indesign.Topic;
			/**
			 * Displays the number of elements in the Topic.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Topic in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Topic in the collection.
			 * @returns {Adobe.Indesign.Topic}
			 */
			public firstItem(): Adobe.Indesign.Topic;
			/**
			 * Returns the Topic with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.Topic}
			 */
			public item(indexParam: any): Adobe.Indesign.Topic;
			/**
			 * Returns the Topic with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.Topic}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Topic;
			/**
			 * Returns the Topics within the specified range.
			 * @param {any} fromParam The Topic, index, or name at the 
			 * beginning of the range. Can accept: Topic, Long Integer or 
			 * String.
			 * @param {any} toParam The Topic, index, or name at the end of 
			 * the range. Can accept: Topic, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Topic in the collection.
			 * @returns {Adobe.Indesign.Topic}
			 */
			public lastItem(): Adobe.Indesign.Topic;
			/**
			 * Returns the middle Topic in the collection.
			 * @returns {Adobe.Indesign.Topic}
			 */
			public middleItem(): Adobe.Indesign.Topic;
			/**
			 * Returns the Topic whose index follows the specified Topic in 
			 * the collection.
			 * @param {Topic} objParam The Topic whose index comes before 
			 * the desired Topic. 
			 * @returns {Adobe.Indesign.Topic}
			 */
			public nextItem(objParam: Topic): Adobe.Indesign.Topic;
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
			 * Returns the Topic with the index previous to the specified 
			 * index.
			 * @param {Topic} objParam The index of the Topic that follows 
			 * the desired Topic.
			 * @returns {Adobe.Indesign.Topic}
			 */
			public previousItem(objParam: Topic): Adobe.Indesign.Topic;
		}
	}
}