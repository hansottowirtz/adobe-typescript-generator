/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A collection of artboards */
		class Artboards extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** number of elements in the collection */
			public readonly length: number;
			/**
			 * add artboard object
			 * @param {any[]} artboardRect - size and position of artboard
			 */
			public add(artboardRect: any[]): Adobe.Illustrator.Artboard;
			/**
			 * Retrieves the index position of the active artboard in the 
			 * document's list.
			 */
			public getActiveArtboardIndex(): number;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 */
			public index(idx: number): Adobe.Illustrator.Artboard;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index
			 */
			public nextValue(index: number): any;
			/**
			 * Delete artboard object.
			 * @param {number} index - Index of the crop area to be 
			 * deleted.
			 */
			public remove(index: number): void;
			public removeAll(): void;
			/**
			 * Makes a specific artboard active, and makes it current in 
			 * the iteration order.
			 * @param {number} index - The 0-based index position of the 
			 * artboard in the document list.
			 */
			public setActiveArtboardIndex(index: number): void;
		}
	}
}