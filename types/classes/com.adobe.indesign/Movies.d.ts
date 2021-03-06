/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Movies extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new Movie
			 * @param {Layer} layerParam The layer on which to create the 
			 * Movie. (Optional)
			 * @param {LocationOptions} atParam The location at which to 
			 * insert the Movie relative to the reference object or within 
			 * the container object. (Optional)
			 * @param {any} referenceParam The reference object. Note: 
			 * Required when the at parameter is before or after. Can 
			 * accept: Document, Spread, MasterSpread, Page, Layer or 
			 * PageItem. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new Movie (Optional)
			 * @returns {Adobe.Indesign.Movie}
			 */
			public add(layerParam: Layer, atParam: LocationOptions, referenceParam: any, withPropertiesParam: any): Adobe.Indesign.Movie;
			/**
			 * Returns any Movie in the collection.
			 * @returns {Adobe.Indesign.Movie}
			 */
			public anyItem(): Adobe.Indesign.Movie;
			/**
			 * Displays the number of elements in the Movie.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Movie in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Movie in the collection.
			 * @returns {Adobe.Indesign.Movie}
			 */
			public firstItem(): Adobe.Indesign.Movie;
			/**
			 * Returns the Movie with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.Movie}
			 */
			public item(indexParam: any): Adobe.Indesign.Movie;
			/**
			 * Returns the Movie with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.Movie}
			 */
			public itemByID(idParam: number): Adobe.Indesign.Movie;
			/**
			 * Returns the Movie with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.Movie}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Movie;
			/**
			 * Returns the Movies within the specified range.
			 * @param {any} fromParam The Movie, index, or name at the 
			 * beginning of the range. Can accept: Movie, Long Integer or 
			 * String.
			 * @param {any} toParam The Movie, index, or name at the end of 
			 * the range. Can accept: Movie, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Movie in the collection.
			 * @returns {Adobe.Indesign.Movie}
			 */
			public lastItem(): Adobe.Indesign.Movie;
			/**
			 * Returns the middle Movie in the collection.
			 * @returns {Adobe.Indesign.Movie}
			 */
			public middleItem(): Adobe.Indesign.Movie;
			/**
			 * Returns the Movie whose index follows the specified Movie in 
			 * the collection.
			 * @param {Movie} objParam The Movie whose index comes before 
			 * the desired Movie. 
			 * @returns {Adobe.Indesign.Movie}
			 */
			public nextItem(objParam: Movie): Adobe.Indesign.Movie;
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
			 * Returns the Movie with the index previous to the specified 
			 * index.
			 * @param {Movie} objParam The index of the Movie that follows 
			 * the desired Movie.
			 * @returns {Adobe.Indesign.Movie}
			 */
			public previousItem(objParam: Movie): Adobe.Indesign.Movie;
		}
	}
}