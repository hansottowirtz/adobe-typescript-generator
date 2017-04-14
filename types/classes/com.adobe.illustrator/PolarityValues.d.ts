/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PolarityValues extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			public static readonly NEGATIVE: PolarityValues;
			public static readonly POSITIVE: PolarityValues;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}