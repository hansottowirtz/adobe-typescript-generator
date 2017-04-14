/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class ElementPlacement extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			public static readonly INSIDE: ElementPlacement;
			public static readonly PLACEAFTER: ElementPlacement;
			public static readonly PLACEATBEGINNING: ElementPlacement;
			public static readonly PLACEATEND: ElementPlacement;
			public static readonly PLACEBEFORE: ElementPlacement;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}