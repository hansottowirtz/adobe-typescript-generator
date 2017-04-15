/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** An instance of a Symbol. */
		class SymbolItem extends Adobe.Illustrator.PageItem {
			/** The symbol that was used to create this symbol item. */
			public symbol: Adobe.Illustrator.Symbol;
		}
	}
}