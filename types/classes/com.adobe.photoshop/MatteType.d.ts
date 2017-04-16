/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class MatteType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly BACKGROUND: Adobe.Photoshop.MatteType;
			public static readonly BLACK: Adobe.Photoshop.MatteType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly FOREGROUND: Adobe.Photoshop.MatteType;
			public static readonly NETSCAPE: Adobe.Photoshop.MatteType;
			public static readonly NONE: Adobe.Photoshop.MatteType;
			public static readonly SEMIGRAY: Adobe.Photoshop.MatteType;
			public static readonly WHITE: Adobe.Photoshop.MatteType;
			/** Constructor */
			public constructor();
		}
	}
}