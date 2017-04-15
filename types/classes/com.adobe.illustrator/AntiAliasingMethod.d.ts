/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/**
		 * Controls the type of antialiasing method used in the 
		 * rasterization.
		 */
		class AntiAliasingMethod extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Optimize for the art object. */
			public static readonly ARTOPTIMIZED: Adobe.Illustrator.AntiAliasingMethod;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** No anti-aliasing allowed. */
			public static readonly None: Adobe.Illustrator.AntiAliasingMethod;
			/** Optimize for the type object. */
			public static readonly TYPEOPTIMIZED: Adobe.Illustrator.AntiAliasingMethod;
			/** Constructor */
			public constructor();
		}
	}
}