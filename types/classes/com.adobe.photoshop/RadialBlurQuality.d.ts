/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The radial blur quality. */
		class RadialBlurQuality extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Produces best results. */
			public static readonly BEST: Adobe.Photoshop.RadialBlurQuality;
			/** Produces fast but grainy results. */
			public static readonly DRAFT: Adobe.Photoshop.RadialBlurQuality;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Produces good results. */
			public static readonly GOOD: Adobe.Photoshop.RadialBlurQuality;
			/** Constructor */
			public constructor();
		}
	}
}