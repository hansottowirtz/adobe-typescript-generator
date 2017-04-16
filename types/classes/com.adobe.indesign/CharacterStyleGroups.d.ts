/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class CharacterStyleGroups extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new CharacterStyleGroup.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new CharacterStyleGroup (Optional)
			 * @returns {Adobe.Indesign.CharacterStyleGroup}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.CharacterStyleGroup;
			/**
			 * Returns any CharacterStyleGroup in the collection.
			 * @returns {Adobe.Indesign.CharacterStyleGroup}
			 */
			public anyItem(): Adobe.Indesign.CharacterStyleGroup;
			/**
			 * Displays the number of elements in the CharacterStyleGroup.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every CharacterStyleGroup in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first CharacterStyleGroup in the collection.
			 * @returns {Adobe.Indesign.CharacterStyleGroup}
			 */
			public firstItem(): Adobe.Indesign.CharacterStyleGroup;
			/**
			 * Returns the CharacterStyleGroup with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.CharacterStyleGroup}
			 */
			public item(indexParam: any): Adobe.Indesign.CharacterStyleGroup;
			/**
			 * Returns the CharacterStyleGroup with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.CharacterStyleGroup}
			 */
			public itemByID(idParam: number): Adobe.Indesign.CharacterStyleGroup;
			/**
			 * Returns the CharacterStyleGroup with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.CharacterStyleGroup}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.CharacterStyleGroup;
			/**
			 * Returns the CharacterStyleGroups within the specified range.
			 * @param {any} fromParam The CharacterStyleGroup, index, or 
			 * name at the beginning of the range. Can accept: 
			 * CharacterStyleGroup, Long Integer or String.
			 * @param {any} toParam The CharacterStyleGroup, index, or name 
			 * at the end of the range. Can accept: CharacterStyleGroup, 
			 * Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last CharacterStyleGroup in the collection.
			 * @returns {Adobe.Indesign.CharacterStyleGroup}
			 */
			public lastItem(): Adobe.Indesign.CharacterStyleGroup;
			/**
			 * Returns the middle CharacterStyleGroup in the collection.
			 * @returns {Adobe.Indesign.CharacterStyleGroup}
			 */
			public middleItem(): Adobe.Indesign.CharacterStyleGroup;
			/**
			 * Returns the CharacterStyleGroup whose index follows the 
			 * specified CharacterStyleGroup in the collection.
			 * @param {CharacterStyleGroup} objParam The 
			 * CharacterStyleGroup whose index comes before the desired 
			 * CharacterStyleGroup. 
			 * @returns {Adobe.Indesign.CharacterStyleGroup}
			 */
			public nextItem(objParam: CharacterStyleGroup): Adobe.Indesign.CharacterStyleGroup;
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
			 * Returns the CharacterStyleGroup with the index previous to 
			 * the specified index.
			 * @param {CharacterStyleGroup} objParam The index of the 
			 * CharacterStyleGroup that follows the desired 
			 * CharacterStyleGroup.
			 * @returns {Adobe.Indesign.CharacterStyleGroup}
			 */
			public previousItem(objParam: CharacterStyleGroup): Adobe.Indesign.CharacterStyleGroup;
		}
	}
}