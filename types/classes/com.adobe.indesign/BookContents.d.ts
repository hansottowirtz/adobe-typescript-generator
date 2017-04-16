/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class BookContents extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new book content object.
			 * @param {File} fullNameParam The full path name of the new 
			 * book content object.
			 * @param {number} atParam
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new BookContent (Optional)
			 * @returns {Adobe.Indesign.BookContent}
			 */
			public add(fullNameParam: File, atParam: number, withPropertiesParam: any): Adobe.Indesign.BookContent;
			/**
			 * Returns any BookContent in the collection.
			 * @returns {Adobe.Indesign.BookContent}
			 */
			public anyItem(): Adobe.Indesign.BookContent;
			/**
			 * Displays the number of elements in the BookContent.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every BookContent in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first BookContent in the collection.
			 * @returns {Adobe.Indesign.BookContent}
			 */
			public firstItem(): Adobe.Indesign.BookContent;
			/**
			 * Returns the BookContent with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.BookContent}
			 */
			public item(indexParam: any): Adobe.Indesign.BookContent;
			/**
			 * Returns the BookContent with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.BookContent}
			 */
			public itemByID(idParam: number): Adobe.Indesign.BookContent;
			/**
			 * Returns the BookContent with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.BookContent}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.BookContent;
			/**
			 * Returns the BookContents within the specified range.
			 * @param {any} fromParam The BookContent, index, or name at 
			 * the beginning of the range. Can accept: BookContent, Long 
			 * Integer or String.
			 * @param {any} toParam The BookContent, index, or name at the 
			 * end of the range. Can accept: BookContent, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last BookContent in the collection.
			 * @returns {Adobe.Indesign.BookContent}
			 */
			public lastItem(): Adobe.Indesign.BookContent;
			/**
			 * Returns the middle BookContent in the collection.
			 * @returns {Adobe.Indesign.BookContent}
			 */
			public middleItem(): Adobe.Indesign.BookContent;
			/**
			 * Returns the BookContent whose index follows the specified 
			 * BookContent in the collection.
			 * @param {BookContent} objParam The BookContent whose index 
			 * comes before the desired BookContent. 
			 * @returns {Adobe.Indesign.BookContent}
			 */
			public nextItem(objParam: BookContent): Adobe.Indesign.BookContent;
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
			 * Returns the BookContent with the index previous to the 
			 * specified index.
			 * @param {BookContent} objParam The index of the BookContent 
			 * that follows the desired BookContent.
			 * @returns {Adobe.Indesign.BookContent}
			 */
			public previousItem(objParam: BookContent): Adobe.Indesign.BookContent;
		}
	}
}