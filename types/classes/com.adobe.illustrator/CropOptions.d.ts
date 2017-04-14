/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class CropOptions extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			/** Japanese crop style. */
			public static readonly Japanese: CropOptions;
			/** Standard crop style. */
			public static readonly Standard: CropOptions;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}