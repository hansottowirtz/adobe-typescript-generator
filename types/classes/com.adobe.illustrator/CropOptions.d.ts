/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** The crop style. */
		class CropOptions extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Japanese crop style. */
			public static readonly Japanese: Adobe.Illustrator.CropOptions;
			/** Standard crop style. */
			public static readonly Standard: Adobe.Illustrator.CropOptions;
			/** Constructor */
			public constructor();
		}
	}
}