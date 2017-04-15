/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
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