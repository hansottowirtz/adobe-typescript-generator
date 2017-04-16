/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Groups extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any Group in the collection. */
			public anyItem(): Adobe.Incopy.Group;
			/** Displays the number of elements in the Group. */
			public count(): number;
			/** Returns every Group in the collection. */
			public everyItem(): any;
			/** Returns the first Group in the collection. */
			public firstItem(): Adobe.Incopy.Group;
			/**
			 * Returns the Group with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.Group;
			/**
			 * Returns the Group with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.Group;
			/**
			 * Returns the Group with the specified name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.Group;
			/**
			 * Returns the Groups within the specified range.
			 * @param {any} fromParam The Group, index, or name at the 
			 * beginning of the range. Can accept: Group, Long Integer or 
			 * String.
			 * @param {any} toParam The Group, index, or name at the end of 
			 * the range. Can accept: Group, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Group in the collection. */
			public lastItem(): Adobe.Incopy.Group;
			/** Returns the middle Group in the collection. */
			public middleItem(): Adobe.Incopy.Group;
			/**
			 * Returns the Group whose index follows the specified Group in 
			 * the collection.
			 * @param {Group} objParam The Group whose index comes before 
			 * the desired Group. 
			 */
			public nextItem(objParam: Group): Adobe.Incopy.Group;
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
			 * Returns the Group with the index previous to the specified 
			 * index.
			 * @param {Group} objParam The index of the Group that follows 
			 * the desired Group.
			 */
			public previousItem(objParam: Group): Adobe.Incopy.Group;
		}
	}
}