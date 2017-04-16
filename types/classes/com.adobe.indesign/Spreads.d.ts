/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Spreads extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new spread.
			 * @param {LocationOptions} atParam The location of the spread 
			 * relative to the reference object or within the document.  
			 * (Optional)
			 * @param {any} referenceParam The reference object. Note: 
			 * Required when the at parameter specifies before or after. 
			 * Can accept: Spread or Document. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new Spread (Optional)
			 * @returns {Adobe.Indesign.Spread}
			 */
			public add(atParam: LocationOptions, referenceParam: any, withPropertiesParam: any): Adobe.Indesign.Spread;
			/**
			 * Returns any Spread in the collection.
			 * @returns {Adobe.Indesign.Spread}
			 */
			public anyItem(): Adobe.Indesign.Spread;
			/**
			 * Displays the number of elements in the Spread.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Spread in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Spread in the collection.
			 * @returns {Adobe.Indesign.Spread}
			 */
			public firstItem(): Adobe.Indesign.Spread;
			/**
			 * Returns the Spread with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.Spread}
			 */
			public item(indexParam: any): Adobe.Indesign.Spread;
			/**
			 * Returns the Spread with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.Spread}
			 */
			public itemByID(idParam: number): Adobe.Indesign.Spread;
			/**
			 * Returns the Spread with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.Spread}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Spread;
			/**
			 * Returns the Spreads within the specified range.
			 * @param {any} fromParam The Spread, index, or name at the 
			 * beginning of the range. Can accept: Spread, Long Integer or 
			 * String.
			 * @param {any} toParam The Spread, index, or name at the end 
			 * of the range. Can accept: Spread, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Spread in the collection.
			 * @returns {Adobe.Indesign.Spread}
			 */
			public lastItem(): Adobe.Indesign.Spread;
			/**
			 * Returns the middle Spread in the collection.
			 * @returns {Adobe.Indesign.Spread}
			 */
			public middleItem(): Adobe.Indesign.Spread;
			/**
			 * Returns the Spread whose index follows the specified Spread 
			 * in the collection.
			 * @param {Spread} objParam The Spread whose index comes before 
			 * the desired Spread. 
			 * @returns {Adobe.Indesign.Spread}
			 */
			public nextItem(objParam: Spread): Adobe.Indesign.Spread;
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
			 * Returns the Spread with the index previous to the specified 
			 * index.
			 * @param {Spread} objParam The index of the Spread that 
			 * follows the desired Spread.
			 * @returns {Adobe.Indesign.Spread}
			 */
			public previousItem(objParam: Spread): Adobe.Indesign.Spread;
		}
	}
}