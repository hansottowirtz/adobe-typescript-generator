/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class XMLTags extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a tag.
			 * @param {string} nameParam The name of the tag. (Optional)
			 * @param {any} tagColorParam The dolor of the tag, specified 
			 * either as an array of three doubles, each in the range 0 to 
			 * 255 and representing R, G, and B values, or as a UI color. 
			 * Can accept: Array of 3 Reals (0 - 255) or UIColors 
			 * enumerator. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new XMLTag (Optional)
			 * @returns {Adobe.Incopy.XMLTag}
			 */
			public add(nameParam: string, tagColorParam: any, withPropertiesParam: any): Adobe.Incopy.XMLTag;
			/**
			 * Returns any XMLTag in the collection.
			 * @returns {Adobe.Incopy.XMLTag}
			 */
			public anyItem(): Adobe.Incopy.XMLTag;
			/**
			 * Displays the number of elements in the XMLTag.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every XMLTag in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first XMLTag in the collection.
			 * @returns {Adobe.Incopy.XMLTag}
			 */
			public firstItem(): Adobe.Incopy.XMLTag;
			/**
			 * Returns the XMLTag with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.XMLTag}
			 */
			public item(indexParam: any): Adobe.Incopy.XMLTag;
			/**
			 * Returns the XMLTag with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.XMLTag}
			 */
			public itemByID(idParam: number): Adobe.Incopy.XMLTag;
			/**
			 * Returns the XMLTag with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.XMLTag}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.XMLTag;
			/**
			 * Returns the XMLTags within the specified range.
			 * @param {any} fromParam The XMLTag, index, or name at the 
			 * beginning of the range. Can accept: XMLTag, Long Integer or 
			 * String.
			 * @param {any} toParam The XMLTag, index, or name at the end 
			 * of the range. Can accept: XMLTag, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last XMLTag in the collection.
			 * @returns {Adobe.Incopy.XMLTag}
			 */
			public lastItem(): Adobe.Incopy.XMLTag;
			/**
			 * Returns the middle XMLTag in the collection.
			 * @returns {Adobe.Incopy.XMLTag}
			 */
			public middleItem(): Adobe.Incopy.XMLTag;
			/**
			 * Returns the XMLTag whose index follows the specified XMLTag 
			 * in the collection.
			 * @param {XMLTag} objParam The XMLTag whose index comes before 
			 * the desired XMLTag. 
			 * @returns {Adobe.Incopy.XMLTag}
			 */
			public nextItem(objParam: XMLTag): Adobe.Incopy.XMLTag;
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
			 * Returns the XMLTag with the index previous to the specified 
			 * index.
			 * @param {XMLTag} objParam The index of the XMLTag that 
			 * follows the desired XMLTag.
			 * @returns {Adobe.Incopy.XMLTag}
			 */
			public previousItem(objParam: XMLTag): Adobe.Incopy.XMLTag;
		}
	}
}