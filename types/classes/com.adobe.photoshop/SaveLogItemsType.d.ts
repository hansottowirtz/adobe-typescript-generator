/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class SaveLogItemsType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly LOGFILE: Adobe.Photoshop.SaveLogItemsType;
			public static readonly LOGFILEANDMETADATA: Adobe.Photoshop.SaveLogItemsType;
			public static readonly METADATA: Adobe.Photoshop.SaveLogItemsType;
			/** Constructor */
			public constructor();
		}
	}
}