/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PathPoints extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new PathPoint.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new PathPoint (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.PathPoint;
			/** Returns any PathPoint in the collection. */
			public anyItem(): Adobe.Indesign.PathPoint;
			/** Displays the number of elements in the PathPoint. */
			public count(): number;
			/** Returns every PathPoint in the collection. */
			public everyItem(): any;
			/** Returns the first PathPoint in the collection. */
			public firstItem(): Adobe.Indesign.PathPoint;
			/**
			 * Returns the PathPoint with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.PathPoint;
			/**
			 * Returns the PathPoints within the specified range.
			 * @param {any} fromParam - The PathPoint, index, or name at 
			 * the beginning of the range. Can accept: PathPoint, Long 
			 * Integer or String.
			 * @param {any} toParam - The PathPoint, index, or name at the 
			 * end of the range. Can accept: PathPoint, Long Integer or 
			 * String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last PathPoint in the collection. */
			public lastItem(): Adobe.Indesign.PathPoint;
			/** Returns the middle PathPoint in the collection. */
			public middleItem(): Adobe.Indesign.PathPoint;
			/**
			 * Returns the PathPoint whose index follows the specified 
			 * PathPoint in the collection.
			 * @param {PathPoint} objParam - The PathPoint whose index 
			 * comes before the desired PathPoint. 
			 */
			public nextItem(objParam: PathPoint): Adobe.Indesign.PathPoint;
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
			 * Returns the PathPoint with the index previous to the 
			 * specified index.
			 * @param {PathPoint} objParam - The index of the PathPoint 
			 * that follows the desired PathPoint.
			 */
			public previousItem(objParam: PathPoint): Adobe.Indesign.PathPoint;
		}
	}
}