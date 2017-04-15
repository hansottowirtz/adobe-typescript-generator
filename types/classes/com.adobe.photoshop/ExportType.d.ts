/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The export options to use. */
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