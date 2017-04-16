/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** The collection of tags associated with a page item */
		class Tags extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * number of elements in the collection
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * create a tag
			 * @returns {Adobe.Illustrator.Tag}
			 */
			public add(): Adobe.Illustrator.Tag;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 * @param {string} nameParam
			 * @returns {Adobe.Illustrator.Tag}
			 */
			public getByName(nameParam: string): Adobe.Illustrator.Tag;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Illustrator.Tag}
			 */
			[idx: number]: Adobe.Illustrator.Tag;
			/**
			 * @returns {void}
			 */
			public removeAll(): void;
		}
	}
}