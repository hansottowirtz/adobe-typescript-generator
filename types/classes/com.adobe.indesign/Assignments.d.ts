/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Assignments extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new assignment.
			 * @param {File} filePathParam The full path name of the new 
			 * assignment.
			 * @param {string} versionCommentsParam The comment for this 
			 * version. (Optional)
			 * @param {boolean} forceSaveParam If true, forcibly saves a 
			 * version. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new Assignment (Optional)
			 */
			public add(filePathParam: File, versionCommentsParam: string, forceSaveParam: boolean, withPropertiesParam: any): Adobe.Indesign.Assignment;
			/** Returns any Assignment in the collection. */
			public anyItem(): Adobe.Indesign.Assignment;
			/** Displays the number of elements in the Assignment. */
			public count(): number;
			/** Returns every Assignment in the collection. */
			public everyItem(): any;
			/** Returns the first Assignment in the collection. */
			public firstItem(): Adobe.Indesign.Assignment;
			/**
			 * Returns the Assignment with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.Assignment;
			/**
			 * Returns the Assignment with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.Assignment;
			/**
			 * Returns the Assignment with the specified name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Assignment;
			/**
			 * Returns the Assignments within the specified range.
			 * @param {any} fromParam The Assignment, index, or name at the 
			 * beginning of the range. Can accept: Assignment, Long Integer 
			 * or String.
			 * @param {any} toParam The Assignment, index, or name at the 
			 * end of the range. Can accept: Assignment, Long Integer or 
			 * String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Assignment in the collection. */
			public lastItem(): Adobe.Indesign.Assignment;
			/** Returns the middle Assignment in the collection. */
			public middleItem(): Adobe.Indesign.Assignment;
			/**
			 * Returns the Assignment whose index follows the specified 
			 * Assignment in the collection.
			 * @param {Assignment} objParam The Assignment whose index 
			 * comes before the desired Assignment. 
			 */
			public nextItem(objParam: Assignment): Adobe.Indesign.Assignment;
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
			 * Returns the Assignment with the index previous to the 
			 * specified index.
			 * @param {Assignment} objParam The index of the Assignment 
			 * that follows the desired Assignment.
			 */
			public previousItem(objParam: Assignment): Adobe.Indesign.Assignment;
		}
	}
}