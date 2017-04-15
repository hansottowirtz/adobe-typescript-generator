/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Buttons extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new Button
			 * @param {Layer} layerParam - The layer on which to create the 
			 * Button. (Optional)
			 * @param {LocationOptions} atParam - The location at which to 
			 * insert the Button relative to the reference object or within 
			 * the container object. (Optional)
			 * @param {any} referenceParam - The reference object. Note: 
			 * Required when the at parameter is before or after. Can 
			 * accept: Document, Spread, MasterSpread, Page, Layer or 
			 * PageItem. (Optional)
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new Button (Optional)
			 */
			public add(layerParam: Layer, atParam: LocationOptions, referenceParam: any, withPropertiesParam: any): Adobe.Incopy.Button;
			/** Returns any Button in the collection. */
			public anyItem(): Adobe.Incopy.Button;
			/** Displays the number of elements in the Button. */
			public count(): number;
			/** Returns every Button in the collection. */
			public everyItem(): any;
			/** Returns the first Button in the collection. */
			public firstItem(): Adobe.Incopy.Button;
			/**
			 * Returns the Button with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.Button;
			/**
			 * Returns the Button with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.Button;
			/**
			 * Returns the Button with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.Button;
			/**
			 * Returns the Buttons within the specified range.
			 * @param {any} fromParam - The Button, index, or name at the 
			 * beginning of the range. Can accept: Button, Long Integer or 
			 * String.
			 * @param {any} toParam - The Button, index, or name at the end 
			 * of the range. Can accept: Button, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Button in the collection. */
			public lastItem(): Adobe.Incopy.Button;
			/** Returns the middle Button in the collection. */
			public middleItem(): Adobe.Incopy.Button;
			/**
			 * Returns the Button whose index follows the specified Button 
			 * in the collection.
			 * @param {Button} objParam - The Button whose index comes 
			 * before the desired Button. 
			 */
			public nextItem(objParam: Button): Adobe.Incopy.Button;
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
			 * Returns the Button with the index previous to the specified 
			 * index.
			 * @param {Button} objParam - The index of the Button that 
			 * follows the desired Button.
			 */
			public previousItem(objParam: Button): Adobe.Incopy.Button;
		}
	}
}