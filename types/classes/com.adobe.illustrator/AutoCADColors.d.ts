/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class AutoCADColors extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			public static readonly Max16Colors: AutoCADColors;
			public static readonly Max256Colors: AutoCADColors;
			public static readonly Max8Colors: AutoCADColors;
			public static readonly TrueColors: AutoCADColors;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}