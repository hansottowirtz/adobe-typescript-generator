/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class OperatingSystem extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly OS2: Adobe.Photoshop.OperatingSystem;
			public static readonly WINDOWS: Adobe.Photoshop.OperatingSystem;
			/** Constructor */
			public constructor();
		}
	}
}