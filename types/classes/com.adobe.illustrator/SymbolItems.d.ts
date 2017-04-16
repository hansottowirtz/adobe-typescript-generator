/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A collection of symbol items */
		class SymbolItems extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * number of elements in the collection
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * an instance of a symbol item
			 * @param {Adobe.Illustrator.Symbol} _symbol the symbol to make 
			 * an instance of
			 * @returns {Adobe.Illustrator.SymbolItem}
			 */
			public add(_symbol: Adobe.Illustrator.Symbol): Adobe.Illustrator.SymbolItem;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 * @param {string} nameParam
			 * @returns {Adobe.Illustrator.SymbolItem}
			 */
			public getByName(nameParam: string): Adobe.Illustrator.SymbolItem;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Illustrator.SymbolItem}
			 */
			[idx: number]: Adobe.Illustrator.SymbolItem;
			/**
			 * @returns {void}
			 */
			public removeAll(): void;
		}
	}
}