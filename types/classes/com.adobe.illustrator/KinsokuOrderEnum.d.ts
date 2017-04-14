/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class KinsokuOrderEnum extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			public static readonly PUSHIN: KinsokuOrderEnum;
			public static readonly PUSHOUTFIRST: KinsokuOrderEnum;
			public static readonly PUSHOUTONLY: KinsokuOrderEnum;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}