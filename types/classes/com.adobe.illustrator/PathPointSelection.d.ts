/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class PathPointSelection extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly ANCHORPOINT: Adobe.Illustrator.PathPointSelection;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly LEFTDIRECTION: Adobe.Illustrator.PathPointSelection;
			public static readonly LEFTRIGHTPOINT: Adobe.Illustrator.PathPointSelection;
			public static readonly NOSELECTION: Adobe.Illustrator.PathPointSelection;
			public static readonly RIGHTDIRECTION: Adobe.Illustrator.PathPointSelection;
			/** Constructor */
			public constructor();
		}
	}
}