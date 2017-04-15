/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class MeasurementEditboxes extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new MeasurementEditbox.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new MeasurementEditbox (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.MeasurementEditbox;
			/** Returns any MeasurementEditbox in the collection. */
			public anyItem(): Adobe.Indesign.MeasurementEditbox;
			/** Displays the number of elements in the MeasurementEditbox. */
			public count(): number;
			/** Returns every MeasurementEditbox in the collection. */
			public everyItem(): any;
			/** Returns the first MeasurementEditbox in the collection. */
			public firstItem(): Adobe.Indesign.MeasurementEditbox;
			/**
			 * Returns the MeasurementEditbox with the specified index or 
			 * name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.MeasurementEditbox;
			/**
			 * Returns the MeasurementEditbox with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.MeasurementEditbox;
			/**
			 * Returns the MeasurementEditboxes within the specified range.
			 * @param {any} fromParam - The MeasurementEditbox, index, or 
			 * name at the beginning of the range. Can accept: 
			 * MeasurementEditbox, Long Integer or String.
			 * @param {any} toParam - The MeasurementEditbox, index, or 
			 * name at the end of the range. Can accept: 
			 * MeasurementEditbox, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last MeasurementEditbox in the collection. */
			public lastItem(): Adobe.Indesign.MeasurementEditbox;
			/** Returns the middle MeasurementEditbox in the collection. */
			public middleItem(): Adobe.Indesign.MeasurementEditbox;
			/**
			 * Returns the MeasurementEditbox whose index follows the 
			 * specified MeasurementEditbox in the collection.
			 * @param {MeasurementEditbox} objParam - The 
			 * MeasurementEditbox whose index comes before the desired 
			 * MeasurementEditbox. 
			 */
			public nextItem(objParam: MeasurementEditbox): Adobe.Indesign.MeasurementEditbox;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx - 
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index - 
			 */
			public nextValue(index: number): any;
			/**
			 * Returns the MeasurementEditbox with the index previous to 
			 * the specified index.
			 * @param {MeasurementEditbox} objParam - The index of the 
			 * MeasurementEditbox that follows the desired 
			 * MeasurementEditbox.
			 */
			public previousItem(objParam: MeasurementEditbox): Adobe.Indesign.MeasurementEditbox;
		}
	}
}