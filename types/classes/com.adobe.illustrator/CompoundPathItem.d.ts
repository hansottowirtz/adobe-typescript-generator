/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Compound path artwork item */
		class CompoundPathItem extends Adobe.Illustrator.PageItem {
			/**
			 * The path artwork in this compound path
			 * @type {Adobe.Illustrator.PathItems}
			 * @readonly
			 */
			public readonly pathItems: Adobe.Illustrator.PathItems;
		}
	}
}