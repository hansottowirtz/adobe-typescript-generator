/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The operating system. */
		class OperatingSystem extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Mac OS/2 operating system. */
			public static readonly OS2: Adobe.Photoshop.OperatingSystem;
			/** Windows operating system. */
			public static readonly WINDOWS: Adobe.Photoshop.OperatingSystem;
			/** Constructor */
			public constructor();
		}
	}
}