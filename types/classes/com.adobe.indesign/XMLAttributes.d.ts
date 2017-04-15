/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class XMLAttributes extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new XML attribute.
			 * @param {string} nameParam - The name of the attribute.
			 * @param {string} valueParam - The value of the attribute.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new XMLAttribute (Optional)
			 */
			public add(nameParam: string, valueParam: string, withPropertiesParam: any): Adobe.Indesign.XMLAttribute;
			/** Returns any XMLAttribute in the collection. */
			public anyItem(): Adobe.Indesign.XMLAttribute;
			/** Displays the number of elements in the XMLAttribute. */
			public count(): number;
			/** Returns every XMLAttribute in the collection. */
			public everyItem(): any;
			/** Returns the first XMLAttribute in the collection. */
			public firstItem(): Adobe.Indesign.XMLAttribute;
			/**
			 * Returns the XMLAttribute with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.XMLAttribute;
			/**
			 * Returns the XMLAttribute with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.XMLAttribute;
			/**
			 * Returns the XMLAttributes within the specified range.
			 * @param {any} fromParam - The XMLAttribute, index, or name at 
			 * the beginning of the range. Can accept: XMLAttribute, Long 
			 * Integer or String.
			 * @param {any} toParam - The XMLAttribute, index, or name at 
			 * the end of the range. Can accept: XMLAttribute, Long Integer 
			 * or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last XMLAttribute in the collection. */
			public lastItem(): Adobe.Indesign.XMLAttribute;
			/** Returns the middle XMLAttribute in the collection. */
			public middleItem(): Adobe.Indesign.XMLAttribute;
			/**
			 * Returns the XMLAttribute whose index follows the specified 
			 * XMLAttribute in the collection.
			 * @param {XMLAttribute} objParam - The XMLAttribute whose 
			 * index comes before the desired XMLAttribute. 
			 */
			public nextItem(objParam: XMLAttribute): Adobe.Indesign.XMLAttribute;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx - 
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index - 
			 */
			public nextValue(index: number): any;
			/**
			 * Returns the XMLAttribute with the index previous to the 
			 * specified index.
			 * @param {XMLAttribute} objParam - The index of the 
			 * XMLAttribute that follows the desired XMLAttribute.
			 */
			public previousItem(objParam: XMLAttribute): Adobe.Indesign.XMLAttribute;
		}
	}
}