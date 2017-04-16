/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class PaintingCursors extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly BRUSHSIZE: Adobe.Photoshop.PaintingCursors;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly PRECISE: Adobe.Photoshop.PaintingCursors;
			public static readonly STANDARD: Adobe.Photoshop.PaintingCursors;
			/** Constructor */
			public constructor();
		}
	}
}