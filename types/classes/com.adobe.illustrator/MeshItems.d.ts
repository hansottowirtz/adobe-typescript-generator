/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class MeshItems extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * number of elements in the collection
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 * @param {string} nameParam
			 * @returns {Adobe.Illustrator.MeshItem}
			 */
			public getByName(nameParam: string): Adobe.Illustrator.MeshItem;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Illustrator.MeshItem}
			 */
			[idx: number]: Adobe.Illustrator.MeshItem;
			/**
			 * @returns {void}
			 */
			public removeAll(): void;
		}
	}
}