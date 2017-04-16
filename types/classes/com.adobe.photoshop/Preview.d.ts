/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class Preview extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly EIGHTBITTIFF: Adobe.Photoshop.Preview;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly MACOSEIGHTBIT: Adobe.Photoshop.Preview;
			public static readonly MACOSJPEG: Adobe.Photoshop.Preview;
			public static readonly MACOSMONOCHROME: Adobe.Photoshop.Preview;
			public static readonly MONOCHROMETIFF: Adobe.Photoshop.Preview;
			public static readonly NONE: Adobe.Photoshop.Preview;
			/** Constructor */
			public constructor();
		}
	}
}