/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class InsertionPoints extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any InsertionPoint in the collection. */
			public anyItem(): Adobe.Indesign.InsertionPoint;
			/** Displays the number of elements in the InsertionPoint. */
			public count(): number;
			/** Returns every InsertionPoint in the collection. */
			public everyItem(): any;
			/** Returns the first InsertionPoint in the collection. */
			public firstItem(): Adobe.Indesign.InsertionPoint;
			/**
			 * Returns the InsertionPoint with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.InsertionPoint;
			/**
			 * Returns the InsertionPoints within the specified range.
			 * @param {any} fromParam - The InsertionPoint, index, or name 
			 * at the beginning of the range. Can accept: InsertionPoint, 
			 * Long Integer or String.
			 * @param {any} toParam - The InsertionPoint, index, or name at 
			 * the end of the range. Can accept: InsertionPoint, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last InsertionPoint in the collection. */
			public lastItem(): Adobe.Indesign.InsertionPoint;
			/** Returns the middle InsertionPoint in the collection. */
			public middleItem(): Adobe.Indesign.InsertionPoint;
			/**
			 * Returns the InsertionPoint whose index follows the specified 
			 * InsertionPoint in the collection.
			 * @param {InsertionPoint} objParam - The InsertionPoint whose 
			 * index comes before the desired InsertionPoint. 
			 */
			public nextItem(objParam: InsertionPoint): Adobe.Indesign.InsertionPoint;
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
			 * Returns the InsertionPoint with the index previous to the 
			 * specified index.
			 * @param {InsertionPoint} objParam - The index of the 
			 * InsertionPoint that follows the desired InsertionPoint.
			 */
			public previousItem(objParam: InsertionPoint): Adobe.Indesign.InsertionPoint;
		}
	}
}