/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PrintColorIntent extends IllustratorEnumBase {
			/** Absolute colorimetric. */
			public static readonly ABSOLUTECOLORIMETRIC: PrintColorIntent;
			public static readonly enumCache: CSEnumSharedCache;
			/** Perceptual color intent. */
			public static readonly PERCEPTUALINTENT: PrintColorIntent;
			/** Relative colorimetric. */
			public static readonly RELATIVECOLORIMETRIC: PrintColorIntent;
			/** Saturation color intent. */
			public static readonly SATURATIONINTENT: PrintColorIntent;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}