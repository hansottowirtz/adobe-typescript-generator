/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class ViewVectorType extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			/** No vectors. */
			public static readonly TRACINGVIEWVECTORNOTRACINGRESULT: ViewVectorType;
			/** View just the paths. */
			public static readonly TRACINGVIEWVECTOROUTLINES: ViewVectorType;
			/** View paths and transparent fills. */
			public static readonly TRACINGVIEWVECTOROUTLINESWITHTRACING: ViewVectorType;
			/** View artwork. */
			public static readonly TRACINGVIEWVECTORTRACINGRESULT: ViewVectorType;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}