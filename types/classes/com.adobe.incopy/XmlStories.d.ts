/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class XmlStories extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any XmlStory in the collection.
			 * @returns {Adobe.Incopy.XmlStory}
			 */
			public anyItem(): Adobe.Incopy.XmlStory;
			/**
			 * Displays the number of elements in the XmlStory.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every XmlStory in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first XmlStory in the collection.
			 * @returns {Adobe.Incopy.XmlStory}
			 */
			public firstItem(): Adobe.Incopy.XmlStory;
			/**
			 * Returns the XmlStory with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.XmlStory}
			 */
			public item(indexParam: any): Adobe.Incopy.XmlStory;
			/**
			 * Returns the XmlStory with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.XmlStory}
			 */
			public itemByID(idParam: number): Adobe.Incopy.XmlStory;
			/**
			 * Returns the XmlStory with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.XmlStory}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.XmlStory;
			/**
			 * Returns the XmlStories within the specified range.
			 * @param {any} fromParam The XmlStory, index, or name at the 
			 * beginning of the range. Can accept: XmlStory, Long Integer 
			 * or String.
			 * @param {any} toParam The XmlStory, index, or name at the end 
			 * of the range. Can accept: XmlStory, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last XmlStory in the collection.
			 * @returns {Adobe.Incopy.XmlStory}
			 */
			public lastItem(): Adobe.Incopy.XmlStory;
			/**
			 * Returns the middle XmlStory in the collection.
			 * @returns {Adobe.Incopy.XmlStory}
			 */
			public middleItem(): Adobe.Incopy.XmlStory;
			/**
			 * Returns the XmlStory whose index follows the specified 
			 * XmlStory in the collection.
			 * @param {XmlStory} objParam The XmlStory whose index comes 
			 * before the desired XmlStory. 
			 * @returns {Adobe.Incopy.XmlStory}
			 */
			public nextItem(objParam: XmlStory): Adobe.Incopy.XmlStory;
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
			 * Returns the XmlStory with the index previous to the 
			 * specified index.
			 * @param {XmlStory} objParam The index of the XmlStory that 
			 * follows the desired XmlStory.
			 * @returns {Adobe.Incopy.XmlStory}
			 */
			public previousItem(objParam: XmlStory): Adobe.Incopy.XmlStory;
		}
	}
}