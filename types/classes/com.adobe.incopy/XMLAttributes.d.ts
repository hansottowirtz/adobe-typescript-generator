/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class XMLAttributes extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new XML attribute.
			 * @param {string} nameParam The name of the attribute.
			 * @param {string} valueParam The value of the attribute.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new XMLAttribute (Optional)
			 * @returns {Adobe.Incopy.XMLAttribute}
			 */
			public add(nameParam: string, valueParam: string, withPropertiesParam: any): Adobe.Incopy.XMLAttribute;
			/**
			 * Returns any XMLAttribute in the collection.
			 * @returns {Adobe.Incopy.XMLAttribute}
			 */
			public anyItem(): Adobe.Incopy.XMLAttribute;
			/**
			 * Displays the number of elements in the XMLAttribute.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every XMLAttribute in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first XMLAttribute in the collection.
			 * @returns {Adobe.Incopy.XMLAttribute}
			 */
			public firstItem(): Adobe.Incopy.XMLAttribute;
			/**
			 * Returns the XMLAttribute with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.XMLAttribute}
			 */
			public item(indexParam: any): Adobe.Incopy.XMLAttribute;
			/**
			 * Returns the XMLAttribute with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.XMLAttribute}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.XMLAttribute;
			/**
			 * Returns the XMLAttributes within the specified range.
			 * @param {any} fromParam The XMLAttribute, index, or name at 
			 * the beginning of the range. Can accept: XMLAttribute, Long 
			 * Integer or String.
			 * @param {any} toParam The XMLAttribute, index, or name at the 
			 * end of the range. Can accept: XMLAttribute, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last XMLAttribute in the collection.
			 * @returns {Adobe.Incopy.XMLAttribute}
			 */
			public lastItem(): Adobe.Incopy.XMLAttribute;
			/**
			 * Returns the middle XMLAttribute in the collection.
			 * @returns {Adobe.Incopy.XMLAttribute}
			 */
			public middleItem(): Adobe.Incopy.XMLAttribute;
			/**
			 * Returns the XMLAttribute whose index follows the specified 
			 * XMLAttribute in the collection.
			 * @param {XMLAttribute} objParam The XMLAttribute whose index 
			 * comes before the desired XMLAttribute. 
			 * @returns {Adobe.Incopy.XMLAttribute}
			 */
			public nextItem(objParam: XMLAttribute): Adobe.Incopy.XMLAttribute;
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
			 * Returns the XMLAttribute with the index previous to the 
			 * specified index.
			 * @param {XMLAttribute} objParam The index of the XMLAttribute 
			 * that follows the desired XMLAttribute.
			 * @returns {Adobe.Incopy.XMLAttribute}
			 */
			public previousItem(objParam: XMLAttribute): Adobe.Incopy.XMLAttribute;
		}
	}
}