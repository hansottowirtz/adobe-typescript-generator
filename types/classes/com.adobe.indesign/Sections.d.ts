/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Sections extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new section.
			 * @param {Page} referenceParam The page on which the section 
			 * begins. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new Section (Optional)
			 */
			public add(referenceParam: Page, withPropertiesParam: any): Adobe.Indesign.Section;
			/** Returns any Section in the collection. */
			public anyItem(): Adobe.Indesign.Section;
			/** Displays the number of elements in the Section. */
			public count(): number;
			/** Returns every Section in the collection. */
			public everyItem(): any;
			/** Returns the first Section in the collection. */
			public firstItem(): Adobe.Indesign.Section;
			/**
			 * Returns the Section with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.Section;
			/**
			 * Returns the Section with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.Section;
			/**
			 * Returns the Section with the specified name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Section;
			/**
			 * Returns the Sections within the specified range.
			 * @param {any} fromParam The Section, index, or name at the 
			 * beginning of the range. Can accept: Section, Long Integer or 
			 * String.
			 * @param {any} toParam The Section, index, or name at the end 
			 * of the range. Can accept: Section, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Section in the collection. */
			public lastItem(): Adobe.Indesign.Section;
			/** Returns the middle Section in the collection. */
			public middleItem(): Adobe.Indesign.Section;
			/**
			 * Returns the Section whose index follows the specified 
			 * Section in the collection.
			 * @param {Section} objParam The Section whose index comes 
			 * before the desired Section. 
			 */
			public nextItem(objParam: Section): Adobe.Indesign.Section;
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
			 * Returns the Section with the index previous to the specified 
			 * index.
			 * @param {Section} objParam The index of the Section that 
			 * follows the desired Section.
			 */
			public previousItem(objParam: Section): Adobe.Indesign.Section;
		}
	}
}