/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Ovals extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new Oval
			 * @param {Layer} layerParam The layer on which to create the 
			 * Oval. (Optional)
			 * @param {LocationOptions} atParam The location at which to 
			 * insert the Oval relative to the reference object or within 
			 * the container object. (Optional)
			 * @param {any} referenceParam The reference object. Note: 
			 * Required when the at parameter is before or after. Can 
			 * accept: Document, Spread, MasterSpread, Page, Layer or 
			 * PageItem. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new Oval (Optional)
			 * @returns {Adobe.Indesign.Oval}
			 */
			public add(layerParam: Layer, atParam: LocationOptions, referenceParam: any, withPropertiesParam: any): Adobe.Indesign.Oval;
			/**
			 * Returns any Oval in the collection.
			 * @returns {Adobe.Indesign.Oval}
			 */
			public anyItem(): Adobe.Indesign.Oval;
			/**
			 * Displays the number of elements in the Oval.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Oval in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Oval in the collection.
			 * @returns {Adobe.Indesign.Oval}
			 */
			public firstItem(): Adobe.Indesign.Oval;
			/**
			 * Returns the Oval with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.Oval}
			 */
			public item(indexParam: any): Adobe.Indesign.Oval;
			/**
			 * Returns the Oval with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.Oval}
			 */
			public itemByID(idParam: number): Adobe.Indesign.Oval;
			/**
			 * Returns the Oval with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.Oval}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Oval;
			/**
			 * Returns the Ovals within the specified range.
			 * @param {any} fromParam The Oval, index, or name at the 
			 * beginning of the range. Can accept: Oval, Long Integer or 
			 * String.
			 * @param {any} toParam The Oval, index, or name at the end of 
			 * the range. Can accept: Oval, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Oval in the collection.
			 * @returns {Adobe.Indesign.Oval}
			 */
			public lastItem(): Adobe.Indesign.Oval;
			/**
			 * Returns the middle Oval in the collection.
			 * @returns {Adobe.Indesign.Oval}
			 */
			public middleItem(): Adobe.Indesign.Oval;
			/**
			 * Returns the Oval whose index follows the specified Oval in 
			 * the collection.
			 * @param {Oval} objParam The Oval whose index comes before the 
			 * desired Oval. 
			 * @returns {Adobe.Indesign.Oval}
			 */
			public nextItem(objParam: Oval): Adobe.Indesign.Oval;
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
			 * Returns the Oval with the index previous to the specified 
			 * index.
			 * @param {Oval} objParam The index of the Oval that follows 
			 * the desired Oval.
			 * @returns {Adobe.Indesign.Oval}
			 */
			public previousItem(objParam: Oval): Adobe.Indesign.Oval;
		}
	}
}