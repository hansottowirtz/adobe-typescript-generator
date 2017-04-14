/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class AutoCADExportOption extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			public static readonly MaximumEditability: AutoCADExportOption;
			public static readonly PreserveAppearance: AutoCADExportOption;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}