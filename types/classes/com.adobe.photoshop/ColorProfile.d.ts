/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ColorProfile extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly CUSTOM: Adobe.Photoshop.ColorProfile;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly NONE: Adobe.Photoshop.ColorProfile;
			public static readonly WORKING: Adobe.Photoshop.ColorProfile;
			/** Constructor */
			public constructor();
		}
	}
}