/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Conditions extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new Condition.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new Condition (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.Condition;
			/** Returns any Condition in the collection. */
			public anyItem(): Adobe.Incopy.Condition;
			/** Displays the number of elements in the Condition. */
			public count(): number;
			/** Returns every Condition in the collection. */
			public everyItem(): any;
			/** Returns the first Condition in the collection. */
			public firstItem(): Adobe.Incopy.Condition;
			/**
			 * Returns the Condition with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.Condition;
			/**
			 * Returns the Condition with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.Condition;
			/**
			 * Returns the Condition with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.Condition;
			/**
			 * Returns the Conditions within the specified range.
			 * @param {any} fromParam - The Condition, index, or name at 
			 * the beginning of the range. Can accept: Condition, Long 
			 * Integer or String.
			 * @param {any} toParam - The Condition, index, or name at the 
			 * end of the range. Can accept: Condition, Long Integer or 
			 * String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Condition in the collection. */
			public lastItem(): Adobe.Incopy.Condition;
			/** Returns the middle Condition in the collection. */
			public middleItem(): Adobe.Incopy.Condition;
			/**
			 * Returns the Condition whose index follows the specified 
			 * Condition in the collection.
			 * @param {Condition} objParam - The Condition whose index 
			 * comes before the desired Condition. 
			 */
			public nextItem(objParam: Condition): Adobe.Incopy.Condition;
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
			 * Returns the Condition with the index previous to the 
			 * specified index.
			 * @param {Condition} objParam - The index of the Condition 
			 * that follows the desired Condition.
			 */
			public previousItem(objParam: Condition): Adobe.Incopy.Condition;
		}
	}
}