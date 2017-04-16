/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class CrossReferences extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new cross reference.
			 * @param {Topic} referencedTopicParam The topic that the cross 
			 * reference points to.
			 * @param {CrossReferenceType} crossReferenceTypeParam The 
			 * cross reference type.
			 * @param {string} customTypeStringParam The custom string to 
			 * use in the cross reference. Valid only for custom cross 
			 * reference types. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new CrossReference (Optional)
			 * @returns {Adobe.Indesign.CrossReference}
			 */
			public add(referencedTopicParam: Topic, crossReferenceTypeParam: CrossReferenceType, customTypeStringParam: string, withPropertiesParam: any): Adobe.Indesign.CrossReference;
			/**
			 * Returns any CrossReference in the collection.
			 * @returns {Adobe.Indesign.CrossReference}
			 */
			public anyItem(): Adobe.Indesign.CrossReference;
			/**
			 * Displays the number of elements in the CrossReference.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every CrossReference in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first CrossReference in the collection.
			 * @returns {Adobe.Indesign.CrossReference}
			 */
			public firstItem(): Adobe.Indesign.CrossReference;
			/**
			 * Returns the CrossReference with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.CrossReference}
			 */
			public item(indexParam: any): Adobe.Indesign.CrossReference;
			/**
			 * Returns the CrossReference with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.CrossReference}
			 */
			public itemByID(idParam: number): Adobe.Indesign.CrossReference;
			/**
			 * Returns the CrossReference with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.CrossReference}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.CrossReference;
			/**
			 * Returns the CrossReferences within the specified range.
			 * @param {any} fromParam The CrossReference, index, or name at 
			 * the beginning of the range. Can accept: CrossReference, Long 
			 * Integer or String.
			 * @param {any} toParam The CrossReference, index, or name at 
			 * the end of the range. Can accept: CrossReference, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last CrossReference in the collection.
			 * @returns {Adobe.Indesign.CrossReference}
			 */
			public lastItem(): Adobe.Indesign.CrossReference;
			/**
			 * Returns the middle CrossReference in the collection.
			 * @returns {Adobe.Indesign.CrossReference}
			 */
			public middleItem(): Adobe.Indesign.CrossReference;
			/**
			 * Returns the CrossReference whose index follows the specified 
			 * CrossReference in the collection.
			 * @param {CrossReference} objParam The CrossReference whose 
			 * index comes before the desired CrossReference. 
			 * @returns {Adobe.Indesign.CrossReference}
			 */
			public nextItem(objParam: CrossReference): Adobe.Indesign.CrossReference;
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
			 * Returns the CrossReference with the index previous to the 
			 * specified index.
			 * @param {CrossReference} objParam The index of the 
			 * CrossReference that follows the desired CrossReference.
			 * @returns {Adobe.Indesign.CrossReference}
			 */
			public previousItem(objParam: CrossReference): Adobe.Indesign.CrossReference;
		}
	}
}