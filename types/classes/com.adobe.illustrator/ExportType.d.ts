/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class ExportType extends IllustratorEnumBase {
			/** AutoCAD export file format. */
			public static readonly AUTOCAD: ExportType;
			public static readonly enumCache: CSEnumSharedCache;
			/** Flash export file format. */
			public static readonly FLASH: ExportType;
			/** GIF export file format. */
			public static readonly GIF: ExportType;
			/** JPEG export file format. */
			public static readonly JPEG: ExportType;
			/** Photoshop export file format. */
			public static readonly PHOTOSHOP: ExportType;
			/** PNG 24-bit export file format. */
			public static readonly PNG24: ExportType;
			/** PNG 8-bit export file format. */
			public static readonly PNG8: ExportType;
			/** SVG export file format. */
			public static readonly SVG: ExportType;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}