/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class CharacterStyleGroups extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new CharacterStyleGroup.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new CharacterStyleGroup (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.CharacterStyleGroup;
			/** Returns any CharacterStyleGroup in the collection. */
			public anyItem(): Adobe.Incopy.CharacterStyleGroup;
			/** Displays the number of elements in the CharacterStyleGroup. */
			public count(): number;
			/** Returns every CharacterStyleGroup in the collection. */
			public everyItem(): any;
			/** Returns the first CharacterStyleGroup in the collection. */
			public firstItem(): Adobe.Incopy.CharacterStyleGroup;
			/**
			 * Returns the CharacterStyleGroup with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.CharacterStyleGroup;
			/**
			 * Returns the CharacterStyleGroup with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.CharacterStyleGroup;
			/**
			 * Returns the CharacterStyleGroup with the specified name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.CharacterStyleGroup;
			/**
			 * Returns the CharacterStyleGroups within the specified range.
			 * @param {any} fromParam The CharacterStyleGroup, index, or 
			 * name at the beginning of the range. Can accept: 
			 * CharacterStyleGroup, Long Integer or String.
			 * @param {any} toParam The CharacterStyleGroup, index, or name 
			 * at the end of the range. Can accept: CharacterStyleGroup, 
			 * Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last CharacterStyleGroup in the collection. */
			public lastItem(): Adobe.Incopy.CharacterStyleGroup;
			/** Returns the middle CharacterStyleGroup in the collection. */
			public middleItem(): Adobe.Incopy.CharacterStyleGroup;
			/**
			 * Returns the CharacterStyleGroup whose index follows the 
			 * specified CharacterStyleGroup in the collection.
			 * @param {CharacterStyleGroup} objParam The 
			 * CharacterStyleGroup whose index comes before the desired 
			 * CharacterStyleGroup. 
			 */
			public nextItem(objParam: CharacterStyleGroup): Adobe.Incopy.CharacterStyleGroup;
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
			 * Returns the CharacterStyleGroup with the index previous to 
			 * the specified index.
			 * @param {CharacterStyleGroup} objParam The index of the 
			 * CharacterStyleGroup that follows the desired 
			 * CharacterStyleGroup.
			 */
			public previousItem(objParam: CharacterStyleGroup): Adobe.Incopy.CharacterStyleGroup;
		}
	}
}