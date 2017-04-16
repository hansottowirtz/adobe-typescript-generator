/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Hyperlinks extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new hyperlink.
			 * @param {any} hyperlinkSourceParam The hyperlinked object. 
			 * Can accept: HyperlinkPageItemSource, HyperlinkTextSource or 
			 * CrossReferenceSource.
			 * @param {any} hyperlinkDestinationParam The destination that 
			 * the hyperlink points to. Can accept: Ordered array 
			 * containing fileName:String, volumn:String, directoryId:Long 
			 * Integer, dataLinkClassId:Long Integer, destinationUid:Long 
			 * Integer, HyperlinkTextDestination, 
			 * HyperlinkExternalPageDestination, HyperlinkURLDestination or 
			 * ParagraphDestination. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new Hyperlink (Optional)
			 * @returns {Adobe.Incopy.Hyperlink}
			 */
			public add(hyperlinkSourceParam: any, hyperlinkDestinationParam: any, withPropertiesParam: any): Adobe.Incopy.Hyperlink;
			/**
			 * Returns any Hyperlink in the collection.
			 * @returns {Adobe.Incopy.Hyperlink}
			 */
			public anyItem(): Adobe.Incopy.Hyperlink;
			/**
			 * Displays the number of elements in the Hyperlink.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Hyperlink in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Hyperlink in the collection.
			 * @returns {Adobe.Incopy.Hyperlink}
			 */
			public firstItem(): Adobe.Incopy.Hyperlink;
			/**
			 * Returns the Hyperlink with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.Hyperlink}
			 */
			public item(indexParam: any): Adobe.Incopy.Hyperlink;
			/**
			 * Returns the Hyperlink with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.Hyperlink}
			 */
			public itemByID(idParam: number): Adobe.Incopy.Hyperlink;
			/**
			 * Returns the Hyperlink with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.Hyperlink}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.Hyperlink;
			/**
			 * Returns the Hyperlinks within the specified range.
			 * @param {any} fromParam The Hyperlink, index, or name at the 
			 * beginning of the range. Can accept: Hyperlink, Long Integer 
			 * or String.
			 * @param {any} toParam The Hyperlink, index, or name at the 
			 * end of the range. Can accept: Hyperlink, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Hyperlink in the collection.
			 * @returns {Adobe.Incopy.Hyperlink}
			 */
			public lastItem(): Adobe.Incopy.Hyperlink;
			/**
			 * Returns the middle Hyperlink in the collection.
			 * @returns {Adobe.Incopy.Hyperlink}
			 */
			public middleItem(): Adobe.Incopy.Hyperlink;
			/**
			 * Returns the Hyperlink whose index follows the specified 
			 * Hyperlink in the collection.
			 * @param {Hyperlink} objParam The Hyperlink whose index comes 
			 * before the desired Hyperlink. 
			 * @returns {Adobe.Incopy.Hyperlink}
			 */
			public nextItem(objParam: Hyperlink): Adobe.Incopy.Hyperlink;
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
			 * Returns the Hyperlink with the index previous to the 
			 * specified index.
			 * @param {Hyperlink} objParam The index of the Hyperlink that 
			 * follows the desired Hyperlink.
			 * @returns {Adobe.Incopy.Hyperlink}
			 */
			public previousItem(objParam: Hyperlink): Adobe.Incopy.Hyperlink;
		}
	}
}