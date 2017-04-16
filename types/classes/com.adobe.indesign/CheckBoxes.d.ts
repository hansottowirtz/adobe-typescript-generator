/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class CheckBoxes extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new CheckBox
			 * @param {Layer} layerParam The layer on which to create the 
			 * CheckBox. (Optional)
			 * @param {LocationOptions} atParam The location at which to 
			 * insert the CheckBox relative to the reference object or 
			 * within the container object. (Optional)
			 * @param {any} referenceParam The reference object. Note: 
			 * Required when the at parameter is before or after. Can 
			 * accept: Document, Spread, MasterSpread, Page, Layer or 
			 * PageItem. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new CheckBox (Optional)
			 */
			public add(layerParam: Layer, atParam: LocationOptions, referenceParam: any, withPropertiesParam: any): Adobe.Indesign.CheckBox;
			/** Returns any CheckBox in the collection. */
			public anyItem(): Adobe.Indesign.CheckBox;
			/** Displays the number of elements in the CheckBox. */
			public count(): number;
			/** Returns every CheckBox in the collection. */
			public everyItem(): any;
			/** Returns the first CheckBox in the collection. */
			public firstItem(): Adobe.Indesign.CheckBox;
			/**
			 * Returns the CheckBox with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.CheckBox;
			/**
			 * Returns the CheckBox with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.CheckBox;
			/**
			 * Returns the CheckBox with the specified name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.CheckBox;
			/**
			 * Returns the CheckBoxes within the specified range.
			 * @param {any} fromParam The CheckBox, index, or name at the 
			 * beginning of the range. Can accept: CheckBox, Long Integer 
			 * or String.
			 * @param {any} toParam The CheckBox, index, or name at the end 
			 * of the range. Can accept: CheckBox, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last CheckBox in the collection. */
			public lastItem(): Adobe.Indesign.CheckBox;
			/** Returns the middle CheckBox in the collection. */
			public middleItem(): Adobe.Indesign.CheckBox;
			/**
			 * Returns the CheckBox whose index follows the specified 
			 * CheckBox in the collection.
			 * @param {CheckBox} objParam The CheckBox whose index comes 
			 * before the desired CheckBox. 
			 */
			public nextItem(objParam: CheckBox): Adobe.Indesign.CheckBox;
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
			 * Returns the CheckBox with the index previous to the 
			 * specified index.
			 * @param {CheckBox} objParam The index of the CheckBox that 
			 * follows the desired CheckBox.
			 */
			public previousItem(objParam: CheckBox): Adobe.Indesign.CheckBox;
		}
	}
}