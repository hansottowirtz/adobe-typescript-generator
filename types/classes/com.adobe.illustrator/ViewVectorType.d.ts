/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Controls the type of vector view. */
		class ViewVectorType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** No vectors. */
			public static readonly TRACINGVIEWVECTORNOTRACINGRESULT: Adobe.Illustrator.ViewVectorType;
			/** View just the paths. */
			public static readonly TRACINGVIEWVECTOROUTLINES: Adobe.Illustrator.ViewVectorType;
			/** View paths and transparent fills. */
			public static readonly TRACINGVIEWVECTOROUTLINESWITHTRACING: Adobe.Illustrator.ViewVectorType;
			/** View artwork. */
			public static readonly TRACINGVIEWVECTORTRACINGRESULT: Adobe.Illustrator.ViewVectorType;
			/** Constructor */
			public constructor();
		}
	}
}