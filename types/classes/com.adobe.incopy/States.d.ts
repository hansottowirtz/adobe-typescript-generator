/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class States extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any State in the collection. */
			public anyItem(): Adobe.Incopy.State;
			/** Displays the number of elements in the State. */
			public count(): number;
			/** Returns every State in the collection. */
			public everyItem(): any;
			/** Returns the first State in the collection. */
			public firstItem(): Adobe.Incopy.State;
			/**
			 * Returns the State with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.State;
			/**
			 * Returns the State with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.State;
			/**
			 * Returns the State with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.State;
			/**
			 * Returns the States within the specified range.
			 * @param {any} fromParam - The State, index, or name at the 
			 * beginning of the range. Can accept: State, Long Integer or 
			 * String.
			 * @param {any} toParam - The State, index, or name at the end 
			 * of the range. Can accept: State, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last State in the collection. */
			public lastItem(): Adobe.Incopy.State;
			/** Returns the middle State in the collection. */
			public middleItem(): Adobe.Incopy.State;
			/**
			 * Returns the State whose index follows the specified State in 
			 * the collection.
			 * @param {State} objParam - The State whose index comes before 
			 * the desired State. 
			 */
			public nextItem(objParam: State): Adobe.Incopy.State;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx - 
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index - 
			 */
			public nextValue(index: number): any;
			/**
			 * Returns the State with the index previous to the specified 
			 * index.
			 * @param {State} objParam - The index of the State that 
			 * follows the desired State.
			 */
			public previousItem(objParam: State): Adobe.Incopy.State;
		}
	}
}