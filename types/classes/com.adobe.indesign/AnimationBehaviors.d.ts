/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class AnimationBehaviors extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new AnimationBehavior.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new AnimationBehavior (Optional)
			 * @returns {Adobe.Indesign.AnimationBehavior}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.AnimationBehavior;
			/**
			 * Returns any AnimationBehavior in the collection.
			 * @returns {Adobe.Indesign.AnimationBehavior}
			 */
			public anyItem(): Adobe.Indesign.AnimationBehavior;
			/**
			 * Displays the number of elements in the AnimationBehavior.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every AnimationBehavior in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first AnimationBehavior in the collection.
			 * @returns {Adobe.Indesign.AnimationBehavior}
			 */
			public firstItem(): Adobe.Indesign.AnimationBehavior;
			/**
			 * Returns the AnimationBehavior with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.AnimationBehavior}
			 */
			public item(indexParam: any): Adobe.Indesign.AnimationBehavior;
			/**
			 * Returns the AnimationBehavior with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.AnimationBehavior}
			 */
			public itemByID(idParam: number): Adobe.Indesign.AnimationBehavior;
			/**
			 * Returns the AnimationBehavior with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.AnimationBehavior}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.AnimationBehavior;
			/**
			 * Returns the AnimationBehaviors within the specified range.
			 * @param {any} fromParam The AnimationBehavior, index, or name 
			 * at the beginning of the range. Can accept: 
			 * AnimationBehavior, Long Integer or String.
			 * @param {any} toParam The AnimationBehavior, index, or name 
			 * at the end of the range. Can accept: AnimationBehavior, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last AnimationBehavior in the collection.
			 * @returns {Adobe.Indesign.AnimationBehavior}
			 */
			public lastItem(): Adobe.Indesign.AnimationBehavior;
			/**
			 * Returns the middle AnimationBehavior in the collection.
			 * @returns {Adobe.Indesign.AnimationBehavior}
			 */
			public middleItem(): Adobe.Indesign.AnimationBehavior;
			/**
			 * Returns the AnimationBehavior whose index follows the 
			 * specified AnimationBehavior in the collection.
			 * @param {AnimationBehavior} objParam The AnimationBehavior 
			 * whose index comes before the desired AnimationBehavior. 
			 * @returns {Adobe.Indesign.AnimationBehavior}
			 */
			public nextItem(objParam: AnimationBehavior): Adobe.Indesign.AnimationBehavior;
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
			 * Returns the AnimationBehavior with the index previous to the 
			 * specified index.
			 * @param {AnimationBehavior} objParam The index of the 
			 * AnimationBehavior that follows the desired 
			 * AnimationBehavior.
			 * @returns {Adobe.Indesign.AnimationBehavior}
			 */
			public previousItem(objParam: AnimationBehavior): Adobe.Indesign.AnimationBehavior;
		}
	}
}