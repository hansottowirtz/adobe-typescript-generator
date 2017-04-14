/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class DownsampleMethod extends IllustratorEnumBase {
			/** Average Downsampling. */
			public static readonly AVERAGEDOWNSAMPLE: DownsampleMethod;
			/** Bicubic Downsampling. */
			public static readonly BICUBICDOWNSAMPLE: DownsampleMethod;
			public static readonly enumCache: CSEnumSharedCache;
			/** Downsampling. */
			public static readonly NODOWNSAMPLE: DownsampleMethod;
			/** Subsampling. */
			public static readonly SUBSAMPLE: DownsampleMethod;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}