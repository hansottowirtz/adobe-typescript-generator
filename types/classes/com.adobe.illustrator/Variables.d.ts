/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A collection of variables */
		class Variables extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * number of elements in the collection
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * create a variable
			 * @returns {Adobe.Illustrator.Variable}
			 */
			public add(): Adobe.Illustrator.Variable;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 * @param {string} nameParam
			 * @returns {Adobe.Illustrator.Variable}
			 */
			public getByName(nameParam: string): Adobe.Illustrator.Variable;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Illustrator.Variable}
			 */
			[idx: number]: Adobe.Illustrator.Variable;
			/**
			 * @returns {void}
			 */
			public removeAll(): void;
		}
	}
}