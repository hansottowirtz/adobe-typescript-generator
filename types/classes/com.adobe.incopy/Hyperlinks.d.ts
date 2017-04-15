/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Hyperlinks extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new hyperlink.
			 * @param {any} hyperlinkSourceParam - The hyperlinked object. 
			 * Can accept: HyperlinkPageItemSource, HyperlinkTextSource or 
			 * CrossReferenceSource.
			 * @param {any} hyperlinkDestinationParam - The destination 
			 * that the hyperlink points to. Can accept: Ordered array 
			 * containing fileName:String, volumn:String, directoryId:Long 
			 * Integer, dataLinkClassId:Long Integer, destinationUid:Long 
			 * Integer, HyperlinkTextDestination, 
			 * HyperlinkExternalPageDestination, HyperlinkURLDestination or 
			 * ParagraphDestination. (Optional)
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new Hyperlink (Optional)
			 */
			public add(hyperlinkSourceParam: any, hyperlinkDestinationParam: any, withPropertiesParam: any): Adobe.Incopy.Hyperlink;
			/** Returns any Hyperlink in the collection. */
			public anyItem(): Adobe.Incopy.Hyperlink;
			/** Displays the number of elements in the Hyperlink. */
			public count(): number;
			/** Returns every Hyperlink in the collection. */
			public everyItem(): any;
			/** Returns the first Hyperlink in the collection. */
			public firstItem(): Adobe.Incopy.Hyperlink;
			/**
			 * Returns the Hyperlink with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.Hyperlink;
			/**
			 * Returns the Hyperlink with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.Hyperlink;
			/**
			 * Returns the Hyperlink with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.Hyperlink;
			/**
			 * Returns the Hyperlinks within the specified range.
			 * @param {any} fromParam - The Hyperlink, index, or name at 
			 * the beginning of the range. Can accept: Hyperlink, Long 
			 * Integer or String.
			 * @param {any} toParam - The Hyperlink, index, or name at the 
			 * end of the range. Can accept: Hyperlink, Long Integer or 
			 * String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Hyperlink in the collection. */
			public lastItem(): Adobe.Incopy.Hyperlink;
			/** Returns the middle Hyperlink in the collection. */
			public middleItem(): Adobe.Incopy.Hyperlink;
			/**
			 * Returns the Hyperlink whose index follows the specified 
			 * Hyperlink in the collection.
			 * @param {Hyperlink} objParam - The Hyperlink whose index 
			 * comes before the desired Hyperlink. 
			 */
			public nextItem(objParam: Hyperlink): Adobe.Incopy.Hyperlink;
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
			 * Returns the Hyperlink with the index previous to the 
			 * specified index.
			 * @param {Hyperlink} objParam - The index of the Hyperlink 
			 * that follows the desired Hyperlink.
			 */
			public previousItem(objParam: Hyperlink): Adobe.Incopy.Hyperlink;
		}
	}
}