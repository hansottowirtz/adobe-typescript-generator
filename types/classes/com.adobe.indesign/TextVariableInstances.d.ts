/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TextVariableInstances extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a text variable instance at the specified location.
			 * @param {LocationOptions} toParam - The location relative to 
			 * the reference object or within the containing object. 
			 * (Optional)
			 * @param {any} referenceParam - The reference object. Note: 
			 * Required only when the to parameter specifies before or 
			 * after. Can accept: TextVariableInstance, XmlStory, 
			 * TextFrame, Story, Note, Cell, Footnote, Table, TextColumn, 
			 * TextStyleRange, Text, InsertionPoint, Paragraph, Line, Word, 
			 * Character or Change. (Optional)
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new TextVariableInstance (Optional)
			 */
			public add(toParam: LocationOptions, referenceParam: any, withPropertiesParam: any): Adobe.Indesign.TextVariableInstance;
			/** Returns any TextVariableInstance in the collection. */
			public anyItem(): Adobe.Indesign.TextVariableInstance;
			/**
			 * Displays the number of elements in the TextVariableInstance.
			 */
			public count(): number;
			/** Returns every TextVariableInstance in the collection. */
			public everyItem(): any;
			/** Returns the first TextVariableInstance in the collection. */
			public firstItem(): Adobe.Indesign.TextVariableInstance;
			/**
			 * Returns the TextVariableInstance with the specified index or 
			 * name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.TextVariableInstance;
			/**
			 * Returns the TextVariableInstance with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.TextVariableInstance;
			/**
			 * Returns the TextVariableInstance with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.TextVariableInstance;
			/**
			 * Returns the TextVariableInstances within the specified 
			 * range.
			 * @param {any} fromParam - The TextVariableInstance, index, or 
			 * name at the beginning of the range. Can accept: 
			 * TextVariableInstance, Long Integer or String.
			 * @param {any} toParam - The TextVariableInstance, index, or 
			 * name at the end of the range. Can accept: 
			 * TextVariableInstance, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last TextVariableInstance in the collection. */
			public lastItem(): Adobe.Indesign.TextVariableInstance;
			/** Returns the middle TextVariableInstance in the collection. */
			public middleItem(): Adobe.Indesign.TextVariableInstance;
			/**
			 * Returns the TextVariableInstance whose index follows the 
			 * specified TextVariableInstance in the collection.
			 * @param {TextVariableInstance} objParam - The 
			 * TextVariableInstance whose index comes before the desired 
			 * TextVariableInstance. 
			 */
			public nextItem(objParam: TextVariableInstance): Adobe.Indesign.TextVariableInstance;
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
			 * Returns the TextVariableInstance with the index previous to 
			 * the specified index.
			 * @param {TextVariableInstance} objParam - The index of the 
			 * TextVariableInstance that follows the desired 
			 * TextVariableInstance.
			 */
			public previousItem(objParam: TextVariableInstance): Adobe.Indesign.TextVariableInstance;
		}
	}
}