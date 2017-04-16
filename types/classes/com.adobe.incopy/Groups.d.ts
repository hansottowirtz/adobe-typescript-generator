/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Groups extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any Group in the collection.
			 * @returns {Adobe.Incopy.Group}
			 */
			public anyItem(): Adobe.Incopy.Group;
			/**
			 * Displays the number of elements in the Group.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Group in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Group in the collection.
			 * @returns {Adobe.Incopy.Group}
			 */
			public firstItem(): Adobe.Incopy.Group;
			/**
			 * Returns the Group with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.Group}
			 */
			public item(indexParam: any): Adobe.Incopy.Group;
			/**
			 * Returns the Group with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.Group}
			 */
			public itemByID(idParam: number): Adobe.Incopy.Group;
			/**
			 * Returns the Group with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.Group}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.Group;
			/**
			 * Returns the Groups within the specified range.
			 * @param {any} fromParam The Group, index, or name at the 
			 * beginning of the range. Can accept: Group, Long Integer or 
			 * String.
			 * @param {any} toParam The Group, index, or name at the end of 
			 * the range. Can accept: Group, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Group in the collection.
			 * @returns {Adobe.Incopy.Group}
			 */
			public lastItem(): Adobe.Incopy.Group;
			/**
			 * Returns the middle Group in the collection.
			 * @returns {Adobe.Incopy.Group}
			 */
			public middleItem(): Adobe.Incopy.Group;
			/**
			 * Returns the Group whose index follows the specified Group in 
			 * the collection.
			 * @param {Group} objParam The Group whose index comes before 
			 * the desired Group. 
			 * @returns {Adobe.Incopy.Group}
			 */
			public nextItem(objParam: Group): Adobe.Incopy.Group;
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
			 * Returns the Group with the index previous to the specified 
			 * index.
			 * @param {Group} objParam The index of the Group that follows 
			 * the desired Group.
			 * @returns {Adobe.Incopy.Group}
			 */
			public previousItem(objParam: Group): Adobe.Incopy.Group;
		}
	}
}