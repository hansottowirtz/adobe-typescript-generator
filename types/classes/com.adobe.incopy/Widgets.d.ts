/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Widgets extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any Widget in the collection.
			 * @returns {Adobe.Incopy.Widget}
			 */
			public anyItem(): Adobe.Incopy.Widget;
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
			 * @returns {Adobe.Incopy.Widget}
			 */
			public firstItem(): Adobe.Incopy.Widget;
			/**
			 * Returns the Widget with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.Widget}
			 */
			public item(indexParam: any): Adobe.Incopy.Widget;
			/**
			 * Returns the Widget with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.Widget}
			 */
			public itemByID(idParam: number): Adobe.Incopy.Widget;
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
			 * @returns {Adobe.Incopy.Widget}
			 */
			public lastItem(): Adobe.Incopy.Widget;
			/**
			 * Returns the middle Widget in the collection.
			 * @returns {Adobe.Incopy.Widget}
			 */
			public middleItem(): Adobe.Incopy.Widget;
			/**
			 * Returns the Widget whose index follows the specified Widget 
			 * in the collection.
			 * @param {Widget} objParam The Widget whose index comes before 
			 * the desired Widget. 
			 * @returns {Adobe.Incopy.Widget}
			 */
			public nextItem(objParam: Widget): Adobe.Incopy.Widget;
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
			 * @returns {Adobe.Incopy.Widget}
			 */
			public previousItem(objParam: Widget): Adobe.Incopy.Widget;
		}
	}
}