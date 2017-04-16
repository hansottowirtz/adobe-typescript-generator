/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class CheckboxControls extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new CheckboxControl.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new CheckboxControl (Optional)
			 * @returns {Adobe.Incopy.CheckboxControl}
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.CheckboxControl;
			/**
			 * Returns any CheckboxControl in the collection.
			 * @returns {Adobe.Incopy.CheckboxControl}
			 */
			public anyItem(): Adobe.Incopy.CheckboxControl;
			/**
			 * Displays the number of elements in the CheckboxControl.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every CheckboxControl in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first CheckboxControl in the collection.
			 * @returns {Adobe.Incopy.CheckboxControl}
			 */
			public firstItem(): Adobe.Incopy.CheckboxControl;
			/**
			 * Returns the CheckboxControl with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.CheckboxControl}
			 */
			public item(indexParam: any): Adobe.Incopy.CheckboxControl;
			/**
			 * Returns the CheckboxControl with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.CheckboxControl}
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
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last CheckboxControl in the collection.
			 * @returns {Adobe.Incopy.CheckboxControl}
			 */
			public lastItem(): Adobe.Incopy.CheckboxControl;
			/**
			 * Returns the middle CheckboxControl in the collection.
			 * @returns {Adobe.Incopy.CheckboxControl}
			 */
			public middleItem(): Adobe.Incopy.CheckboxControl;
			/**
			 * Returns the CheckboxControl whose index follows the 
			 * specified CheckboxControl in the collection.
			 * @param {CheckboxControl} objParam The CheckboxControl whose 
			 * index comes before the desired CheckboxControl. 
			 * @returns {Adobe.Incopy.CheckboxControl}
			 */
			public nextItem(objParam: CheckboxControl): Adobe.Incopy.CheckboxControl;
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
			 * Returns the CheckboxControl with the index previous to the 
			 * specified index.
			 * @param {CheckboxControl} objParam The index of the 
			 * CheckboxControl that follows the desired CheckboxControl.
			 * @returns {Adobe.Incopy.CheckboxControl}
			 */
			public previousItem(objParam: CheckboxControl): Adobe.Incopy.CheckboxControl;
		}
	}
}