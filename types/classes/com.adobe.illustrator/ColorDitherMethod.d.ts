/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class ColorDitherMethod extends IllustratorEnumBase {
			public static readonly DIFFUSION: ColorDitherMethod;
			public static readonly enumCache: CSEnumSharedCache;
			public static readonly NOISE: ColorDitherMethod;
			/** No dithering. */
			public static readonly NOREDUCTION: ColorDitherMethod;
			public static readonly PATTERNDITHER: ColorDitherMethod;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}