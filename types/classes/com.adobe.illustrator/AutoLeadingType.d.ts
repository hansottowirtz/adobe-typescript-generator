/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class AutoLeadingType extends IllustratorEnumBase {
			/** Roman leading type. */
			public static readonly BOTTOMTOBOTTOM: AutoLeadingType;
			public static readonly enumCache: CSEnumSharedCache;
			/** Japanese leading type. */
			public static readonly TOPTOTOP: AutoLeadingType;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}