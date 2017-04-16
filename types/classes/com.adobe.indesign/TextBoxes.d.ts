/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TextBoxes extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new TextBox
			 * @param {Layer} layerParam The layer on which to create the 
			 * TextBox. (Optional)
			 * @param {LocationOptions} atParam The location at which to 
			 * insert the TextBox relative to the reference object or 
			 * within the container object. (Optional)
			 * @param {any} referenceParam The reference object. Note: 
			 * Required when the at parameter is before or after. Can 
			 * accept: Document, Spread, MasterSpread, Page, Layer or 
			 * PageItem. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new TextBox (Optional)
			 */
			public add(layerParam: Layer, atParam: LocationOptions, referenceParam: any, withPropertiesParam: any): Adobe.Indesign.TextBox;
			/** Returns any TextBox in the collection. */
			public anyItem(): Adobe.Indesign.TextBox;
			/** Displays the number of elements in the TextBox. */
			public count(): number;
			/** Returns every TextBox in the collection. */
			public everyItem(): any;
			/** Returns the first TextBox in the collection. */
			public firstItem(): Adobe.Indesign.TextBox;
			/**
			 * Returns the TextBox with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.TextBox;
			/**
			 * Returns the TextBox with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.TextBox;
			/**
			 * Returns the TextBox with the specified name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.TextBox;
			/**
			 * Returns the TextBoxes within the specified range.
			 * @param {any} fromParam The TextBox, index, or name at the 
			 * beginning of the range. Can accept: TextBox, Long Integer or 
			 * String.
			 * @param {any} toParam The TextBox, index, or name at the end 
			 * of the range. Can accept: TextBox, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last TextBox in the collection. */
			public lastItem(): Adobe.Indesign.TextBox;
			/** Returns the middle TextBox in the collection. */
			public middleItem(): Adobe.Indesign.TextBox;
			/**
			 * Returns the TextBox whose index follows the specified 
			 * TextBox in the collection.
			 * @param {TextBox} objParam The TextBox whose index comes 
			 * before the desired TextBox. 
			 */
			public nextItem(objParam: TextBox): Adobe.Indesign.TextBox;
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
			 * Returns the TextBox with the index previous to the specified 
			 * index.
			 * @param {TextBox} objParam The index of the TextBox that 
			 * follows the desired TextBox.
			 */
			public previousItem(objParam: TextBox): Adobe.Indesign.TextBox;
		}
	}
}