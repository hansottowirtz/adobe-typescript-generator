/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A collection of custom spot colors */
		class Spots extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * number of elements in the collection
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * create a spot color
			 * @returns {Adobe.Illustrator.Spot}
			 */
			public add(): Adobe.Illustrator.Spot;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 * @param {string} nameParam
			 * @returns {Adobe.Illustrator.Spot}
			 */
			public getByName(nameParam: string): Adobe.Illustrator.Spot;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Illustrator.Spot}
			 */
			[idx: number]: Adobe.Illustrator.Spot;
			/**
			 * @returns {void}
			 */
			public removeAll(): void;
		}
	}
}