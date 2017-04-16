/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
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
			 * Integer, HyperlinkTextDestination, HyperlinkPageDestination, 
			 * HyperlinkExternalPageDestination, HyperlinkURLDestination or 
			 * ParagraphDestination. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new Hyperlink (Optional)
			 * @returns {Adobe.Indesign.Hyperlink}
			 */
			public add(hyperlinkSourceParam: any, hyperlinkDestinationParam: any, withPropertiesParam: any): Adobe.Indesign.Hyperlink;
			/**
			 * Returns any Hyperlink in the collection.
			 * @returns {Adobe.Indesign.Hyperlink}
			 */
			public anyItem(): Adobe.Indesign.Hyperlink;
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
			 * @returns {Adobe.Indesign.Hyperlink}
			 */
			public firstItem(): Adobe.Indesign.Hyperlink;
			/**
			 * Returns the Hyperlink with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.Hyperlink}
			 */
			public item(indexParam: any): Adobe.Indesign.Hyperlink;
			/**
			 * Returns the Hyperlink with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.Hyperlink}
			 */
			public itemByID(idParam: number): Adobe.Indesign.Hyperlink;
			/**
			 * Returns the Hyperlink with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.Hyperlink}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Hyperlink;
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
			 * @returns {Adobe.Indesign.Hyperlink}
			 */
			public lastItem(): Adobe.Indesign.Hyperlink;
			/**
			 * Returns the middle Hyperlink in the collection.
			 * @returns {Adobe.Indesign.Hyperlink}
			 */
			public middleItem(): Adobe.Indesign.Hyperlink;
			/**
			 * Returns the Hyperlink whose index follows the specified 
			 * Hyperlink in the collection.
			 * @param {Hyperlink} objParam The Hyperlink whose index comes 
			 * before the desired Hyperlink. 
			 * @returns {Adobe.Indesign.Hyperlink}
			 */
			public nextItem(objParam: Hyperlink): Adobe.Indesign.Hyperlink;
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
			 * @returns {Adobe.Indesign.Hyperlink}
			 */
			public previousItem(objParam: Hyperlink): Adobe.Indesign.Hyperlink;
		}
	}
}