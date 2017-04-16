/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ShowHideFieldsBehaviors extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new ShowHideFieldsBehavior.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new ShowHideFieldsBehavior (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.ShowHideFieldsBehavior;
			/** Returns any ShowHideFieldsBehavior in the collection. */
			public anyItem(): Adobe.Indesign.ShowHideFieldsBehavior;
			/**
			 * Displays the number of elements in the 
			 * ShowHideFieldsBehavior.
			 */
			public count(): number;
			/** Returns every ShowHideFieldsBehavior in the collection. */
			public everyItem(): any;
			/** Returns the first ShowHideFieldsBehavior in the collection. */
			public firstItem(): Adobe.Indesign.ShowHideFieldsBehavior;
			/**
			 * Returns the ShowHideFieldsBehavior with the specified index 
			 * or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.ShowHideFieldsBehavior;
			/**
			 * Returns the ShowHideFieldsBehavior with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.ShowHideFieldsBehavior;
			/**
			 * Returns the ShowHideFieldsBehavior with the specified name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.ShowHideFieldsBehavior;
			/**
			 * Returns the ShowHideFieldsBehaviors within the specified 
			 * range.
			 * @param {any} fromParam The ShowHideFieldsBehavior, index, or 
			 * name at the beginning of the range. Can accept: 
			 * ShowHideFieldsBehavior, Long Integer or String.
			 * @param {any} toParam The ShowHideFieldsBehavior, index, or 
			 * name at the end of the range. Can accept: 
			 * ShowHideFieldsBehavior, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last ShowHideFieldsBehavior in the collection. */
			public lastItem(): Adobe.Indesign.ShowHideFieldsBehavior;
			/**
			 * Returns the middle ShowHideFieldsBehavior in the collection.
			 */
			public middleItem(): Adobe.Indesign.ShowHideFieldsBehavior;
			/**
			 * Returns the ShowHideFieldsBehavior whose index follows the 
			 * specified ShowHideFieldsBehavior in the collection.
			 * @param {ShowHideFieldsBehavior} objParam The 
			 * ShowHideFieldsBehavior whose index comes before the desired 
			 * ShowHideFieldsBehavior. 
			 */
			public nextItem(objParam: ShowHideFieldsBehavior): Adobe.Indesign.ShowHideFieldsBehavior;
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
			 * Returns the ShowHideFieldsBehavior with the index previous 
			 * to the specified index.
			 * @param {ShowHideFieldsBehavior} objParam The index of the 
			 * ShowHideFieldsBehavior that follows the desired 
			 * ShowHideFieldsBehavior.
			 */
			public previousItem(objParam: ShowHideFieldsBehavior): Adobe.Indesign.ShowHideFieldsBehavior;
		}
	}
}