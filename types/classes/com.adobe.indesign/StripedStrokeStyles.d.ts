/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class StripedStrokeStyles extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new StripedStrokeStyle.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new StripedStrokeStyle (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.StripedStrokeStyle;
			/** Returns any StripedStrokeStyle in the collection. */
			public anyItem(): Adobe.Indesign.StripedStrokeStyle;
			/** Displays the number of elements in the StripedStrokeStyle. */
			public count(): number;
			/** Returns every StripedStrokeStyle in the collection. */
			public everyItem(): any;
			/** Returns the first StripedStrokeStyle in the collection. */
			public firstItem(): Adobe.Indesign.StripedStrokeStyle;
			/**
			 * Returns the StripedStrokeStyle with the specified index or 
			 * name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.StripedStrokeStyle;
			/**
			 * Returns the StripedStrokeStyle with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.StripedStrokeStyle;
			/**
			 * Returns the StripedStrokeStyle with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.StripedStrokeStyle;
			/**
			 * Returns the StripedStrokeStyles within the specified range.
			 * @param {any} fromParam - The StripedStrokeStyle, index, or 
			 * name at the beginning of the range. Can accept: 
			 * StripedStrokeStyle, Long Integer or String.
			 * @param {any} toParam - The StripedStrokeStyle, index, or 
			 * name at the end of the range. Can accept: 
			 * StripedStrokeStyle, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last StripedStrokeStyle in the collection. */
			public lastItem(): Adobe.Indesign.StripedStrokeStyle;
			/** Returns the middle StripedStrokeStyle in the collection. */
			public middleItem(): Adobe.Indesign.StripedStrokeStyle;
			/**
			 * Returns the StripedStrokeStyle whose index follows the 
			 * specified StripedStrokeStyle in the collection.
			 * @param {StripedStrokeStyle} objParam - The 
			 * StripedStrokeStyle whose index comes before the desired 
			 * StripedStrokeStyle. 
			 */
			public nextItem(objParam: StripedStrokeStyle): Adobe.Indesign.StripedStrokeStyle;
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
			 * Returns the StripedStrokeStyle with the index previous to 
			 * the specified index.
			 * @param {StripedStrokeStyle} objParam - The index of the 
			 * StripedStrokeStyle that follows the desired 
			 * StripedStrokeStyle.
			 */
			public previousItem(objParam: StripedStrokeStyle): Adobe.Indesign.StripedStrokeStyle;
		}
	}
}