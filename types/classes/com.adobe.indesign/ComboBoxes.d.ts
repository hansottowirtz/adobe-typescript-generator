/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ComboBoxes extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new ComboBox
			 * @param {Layer} layerParam The layer on which to create the 
			 * ComboBox. (Optional)
			 * @param {LocationOptions} atParam The location at which to 
			 * insert the ComboBox relative to the reference object or 
			 * within the container object. (Optional)
			 * @param {any} referenceParam The reference object. Note: 
			 * Required when the at parameter is before or after. Can 
			 * accept: Document, Spread, MasterSpread, Page, Layer or 
			 * PageItem. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new ComboBox (Optional)
			 * @returns {Adobe.Indesign.ComboBox}
			 */
			public add(layerParam: Layer, atParam: LocationOptions, referenceParam: any, withPropertiesParam: any): Adobe.Indesign.ComboBox;
			/**
			 * Returns any ComboBox in the collection.
			 * @returns {Adobe.Indesign.ComboBox}
			 */
			public anyItem(): Adobe.Indesign.ComboBox;
			/**
			 * Displays the number of elements in the ComboBox.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every ComboBox in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first ComboBox in the collection.
			 * @returns {Adobe.Indesign.ComboBox}
			 */
			public firstItem(): Adobe.Indesign.ComboBox;
			/**
			 * Returns the ComboBox with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.ComboBox}
			 */
			public item(indexParam: any): Adobe.Indesign.ComboBox;
			/**
			 * Returns the ComboBox with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.ComboBox}
			 */
			public itemByID(idParam: number): Adobe.Indesign.ComboBox;
			/**
			 * Returns the ComboBox with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.ComboBox}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.ComboBox;
			/**
			 * Returns the ComboBoxes within the specified range.
			 * @param {any} fromParam The ComboBox, index, or name at the 
			 * beginning of the range. Can accept: ComboBox, Long Integer 
			 * or String.
			 * @param {any} toParam The ComboBox, index, or name at the end 
			 * of the range. Can accept: ComboBox, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last ComboBox in the collection.
			 * @returns {Adobe.Indesign.ComboBox}
			 */
			public lastItem(): Adobe.Indesign.ComboBox;
			/**
			 * Returns the middle ComboBox in the collection.
			 * @returns {Adobe.Indesign.ComboBox}
			 */
			public middleItem(): Adobe.Indesign.ComboBox;
			/**
			 * Returns the ComboBox whose index follows the specified 
			 * ComboBox in the collection.
			 * @param {ComboBox} objParam The ComboBox whose index comes 
			 * before the desired ComboBox. 
			 * @returns {Adobe.Indesign.ComboBox}
			 */
			public nextItem(objParam: ComboBox): Adobe.Indesign.ComboBox;
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
			 * Returns the ComboBox with the index previous to the 
			 * specified index.
			 * @param {ComboBox} objParam The index of the ComboBox that 
			 * follows the desired ComboBox.
			 * @returns {Adobe.Indesign.ComboBox}
			 */
			public previousItem(objParam: ComboBox): Adobe.Indesign.ComboBox;
		}
	}
}