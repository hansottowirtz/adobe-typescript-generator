/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ExportType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly ILLUSTRATORPATHS: Adobe.Photoshop.ExportType;
			public static readonly SAVEFORWEB: Adobe.Photoshop.ExportType;
			/** Constructor */
			public constructor();
		}
	}
}