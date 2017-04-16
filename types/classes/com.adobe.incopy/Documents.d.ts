/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Documents extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new document.
			 * @param {boolean} showingWindowParam If true, displays the 
			 * document. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new Document (Optional)
			 */
			public add(showingWindowParam: boolean, withPropertiesParam: any): Adobe.Incopy.Document;
			/** Returns any Document in the collection. */
			public anyItem(): Adobe.Incopy.Document;
			/** Displays the number of elements in the Document. */
			public count(): number;
			/** Returns every Document in the collection. */
			public everyItem(): any;
			/** Returns the first Document in the collection. */
			public firstItem(): Adobe.Incopy.Document;
			/**
			 * Returns the Document with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.Document;
			/**
			 * Returns the Document with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.Document;
			/**
			 * Returns the Document with the specified name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.Document;
			/**
			 * Returns the Documents within the specified range.
			 * @param {any} fromParam The Document, index, or name at the 
			 * beginning of the range. Can accept: Document, Long Integer 
			 * or String.
			 * @param {any} toParam The Document, index, or name at the end 
			 * of the range. Can accept: Document, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Document in the collection. */
			public lastItem(): Adobe.Incopy.Document;
			/** Returns the middle Document in the collection. */
			public middleItem(): Adobe.Incopy.Document;
			/**
			 * Returns the Document whose index follows the specified 
			 * Document in the collection.
			 * @param {Document} objParam The Document whose index comes 
			 * before the desired Document. 
			 */
			public nextItem(objParam: Document): Adobe.Incopy.Document;
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
			 * Returns the Document with the index previous to the 
			 * specified index.
			 * @param {Document} objParam The index of the Document that 
			 * follows the desired Document.
			 */
			public previousItem(objParam: Document): Adobe.Incopy.Document;
		}
	}
}