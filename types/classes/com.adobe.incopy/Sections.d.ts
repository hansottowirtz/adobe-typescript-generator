/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Sections extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any Section in the collection.
			 * @returns {Adobe.Incopy.Section}
			 */
			public anyItem(): Adobe.Incopy.Section;
			/**
			 * Displays the number of elements in the Section.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Section in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Section in the collection.
			 * @returns {Adobe.Incopy.Section}
			 */
			public firstItem(): Adobe.Incopy.Section;
			/**
			 * Returns the Section with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.Section}
			 */
			public item(indexParam: any): Adobe.Incopy.Section;
			/**
			 * Returns the Section with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.Section}
			 */
			public itemByID(idParam: number): Adobe.Incopy.Section;
			/**
			 * Returns the Section with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.Section}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.Section;
			/**
			 * Returns the Sections within the specified range.
			 * @param {any} fromParam The Section, index, or name at the 
			 * beginning of the range. Can accept: Section, Long Integer or 
			 * String.
			 * @param {any} toParam The Section, index, or name at the end 
			 * of the range. Can accept: Section, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Section in the collection.
			 * @returns {Adobe.Incopy.Section}
			 */
			public lastItem(): Adobe.Incopy.Section;
			/**
			 * Returns the middle Section in the collection.
			 * @returns {Adobe.Incopy.Section}
			 */
			public middleItem(): Adobe.Incopy.Section;
			/**
			 * Returns the Section whose index follows the specified 
			 * Section in the collection.
			 * @param {Section} objParam The Section whose index comes 
			 * before the desired Section. 
			 * @returns {Adobe.Incopy.Section}
			 */
			public nextItem(objParam: Section): Adobe.Incopy.Section;
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
			 * Returns the Section with the index previous to the specified 
			 * index.
			 * @param {Section} objParam The index of the Section that 
			 * follows the desired Section.
			 * @returns {Adobe.Incopy.Section}
			 */
			public previousItem(objParam: Section): Adobe.Incopy.Section;
		}
	}
}