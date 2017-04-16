/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class MeasurementEditboxes extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new MeasurementEditbox.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new MeasurementEditbox (Optional)
			 * @returns {Adobe.Indesign.MeasurementEditbox}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.MeasurementEditbox;
			/**
			 * Returns any MeasurementEditbox in the collection.
			 * @returns {Adobe.Indesign.MeasurementEditbox}
			 */
			public anyItem(): Adobe.Indesign.MeasurementEditbox;
			/**
			 * Displays the number of elements in the MeasurementEditbox.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every MeasurementEditbox in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first MeasurementEditbox in the collection.
			 * @returns {Adobe.Indesign.MeasurementEditbox}
			 */
			public firstItem(): Adobe.Indesign.MeasurementEditbox;
			/**
			 * Returns the MeasurementEditbox with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.MeasurementEditbox}
			 */
			public item(indexParam: any): Adobe.Indesign.MeasurementEditbox;
			/**
			 * Returns the MeasurementEditbox with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.MeasurementEditbox}
			 */
			public itemByID(idParam: number): Adobe.Indesign.MeasurementEditbox;
			/**
			 * Returns the MeasurementEditboxes within the specified range.
			 * @param {any} fromParam The MeasurementEditbox, index, or 
			 * name at the beginning of the range. Can accept: 
			 * MeasurementEditbox, Long Integer or String.
			 * @param {any} toParam The MeasurementEditbox, index, or name 
			 * at the end of the range. Can accept: MeasurementEditbox, 
			 * Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last MeasurementEditbox in the collection.
			 * @returns {Adobe.Indesign.MeasurementEditbox}
			 */
			public lastItem(): Adobe.Indesign.MeasurementEditbox;
			/**
			 * Returns the middle MeasurementEditbox in the collection.
			 * @returns {Adobe.Indesign.MeasurementEditbox}
			 */
			public middleItem(): Adobe.Indesign.MeasurementEditbox;
			/**
			 * Returns the MeasurementEditbox whose index follows the 
			 * specified MeasurementEditbox in the collection.
			 * @param {MeasurementEditbox} objParam The MeasurementEditbox 
			 * whose index comes before the desired MeasurementEditbox. 
			 * @returns {Adobe.Indesign.MeasurementEditbox}
			 */
			public nextItem(objParam: MeasurementEditbox): Adobe.Indesign.MeasurementEditbox;
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
			 * Returns the MeasurementEditbox with the index previous to 
			 * the specified index.
			 * @param {MeasurementEditbox} objParam The index of the 
			 * MeasurementEditbox that follows the desired 
			 * MeasurementEditbox.
			 * @returns {Adobe.Indesign.MeasurementEditbox}
			 */
			public previousItem(objParam: MeasurementEditbox): Adobe.Indesign.MeasurementEditbox;
		}
	}
}