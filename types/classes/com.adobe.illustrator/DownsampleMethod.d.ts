/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class DownsampleMethod extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly AVERAGEDOWNSAMPLE: Adobe.Illustrator.DownsampleMethod;
			public static readonly BICUBICDOWNSAMPLE: Adobe.Illustrator.DownsampleMethod;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly NODOWNSAMPLE: Adobe.Illustrator.DownsampleMethod;
			public static readonly SUBSAMPLE: Adobe.Illustrator.DownsampleMethod;
			/** Constructor */
			public constructor();
		}
	}
}