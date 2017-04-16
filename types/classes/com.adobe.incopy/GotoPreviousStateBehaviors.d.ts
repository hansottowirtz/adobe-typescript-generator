/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class GotoPreviousStateBehaviors extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any GotoPreviousStateBehavior in the collection. */
			public anyItem(): Adobe.Incopy.GotoPreviousStateBehavior;
			/**
			 * Displays the number of elements in the 
			 * GotoPreviousStateBehavior.
			 */
			public count(): number;
			/** Returns every GotoPreviousStateBehavior in the collection. */
			public everyItem(): any;
			/**
			 * Returns the first GotoPreviousStateBehavior in the 
			 * collection.
			 */
			public firstItem(): Adobe.Incopy.GotoPreviousStateBehavior;
			/**
			 * Returns the GotoPreviousStateBehavior with the specified 
			 * index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.GotoPreviousStateBehavior;
			/**
			 * Returns the GotoPreviousStateBehavior with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.GotoPreviousStateBehavior;
			/**
			 * Returns the GotoPreviousStateBehavior with the specified 
			 * name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.GotoPreviousStateBehavior;
			/**
			 * Returns the GotoPreviousStateBehaviors within the specified 
			 * range.
			 * @param {any} fromParam The GotoPreviousStateBehavior, index, 
			 * or name at the beginning of the range. Can accept: 
			 * GotoPreviousStateBehavior, Long Integer or String.
			 * @param {any} toParam The GotoPreviousStateBehavior, index, 
			 * or name at the end of the range. Can accept: 
			 * GotoPreviousStateBehavior, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last GotoPreviousStateBehavior in the 
			 * collection.
			 */
			public lastItem(): Adobe.Incopy.GotoPreviousStateBehavior;
			/**
			 * Returns the middle GotoPreviousStateBehavior in the 
			 * collection.
			 */
			public middleItem(): Adobe.Incopy.GotoPreviousStateBehavior;
			/**
			 * Returns the GotoPreviousStateBehavior whose index follows 
			 * the specified GotoPreviousStateBehavior in the collection.
			 * @param {GotoPreviousStateBehavior} objParam The 
			 * GotoPreviousStateBehavior whose index comes before the 
			 * desired GotoPreviousStateBehavior. 
			 */
			public nextItem(objParam: GotoPreviousStateBehavior): Adobe.Incopy.GotoPreviousStateBehavior;
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
			 * Returns the GotoPreviousStateBehavior with the index 
			 * previous to the specified index.
			 * @param {GotoPreviousStateBehavior} objParam The index of the 
			 * GotoPreviousStateBehavior that follows the desired 
			 * GotoPreviousStateBehavior.
			 */
			public previousItem(objParam: GotoPreviousStateBehavior): Adobe.Incopy.GotoPreviousStateBehavior;
		}
	}
}