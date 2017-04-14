/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PathPointSelection extends IllustratorEnumBase {
			/** Anchor point selected. */
			public static readonly ANCHORPOINT: PathPointSelection;
			public static readonly enumCache: CSEnumSharedCache;
			/** Left direction point selected. */
			public static readonly LEFTDIRECTION: PathPointSelection;
			/** Left and right direction points selected. */
			public static readonly LEFTRIGHTPOINT: PathPointSelection;
			/** Path point not selected. */
			public static readonly NOSELECTION: PathPointSelection;
			/** Right direction point selected. */
			public static readonly RIGHTDIRECTION: PathPointSelection;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}