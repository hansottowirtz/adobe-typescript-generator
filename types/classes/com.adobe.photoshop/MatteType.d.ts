/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class MatteType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** The current background color. */
			public static readonly BACKGROUND: Adobe.Photoshop.MatteType;
			/** Black. */
			public static readonly BLACK: Adobe.Photoshop.MatteType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** The current foreground color. */
			public static readonly FOREGROUND: Adobe.Photoshop.MatteType;
			/** Gray. */
			public static readonly NETSCAPE: Adobe.Photoshop.MatteType;
			/** None. */
			public static readonly NONE: Adobe.Photoshop.MatteType;
			/** 50% gray. */
			public static readonly SEMIGRAY: Adobe.Photoshop.MatteType;
			/** White. */
			public static readonly WHITE: Adobe.Photoshop.MatteType;
			/** Constructor */
			public constructor();
		}
	}
}