/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ParagraphStyles extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new ParagraphStyle.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new ParagraphStyle (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.ParagraphStyle;
			/** Returns any ParagraphStyle in the collection. */
			public anyItem(): Adobe.Indesign.ParagraphStyle;
			/** Displays the number of elements in the ParagraphStyle. */
			public count(): number;
			/** Returns every ParagraphStyle in the collection. */
			public everyItem(): any;
			/** Returns the first ParagraphStyle in the collection. */
			public firstItem(): Adobe.Indesign.ParagraphStyle;
			/**
			 * Returns the ParagraphStyle with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.ParagraphStyle;
			/**
			 * Returns the ParagraphStyle with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.ParagraphStyle;
			/**
			 * Returns the ParagraphStyle with the specified name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.ParagraphStyle;
			/**
			 * Returns the ParagraphStyles within the specified range.
			 * @param {any} fromParam The ParagraphStyle, index, or name at 
			 * the beginning of the range. Can accept: ParagraphStyle, Long 
			 * Integer or String.
			 * @param {any} toParam The ParagraphStyle, index, or name at 
			 * the end of the range. Can accept: ParagraphStyle, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last ParagraphStyle in the collection. */
			public lastItem(): Adobe.Indesign.ParagraphStyle;
			/** Returns the middle ParagraphStyle in the collection. */
			public middleItem(): Adobe.Indesign.ParagraphStyle;
			/**
			 * Returns the ParagraphStyle whose index follows the specified 
			 * ParagraphStyle in the collection.
			 * @param {ParagraphStyle} objParam The ParagraphStyle whose 
			 * index comes before the desired ParagraphStyle. 
			 */
			public nextItem(objParam: ParagraphStyle): Adobe.Indesign.ParagraphStyle;
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
			 * Returns the ParagraphStyle with the index previous to the 
			 * specified index.
			 * @param {ParagraphStyle} objParam The index of the 
			 * ParagraphStyle that follows the desired ParagraphStyle.
			 */
			public previousItem(objParam: ParagraphStyle): Adobe.Indesign.ParagraphStyle;
		}
	}
}