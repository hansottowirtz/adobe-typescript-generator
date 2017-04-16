/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class MovieBehaviors extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new MovieBehavior.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new MovieBehavior (Optional)
			 * @returns {Adobe.Indesign.MovieBehavior}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.MovieBehavior;
			/**
			 * Returns any MovieBehavior in the collection.
			 * @returns {Adobe.Indesign.MovieBehavior}
			 */
			public anyItem(): Adobe.Indesign.MovieBehavior;
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
			 * @returns {Adobe.Indesign.MovieBehavior}
			 */
			public firstItem(): Adobe.Indesign.MovieBehavior;
			/**
			 * Returns the MovieBehavior with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.MovieBehavior}
			 */
			public item(indexParam: any): Adobe.Indesign.MovieBehavior;
			/**
			 * Returns the MovieBehavior with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.MovieBehavior}
			 */
			public itemByID(idParam: number): Adobe.Indesign.MovieBehavior;
			/**
			 * Returns the MovieBehavior with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.MovieBehavior}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.MovieBehavior;
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
			 * @returns {Adobe.Indesign.MovieBehavior}
			 */
			public lastItem(): Adobe.Indesign.MovieBehavior;
			/**
			 * Returns the middle MovieBehavior in the collection.
			 * @returns {Adobe.Indesign.MovieBehavior}
			 */
			public middleItem(): Adobe.Indesign.MovieBehavior;
			/**
			 * Returns the MovieBehavior whose index follows the specified 
			 * MovieBehavior in the collection.
			 * @param {MovieBehavior} objParam The MovieBehavior whose 
			 * index comes before the desired MovieBehavior. 
			 * @returns {Adobe.Indesign.MovieBehavior}
			 */
			public nextItem(objParam: MovieBehavior): Adobe.Indesign.MovieBehavior;
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
			 * @returns {Adobe.Indesign.MovieBehavior}
			 */
			public previousItem(objParam: MovieBehavior): Adobe.Indesign.MovieBehavior;
		}
	}
}