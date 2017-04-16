/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class XMLElements extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new XML element.
			 * @param {any} markupTagParam The XML tag used to identify the 
			 * element. Can accept: String or XMLTag.
			 * @param {any} xmlContentParam The content to be marked up. 
			 * Can accept: Text, Story, PageItem, Movie, Sound, Graphic, 
			 * Table or Cell. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new XMLElement (Optional)
			 */
			public add(markupTagParam: any, xmlContentParam: any, withPropertiesParam: any): Adobe.Indesign.XMLElement;
			/** Returns any XMLElement in the collection. */
			public anyItem(): Adobe.Indesign.XMLElement;
			/** Displays the number of elements in the XMLElement. */
			public count(): number;
			/** Returns every XMLElement in the collection. */
			public everyItem(): any;
			/** Returns the first XMLElement in the collection. */
			public firstItem(): Adobe.Indesign.XMLElement;
			/**
			 * Returns the XMLElement with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.XMLElement;
			/**
			 * Returns the XMLElement with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.XMLElement;
			/**
			 * Returns the XMLElements within the specified range.
			 * @param {any} fromParam The XMLElement, index, or name at the 
			 * beginning of the range. Can accept: XMLElement, Long Integer 
			 * or String.
			 * @param {any} toParam The XMLElement, index, or name at the 
			 * end of the range. Can accept: XMLElement, Long Integer or 
			 * String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last XMLElement in the collection. */
			public lastItem(): Adobe.Indesign.XMLElement;
			/** Returns the middle XMLElement in the collection. */
			public middleItem(): Adobe.Indesign.XMLElement;
			/**
			 * Returns the XMLElement whose index follows the specified 
			 * XMLElement in the collection.
			 * @param {XMLElement} objParam The XMLElement whose index 
			 * comes before the desired XMLElement. 
			 */
			public nextItem(objParam: XMLElement): Adobe.Indesign.XMLElement;
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
			 * @param {XMLElement} objParam The index of the XMLElement 
			 * that follows the desired XMLElement.
			 */
			public previousItem(objParam: XMLElement): Adobe.Indesign.XMLElement;
		}
	}
}