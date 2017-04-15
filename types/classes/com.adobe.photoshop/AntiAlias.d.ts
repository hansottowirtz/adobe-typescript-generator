/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/**
		 * The method to use to smooth edges by softening the color 
		 * transition between edge pixels and background pixels.
		 */
		class AntiAlias extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Makes type appear somewhat sharp. */
			public static readonly CRISP: Adobe.Photoshop.AntiAlias;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Does not use anti-aliasing. */
			public static readonly NONE: Adobe.Photoshop.AntiAlias;
			/** Makes type appear its sharpest. */
			public static readonly SHARP: Adobe.Photoshop.AntiAlias;
			/** Makes type appear smoother. */
			public static readonly SMOOTH: Adobe.Photoshop.AntiAlias;
			/** Makes type appear heavier. */
			public static readonly STRONG: Adobe.Photoshop.AntiAlias;
			/** Constructor */
			public constructor();
		}
	}
}