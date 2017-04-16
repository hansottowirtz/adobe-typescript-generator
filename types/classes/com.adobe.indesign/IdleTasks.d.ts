/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class IdleTasks extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new IdleTask.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new IdleTask (Optional)
			 * @returns {Adobe.Indesign.IdleTask}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.IdleTask;
			/**
			 * Returns any IdleTask in the collection.
			 * @returns {Adobe.Indesign.IdleTask}
			 */
			public anyItem(): Adobe.Indesign.IdleTask;
			/**
			 * Displays the number of elements in the IdleTask.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every IdleTask in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first IdleTask in the collection.
			 * @returns {Adobe.Indesign.IdleTask}
			 */
			public firstItem(): Adobe.Indesign.IdleTask;
			/**
			 * Returns the IdleTask with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.IdleTask}
			 */
			public item(indexParam: any): Adobe.Indesign.IdleTask;
			/**
			 * Returns the IdleTask with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.IdleTask}
			 */
			public itemByID(idParam: number): Adobe.Indesign.IdleTask;
			/**
			 * Returns the IdleTask with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.IdleTask}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.IdleTask;
			/**
			 * Returns the IdleTasks within the specified range.
			 * @param {any} fromParam The IdleTask, index, or name at the 
			 * beginning of the range. Can accept: IdleTask, Long Integer 
			 * or String.
			 * @param {any} toParam The IdleTask, index, or name at the end 
			 * of the range. Can accept: IdleTask, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last IdleTask in the collection.
			 * @returns {Adobe.Indesign.IdleTask}
			 */
			public lastItem(): Adobe.Indesign.IdleTask;
			/**
			 * Returns the middle IdleTask in the collection.
			 * @returns {Adobe.Indesign.IdleTask}
			 */
			public middleItem(): Adobe.Indesign.IdleTask;
			/**
			 * Returns the IdleTask whose index follows the specified 
			 * IdleTask in the collection.
			 * @param {IdleTask} objParam The IdleTask whose index comes 
			 * before the desired IdleTask. 
			 * @returns {Adobe.Indesign.IdleTask}
			 */
			public nextItem(objParam: IdleTask): Adobe.Indesign.IdleTask;
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
			 * Returns the IdleTask with the index previous to the 
			 * specified index.
			 * @param {IdleTask} objParam The index of the IdleTask that 
			 * follows the desired IdleTask.
			 * @returns {Adobe.Indesign.IdleTask}
			 */
			public previousItem(objParam: IdleTask): Adobe.Indesign.IdleTask;
		}
	}
}