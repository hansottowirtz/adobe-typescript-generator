/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Characters extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any Character in the collection. */
			public anyItem(): Adobe.Indesign.Character;
			/** Displays the number of elements in the Character. */
			public count(): number;
			/** Returns every Character in the collection. */
			public everyItem(): any;
			/** Returns the first Character in the collection. */
			public firstItem(): Adobe.Indesign.Character;
			/**
			 * Returns the Character with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.Character;
			/**
			 * Returns the Characters within the specified range.
			 * @param {any} fromParam - The Character, index, or name at 
			 * the beginning of the range. Can accept: Character, Long 
			 * Integer or String.
			 * @param {any} toParam - The Character, index, or name at the 
			 * end of the range. Can accept: Character, Long Integer or 
			 * String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Character in the collection. */
			public lastItem(): Adobe.Indesign.Character;
			/** Returns the middle Character in the collection. */
			public middleItem(): Adobe.Indesign.Character;
			/**
			 * Returns the Character whose index follows the specified 
			 * Character in the collection.
			 * @param {Character} objParam - The Character whose index 
			 * comes before the desired Character. 
			 */
			public nextItem(objParam: Character): Adobe.Indesign.Character;
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
			 * Returns the Character with the index previous to the 
			 * specified index.
			 * @param {Character} objParam - The index of the Character 
			 * that follows the desired Character.
			 */
			public previousItem(objParam: Character): Adobe.Indesign.Character;
		}
	}
}