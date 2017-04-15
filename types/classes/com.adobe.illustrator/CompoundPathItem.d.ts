/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Compound path artwork item. */
		class CompoundPathItem extends Adobe.Illustrator.PageItem {
			/** The path artwork in this compound path. */
			public readonly pathItems: Adobe.Illustrator.PathItems;
		}
	}
}