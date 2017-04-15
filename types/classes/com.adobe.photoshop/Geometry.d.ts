/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class Geometry extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Heptagon. */
			public static readonly HEPTAGON: Adobe.Photoshop.Geometry;
			/** Hexagon. */
			public static readonly HEXAGON: Adobe.Photoshop.Geometry;
			/** Octagon. */
			public static readonly OCTAGON: Adobe.Photoshop.Geometry;
			/** Pentagon. */
			public static readonly PENTAGON: Adobe.Photoshop.Geometry;
			/** Square. */
			public static readonly SQUARE: Adobe.Photoshop.Geometry;
			/** Triangle. */
			public static readonly TRIANGLE: Adobe.Photoshop.Geometry;
			/** Constructor */
			public constructor();
		}
	}
}