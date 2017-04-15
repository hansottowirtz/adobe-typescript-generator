/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class XMLInstructions extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new XML processing instruction.
			 * @param {string} targetParam - A name that identifies the 
			 * processing instruction to an application reading the 
			 * exported XML file.
			 * @param {string} dataParam - A value that tells the 
			 * application what to do with the processing instruction 
			 * identified in the target. (Optional)
			 * @param {any} storyOffsetParam - The location within the 
			 * story, specified as an insertion point. Can accept: 
			 * InsertionPoint or Long Integer. (Optional)
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new XMLInstruction (Optional)
			 */
			public add(targetParam: string, dataParam: string, storyOffsetParam: any, withPropertiesParam: any): Adobe.Incopy.XMLInstruction;
			/** Returns any XMLInstruction in the collection. */
			public anyItem(): Adobe.Incopy.XMLInstruction;
			/** Displays the number of elements in the XMLInstruction. */
			public count(): number;
			/** Returns every XMLInstruction in the collection. */
			public everyItem(): any;
			/** Returns the first XMLInstruction in the collection. */
			public firstItem(): Adobe.Incopy.XMLInstruction;
			/**
			 * Returns the XMLInstruction with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.XMLInstruction;
			/**
			 * Returns the XMLInstruction with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.XMLInstruction;
			/**
			 * Returns the XMLInstructions within the specified range.
			 * @param {any} fromParam - The XMLInstruction, index, or name 
			 * at the beginning of the range. Can accept: XMLInstruction, 
			 * Long Integer or String.
			 * @param {any} toParam - The XMLInstruction, index, or name at 
			 * the end of the range. Can accept: XMLInstruction, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last XMLInstruction in the collection. */
			public lastItem(): Adobe.Incopy.XMLInstruction;
			/** Returns the middle XMLInstruction in the collection. */
			public middleItem(): Adobe.Incopy.XMLInstruction;
			/**
			 * Returns the XMLInstruction whose index follows the specified 
			 * XMLInstruction in the collection.
			 * @param {XMLInstruction} objParam - The XMLInstruction whose 
			 * index comes before the desired XMLInstruction. 
			 */
			public nextItem(objParam: XMLInstruction): Adobe.Incopy.XMLInstruction;
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
			 * Returns the XMLInstruction with the index previous to the 
			 * specified index.
			 * @param {XMLInstruction} objParam - The index of the 
			 * XMLInstruction that follows the desired XMLInstruction.
			 */
			public previousItem(objParam: XMLInstruction): Adobe.Incopy.XMLInstruction;
		}
	}
}