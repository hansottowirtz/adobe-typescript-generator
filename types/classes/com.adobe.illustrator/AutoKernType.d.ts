/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class AutoKernType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Auto kerning. */
			public static readonly AUTO: Adobe.Illustrator.AutoKernType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Metrics roman only. */
			public static readonly METRICSROMANONLY: Adobe.Illustrator.AutoKernType;
			/** No auto kerning. */
			public static readonly NOAUTOKERN: Adobe.Illustrator.AutoKernType;
			/** Optical kerning. */
			public static readonly OPTICAL: Adobe.Illustrator.AutoKernType;
			/** Constructor */
			public constructor();
		}
	}
}