/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** The Photoshop compatibility type. */
		class PhotoshopCompatibility extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Photoshop version 6. */
			public static readonly PHOTOSHOP6: Adobe.Illustrator.PhotoshopCompatibility;
			/** Photoshop version 8. */
			public static readonly PHOTOSHOP8: Adobe.Illustrator.PhotoshopCompatibility;
			/** Constructor */
			public constructor();
		}
	}
}