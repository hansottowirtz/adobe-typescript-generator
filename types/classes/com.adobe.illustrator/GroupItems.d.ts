/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A collection of group items */
		class GroupItems extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * number of elements in the collection
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * create a group item
			 * @returns {Adobe.Illustrator.GroupItem}
			 */
			public add(): Adobe.Illustrator.GroupItem;
			/**
			 * create a group item from a vector graphics file
			 * @param {File} imageFile the vector graphics file to be 
			 * embedded
			 * @returns {Adobe.Illustrator.GroupItem}
			 */
			public createFromFile(imageFile: File): Adobe.Illustrator.GroupItem;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 * @param {string} nameParam
			 * @returns {Adobe.Illustrator.GroupItem}
			 */
			public getByName(nameParam: string): Adobe.Illustrator.GroupItem;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Illustrator.GroupItem}
			 */
			[idx: number]: Adobe.Illustrator.GroupItem;
			/**
			 * @returns {void}
			 */
			public removeAll(): void;
		}
	}
}