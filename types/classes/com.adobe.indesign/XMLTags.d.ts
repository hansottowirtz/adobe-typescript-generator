/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class XMLTags extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a tag.
			 * @param {string} nameParam - The name of the tag. (Optional)
			 * @param {any} tagColorParam - The dolor of the tag, specified 
			 * either as an array of three doubles, each in the range 0 to 
			 * 255 and representing R, G, and B values, or as a UI color. 
			 * Can accept: Array of 3 Reals (0 - 255) or UIColors 
			 * enumerator. (Optional)
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new XMLTag (Optional)
			 */
			public add(nameParam: string, tagColorParam: any, withPropertiesParam: any): Adobe.Indesign.XMLTag;
			/** Returns any XMLTag in the collection. */
			public anyItem(): Adobe.Indesign.XMLTag;
			/** Displays the number of elements in the XMLTag. */
			public count(): number;
			/** Returns every XMLTag in the collection. */
			public everyItem(): any;
			/** Returns the first XMLTag in the collection. */
			public firstItem(): Adobe.Indesign.XMLTag;
			/**
			 * Returns the XMLTag with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.XMLTag;
			/**
			 * Returns the XMLTag with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.XMLTag;
			/**
			 * Returns the XMLTag with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.XMLTag;
			/**
			 * Returns the XMLTags within the specified range.
			 * @param {any} fromParam - The XMLTag, index, or name at the 
			 * beginning of the range. Can accept: XMLTag, Long Integer or 
			 * String.
			 * @param {any} toParam - The XMLTag, index, or name at the end 
			 * of the range. Can accept: XMLTag, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last XMLTag in the collection. */
			public lastItem(): Adobe.Indesign.XMLTag;
			/** Returns the middle XMLTag in the collection. */
			public middleItem(): Adobe.Indesign.XMLTag;
			/**
			 * Returns the XMLTag whose index follows the specified XMLTag 
			 * in the collection.
			 * @param {XMLTag} objParam - The XMLTag whose index comes 
			 * before the desired XMLTag. 
			 */
			public nextItem(objParam: XMLTag): Adobe.Indesign.XMLTag;
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
			 * Returns the XMLTag with the index previous to the specified 
			 * index.
			 * @param {XMLTag} objParam - The index of the XMLTag that 
			 * follows the desired XMLTag.
			 */
			public previousItem(objParam: XMLTag): Adobe.Indesign.XMLTag;
		}
	}
}