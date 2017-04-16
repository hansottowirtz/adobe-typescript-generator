/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Books extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new book.
			 * @param {File} fullNameParam The full path name of the new 
			 * book file, including the book file extension '.indb'.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new Book (Optional)
			 */
			public add(fullNameParam: File, withPropertiesParam: any): Adobe.Indesign.Book;
			/** Returns any Book in the collection. */
			public anyItem(): Adobe.Indesign.Book;
			/** Displays the number of elements in the Book. */
			public count(): number;
			/** Returns every Book in the collection. */
			public everyItem(): any;
			/** Returns the first Book in the collection. */
			public firstItem(): Adobe.Indesign.Book;
			/**
			 * Returns the Book with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.Book;
			/**
			 * Returns the Book with the specified name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Book;
			/**
			 * Returns the Books within the specified range.
			 * @param {any} fromParam The Book, index, or name at the 
			 * beginning of the range. Can accept: Book, Long Integer or 
			 * String.
			 * @param {any} toParam The Book, index, or name at the end of 
			 * the range. Can accept: Book, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Book in the collection. */
			public lastItem(): Adobe.Indesign.Book;
			/** Returns the middle Book in the collection. */
			public middleItem(): Adobe.Indesign.Book;
			/**
			 * Returns the Book whose index follows the specified Book in 
			 * the collection.
			 * @param {Book} objParam The Book whose index comes before the 
			 * desired Book. 
			 */
			public nextItem(objParam: Book): Adobe.Indesign.Book;
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
			 * Returns the Book with the index previous to the specified 
			 * index.
			 * @param {Book} objParam The index of the Book that follows 
			 * the desired Book.
			 */
			public previousItem(objParam: Book): Adobe.Indesign.Book;
		}
	}
}