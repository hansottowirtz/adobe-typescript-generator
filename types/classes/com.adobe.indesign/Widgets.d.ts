/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Widgets extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any Widget in the collection.
			 * @returns {Adobe.Indesign.Widget}
			 */
			public anyItem(): Adobe.Indesign.Widget;
			/**
			 * Displays the number of elements in the Widget.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Widget in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Widget in the collection.
			 * @returns {Adobe.Indesign.Widget}
			 */
			public firstItem(): Adobe.Indesign.Widget;
			/**
			 * Returns the Widget with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.Widget}
			 */
			public item(indexParam: any): Adobe.Indesign.Widget;
			/**
			 * Returns the Widget with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.Widget}
			 */
			public itemByID(idParam: number): Adobe.Indesign.Widget;
			/**
			 * Returns the Widgets within the specified range.
			 * @param {any} fromParam The Widget, index, or name at the 
			 * beginning of the range. Can accept: Widget, Long Integer or 
			 * String.
			 * @param {any} toParam The Widget, index, or name at the end 
			 * of the range. Can accept: Widget, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Widget in the collection.
			 * @returns {Adobe.Indesign.Widget}
			 */
			public lastItem(): Adobe.Indesign.Widget;
			/**
			 * Returns the middle Widget in the collection.
			 * @returns {Adobe.Indesign.Widget}
			 */
			public middleItem(): Adobe.Indesign.Widget;
			/**
			 * Returns the Widget whose index follows the specified Widget 
			 * in the collection.
			 * @param {Widget} objParam The Widget whose index comes before 
			 * the desired Widget. 
			 * @returns {Adobe.Indesign.Widget}
			 */
			public nextItem(objParam: Widget): Adobe.Indesign.Widget;
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
			 * Returns the Widget with the index previous to the specified 
			 * index.
			 * @param {Widget} objParam The index of the Widget that 
			 * follows the desired Widget.
			 * @returns {Adobe.Indesign.Widget}
			 */
			public previousItem(objParam: Widget): Adobe.Indesign.Widget;
		}
	}
}