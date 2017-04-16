/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Documents extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new document.
			 * @param {boolean} showingWindowParam If true, displays the 
			 * document. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new Document (Optional)
			 * @returns {Adobe.Incopy.Document}
			 */
			public add(showingWindowParam: boolean, withPropertiesParam: any): Adobe.Incopy.Document;
			/**
			 * Returns any Document in the collection.
			 * @returns {Adobe.Incopy.Document}
			 */
			public anyItem(): Adobe.Incopy.Document;
			/**
			 * Displays the number of elements in the Document.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Document in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Document in the collection.
			 * @returns {Adobe.Incopy.Document}
			 */
			public firstItem(): Adobe.Incopy.Document;
			/**
			 * Returns the Document with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.Document}
			 */
			public item(indexParam: any): Adobe.Incopy.Document;
			/**
			 * Returns the Document with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.Document}
			 */
			public itemByID(idParam: number): Adobe.Incopy.Document;
			/**
			 * Returns the Document with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.Document}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.Document;
			/**
			 * Returns the Documents within the specified range.
			 * @param {any} fromParam The Document, index, or name at the 
			 * beginning of the range. Can accept: Document, Long Integer 
			 * or String.
			 * @param {any} toParam The Document, index, or name at the end 
			 * of the range. Can accept: Document, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Document in the collection.
			 * @returns {Adobe.Incopy.Document}
			 */
			public lastItem(): Adobe.Incopy.Document;
			/**
			 * Returns the middle Document in the collection.
			 * @returns {Adobe.Incopy.Document}
			 */
			public middleItem(): Adobe.Incopy.Document;
			/**
			 * Returns the Document whose index follows the specified 
			 * Document in the collection.
			 * @param {Document} objParam The Document whose index comes 
			 * before the desired Document. 
			 * @returns {Adobe.Incopy.Document}
			 */
			public nextItem(objParam: Document): Adobe.Incopy.Document;
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
			 * Returns the Document with the index previous to the 
			 * specified index.
			 * @param {Document} objParam The index of the Document that 
			 * follows the desired Document.
			 * @returns {Adobe.Incopy.Document}
			 */
			public previousItem(objParam: Document): Adobe.Incopy.Document;
		}
	}
}