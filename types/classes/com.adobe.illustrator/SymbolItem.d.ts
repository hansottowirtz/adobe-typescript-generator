/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** An instance of a Symbol */
		class SymbolItem extends Adobe.Illustrator.PageItem {
			/**
			 * The symbol that was used to create this symbol item
			 * @type {Adobe.Illustrator.Symbol}
			 */
			public symbol: Adobe.Illustrator.Symbol;
			/**
			 * Break link to the symbol
			 * @returns {void}
			 */
			public breakLink(): void;
		}
	}
}