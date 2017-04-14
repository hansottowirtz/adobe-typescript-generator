/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PathPointSelection extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Anchor point selected. */
			public static readonly ANCHORPOINT: Adobe.Illustrator.PathPointSelection;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Left direction point selected. */
			public static readonly LEFTDIRECTION: Adobe.Illustrator.PathPointSelection;
			/** Left and right direction points selected. */
			public static readonly LEFTRIGHTPOINT: Adobe.Illustrator.PathPointSelection;
			/** Path point not selected. */
			public static readonly NOSELECTION: Adobe.Illustrator.PathPointSelection;
			/** Right direction point selected. */
			public static readonly RIGHTDIRECTION: Adobe.Illustrator.PathPointSelection;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}