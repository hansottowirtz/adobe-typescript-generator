/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The line style for nonprinting grids displayed over images. */
		class GridLineStyle extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Dashed. */
			public static readonly DASHED: Adobe.Photoshop.GridLineStyle;
			/** Dotted. */
			public static readonly DOTTED: Adobe.Photoshop.GridLineStyle;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Solid. */
			public static readonly SOLID: Adobe.Photoshop.GridLineStyle;
			/** Constructor */
			public constructor();
		}
	}
}