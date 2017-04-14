/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class ExportType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** AutoCAD export file format. */
			public static readonly AUTOCAD: Adobe.Illustrator.ExportType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Flash export file format. */
			public static readonly FLASH: Adobe.Illustrator.ExportType;
			/** GIF export file format. */
			public static readonly GIF: Adobe.Illustrator.ExportType;
			/** JPEG export file format. */
			public static readonly JPEG: Adobe.Illustrator.ExportType;
			/** Photoshop export file format. */
			public static readonly PHOTOSHOP: Adobe.Illustrator.ExportType;
			/** PNG 24-bit export file format. */
			public static readonly PNG24: Adobe.Illustrator.ExportType;
			/** PNG 8-bit export file format. */
			public static readonly PNG8: Adobe.Illustrator.ExportType;
			/** SVG export file format. */
			public static readonly SVG: Adobe.Illustrator.ExportType;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}