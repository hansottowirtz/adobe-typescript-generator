/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class RadiobuttonControls extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new RadiobuttonControl.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new RadiobuttonControl (Optional)
			 * @returns {Adobe.Incopy.RadiobuttonControl}
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.RadiobuttonControl;
			/**
			 * Returns any RadiobuttonControl in the collection.
			 * @returns {Adobe.Incopy.RadiobuttonControl}
			 */
			public anyItem(): Adobe.Incopy.RadiobuttonControl;
			/**
			 * Displays the number of elements in the RadiobuttonControl.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every RadiobuttonControl in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first RadiobuttonControl in the collection.
			 * @returns {Adobe.Incopy.RadiobuttonControl}
			 */
			public firstItem(): Adobe.Incopy.RadiobuttonControl;
			/**
			 * Returns the RadiobuttonControl with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.RadiobuttonControl}
			 */
			public item(indexParam: any): Adobe.Incopy.RadiobuttonControl;
			/**
			 * Returns the RadiobuttonControl with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.RadiobuttonControl}
			 */
			public itemByID(idParam: number): Adobe.Incopy.RadiobuttonControl;
			/**
			 * Returns the RadiobuttonControls within the specified range.
			 * @param {any} fromParam The RadiobuttonControl, index, or 
			 * name at the beginning of the range. Can accept: 
			 * RadiobuttonControl, Long Integer or String.
			 * @param {any} toParam The RadiobuttonControl, index, or name 
			 * at the end of the range. Can accept: RadiobuttonControl, 
			 * Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last RadiobuttonControl in the collection.
			 * @returns {Adobe.Incopy.RadiobuttonControl}
			 */
			public lastItem(): Adobe.Incopy.RadiobuttonControl;
			/**
			 * Returns the middle RadiobuttonControl in the collection.
			 * @returns {Adobe.Incopy.RadiobuttonControl}
			 */
			public middleItem(): Adobe.Incopy.RadiobuttonControl;
			/**
			 * Returns the RadiobuttonControl whose index follows the 
			 * specified RadiobuttonControl in the collection.
			 * @param {RadiobuttonControl} objParam The RadiobuttonControl 
			 * whose index comes before the desired RadiobuttonControl. 
			 * @returns {Adobe.Incopy.RadiobuttonControl}
			 */
			public nextItem(objParam: RadiobuttonControl): Adobe.Incopy.RadiobuttonControl;
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
			 * Returns the RadiobuttonControl with the index previous to 
			 * the specified index.
			 * @param {RadiobuttonControl} objParam The index of the 
			 * RadiobuttonControl that follows the desired 
			 * RadiobuttonControl.
			 * @returns {Adobe.Incopy.RadiobuttonControl}
			 */
			public previousItem(objParam: RadiobuttonControl): Adobe.Incopy.RadiobuttonControl;
		}
	}
}