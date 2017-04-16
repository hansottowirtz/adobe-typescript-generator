/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ParagraphDestinations extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new paragraph destination.
			 * @param {Text} destinationParam The text or insertion point 
			 * inside the paragraph that the cross reference points to. The 
			 * insertion point is always adjusted to the beginning of the 
			 * paragraph.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new ParagraphDestination (Optional)
			 * @returns {Adobe.Incopy.ParagraphDestination}
			 */
			public add(destinationParam: Text, withPropertiesParam: any): Adobe.Incopy.ParagraphDestination;
			/**
			 * Returns any ParagraphDestination in the collection.
			 * @returns {Adobe.Incopy.ParagraphDestination}
			 */
			public anyItem(): Adobe.Incopy.ParagraphDestination;
			/**
			 * Displays the number of elements in the ParagraphDestination.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every ParagraphDestination in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first ParagraphDestination in the collection.
			 * @returns {Adobe.Incopy.ParagraphDestination}
			 */
			public firstItem(): Adobe.Incopy.ParagraphDestination;
			/**
			 * Returns the ParagraphDestination with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.ParagraphDestination}
			 */
			public item(indexParam: any): Adobe.Incopy.ParagraphDestination;
			/**
			 * Returns the ParagraphDestination with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.ParagraphDestination}
			 */
			public itemByID(idParam: number): Adobe.Incopy.ParagraphDestination;
			/**
			 * Returns the ParagraphDestination with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.ParagraphDestination}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.ParagraphDestination;
			/**
			 * Returns the ParagraphDestinations within the specified 
			 * range.
			 * @param {any} fromParam The ParagraphDestination, index, or 
			 * name at the beginning of the range. Can accept: 
			 * ParagraphDestination, Long Integer or String.
			 * @param {any} toParam The ParagraphDestination, index, or 
			 * name at the end of the range. Can accept: 
			 * ParagraphDestination, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last ParagraphDestination in the collection.
			 * @returns {Adobe.Incopy.ParagraphDestination}
			 */
			public lastItem(): Adobe.Incopy.ParagraphDestination;
			/**
			 * Returns the middle ParagraphDestination in the collection.
			 * @returns {Adobe.Incopy.ParagraphDestination}
			 */
			public middleItem(): Adobe.Incopy.ParagraphDestination;
			/**
			 * Returns the ParagraphDestination whose index follows the 
			 * specified ParagraphDestination in the collection.
			 * @param {ParagraphDestination} objParam The 
			 * ParagraphDestination whose index comes before the desired 
			 * ParagraphDestination. 
			 * @returns {Adobe.Incopy.ParagraphDestination}
			 */
			public nextItem(objParam: ParagraphDestination): Adobe.Incopy.ParagraphDestination;
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
			 * Returns the ParagraphDestination with the index previous to 
			 * the specified index.
			 * @param {ParagraphDestination} objParam The index of the 
			 * ParagraphDestination that follows the desired 
			 * ParagraphDestination.
			 * @returns {Adobe.Incopy.ParagraphDestination}
			 */
			public previousItem(objParam: ParagraphDestination): Adobe.Incopy.ParagraphDestination;
		}
	}
}