/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class AutoKernType extends IllustratorEnumBase {
			/** Auto kerning. */
			public static readonly AUTO: AutoKernType;
			public static readonly enumCache: CSEnumSharedCache;
			/** Metrics roman only. */
			public static readonly METRICSROMANONLY: AutoKernType;
			/** No auto kerning. */
			public static readonly NOAUTOKERN: AutoKernType;
			/** Optical kerning. */
			public static readonly OPTICAL: AutoKernType;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}