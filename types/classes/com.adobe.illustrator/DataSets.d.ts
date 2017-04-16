/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A collection of datasets */
		class DataSets extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * number of elements in the collection
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * create a data set
			 * @returns {Adobe.Illustrator.DataSet}
			 */
			public add(): Adobe.Illustrator.DataSet;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 * @param {string} nameParam
			 * @returns {Adobe.Illustrator.DataSet}
			 */
			public getByName(nameParam: string): Adobe.Illustrator.DataSet;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Illustrator.DataSet}
			 */
			[idx: number]: Adobe.Illustrator.DataSet;
			/**
			 * @returns {void}
			 */
			public removeAll(): void;
		}
	}
}