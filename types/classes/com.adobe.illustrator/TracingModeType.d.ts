/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** The tracing mode: color, grayscale, black and white. */
		class TracingModeType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Black and white tracing mode. */
			public static readonly TRACINGMODEBLACKANDWHITE: Adobe.Illustrator.TracingModeType;
			/** Color tracing mode. */
			public static readonly TRACINGMODECOLOR: Adobe.Illustrator.TracingModeType;
			/** Grayscale tracing mode. */
			public static readonly TRACINGMODEGRAY: Adobe.Illustrator.TracingModeType;
			/** Constructor */
			public constructor();
		}
	}
}