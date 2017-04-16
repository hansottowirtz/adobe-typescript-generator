/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class BackgroundTasks extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any BackgroundTask in the collection.
			 * @returns {Adobe.Incopy.BackgroundTask}
			 */
			public anyItem(): Adobe.Incopy.BackgroundTask;
			/**
			 * Displays the number of elements in the BackgroundTask.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every BackgroundTask in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first BackgroundTask in the collection.
			 * @returns {Adobe.Incopy.BackgroundTask}
			 */
			public firstItem(): Adobe.Incopy.BackgroundTask;
			/**
			 * Returns the BackgroundTask with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.BackgroundTask}
			 */
			public item(indexParam: any): Adobe.Incopy.BackgroundTask;
			/**
			 * Returns the BackgroundTask with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.BackgroundTask}
			 */
			public itemByID(idParam: number): Adobe.Incopy.BackgroundTask;
			/**
			 * Returns the BackgroundTask with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.BackgroundTask}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.BackgroundTask;
			/**
			 * Returns the BackgroundTasks within the specified range.
			 * @param {any} fromParam The BackgroundTask, index, or name at 
			 * the beginning of the range. Can accept: BackgroundTask, Long 
			 * Integer or String.
			 * @param {any} toParam The BackgroundTask, index, or name at 
			 * the end of the range. Can accept: BackgroundTask, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last BackgroundTask in the collection.
			 * @returns {Adobe.Incopy.BackgroundTask}
			 */
			public lastItem(): Adobe.Incopy.BackgroundTask;
			/**
			 * Returns the middle BackgroundTask in the collection.
			 * @returns {Adobe.Incopy.BackgroundTask}
			 */
			public middleItem(): Adobe.Incopy.BackgroundTask;
			/**
			 * Returns the BackgroundTask whose index follows the specified 
			 * BackgroundTask in the collection.
			 * @param {BackgroundTask} objParam The BackgroundTask whose 
			 * index comes before the desired BackgroundTask. 
			 * @returns {Adobe.Incopy.BackgroundTask}
			 */
			public nextItem(objParam: BackgroundTask): Adobe.Incopy.BackgroundTask;
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
			 * Returns the BackgroundTask with the index previous to the 
			 * specified index.
			 * @param {BackgroundTask} objParam The index of the 
			 * BackgroundTask that follows the desired BackgroundTask.
			 * @returns {Adobe.Incopy.BackgroundTask}
			 */
			public previousItem(objParam: BackgroundTask): Adobe.Incopy.BackgroundTask;
		}
	}
}