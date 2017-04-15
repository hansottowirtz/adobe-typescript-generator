/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class EPSTexts extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any EPSText in the collection. */
			public anyItem(): Adobe.Indesign.EPSText;
			/** Displays the number of elements in the EPSText. */
			public count(): number;
			/** Returns every EPSText in the collection. */
			public everyItem(): any;
			/** Returns the first EPSText in the collection. */
			public firstItem(): Adobe.Indesign.EPSText;
			/**
			 * Returns the EPSText with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.EPSText;
			/**
			 * Returns the EPSText with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.EPSText;
			/**
			 * Returns the EPSText with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.EPSText;
			/**
			 * Returns the EPSTexts within the specified range.
			 * @param {any} fromParam - The EPSText, index, or name at the 
			 * beginning of the range. Can accept: EPSText, Long Integer or 
			 * String.
			 * @param {any} toParam - The EPSText, index, or name at the 
			 * end of the range. Can accept: EPSText, Long Integer or 
			 * String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last EPSText in the collection. */
			public lastItem(): Adobe.Indesign.EPSText;
			/** Returns the middle EPSText in the collection. */
			public middleItem(): Adobe.Indesign.EPSText;
			/**
			 * Returns the EPSText whose index follows the specified 
			 * EPSText in the collection.
			 * @param {EPSText} objParam - The EPSText whose index comes 
			 * before the desired EPSText. 
			 */
			public nextItem(objParam: EPSText): Adobe.Indesign.EPSText;
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
			 * Returns the EPSText with the index previous to the specified 
			 * index.
			 * @param {EPSText} objParam - The index of the EPSText that 
			 * follows the desired EPSText.
			 */
			public previousItem(objParam: EPSText): Adobe.Indesign.EPSText;
		}
	}
}