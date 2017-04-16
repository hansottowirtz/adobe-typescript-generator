/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class RealEditboxes extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new RealEditbox.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new RealEditbox (Optional)
			 * @returns {Adobe.Indesign.RealEditbox}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.RealEditbox;
			/**
			 * Returns any RealEditbox in the collection.
			 * @returns {Adobe.Indesign.RealEditbox}
			 */
			public anyItem(): Adobe.Indesign.RealEditbox;
			/**
			 * Displays the number of elements in the RealEditbox.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every RealEditbox in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first RealEditbox in the collection.
			 * @returns {Adobe.Indesign.RealEditbox}
			 */
			public firstItem(): Adobe.Indesign.RealEditbox;
			/**
			 * Returns the RealEditbox with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.RealEditbox}
			 */
			public item(indexParam: any): Adobe.Indesign.RealEditbox;
			/**
			 * Returns the RealEditbox with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.RealEditbox}
			 */
			public itemByID(idParam: number): Adobe.Indesign.RealEditbox;
			/**
			 * Returns the RealEditboxes within the specified range.
			 * @param {any} fromParam The RealEditbox, index, or name at 
			 * the beginning of the range. Can accept: RealEditbox, Long 
			 * Integer or String.
			 * @param {any} toParam The RealEditbox, index, or name at the 
			 * end of the range. Can accept: RealEditbox, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last RealEditbox in the collection.
			 * @returns {Adobe.Indesign.RealEditbox}
			 */
			public lastItem(): Adobe.Indesign.RealEditbox;
			/**
			 * Returns the middle RealEditbox in the collection.
			 * @returns {Adobe.Indesign.RealEditbox}
			 */
			public middleItem(): Adobe.Indesign.RealEditbox;
			/**
			 * Returns the RealEditbox whose index follows the specified 
			 * RealEditbox in the collection.
			 * @param {RealEditbox} objParam The RealEditbox whose index 
			 * comes before the desired RealEditbox. 
			 * @returns {Adobe.Indesign.RealEditbox}
			 */
			public nextItem(objParam: RealEditbox): Adobe.Indesign.RealEditbox;
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
			 * Returns the RealEditbox with the index previous to the 
			 * specified index.
			 * @param {RealEditbox} objParam The index of the RealEditbox 
			 * that follows the desired RealEditbox.
			 * @returns {Adobe.Indesign.RealEditbox}
			 */
			public previousItem(objParam: RealEditbox): Adobe.Indesign.RealEditbox;
		}
	}
}