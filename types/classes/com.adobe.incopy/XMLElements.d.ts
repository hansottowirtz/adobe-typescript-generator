/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class XMLElements extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new XML element.
			 * @param {any} markupTagParam The XML tag used to identify the 
			 * element. Can accept: String or XMLTag.
			 * @param {any} xmlContentParam The content to be marked up. 
			 * Can accept: Text, Image, Story, Table or Cell. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new XMLElement (Optional)
			 * @returns {Adobe.Incopy.XMLElement}
			 */
			public add(markupTagParam: any, xmlContentParam: any, withPropertiesParam: any): Adobe.Incopy.XMLElement;
			/**
			 * Returns any XMLElement in the collection.
			 * @returns {Adobe.Incopy.XMLElement}
			 */
			public anyItem(): Adobe.Incopy.XMLElement;
			/**
			 * Displays the number of elements in the XMLElement.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every XMLElement in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first XMLElement in the collection.
			 * @returns {Adobe.Incopy.XMLElement}
			 */
			public firstItem(): Adobe.Incopy.XMLElement;
			/**
			 * Returns the XMLElement with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.XMLElement}
			 */
			public item(indexParam: any): Adobe.Incopy.XMLElement;
			/**
			 * Returns the XMLElement with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.XMLElement}
			 */
			public itemByID(idParam: number): Adobe.Incopy.XMLElement;
			/**
			 * Returns the XMLElements within the specified range.
			 * @param {any} fromParam The XMLElement, index, or name at the 
			 * beginning of the range. Can accept: XMLElement, Long Integer 
			 * or String.
			 * @param {any} toParam The XMLElement, index, or name at the 
			 * end of the range. Can accept: XMLElement, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last XMLElement in the collection.
			 * @returns {Adobe.Incopy.XMLElement}
			 */
			public lastItem(): Adobe.Incopy.XMLElement;
			/**
			 * Returns the middle XMLElement in the collection.
			 * @returns {Adobe.Incopy.XMLElement}
			 */
			public middleItem(): Adobe.Incopy.XMLElement;
			/**
			 * Returns the XMLElement whose index follows the specified 
			 * XMLElement in the collection.
			 * @param {XMLElement} objParam The XMLElement whose index 
			 * comes before the desired XMLElement. 
			 * @returns {Adobe.Incopy.XMLElement}
			 */
			public nextItem(objParam: XMLElement): Adobe.Incopy.XMLElement;
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
			 * Returns the XMLElement with the index previous to the 
			 * specified index.
			 * @param {XMLElement} objParam The index of the XMLElement 
			 * that follows the desired XMLElement.
			 * @returns {Adobe.Incopy.XMLElement}
			 */
			public previousItem(objParam: XMLElement): Adobe.Incopy.XMLElement;
		}
	}
}