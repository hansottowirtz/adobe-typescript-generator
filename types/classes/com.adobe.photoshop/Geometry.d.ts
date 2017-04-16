/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class Geometry extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly HEPTAGON: Adobe.Photoshop.Geometry;
			public static readonly HEXAGON: Adobe.Photoshop.Geometry;
			public static readonly OCTAGON: Adobe.Photoshop.Geometry;
			public static readonly PENTAGON: Adobe.Photoshop.Geometry;
			public static readonly SQUARE: Adobe.Photoshop.Geometry;
			public static readonly TRIANGLE: Adobe.Photoshop.Geometry;
			/** Constructor */
			public constructor();
		}
	}
}