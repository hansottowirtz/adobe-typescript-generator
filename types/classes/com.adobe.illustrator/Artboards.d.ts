/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A collection of artboards */
		class Artboards extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * number of elements in the collection
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * add artboard object
			 * @param {any[]} artboardRect size and position of artboard
			 * @returns {Adobe.Illustrator.Artboard}
			 */
			public add(artboardRect: any[]): Adobe.Illustrator.Artboard;
			/**
			 * Retrieves the index position of the active artboard in the 
			 * document's list
			 * @returns {number}
			 */
			public getActiveArtboardIndex(): number;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 * @param {string} nameParam
			 * @returns {Adobe.Illustrator.Artboard}
			 */
			public getByName(nameParam: string): Adobe.Illustrator.Artboard;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Illustrator.Artboard}
			 */
			[idx: number]: Adobe.Illustrator.Artboard;
			/**
			 * Insert an Artboard at specified location
			 * @param {any[]} artboardRect size and position of artboard
			 * @param {number} index index position where artboard should 
			 * be inserted
			 * @returns {void}
			 */
			public insert(artboardRect: any[], index: number): void;
			/**
			 * delete artboard object
			 * @param {number} index index of the crop area to be deleted
			 * @returns {void}
			 */
			public remove(index: number): void;
			/**
			 * @returns {void}
			 */
			public removeAll(): void;
			/**
			 * Makes a specific artboard active, and makes it current in 
			 * the iteration order
			 * @param {number} index The 0-based index position of the 
			 * artboard in the document list.
			 * @returns {void}
			 */
			public setActiveArtboardIndex(index: number): void;
		}
	}
}