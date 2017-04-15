/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class IdleTasks extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new IdleTask.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new IdleTask (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.IdleTask;
			/** Returns any IdleTask in the collection. */
			public anyItem(): Adobe.Indesign.IdleTask;
			/** Displays the number of elements in the IdleTask. */
			public count(): number;
			/** Returns every IdleTask in the collection. */
			public everyItem(): any;
			/** Returns the first IdleTask in the collection. */
			public firstItem(): Adobe.Indesign.IdleTask;
			/**
			 * Returns the IdleTask with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.IdleTask;
			/**
			 * Returns the IdleTask with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.IdleTask;
			/**
			 * Returns the IdleTask with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.IdleTask;
			/**
			 * Returns the IdleTasks within the specified range.
			 * @param {any} fromParam - The IdleTask, index, or name at the 
			 * beginning of the range. Can accept: IdleTask, Long Integer 
			 * or String.
			 * @param {any} toParam - The IdleTask, index, or name at the 
			 * end of the range. Can accept: IdleTask, Long Integer or 
			 * String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last IdleTask in the collection. */
			public lastItem(): Adobe.Indesign.IdleTask;
			/** Returns the middle IdleTask in the collection. */
			public middleItem(): Adobe.Indesign.IdleTask;
			/**
			 * Returns the IdleTask whose index follows the specified 
			 * IdleTask in the collection.
			 * @param {IdleTask} objParam - The IdleTask whose index comes 
			 * before the desired IdleTask. 
			 */
			public nextItem(objParam: IdleTask): Adobe.Indesign.IdleTask;
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
			 * Returns the IdleTask with the index previous to the 
			 * specified index.
			 * @param {IdleTask} objParam - The index of the IdleTask that 
			 * follows the desired IdleTask.
			 */
			public previousItem(objParam: IdleTask): Adobe.Indesign.IdleTask;
		}
	}
}