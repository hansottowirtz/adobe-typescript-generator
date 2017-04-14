/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class CompoundPathItem extends PageItem {
			/** The path artwork in this compound path. */
			public readonly pathItems: PathItems;
		}
	}
}