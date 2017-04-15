/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/**
		 * The line style for nonprinting guides displayed over images.
		 */
		class GuideLineStyle extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Dashed. */
			public static readonly DASHED: Adobe.Photoshop.GuideLineStyle;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Solid. */
			public static readonly SOLID: Adobe.Photoshop.GuideLineStyle;
			/** Constructor */
			public constructor();
		}
	}
}