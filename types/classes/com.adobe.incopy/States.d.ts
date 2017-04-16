/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class States extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any State in the collection.
			 * @returns {Adobe.Incopy.State}
			 */
			public anyItem(): Adobe.Incopy.State;
			/**
			 * Displays the number of elements in the State.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every State in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first State in the collection.
			 * @returns {Adobe.Incopy.State}
			 */
			public firstItem(): Adobe.Incopy.State;
			/**
			 * Returns the State with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.State}
			 */
			public item(indexParam: any): Adobe.Incopy.State;
			/**
			 * Returns the State with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.State}
			 */
			public itemByID(idParam: number): Adobe.Incopy.State;
			/**
			 * Returns the State with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.State}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.State;
			/**
			 * Returns the States within the specified range.
			 * @param {any} fromParam The State, index, or name at the 
			 * beginning of the range. Can accept: State, Long Integer or 
			 * String.
			 * @param {any} toParam The State, index, or name at the end of 
			 * the range. Can accept: State, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last State in the collection.
			 * @returns {Adobe.Incopy.State}
			 */
			public lastItem(): Adobe.Incopy.State;
			/**
			 * Returns the middle State in the collection.
			 * @returns {Adobe.Incopy.State}
			 */
			public middleItem(): Adobe.Incopy.State;
			/**
			 * Returns the State whose index follows the specified State in 
			 * the collection.
			 * @param {State} objParam The State whose index comes before 
			 * the desired State. 
			 * @returns {Adobe.Incopy.State}
			 */
			public nextItem(objParam: State): Adobe.Incopy.State;
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
			 * Returns the State with the index previous to the specified 
			 * index.
			 * @param {State} objParam The index of the State that follows 
			 * the desired State.
			 * @returns {Adobe.Incopy.State}
			 */
			public previousItem(objParam: State): Adobe.Incopy.State;
		}
	}
}