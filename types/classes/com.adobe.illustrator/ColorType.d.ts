/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class ColorType extends IllustratorEnumBase {
			public static readonly CMYK: ColorType;
			public static readonly enumCache: CSEnumSharedCache;
			public static readonly GRADIENT: ColorType;
			public static readonly GRAY: ColorType;
			public static readonly None: ColorType;
			public static readonly PATTERN: ColorType;
			public static readonly RGB: ColorType;
			public static readonly SPOT: ColorType;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}