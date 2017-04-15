/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ExportType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Exports Photoshop paths as Adobe Illustrator files. */
			public static readonly ILLUSTRATORPATHS: Adobe.Photoshop.ExportType;
			/** Uses the save for web export options. */
			public static readonly SAVEFORWEB: Adobe.Photoshop.ExportType;
			/** Constructor */
			public constructor();
		}
	}
}