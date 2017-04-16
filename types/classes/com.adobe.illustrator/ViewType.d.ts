/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class ViewType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly TRACINGVIEWIMAGE: Adobe.Illustrator.ViewType;
			public static readonly TRACINGVIEWVECTOROUTLINES: Adobe.Illustrator.ViewType;
			public static readonly TRACINGVIEWVECTOROUTLINESWITHTRACING: Adobe.Illustrator.ViewType;
			public static readonly TRACINGVIEWVECTORTRACINGRESULT: Adobe.Illustrator.ViewType;
			public static readonly TRACINGVIEWVECTORWITHTRANSPARENTIMAGE: Adobe.Illustrator.ViewType;
			/** Constructor */
			public constructor();
		}
	}
}