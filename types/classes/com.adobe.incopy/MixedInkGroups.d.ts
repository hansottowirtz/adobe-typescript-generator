/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class MixedInkGroups extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any MixedInkGroup in the collection.
			 * @returns {Adobe.Incopy.MixedInkGroup}
			 */
			public anyItem(): Adobe.Incopy.MixedInkGroup;
			/**
			 * Displays the number of elements in the MixedInkGroup.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every MixedInkGroup in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first MixedInkGroup in the collection.
			 * @returns {Adobe.Incopy.MixedInkGroup}
			 */
			public firstItem(): Adobe.Incopy.MixedInkGroup;
			/**
			 * Returns the MixedInkGroup with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.MixedInkGroup}
			 */
			public item(indexParam: any): Adobe.Incopy.MixedInkGroup;
			/**
			 * Returns the MixedInkGroup with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.MixedInkGroup}
			 */
			public itemByID(idParam: number): Adobe.Incopy.MixedInkGroup;
			/**
			 * Returns the MixedInkGroup with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.MixedInkGroup}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.MixedInkGroup;
			/**
			 * Returns the MixedInkGroups within the specified range.
			 * @param {any} fromParam The MixedInkGroup, index, or name at 
			 * the beginning of the range. Can accept: MixedInkGroup, Long 
			 * Integer or String.
			 * @param {any} toParam The MixedInkGroup, index, or name at 
			 * the end of the range. Can accept: MixedInkGroup, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last MixedInkGroup in the collection.
			 * @returns {Adobe.Incopy.MixedInkGroup}
			 */
			public lastItem(): Adobe.Incopy.MixedInkGroup;
			/**
			 * Returns the middle MixedInkGroup in the collection.
			 * @returns {Adobe.Incopy.MixedInkGroup}
			 */
			public middleItem(): Adobe.Incopy.MixedInkGroup;
			/**
			 * Returns the MixedInkGroup whose index follows the specified 
			 * MixedInkGroup in the collection.
			 * @param {MixedInkGroup} objParam The MixedInkGroup whose 
			 * index comes before the desired MixedInkGroup. 
			 * @returns {Adobe.Incopy.MixedInkGroup}
			 */
			public nextItem(objParam: MixedInkGroup): Adobe.Incopy.MixedInkGroup;
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
			 * Returns the MixedInkGroup with the index previous to the 
			 * specified index.
			 * @param {MixedInkGroup} objParam The index of the 
			 * MixedInkGroup that follows the desired MixedInkGroup.
			 * @returns {Adobe.Incopy.MixedInkGroup}
			 */
			public previousItem(objParam: MixedInkGroup): Adobe.Incopy.MixedInkGroup;
		}
	}
}