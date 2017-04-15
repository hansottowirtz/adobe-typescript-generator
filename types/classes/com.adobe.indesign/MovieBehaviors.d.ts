/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class MovieBehaviors extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new MovieBehavior.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new MovieBehavior (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.MovieBehavior;
			/** Returns any MovieBehavior in the collection. */
			public anyItem(): Adobe.Indesign.MovieBehavior;
			/** Displays the number of elements in the MovieBehavior. */
			public count(): number;
			/** Returns every MovieBehavior in the collection. */
			public everyItem(): any;
			/** Returns the first MovieBehavior in the collection. */
			public firstItem(): Adobe.Indesign.MovieBehavior;
			/**
			 * Returns the MovieBehavior with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.MovieBehavior;
			/**
			 * Returns the MovieBehavior with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.MovieBehavior;
			/**
			 * Returns the MovieBehavior with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.MovieBehavior;
			/**
			 * Returns the MovieBehaviors within the specified range.
			 * @param {any} fromParam - The MovieBehavior, index, or name 
			 * at the beginning of the range. Can accept: MovieBehavior, 
			 * Long Integer or String.
			 * @param {any} toParam - The MovieBehavior, index, or name at 
			 * the end of the range. Can accept: MovieBehavior, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last MovieBehavior in the collection. */
			public lastItem(): Adobe.Indesign.MovieBehavior;
			/** Returns the middle MovieBehavior in the collection. */
			public middleItem(): Adobe.Indesign.MovieBehavior;
			/**
			 * Returns the MovieBehavior whose index follows the specified 
			 * MovieBehavior in the collection.
			 * @param {MovieBehavior} objParam - The MovieBehavior whose 
			 * index comes before the desired MovieBehavior. 
			 */
			public nextItem(objParam: MovieBehavior): Adobe.Indesign.MovieBehavior;
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
			 * Returns the MovieBehavior with the index previous to the 
			 * specified index.
			 * @param {MovieBehavior} objParam - The index of the 
			 * MovieBehavior that follows the desired MovieBehavior.
			 */
			public previousItem(objParam: MovieBehavior): Adobe.Indesign.MovieBehavior;
		}
	}
}