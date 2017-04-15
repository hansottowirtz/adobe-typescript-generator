/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The type of lens. */
		class LensType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Movie Prime. */
			public static readonly MOVIEPRIME: Adobe.Photoshop.LensType;
			/** 105mm Prime. */
			public static readonly PRIME105: Adobe.Photoshop.LensType;
			/** 35mm Prime. */
			public static readonly PRIME35: Adobe.Photoshop.LensType;
			/** 50-300mm Zoom. */
			public static readonly ZOOMLENS: Adobe.Photoshop.LensType;
			/** Constructor */
			public constructor();
		}
	}
}