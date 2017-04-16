/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A collection of layers */
		class Layers extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * number of elements in the collection
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * create a layer
			 * @returns {Adobe.Illustrator.Layer}
			 */
			public add(): Adobe.Illustrator.Layer;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 * @param {string} nameParam
			 * @returns {Adobe.Illustrator.Layer}
			 */
			public getByName(nameParam: string): Adobe.Illustrator.Layer;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Illustrator.Layer}
			 */
			[idx: number]: Adobe.Illustrator.Layer;
			/**
			 * @returns {void}
			 */
			public removeAll(): void;
		}
	}
}