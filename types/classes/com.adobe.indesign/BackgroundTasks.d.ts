/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class BackgroundTasks extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any BackgroundTask in the collection. */
			public anyItem(): Adobe.Indesign.BackgroundTask;
			/** Displays the number of elements in the BackgroundTask. */
			public count(): number;
			/** Returns every BackgroundTask in the collection. */
			public everyItem(): any;
			/** Returns the first BackgroundTask in the collection. */
			public firstItem(): Adobe.Indesign.BackgroundTask;
			/**
			 * Returns the BackgroundTask with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.BackgroundTask;
			/**
			 * Returns the BackgroundTask with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.BackgroundTask;
			/**
			 * Returns the BackgroundTask with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.BackgroundTask;
			/**
			 * Returns the BackgroundTasks within the specified range.
			 * @param {any} fromParam - The BackgroundTask, index, or name 
			 * at the beginning of the range. Can accept: BackgroundTask, 
			 * Long Integer or String.
			 * @param {any} toParam - The BackgroundTask, index, or name at 
			 * the end of the range. Can accept: BackgroundTask, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last BackgroundTask in the collection. */
			public lastItem(): Adobe.Indesign.BackgroundTask;
			/** Returns the middle BackgroundTask in the collection. */
			public middleItem(): Adobe.Indesign.BackgroundTask;
			/**
			 * Returns the BackgroundTask whose index follows the specified 
			 * BackgroundTask in the collection.
			 * @param {BackgroundTask} objParam - The BackgroundTask whose 
			 * index comes before the desired BackgroundTask. 
			 */
			public nextItem(objParam: BackgroundTask): Adobe.Indesign.BackgroundTask;
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
			 * Returns the BackgroundTask with the index previous to the 
			 * specified index.
			 * @param {BackgroundTask} objParam - The index of the 
			 * BackgroundTask that follows the desired BackgroundTask.
			 */
			public previousItem(objParam: BackgroundTask): Adobe.Indesign.BackgroundTask;
		}
	}
}