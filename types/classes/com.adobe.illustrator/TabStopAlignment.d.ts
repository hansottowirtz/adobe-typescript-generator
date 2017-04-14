/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class TabStopAlignment extends IllustratorEnumBase {
			public static readonly Center: TabStopAlignment;
			public static readonly Decimal: TabStopAlignment;
			public static readonly enumCache: CSEnumSharedCache;
			public static readonly Left: TabStopAlignment;
			public static readonly Right: TabStopAlignment;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}