/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class BorderPanels extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new BorderPanel.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new BorderPanel (Optional)
			 * @returns {Adobe.Incopy.BorderPanel}
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.BorderPanel;
			/**
			 * Returns any BorderPanel in the collection.
			 * @returns {Adobe.Incopy.BorderPanel}
			 */
			public anyItem(): Adobe.Incopy.BorderPanel;
			/**
			 * Displays the number of elements in the BorderPanel.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every BorderPanel in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first BorderPanel in the collection.
			 * @returns {Adobe.Incopy.BorderPanel}
			 */
			public firstItem(): Adobe.Incopy.BorderPanel;
			/**
			 * Returns the BorderPanel with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.BorderPanel}
			 */
			public item(indexParam: any): Adobe.Incopy.BorderPanel;
			/**
			 * Returns the BorderPanel with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.BorderPanel}
			 */
			public itemByID(idParam: number): Adobe.Incopy.BorderPanel;
			/**
			 * Returns the BorderPanels within the specified range.
			 * @param {any} fromParam The BorderPanel, index, or name at 
			 * the beginning of the range. Can accept: BorderPanel, Long 
			 * Integer or String.
			 * @param {any} toParam The BorderPanel, index, or name at the 
			 * end of the range. Can accept: BorderPanel, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last BorderPanel in the collection.
			 * @returns {Adobe.Incopy.BorderPanel}
			 */
			public lastItem(): Adobe.Incopy.BorderPanel;
			/**
			 * Returns the middle BorderPanel in the collection.
			 * @returns {Adobe.Incopy.BorderPanel}
			 */
			public middleItem(): Adobe.Incopy.BorderPanel;
			/**
			 * Returns the BorderPanel whose index follows the specified 
			 * BorderPanel in the collection.
			 * @param {BorderPanel} objParam The BorderPanel whose index 
			 * comes before the desired BorderPanel. 
			 * @returns {Adobe.Incopy.BorderPanel}
			 */
			public nextItem(objParam: BorderPanel): Adobe.Incopy.BorderPanel;
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
			 * Returns the BorderPanel with the index previous to the 
			 * specified index.
			 * @param {BorderPanel} objParam The index of the BorderPanel 
			 * that follows the desired BorderPanel.
			 * @returns {Adobe.Incopy.BorderPanel}
			 */
			public previousItem(objParam: BorderPanel): Adobe.Incopy.BorderPanel;
		}
	}
}