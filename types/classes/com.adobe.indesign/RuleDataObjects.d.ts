/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class RuleDataObjects extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Add a new preflight rule data to a preflight profile rule.
			 * @param {string} nameParam - The name of the rule data to add
			 * @param {RuleDataType} dataTypeParam - The type of data
			 * @param {any} dataValueParam - The value of data. Can accept: 
			 * String, Real, Long Integer, Short Integer, Boolean, Object 
			 * or Array of Strings, Reals, Long Integers, Short Integers, 
			 * Booleans, Objects or Arrays of Array of Arrays of Array of 
			 * Strings, Reals, Long Integers, Short Integers, Booleans or 
			 * Objects.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new RuleDataObject (Optional)
			 */
			public add(nameParam: string, dataTypeParam: RuleDataType, dataValueParam: any, withPropertiesParam: any): Adobe.Indesign.RuleDataObject;
			/** Returns any RuleDataObject in the collection. */
			public anyItem(): Adobe.Indesign.RuleDataObject;
			/** Displays the number of elements in the RuleDataObject. */
			public count(): number;
			/** Returns every RuleDataObject in the collection. */
			public everyItem(): any;
			/** Returns the first RuleDataObject in the collection. */
			public firstItem(): Adobe.Indesign.RuleDataObject;
			/**
			 * Returns the RuleDataObject with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.RuleDataObject;
			/**
			 * Returns the RuleDataObject with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.RuleDataObject;
			/**
			 * Returns the RuleDataObject with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.RuleDataObject;
			/**
			 * Returns the RuleDataObjects within the specified range.
			 * @param {any} fromParam - The RuleDataObject, index, or name 
			 * at the beginning of the range. Can accept: RuleDataObject, 
			 * Long Integer or String.
			 * @param {any} toParam - The RuleDataObject, index, or name at 
			 * the end of the range. Can accept: RuleDataObject, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last RuleDataObject in the collection. */
			public lastItem(): Adobe.Indesign.RuleDataObject;
			/** Returns the middle RuleDataObject in the collection. */
			public middleItem(): Adobe.Indesign.RuleDataObject;
			/**
			 * Returns the RuleDataObject whose index follows the specified 
			 * RuleDataObject in the collection.
			 * @param {RuleDataObject} objParam - The RuleDataObject whose 
			 * index comes before the desired RuleDataObject. 
			 */
			public nextItem(objParam: RuleDataObject): Adobe.Indesign.RuleDataObject;
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
			 * Returns the RuleDataObject with the index previous to the 
			 * specified index.
			 * @param {RuleDataObject} objParam - The index of the 
			 * RuleDataObject that follows the desired RuleDataObject.
			 */
			public previousItem(objParam: RuleDataObject): Adobe.Indesign.RuleDataObject;
		}
	}
}