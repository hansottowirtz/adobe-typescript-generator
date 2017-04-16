/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Characters extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any Character in the collection.
			 * @returns {Adobe.Incopy.Character}
			 */
			public anyItem(): Adobe.Incopy.Character;
			/**
			 * Displays the number of elements in the Character.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Character in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Character in the collection.
			 * @returns {Adobe.Incopy.Character}
			 */
			public firstItem(): Adobe.Incopy.Character;
			/**
			 * Returns the Character with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.Character}
			 */
			public item(indexParam: any): Adobe.Incopy.Character;
			/**
			 * Returns the Characters within the specified range.
			 * @param {any} fromParam The Character, index, or name at the 
			 * beginning of the range. Can accept: Character, Long Integer 
			 * or String.
			 * @param {any} toParam The Character, index, or name at the 
			 * end of the range. Can accept: Character, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Character in the collection.
			 * @returns {Adobe.Incopy.Character}
			 */
			public lastItem(): Adobe.Incopy.Character;
			/**
			 * Returns the middle Character in the collection.
			 * @returns {Adobe.Incopy.Character}
			 */
			public middleItem(): Adobe.Incopy.Character;
			/**
			 * Returns the Character whose index follows the specified 
			 * Character in the collection.
			 * @param {Character} objParam The Character whose index comes 
			 * before the desired Character. 
			 * @returns {Adobe.Incopy.Character}
			 */
			public nextItem(objParam: Character): Adobe.Incopy.Character;
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
			 * Returns the Character with the index previous to the 
			 * specified index.
			 * @param {Character} objParam The index of the Character that 
			 * follows the desired Character.
			 * @returns {Adobe.Incopy.Character}
			 */
			public previousItem(objParam: Character): Adobe.Incopy.Character;
		}
	}
}