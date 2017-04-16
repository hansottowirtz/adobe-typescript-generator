/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ComboBoxes extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
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
			 */
			public add(layerParam: Layer, atParam: LocationOptions, referenceParam: any, withPropertiesParam: any): Adobe.Incopy.ComboBox;
			/** Returns any ComboBox in the collection. */
			public anyItem(): Adobe.Incopy.ComboBox;
			/** Displays the number of elements in the ComboBox. */
			public count(): number;
			/** Returns every ComboBox in the collection. */
			public everyItem(): any;
			/** Returns the first ComboBox in the collection. */
			public firstItem(): Adobe.Incopy.ComboBox;
			/**
			 * Returns the ComboBox with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.ComboBox;
			/**
			 * Returns the ComboBox with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.ComboBox;
			/**
			 * Returns the ComboBox with the specified name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.ComboBox;
			/**
			 * Returns the ComboBoxes within the specified range.
			 * @param {any} fromParam The ComboBox, index, or name at the 
			 * beginning of the range. Can accept: ComboBox, Long Integer 
			 * or String.
			 * @param {any} toParam The ComboBox, index, or name at the end 
			 * of the range. Can accept: ComboBox, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last ComboBox in the collection. */
			public lastItem(): Adobe.Incopy.ComboBox;
			/** Returns the middle ComboBox in the collection. */
			public middleItem(): Adobe.Incopy.ComboBox;
			/**
			 * Returns the ComboBox whose index follows the specified 
			 * ComboBox in the collection.
			 * @param {ComboBox} objParam The ComboBox whose index comes 
			 * before the desired ComboBox. 
			 */
			public nextItem(objParam: ComboBox): Adobe.Incopy.ComboBox;
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
			 * Returns the ComboBox with the index previous to the 
			 * specified index.
			 * @param {ComboBox} objParam The index of the ComboBox that 
			 * follows the desired ComboBox.
			 */
			public previousItem(objParam: ComboBox): Adobe.Incopy.ComboBox;
		}
	}
}