/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class UserDictionaries extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any UserDictionary in the collection.
			 * @returns {Adobe.Indesign.UserDictionary}
			 */
			public anyItem(): Adobe.Indesign.UserDictionary;
			/**
			 * Displays the number of elements in the UserDictionary.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every UserDictionary in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first UserDictionary in the collection.
			 * @returns {Adobe.Indesign.UserDictionary}
			 */
			public firstItem(): Adobe.Indesign.UserDictionary;
			/**
			 * Returns the UserDictionary with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.UserDictionary}
			 */
			public item(indexParam: any): Adobe.Indesign.UserDictionary;
			/**
			 * Returns the UserDictionary with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.UserDictionary}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.UserDictionary;
			/**
			 * Returns the UserDictionaries within the specified range.
			 * @param {any} fromParam The UserDictionary, index, or name at 
			 * the beginning of the range. Can accept: UserDictionary, Long 
			 * Integer or String.
			 * @param {any} toParam The UserDictionary, index, or name at 
			 * the end of the range. Can accept: UserDictionary, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last UserDictionary in the collection.
			 * @returns {Adobe.Indesign.UserDictionary}
			 */
			public lastItem(): Adobe.Indesign.UserDictionary;
			/**
			 * Returns the middle UserDictionary in the collection.
			 * @returns {Adobe.Indesign.UserDictionary}
			 */
			public middleItem(): Adobe.Indesign.UserDictionary;
			/**
			 * Returns the UserDictionary whose index follows the specified 
			 * UserDictionary in the collection.
			 * @param {UserDictionary} objParam The UserDictionary whose 
			 * index comes before the desired UserDictionary. 
			 * @returns {Adobe.Indesign.UserDictionary}
			 */
			public nextItem(objParam: UserDictionary): Adobe.Indesign.UserDictionary;
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
			 * Returns the UserDictionary with the index previous to the 
			 * specified index.
			 * @param {UserDictionary} objParam The index of the 
			 * UserDictionary that follows the desired UserDictionary.
			 * @returns {Adobe.Indesign.UserDictionary}
			 */
			public previousItem(objParam: UserDictionary): Adobe.Indesign.UserDictionary;
		}
	}
}