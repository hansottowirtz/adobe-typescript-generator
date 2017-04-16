/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class UserDictionaries extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any UserDictionary in the collection. */
			public anyItem(): Adobe.Incopy.UserDictionary;
			/** Displays the number of elements in the UserDictionary. */
			public count(): number;
			/** Returns every UserDictionary in the collection. */
			public everyItem(): any;
			/** Returns the first UserDictionary in the collection. */
			public firstItem(): Adobe.Incopy.UserDictionary;
			/**
			 * Returns the UserDictionary with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.UserDictionary;
			/**
			 * Returns the UserDictionary with the specified name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.UserDictionary;
			/**
			 * Returns the UserDictionaries within the specified range.
			 * @param {any} fromParam The UserDictionary, index, or name at 
			 * the beginning of the range. Can accept: UserDictionary, Long 
			 * Integer or String.
			 * @param {any} toParam The UserDictionary, index, or name at 
			 * the end of the range. Can accept: UserDictionary, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last UserDictionary in the collection. */
			public lastItem(): Adobe.Incopy.UserDictionary;
			/** Returns the middle UserDictionary in the collection. */
			public middleItem(): Adobe.Incopy.UserDictionary;
			/**
			 * Returns the UserDictionary whose index follows the specified 
			 * UserDictionary in the collection.
			 * @param {UserDictionary} objParam The UserDictionary whose 
			 * index comes before the desired UserDictionary. 
			 */
			public nextItem(objParam: UserDictionary): Adobe.Incopy.UserDictionary;
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
			 * Returns the UserDictionary with the index previous to the 
			 * specified index.
			 * @param {UserDictionary} objParam The index of the 
			 * UserDictionary that follows the desired UserDictionary.
			 */
			public previousItem(objParam: UserDictionary): Adobe.Incopy.UserDictionary;
		}
	}
}