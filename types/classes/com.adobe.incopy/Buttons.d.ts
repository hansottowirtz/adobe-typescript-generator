/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Buttons extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new Button
			 * @param {Layer} layerParam The layer on which to create the 
			 * Button. (Optional)
			 * @param {LocationOptions} atParam The location at which to 
			 * insert the Button relative to the reference object or within 
			 * the container object. (Optional)
			 * @param {any} referenceParam The reference object. Note: 
			 * Required when the at parameter is before or after. Can 
			 * accept: Document, Spread, MasterSpread, Page, Layer or 
			 * PageItem. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new Button (Optional)
			 * @returns {Adobe.Incopy.Button}
			 */
			public add(layerParam: Layer, atParam: LocationOptions, referenceParam: any, withPropertiesParam: any): Adobe.Incopy.Button;
			/**
			 * Returns any Button in the collection.
			 * @returns {Adobe.Incopy.Button}
			 */
			public anyItem(): Adobe.Incopy.Button;
			/**
			 * Displays the number of elements in the Button.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Button in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Button in the collection.
			 * @returns {Adobe.Incopy.Button}
			 */
			public firstItem(): Adobe.Incopy.Button;
			/**
			 * Returns the Button with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.Button}
			 */
			public item(indexParam: any): Adobe.Incopy.Button;
			/**
			 * Returns the Button with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.Button}
			 */
			public itemByID(idParam: number): Adobe.Incopy.Button;
			/**
			 * Returns the Button with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.Button}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.Button;
			/**
			 * Returns the Buttons within the specified range.
			 * @param {any} fromParam The Button, index, or name at the 
			 * beginning of the range. Can accept: Button, Long Integer or 
			 * String.
			 * @param {any} toParam The Button, index, or name at the end 
			 * of the range. Can accept: Button, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Button in the collection.
			 * @returns {Adobe.Incopy.Button}
			 */
			public lastItem(): Adobe.Incopy.Button;
			/**
			 * Returns the middle Button in the collection.
			 * @returns {Adobe.Incopy.Button}
			 */
			public middleItem(): Adobe.Incopy.Button;
			/**
			 * Returns the Button whose index follows the specified Button 
			 * in the collection.
			 * @param {Button} objParam The Button whose index comes before 
			 * the desired Button. 
			 * @returns {Adobe.Incopy.Button}
			 */
			public nextItem(objParam: Button): Adobe.Incopy.Button;
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
			 * Returns the Button with the index previous to the specified 
			 * index.
			 * @param {Button} objParam The index of the Button that 
			 * follows the desired Button.
			 * @returns {Adobe.Incopy.Button}
			 */
			public previousItem(objParam: Button): Adobe.Incopy.Button;
		}
	}
}