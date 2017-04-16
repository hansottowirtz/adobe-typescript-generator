/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A collection of symbols */
		class Symbols extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * number of elements in the collection
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * create a symbol
			 * @param {Adobe.Illustrator.PageItem} sourceArt the art item 
			 * from which to make this symbol
			 * @param {Adobe.Illustrator.SymbolRegistrationPoint} 
			 * registrationPoint the symbol registration point. ( default: 
			 * SymbolRegistrationPoint.SYMBOLCENTERPOINT )
			 * @returns {Adobe.Illustrator.Symbol}
			 */
			public add(sourceArt: Adobe.Illustrator.PageItem, registrationPoint: Adobe.Illustrator.SymbolRegistrationPoint): Adobe.Illustrator.Symbol;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 * @param {string} nameParam
			 * @returns {Adobe.Illustrator.Symbol}
			 */
			public getByName(nameParam: string): Adobe.Illustrator.Symbol;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Illustrator.Symbol}
			 */
			[idx: number]: Adobe.Illustrator.Symbol;
			/**
			 * @returns {void}
			 */
			public removeAll(): void;
		}
	}
}