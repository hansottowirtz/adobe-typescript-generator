/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A collection of symbol items */
		class SymbolItems extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** number of elements in the collection */
			public readonly length: number;
			/**
			 * an instance of a symbol item
			 * @param {Adobe.Illustrator.Symbol} _symbol the symbol to make 
			 * an instance of
			 */
			public add(_symbol: Adobe.Illustrator.Symbol): Adobe.Illustrator.SymbolItem;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 * @param {string} nameParam
			 */
			public getByName(nameParam: string): Adobe.Illustrator.SymbolItem;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 */
			public index(idx: number): Adobe.Illustrator.SymbolItem;
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
			public removeAll(): void;
		}
	}
}