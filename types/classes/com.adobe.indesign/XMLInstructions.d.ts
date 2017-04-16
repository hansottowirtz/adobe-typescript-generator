/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class XMLInstructions extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new XML processing instruction.
			 * @param {string} targetParam A name that identifies the 
			 * processing instruction to an application reading the 
			 * exported XML file.
			 * @param {string} dataParam A value that tells the application 
			 * what to do with the processing instruction identified in the 
			 * target. (Optional)
			 * @param {any} storyOffsetParam The location within the story, 
			 * specified as an insertion point. Can accept: InsertionPoint 
			 * or Long Integer. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new XMLInstruction (Optional)
			 * @returns {Adobe.Indesign.XMLInstruction}
			 */
			public add(targetParam: string, dataParam: string, storyOffsetParam: any, withPropertiesParam: any): Adobe.Indesign.XMLInstruction;
			/**
			 * Returns any XMLInstruction in the collection.
			 * @returns {Adobe.Indesign.XMLInstruction}
			 */
			public anyItem(): Adobe.Indesign.XMLInstruction;
			/**
			 * Displays the number of elements in the XMLInstruction.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every XMLInstruction in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first XMLInstruction in the collection.
			 * @returns {Adobe.Indesign.XMLInstruction}
			 */
			public firstItem(): Adobe.Indesign.XMLInstruction;
			/**
			 * Returns the XMLInstruction with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.XMLInstruction}
			 */
			public item(indexParam: any): Adobe.Indesign.XMLInstruction;
			/**
			 * Returns the XMLInstruction with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.XMLInstruction}
			 */
			public itemByID(idParam: number): Adobe.Indesign.XMLInstruction;
			/**
			 * Returns the XMLInstructions within the specified range.
			 * @param {any} fromParam The XMLInstruction, index, or name at 
			 * the beginning of the range. Can accept: XMLInstruction, Long 
			 * Integer or String.
			 * @param {any} toParam The XMLInstruction, index, or name at 
			 * the end of the range. Can accept: XMLInstruction, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last XMLInstruction in the collection.
			 * @returns {Adobe.Indesign.XMLInstruction}
			 */
			public lastItem(): Adobe.Indesign.XMLInstruction;
			/**
			 * Returns the middle XMLInstruction in the collection.
			 * @returns {Adobe.Indesign.XMLInstruction}
			 */
			public middleItem(): Adobe.Indesign.XMLInstruction;
			/**
			 * Returns the XMLInstruction whose index follows the specified 
			 * XMLInstruction in the collection.
			 * @param {XMLInstruction} objParam The XMLInstruction whose 
			 * index comes before the desired XMLInstruction. 
			 * @returns {Adobe.Indesign.XMLInstruction}
			 */
			public nextItem(objParam: XMLInstruction): Adobe.Indesign.XMLInstruction;
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
			 * Returns the XMLInstruction with the index previous to the 
			 * specified index.
			 * @param {XMLInstruction} objParam The index of the 
			 * XMLInstruction that follows the desired XMLInstruction.
			 * @returns {Adobe.Indesign.XMLInstruction}
			 */
			public previousItem(objParam: XMLInstruction): Adobe.Indesign.XMLInstruction;
		}
	}
}