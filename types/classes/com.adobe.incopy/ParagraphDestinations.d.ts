/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ParagraphDestinations extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new paragraph destination.
			 * @param {Text} destinationParam - The text or insertion point 
			 * inside the paragraph that the cross reference points to. The 
			 * insertion point is always adjusted to the beginning of the 
			 * paragraph.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new ParagraphDestination (Optional)
			 */
			public add(destinationParam: Text, withPropertiesParam: any): Adobe.Incopy.ParagraphDestination;
			/** Returns any ParagraphDestination in the collection. */
			public anyItem(): Adobe.Incopy.ParagraphDestination;
			/**
			 * Displays the number of elements in the ParagraphDestination.
			 */
			public count(): number;
			/** Returns every ParagraphDestination in the collection. */
			public everyItem(): any;
			/** Returns the first ParagraphDestination in the collection. */
			public firstItem(): Adobe.Incopy.ParagraphDestination;
			/**
			 * Returns the ParagraphDestination with the specified index or 
			 * name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.ParagraphDestination;
			/**
			 * Returns the ParagraphDestination with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.ParagraphDestination;
			/**
			 * Returns the ParagraphDestination with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.ParagraphDestination;
			/**
			 * Returns the ParagraphDestinations within the specified 
			 * range.
			 * @param {any} fromParam - The ParagraphDestination, index, or 
			 * name at the beginning of the range. Can accept: 
			 * ParagraphDestination, Long Integer or String.
			 * @param {any} toParam - The ParagraphDestination, index, or 
			 * name at the end of the range. Can accept: 
			 * ParagraphDestination, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last ParagraphDestination in the collection. */
			public lastItem(): Adobe.Incopy.ParagraphDestination;
			/** Returns the middle ParagraphDestination in the collection. */
			public middleItem(): Adobe.Incopy.ParagraphDestination;
			/**
			 * Returns the ParagraphDestination whose index follows the 
			 * specified ParagraphDestination in the collection.
			 * @param {ParagraphDestination} objParam - The 
			 * ParagraphDestination whose index comes before the desired 
			 * ParagraphDestination. 
			 */
			public nextItem(objParam: ParagraphDestination): Adobe.Incopy.ParagraphDestination;
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
			 * Returns the ParagraphDestination with the index previous to 
			 * the specified index.
			 * @param {ParagraphDestination} objParam - The index of the 
			 * ParagraphDestination that follows the desired 
			 * ParagraphDestination.
			 */
			public previousItem(objParam: ParagraphDestination): Adobe.Incopy.ParagraphDestination;
		}
	}
}