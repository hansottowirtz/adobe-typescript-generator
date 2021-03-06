/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Polygons extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new Polygon.
			 * @param {Layer} layerParam The layer on which to create the 
			 * Polygon. (Optional)
			 * @param {number} numberOfSidesParam The number of sides to 
			 * give the Polygon. (Range: 3 to 100) (Optional)
			 * @param {number} insetPercentageParam The star inset 
			 * percentage applied to the Polygon. (Optional)
			 * @param {LocationOptions} atParam The location at which to 
			 * insert the Polygon relative to the reference object or 
			 * within the container object. (Optional)
			 * @param {any} referenceParam The reference object. Note: 
			 * Required when the at parameter is before or after. Can 
			 * accept: Document, Spread, MasterSpread, Page, Layer or 
			 * PageItem. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new Polygon (Optional)
			 * @returns {Adobe.Indesign.Polygon}
			 */
			public add(layerParam: Layer, numberOfSidesParam: number, insetPercentageParam: number, atParam: LocationOptions, referenceParam: any, withPropertiesParam: any): Adobe.Indesign.Polygon;
			/**
			 * Returns any Polygon in the collection.
			 * @returns {Adobe.Indesign.Polygon}
			 */
			public anyItem(): Adobe.Indesign.Polygon;
			/**
			 * Displays the number of elements in the Polygon.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Polygon in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Polygon in the collection.
			 * @returns {Adobe.Indesign.Polygon}
			 */
			public firstItem(): Adobe.Indesign.Polygon;
			/**
			 * Returns the Polygon with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.Polygon}
			 */
			public item(indexParam: any): Adobe.Indesign.Polygon;
			/**
			 * Returns the Polygon with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.Polygon}
			 */
			public itemByID(idParam: number): Adobe.Indesign.Polygon;
			/**
			 * Returns the Polygon with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.Polygon}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Polygon;
			/**
			 * Returns the Polygons within the specified range.
			 * @param {any} fromParam The Polygon, index, or name at the 
			 * beginning of the range. Can accept: Polygon, Long Integer or 
			 * String.
			 * @param {any} toParam The Polygon, index, or name at the end 
			 * of the range. Can accept: Polygon, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Polygon in the collection.
			 * @returns {Adobe.Indesign.Polygon}
			 */
			public lastItem(): Adobe.Indesign.Polygon;
			/**
			 * Returns the middle Polygon in the collection.
			 * @returns {Adobe.Indesign.Polygon}
			 */
			public middleItem(): Adobe.Indesign.Polygon;
			/**
			 * Returns the Polygon whose index follows the specified 
			 * Polygon in the collection.
			 * @param {Polygon} objParam The Polygon whose index comes 
			 * before the desired Polygon. 
			 * @returns {Adobe.Indesign.Polygon}
			 */
			public nextItem(objParam: Polygon): Adobe.Indesign.Polygon;
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
			 * Returns the Polygon with the index previous to the specified 
			 * index.
			 * @param {Polygon} objParam The index of the Polygon that 
			 * follows the desired Polygon.
			 * @returns {Adobe.Indesign.Polygon}
			 */
			public previousItem(objParam: Polygon): Adobe.Indesign.Polygon;
		}
	}
}