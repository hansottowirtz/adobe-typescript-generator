/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class AutoCADExportFileFormat extends IllustratorEnumBase {
			public static readonly DWG: AutoCADExportFileFormat;
			public static readonly DXF: AutoCADExportFileFormat;
			public static readonly enumCache: CSEnumSharedCache;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}