/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class XMLElements extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new XML element.
			 * @param {any} markupTagParam - The XML tag used to identify 
			 * the element. Can accept: String or XMLTag.
			 * @param {any} xmlContentParam - The content to be marked up. 
			 * Can accept: Text, Image, Story, Table or Cell. (Optional)
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new XMLElement (Optional)
			 */
			public add(markupTagParam: any, xmlContentParam: any, withPropertiesParam: any): Adobe.Incopy.XMLElement;
			/** Returns any XMLElement in the collection. */
			public anyItem(): Adobe.Incopy.XMLElement;
			/** Displays the number of elements in the XMLElement. */
			public count(): number;
			/** Returns every XMLElement in the collection. */
			public everyItem(): any;
			/** Returns the first XMLElement in the collection. */
			public firstItem(): Adobe.Incopy.XMLElement;
			/**
			 * Returns the XMLElement with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.XMLElement;
			/**
			 * Returns the XMLElement with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.XMLElement;
			/**
			 * Returns the XMLElements within the specified range.
			 * @param {any} fromParam - The XMLElement, index, or name at 
			 * the beginning of the range. Can accept: XMLElement, Long 
			 * Integer or String.
			 * @param {any} toParam - The XMLElement, index, or name at the 
			 * end of the range. Can accept: XMLElement, Long Integer or 
			 * String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last XMLElement in the collection. */
			public lastItem(): Adobe.Incopy.XMLElement;
			/** Returns the middle XMLElement in the collection. */
			public middleItem(): Adobe.Incopy.XMLElement;
			/**
			 * Returns the XMLElement whose index follows the specified 
			 * XMLElement in the collection.
			 * @param {XMLElement} objParam - The XMLElement whose index 
			 * comes before the desired XMLElement. 
			 */
			public nextItem(objParam: XMLElement): Adobe.Incopy.XMLElement;
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
			 * Returns the XMLElement with the index previous to the 
			 * specified index.
			 * @param {XMLElement} objParam - The index of the XMLElement 
			 * that follows the desired XMLElement.
			 */
			public previousItem(objParam: XMLElement): Adobe.Incopy.XMLElement;
		}
	}
}