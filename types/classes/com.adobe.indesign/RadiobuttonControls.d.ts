/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
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
			 * @returns {Adobe.Indesign.RadiobuttonControl}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.RadiobuttonControl;
			/**
			 * Returns any RadiobuttonControl in the collection.
			 * @returns {Adobe.Indesign.RadiobuttonControl}
			 */
			public anyItem(): Adobe.Indesign.RadiobuttonControl;
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
			 * @returns {Adobe.Indesign.RadiobuttonControl}
			 */
			public firstItem(): Adobe.Indesign.RadiobuttonControl;
			/**
			 * Returns the RadiobuttonControl with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.RadiobuttonControl}
			 */
			public item(indexParam: any): Adobe.Indesign.RadiobuttonControl;
			/**
			 * Returns the RadiobuttonControl with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.RadiobuttonControl}
			 */
			public itemByID(idParam: number): Adobe.Indesign.RadiobuttonControl;
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
			 * @returns {Adobe.Indesign.RadiobuttonControl}
			 */
			public lastItem(): Adobe.Indesign.RadiobuttonControl;
			/**
			 * Returns the middle RadiobuttonControl in the collection.
			 * @returns {Adobe.Indesign.RadiobuttonControl}
			 */
			public middleItem(): Adobe.Indesign.RadiobuttonControl;
			/**
			 * Returns the RadiobuttonControl whose index follows the 
			 * specified RadiobuttonControl in the collection.
			 * @param {RadiobuttonControl} objParam The RadiobuttonControl 
			 * whose index comes before the desired RadiobuttonControl. 
			 * @returns {Adobe.Indesign.RadiobuttonControl}
			 */
			public nextItem(objParam: RadiobuttonControl): Adobe.Indesign.RadiobuttonControl;
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
			 * @returns {Adobe.Indesign.RadiobuttonControl}
			 */
			public previousItem(objParam: RadiobuttonControl): Adobe.Indesign.RadiobuttonControl;
		}
	}
}