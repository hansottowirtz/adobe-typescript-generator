/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Rectangles extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new Rectangle
			 * @param {Layer} layerParam The layer on which to create the 
			 * Rectangle. (Optional)
			 * @param {LocationOptions} atParam The location at which to 
			 * insert the Rectangle relative to the reference object or 
			 * within the container object. (Optional)
			 * @param {any} referenceParam The reference object. Note: 
			 * Required when the at parameter is before or after. Can 
			 * accept: Document, Spread, MasterSpread, Page, Layer or 
			 * PageItem. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new Rectangle (Optional)
			 */
			public add(layerParam: Layer, atParam: LocationOptions, referenceParam: any, withPropertiesParam: any): Adobe.Indesign.Rectangle;
			/** Returns any Rectangle in the collection. */
			public anyItem(): Adobe.Indesign.Rectangle;
			/** Displays the number of elements in the Rectangle. */
			public count(): number;
			/** Returns every Rectangle in the collection. */
			public everyItem(): any;
			/** Returns the first Rectangle in the collection. */
			public firstItem(): Adobe.Indesign.Rectangle;
			/**
			 * Returns the Rectangle with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.Rectangle;
			/**
			 * Returns the Rectangle with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.Rectangle;
			/**
			 * Returns the Rectangle with the specified name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Rectangle;
			/**
			 * Returns the Rectangles within the specified range.
			 * @param {any} fromParam The Rectangle, index, or name at the 
			 * beginning of the range. Can accept: Rectangle, Long Integer 
			 * or String.
			 * @param {any} toParam The Rectangle, index, or name at the 
			 * end of the range. Can accept: Rectangle, Long Integer or 
			 * String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Rectangle in the collection. */
			public lastItem(): Adobe.Indesign.Rectangle;
			/** Returns the middle Rectangle in the collection. */
			public middleItem(): Adobe.Indesign.Rectangle;
			/**
			 * Returns the Rectangle whose index follows the specified 
			 * Rectangle in the collection.
			 * @param {Rectangle} objParam The Rectangle whose index comes 
			 * before the desired Rectangle. 
			 */
			public nextItem(objParam: Rectangle): Adobe.Indesign.Rectangle;
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
			 * Returns the Rectangle with the index previous to the 
			 * specified index.
			 * @param {Rectangle} objParam The index of the Rectangle that 
			 * follows the desired Rectangle.
			 */
			public previousItem(objParam: Rectangle): Adobe.Indesign.Rectangle;
		}
	}
}