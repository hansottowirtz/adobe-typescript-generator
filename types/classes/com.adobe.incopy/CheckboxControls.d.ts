/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class CheckboxControls extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new CheckboxControl.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new CheckboxControl (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.CheckboxControl;
			/** Returns any CheckboxControl in the collection. */
			public anyItem(): Adobe.Incopy.CheckboxControl;
			/** Displays the number of elements in the CheckboxControl. */
			public count(): number;
			/** Returns every CheckboxControl in the collection. */
			public everyItem(): any;
			/** Returns the first CheckboxControl in the collection. */
			public firstItem(): Adobe.Incopy.CheckboxControl;
			/**
			 * Returns the CheckboxControl with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.CheckboxControl;
			/**
			 * Returns the CheckboxControl with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.CheckboxControl;
			/**
			 * Returns the CheckboxControls within the specified range.
			 * @param {any} fromParam The CheckboxControl, index, or name 
			 * at the beginning of the range. Can accept: CheckboxControl, 
			 * Long Integer or String.
			 * @param {any} toParam The CheckboxControl, index, or name at 
			 * the end of the range. Can accept: CheckboxControl, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last CheckboxControl in the collection. */
			public lastItem(): Adobe.Incopy.CheckboxControl;
			/** Returns the middle CheckboxControl in the collection. */
			public middleItem(): Adobe.Incopy.CheckboxControl;
			/**
			 * Returns the CheckboxControl whose index follows the 
			 * specified CheckboxControl in the collection.
			 * @param {CheckboxControl} objParam The CheckboxControl whose 
			 * index comes before the desired CheckboxControl. 
			 */
			public nextItem(objParam: CheckboxControl): Adobe.Incopy.CheckboxControl;
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
			 * Returns the CheckboxControl with the index previous to the 
			 * specified index.
			 * @param {CheckboxControl} objParam The index of the 
			 * CheckboxControl that follows the desired CheckboxControl.
			 */
			public previousItem(objParam: CheckboxControl): Adobe.Incopy.CheckboxControl;
		}
	}
}