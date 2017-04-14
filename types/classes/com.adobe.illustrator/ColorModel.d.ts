/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class ColorModel extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			/** Process color (mixed ink) */
			public static readonly PROCESS: ColorModel;
			/** Registration color (prints on in all separations) */
			public static readonly REGISTRATION: ColorModel;
			/** Spot color (separate ink) */
			public static readonly SPOT: ColorModel;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}