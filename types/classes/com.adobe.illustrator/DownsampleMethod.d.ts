/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class DownsampleMethod extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Average Downsampling. */
			public static readonly AVERAGEDOWNSAMPLE: Adobe.Illustrator.DownsampleMethod;
			/** Bicubic Downsampling. */
			public static readonly BICUBICDOWNSAMPLE: Adobe.Illustrator.DownsampleMethod;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Downsampling. */
			public static readonly NODOWNSAMPLE: Adobe.Illustrator.DownsampleMethod;
			/** Subsampling. */
			public static readonly SUBSAMPLE: Adobe.Illustrator.DownsampleMethod;
			/** Constructor */
			public constructor();
		}
	}
}