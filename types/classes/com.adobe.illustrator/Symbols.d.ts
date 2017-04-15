/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class Symbols extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** number of elements in the collection */
			public readonly length: number;
			/**
			 * create a symbol
			 * @param {Adobe.Illustrator.PageItem} sourceArt - the art item 
			 * from which to make this symbol
			 * @param {Adobe.Illustrator.SymbolRegistrationPoint} 
			 * registrationPoint - the symbol registration point. ( 
			 * default: SymbolRegistrationPoint.SYMBOLCENTERPOINT )
			 */
			public add(sourceArt: Adobe.Illustrator.PageItem, registrationPoint: Adobe.Illustrator.SymbolRegistrationPoint): Adobe.Illustrator.Symbol;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 * @param {string} nameParam - 
			 */
			public getByName(nameParam: string): Adobe.Illustrator.Symbol;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx - 
			 */
			public index(idx: number): Adobe.Illustrator.Symbol;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx - 
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index - 
			 */
			public nextValue(index: number): any;
			public removeAll(): void;
		}
	}
}