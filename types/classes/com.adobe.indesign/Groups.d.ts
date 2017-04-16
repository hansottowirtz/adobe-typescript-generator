/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Groups extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new Group.
			 * @param {any[]} groupItemsParam The objects to group.
			 * @param {Layer} layerParam The layer on which to create the 
			 * Group. (Optional)
			 * @param {LocationOptions} atParam The location at which to 
			 * insert the Group relative to the reference object or within 
			 * the container object. (Optional)
			 * @param {any} referenceParam The reference object. Note: 
			 * Required when the at parameter is before or after. Can 
			 * accept: Document, Spread, MasterSpread, Page, Layer or 
			 * PageItem. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new Group (Optional)
			 * @returns {Adobe.Indesign.Group}
			 */
			public add(groupItemsParam: any[], layerParam: Layer, atParam: LocationOptions, referenceParam: any, withPropertiesParam: any): Adobe.Indesign.Group;
			/**
			 * Returns any Group in the collection.
			 * @returns {Adobe.Indesign.Group}
			 */
			public anyItem(): Adobe.Indesign.Group;
			/**
			 * Displays the number of elements in the Group.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Group in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Group in the collection.
			 * @returns {Adobe.Indesign.Group}
			 */
			public firstItem(): Adobe.Indesign.Group;
			/**
			 * Returns the Group with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.Group}
			 */
			public item(indexParam: any): Adobe.Indesign.Group;
			/**
			 * Returns the Group with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.Group}
			 */
			public itemByID(idParam: number): Adobe.Indesign.Group;
			/**
			 * Returns the Group with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.Group}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Group;
			/**
			 * Returns the Groups within the specified range.
			 * @param {any} fromParam The Group, index, or name at the 
			 * beginning of the range. Can accept: Group, Long Integer or 
			 * String.
			 * @param {any} toParam The Group, index, or name at the end of 
			 * the range. Can accept: Group, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Group in the collection.
			 * @returns {Adobe.Indesign.Group}
			 */
			public lastItem(): Adobe.Indesign.Group;
			/**
			 * Returns the middle Group in the collection.
			 * @returns {Adobe.Indesign.Group}
			 */
			public middleItem(): Adobe.Indesign.Group;
			/**
			 * Returns the Group whose index follows the specified Group in 
			 * the collection.
			 * @param {Group} objParam The Group whose index comes before 
			 * the desired Group. 
			 * @returns {Adobe.Indesign.Group}
			 */
			public nextItem(objParam: Group): Adobe.Indesign.Group;
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
			 * Returns the Group with the index previous to the specified 
			 * index.
			 * @param {Group} objParam The index of the Group that follows 
			 * the desired Group.
			 * @returns {Adobe.Indesign.Group}
			 */
			public previousItem(objParam: Group): Adobe.Indesign.Group;
		}
	}
}