/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class PhotoshopCompatibility extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly PHOTOSHOP6: Adobe.Illustrator.PhotoshopCompatibility;
			public static readonly PHOTOSHOP8: Adobe.Illustrator.PhotoshopCompatibility;
			/** Constructor */
			public constructor();
		}
	}
}