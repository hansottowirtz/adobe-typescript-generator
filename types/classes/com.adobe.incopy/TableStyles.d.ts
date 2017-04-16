/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class TableStyles extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new TableStyle.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new TableStyle (Optional)
			 * @returns {Adobe.Incopy.TableStyle}
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.TableStyle;
			/**
			 * Returns any TableStyle in the collection.
			 * @returns {Adobe.Incopy.TableStyle}
			 */
			public anyItem(): Adobe.Incopy.TableStyle;
			/**
			 * Displays the number of elements in the TableStyle.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every TableStyle in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first TableStyle in the collection.
			 * @returns {Adobe.Incopy.TableStyle}
			 */
			public firstItem(): Adobe.Incopy.TableStyle;
			/**
			 * Returns the TableStyle with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.TableStyle}
			 */
			public item(indexParam: any): Adobe.Incopy.TableStyle;
			/**
			 * Returns the TableStyle with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.TableStyle}
			 */
			public itemByID(idParam: number): Adobe.Incopy.TableStyle;
			/**
			 * Returns the TableStyle with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.TableStyle}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.TableStyle;
			/**
			 * Returns the TableStyles within the specified range.
			 * @param {any} fromParam The TableStyle, index, or name at the 
			 * beginning of the range. Can accept: TableStyle, Long Integer 
			 * or String.
			 * @param {any} toParam The TableStyle, index, or name at the 
			 * end of the range. Can accept: TableStyle, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last TableStyle in the collection.
			 * @returns {Adobe.Incopy.TableStyle}
			 */
			public lastItem(): Adobe.Incopy.TableStyle;
			/**
			 * Returns the middle TableStyle in the collection.
			 * @returns {Adobe.Incopy.TableStyle}
			 */
			public middleItem(): Adobe.Incopy.TableStyle;
			/**
			 * Returns the TableStyle whose index follows the specified 
			 * TableStyle in the collection.
			 * @param {TableStyle} objParam The TableStyle whose index 
			 * comes before the desired TableStyle. 
			 * @returns {Adobe.Incopy.TableStyle}
			 */
			public nextItem(objParam: TableStyle): Adobe.Incopy.TableStyle;
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
			 * Returns the TableStyle with the index previous to the 
			 * specified index.
			 * @param {TableStyle} objParam The index of the TableStyle 
			 * that follows the desired TableStyle.
			 * @returns {Adobe.Incopy.TableStyle}
			 */
			public previousItem(objParam: TableStyle): Adobe.Incopy.TableStyle;
		}
	}
}