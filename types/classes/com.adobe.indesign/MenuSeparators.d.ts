/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class MenuSeparators extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new menu separator.
			 * @param {LocationOptions} atParam - The location of the menu 
			 * separator relative to the reference object or within the 
			 * containing object. (Optional)
			 * @param {MenuElement} referenceParam - The reference object. 
			 * Note: Required when the at parameter specifies before or 
			 * after. (Optional)
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new MenuSeparator (Optional)
			 */
			public add(atParam: LocationOptions, referenceParam: MenuElement, withPropertiesParam: any): Adobe.Indesign.MenuSeparator;
			/** Returns any MenuSeparator in the collection. */
			public anyItem(): Adobe.Indesign.MenuSeparator;
			/** Displays the number of elements in the MenuSeparator. */
			public count(): number;
			/** Returns every MenuSeparator in the collection. */
			public everyItem(): any;
			/** Returns the first MenuSeparator in the collection. */
			public firstItem(): Adobe.Indesign.MenuSeparator;
			/**
			 * Returns the MenuSeparator with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.MenuSeparator;
			/**
			 * Returns the MenuSeparator with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.MenuSeparator;
			/**
			 * Returns the MenuSeparators within the specified range.
			 * @param {any} fromParam - The MenuSeparator, index, or name 
			 * at the beginning of the range. Can accept: MenuSeparator, 
			 * Long Integer or String.
			 * @param {any} toParam - The MenuSeparator, index, or name at 
			 * the end of the range. Can accept: MenuSeparator, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last MenuSeparator in the collection. */
			public lastItem(): Adobe.Indesign.MenuSeparator;
			/** Returns the middle MenuSeparator in the collection. */
			public middleItem(): Adobe.Indesign.MenuSeparator;
			/**
			 * Returns the MenuSeparator whose index follows the specified 
			 * MenuSeparator in the collection.
			 * @param {MenuSeparator} objParam - The MenuSeparator whose 
			 * index comes before the desired MenuSeparator. 
			 */
			public nextItem(objParam: MenuSeparator): Adobe.Indesign.MenuSeparator;
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
			 * Returns the MenuSeparator with the index previous to the 
			 * specified index.
			 * @param {MenuSeparator} objParam - The index of the 
			 * MenuSeparator that follows the desired MenuSeparator.
			 */
			public previousItem(objParam: MenuSeparator): Adobe.Indesign.MenuSeparator;
		}
	}
}