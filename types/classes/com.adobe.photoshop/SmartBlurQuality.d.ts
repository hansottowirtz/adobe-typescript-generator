/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The smart blur quality. */
		class SmartBlurQuality extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** High quality. */
			public static readonly HIGH: Adobe.Photoshop.SmartBlurQuality;
			/** Low quality. */
			public static readonly LOW: Adobe.Photoshop.SmartBlurQuality;
			/** Medium quality. */
			public static readonly MEDIUM: Adobe.Photoshop.SmartBlurQuality;
			/** Constructor */
			public constructor();
		}
	}
}