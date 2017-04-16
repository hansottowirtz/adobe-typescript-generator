/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Books extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new book.
			 * @param {File} fullNameParam The full path name of the new 
			 * book file, including the book file extension '.indb'.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new Book (Optional)
			 * @returns {Adobe.Indesign.Book}
			 */
			public add(fullNameParam: File, withPropertiesParam: any): Adobe.Indesign.Book;
			/**
			 * Returns any Book in the collection.
			 * @returns {Adobe.Indesign.Book}
			 */
			public anyItem(): Adobe.Indesign.Book;
			/**
			 * Displays the number of elements in the Book.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Book in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Book in the collection.
			 * @returns {Adobe.Indesign.Book}
			 */
			public firstItem(): Adobe.Indesign.Book;
			/**
			 * Returns the Book with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.Book}
			 */
			public item(indexParam: any): Adobe.Indesign.Book;
			/**
			 * Returns the Book with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.Book}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Book;
			/**
			 * Returns the Books within the specified range.
			 * @param {any} fromParam The Book, index, or name at the 
			 * beginning of the range. Can accept: Book, Long Integer or 
			 * String.
			 * @param {any} toParam The Book, index, or name at the end of 
			 * the range. Can accept: Book, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Book in the collection.
			 * @returns {Adobe.Indesign.Book}
			 */
			public lastItem(): Adobe.Indesign.Book;
			/**
			 * Returns the middle Book in the collection.
			 * @returns {Adobe.Indesign.Book}
			 */
			public middleItem(): Adobe.Indesign.Book;
			/**
			 * Returns the Book whose index follows the specified Book in 
			 * the collection.
			 * @param {Book} objParam The Book whose index comes before the 
			 * desired Book. 
			 * @returns {Adobe.Indesign.Book}
			 */
			public nextItem(objParam: Book): Adobe.Indesign.Book;
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
			 * Returns the Book with the index previous to the specified 
			 * index.
			 * @param {Book} objParam The index of the Book that follows 
			 * the desired Book.
			 * @returns {Adobe.Indesign.Book}
			 */
			public previousItem(objParam: Book): Adobe.Indesign.Book;
		}
	}
}