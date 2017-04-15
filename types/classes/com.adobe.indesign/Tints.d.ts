/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Tints extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new tint swatch.
			 * @param {Color} baseColorParam - The color that the tint is 
			 * based upon.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new Tint (Optional)
			 */
			public add(baseColorParam: Color, withPropertiesParam: any): Adobe.Indesign.Tint;
			/** Returns any Tint in the collection. */
			public anyItem(): Adobe.Indesign.Tint;
			/** Displays the number of elements in the Tint. */
			public count(): number;
			/** Returns every Tint in the collection. */
			public everyItem(): any;
			/** Returns the first Tint in the collection. */
			public firstItem(): Adobe.Indesign.Tint;
			/**
			 * Returns the Tint with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.Tint;
			/**
			 * Returns the Tint with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.Tint;
			/**
			 * Returns the Tint with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Tint;
			/**
			 * Returns the Tints within the specified range.
			 * @param {any} fromParam - The Tint, index, or name at the 
			 * beginning of the range. Can accept: Tint, Long Integer or 
			 * String.
			 * @param {any} toParam - The Tint, index, or name at the end 
			 * of the range. Can accept: Tint, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Tint in the collection. */
			public lastItem(): Adobe.Indesign.Tint;
			/** Returns the middle Tint in the collection. */
			public middleItem(): Adobe.Indesign.Tint;
			/**
			 * Returns the Tint whose index follows the specified Tint in 
			 * the collection.
			 * @param {Tint} objParam - The Tint whose index comes before 
			 * the desired Tint. 
			 */
			public nextItem(objParam: Tint): Adobe.Indesign.Tint;
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
			 * Returns the Tint with the index previous to the specified 
			 * index.
			 * @param {Tint} objParam - The index of the Tint that follows 
			 * the desired Tint.
			 */
			public previousItem(objParam: Tint): Adobe.Indesign.Tint;
		}
	}
}