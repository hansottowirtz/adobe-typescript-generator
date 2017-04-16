/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class AutoKernType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly AUTO: Adobe.Illustrator.AutoKernType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly METRICSROMANONLY: Adobe.Illustrator.AutoKernType;
			public static readonly NOAUTOKERN: Adobe.Illustrator.AutoKernType;
			public static readonly OPTICAL: Adobe.Illustrator.AutoKernType;
			/** Constructor */
			public constructor();
		}
	}
}