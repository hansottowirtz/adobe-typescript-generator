/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class ColorReductionMethod extends IllustratorEnumBase {
			public static readonly ADAPTIVE: ColorReductionMethod;
			public static readonly enumCache: CSEnumSharedCache;
			public static readonly PERCEPTUAL: ColorReductionMethod;
			public static readonly SELECTIVE: ColorReductionMethod;
			public static readonly WEB: ColorReductionMethod;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}