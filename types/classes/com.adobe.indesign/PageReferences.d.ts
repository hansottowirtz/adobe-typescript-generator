/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PageReferences extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new page reference.
			 * @param {Text} sourceParam - The text or insertion point to 
			 * which the page reference points.
			 * @param {PageReferenceType} pageReferenceTypeParam - The page 
			 * number for an index page reference or the last page in an 
			 * index page reference page range. (Optional)
			 * @param {any} pageReferenceLimitParam - The paragraph style 
			 * or number of paragraphs or pages that defines the last page 
			 * in a page range. Valid only when page reference type 
			 * specifies the next use of a paragraph style or a number of 
			 * paragraphs or pages. . Can accept: ParagraphStyle or Long 
			 * Integer. (Optional)
			 * @param {CharacterStyle} pageNumberStyleOverrideParam - The 
			 * style override for the page number.  (Optional)
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new PageReference (Optional)
			 */
			public add(sourceParam: Text, pageReferenceTypeParam: PageReferenceType, pageReferenceLimitParam: any, pageNumberStyleOverrideParam: CharacterStyle, withPropertiesParam: any): Adobe.Indesign.PageReference;
			/** Returns any PageReference in the collection. */
			public anyItem(): Adobe.Indesign.PageReference;
			/** Displays the number of elements in the PageReference. */
			public count(): number;
			/** Returns every PageReference in the collection. */
			public everyItem(): any;
			/** Returns the first PageReference in the collection. */
			public firstItem(): Adobe.Indesign.PageReference;
			/**
			 * Returns the PageReference with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.PageReference;
			/**
			 * Returns the PageReference with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.PageReference;
			/**
			 * Returns the PageReference with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.PageReference;
			/**
			 * Returns the PageReferences within the specified range.
			 * @param {any} fromParam - The PageReference, index, or name 
			 * at the beginning of the range. Can accept: PageReference, 
			 * Long Integer or String.
			 * @param {any} toParam - The PageReference, index, or name at 
			 * the end of the range. Can accept: PageReference, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last PageReference in the collection. */
			public lastItem(): Adobe.Indesign.PageReference;
			/** Returns the middle PageReference in the collection. */
			public middleItem(): Adobe.Indesign.PageReference;
			/**
			 * Returns the PageReference whose index follows the specified 
			 * PageReference in the collection.
			 * @param {PageReference} objParam - The PageReference whose 
			 * index comes before the desired PageReference. 
			 */
			public nextItem(objParam: PageReference): Adobe.Indesign.PageReference;
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
			 * Returns the PageReference with the index previous to the 
			 * specified index.
			 * @param {PageReference} objParam - The index of the 
			 * PageReference that follows the desired PageReference.
			 */
			public previousItem(objParam: PageReference): Adobe.Indesign.PageReference;
		}
	}
}