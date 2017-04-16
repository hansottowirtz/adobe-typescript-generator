/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class States extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new State.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new State (Optional)
			 * @returns {Adobe.Indesign.State}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.State;
			/**
			 * Returns any State in the collection.
			 * @returns {Adobe.Indesign.State}
			 */
			public anyItem(): Adobe.Indesign.State;
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
			 * @returns {Adobe.Indesign.State}
			 */
			public firstItem(): Adobe.Indesign.State;
			/**
			 * Returns the State with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.State}
			 */
			public item(indexParam: any): Adobe.Indesign.State;
			/**
			 * Returns the State with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.State}
			 */
			public itemByID(idParam: number): Adobe.Indesign.State;
			/**
			 * Returns the State with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.State}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.State;
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
			 * @returns {Adobe.Indesign.State}
			 */
			public lastItem(): Adobe.Indesign.State;
			/**
			 * Returns the middle State in the collection.
			 * @returns {Adobe.Indesign.State}
			 */
			public middleItem(): Adobe.Indesign.State;
			/**
			 * Returns the State whose index follows the specified State in 
			 * the collection.
			 * @param {State} objParam The State whose index comes before 
			 * the desired State. 
			 * @returns {Adobe.Indesign.State}
			 */
			public nextItem(objParam: State): Adobe.Indesign.State;
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
			 * @returns {Adobe.Indesign.State}
			 */
			public previousItem(objParam: State): Adobe.Indesign.State;
		}
	}
}