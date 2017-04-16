/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Movies extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
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
			 */
			public add(layerParam: Layer, atParam: LocationOptions, referenceParam: any, withPropertiesParam: any): Adobe.Incopy.Movie;
			/** Returns any Movie in the collection. */
			public anyItem(): Adobe.Incopy.Movie;
			/** Displays the number of elements in the Movie. */
			public count(): number;
			/** Returns every Movie in the collection. */
			public everyItem(): any;
			/** Returns the first Movie in the collection. */
			public firstItem(): Adobe.Incopy.Movie;
			/**
			 * Returns the Movie with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.Movie;
			/**
			 * Returns the Movie with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.Movie;
			/**
			 * Returns the Movie with the specified name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.Movie;
			/**
			 * Returns the Movies within the specified range.
			 * @param {any} fromParam The Movie, index, or name at the 
			 * beginning of the range. Can accept: Movie, Long Integer or 
			 * String.
			 * @param {any} toParam The Movie, index, or name at the end of 
			 * the range. Can accept: Movie, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Movie in the collection. */
			public lastItem(): Adobe.Incopy.Movie;
			/** Returns the middle Movie in the collection. */
			public middleItem(): Adobe.Incopy.Movie;
			/**
			 * Returns the Movie whose index follows the specified Movie in 
			 * the collection.
			 * @param {Movie} objParam The Movie whose index comes before 
			 * the desired Movie. 
			 */
			public nextItem(objParam: Movie): Adobe.Incopy.Movie;
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
			 * Returns the Movie with the index previous to the specified 
			 * index.
			 * @param {Movie} objParam The index of the Movie that follows 
			 * the desired Movie.
			 */
			public previousItem(objParam: Movie): Adobe.Incopy.Movie;
		}
	}
}