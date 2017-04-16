/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class MovieBehaviors extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any MovieBehavior in the collection.
			 * @returns {Adobe.Incopy.MovieBehavior}
			 */
			public anyItem(): Adobe.Incopy.MovieBehavior;
			/**
			 * Displays the number of elements in the MovieBehavior.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every MovieBehavior in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first MovieBehavior in the collection.
			 * @returns {Adobe.Incopy.MovieBehavior}
			 */
			public firstItem(): Adobe.Incopy.MovieBehavior;
			/**
			 * Returns the MovieBehavior with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.MovieBehavior}
			 */
			public item(indexParam: any): Adobe.Incopy.MovieBehavior;
			/**
			 * Returns the MovieBehavior with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.MovieBehavior}
			 */
			public itemByID(idParam: number): Adobe.Incopy.MovieBehavior;
			/**
			 * Returns the MovieBehavior with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.MovieBehavior}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.MovieBehavior;
			/**
			 * Returns the MovieBehaviors within the specified range.
			 * @param {any} fromParam The MovieBehavior, index, or name at 
			 * the beginning of the range. Can accept: MovieBehavior, Long 
			 * Integer or String.
			 * @param {any} toParam The MovieBehavior, index, or name at 
			 * the end of the range. Can accept: MovieBehavior, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last MovieBehavior in the collection.
			 * @returns {Adobe.Incopy.MovieBehavior}
			 */
			public lastItem(): Adobe.Incopy.MovieBehavior;
			/**
			 * Returns the middle MovieBehavior in the collection.
			 * @returns {Adobe.Incopy.MovieBehavior}
			 */
			public middleItem(): Adobe.Incopy.MovieBehavior;
			/**
			 * Returns the MovieBehavior whose index follows the specified 
			 * MovieBehavior in the collection.
			 * @param {MovieBehavior} objParam The MovieBehavior whose 
			 * index comes before the desired MovieBehavior. 
			 * @returns {Adobe.Incopy.MovieBehavior}
			 */
			public nextItem(objParam: MovieBehavior): Adobe.Incopy.MovieBehavior;
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
			 * Returns the MovieBehavior with the index previous to the 
			 * specified index.
			 * @param {MovieBehavior} objParam The index of the 
			 * MovieBehavior that follows the desired MovieBehavior.
			 * @returns {Adobe.Incopy.MovieBehavior}
			 */
			public previousItem(objParam: MovieBehavior): Adobe.Incopy.MovieBehavior;
		}
	}
}