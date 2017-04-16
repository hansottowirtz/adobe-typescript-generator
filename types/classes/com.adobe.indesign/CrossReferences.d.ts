/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class CrossReferences extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
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
			 */
			public add(referencedTopicParam: Topic, crossReferenceTypeParam: CrossReferenceType, customTypeStringParam: string, withPropertiesParam: any): Adobe.Indesign.CrossReference;
			/** Returns any CrossReference in the collection. */
			public anyItem(): Adobe.Indesign.CrossReference;
			/** Displays the number of elements in the CrossReference. */
			public count(): number;
			/** Returns every CrossReference in the collection. */
			public everyItem(): any;
			/** Returns the first CrossReference in the collection. */
			public firstItem(): Adobe.Indesign.CrossReference;
			/**
			 * Returns the CrossReference with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.CrossReference;
			/**
			 * Returns the CrossReference with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.CrossReference;
			/**
			 * Returns the CrossReference with the specified name.
			 * @param {string} nameParam The name.
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
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last CrossReference in the collection. */
			public lastItem(): Adobe.Indesign.CrossReference;
			/** Returns the middle CrossReference in the collection. */
			public middleItem(): Adobe.Indesign.CrossReference;
			/**
			 * Returns the CrossReference whose index follows the specified 
			 * CrossReference in the collection.
			 * @param {CrossReference} objParam The CrossReference whose 
			 * index comes before the desired CrossReference. 
			 */
			public nextItem(objParam: CrossReference): Adobe.Indesign.CrossReference;
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
			 * Returns the CrossReference with the index previous to the 
			 * specified index.
			 * @param {CrossReference} objParam The index of the 
			 * CrossReference that follows the desired CrossReference.
			 */
			public previousItem(objParam: CrossReference): Adobe.Indesign.CrossReference;
		}
	}
}