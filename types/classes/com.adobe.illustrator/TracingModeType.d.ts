/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class TracingModeType extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			/** Black and white tracing mode. */
			public static readonly TRACINGMODEBLACKANDWHITE: TracingModeType;
			/** Color tracing mode. */
			public static readonly TRACINGMODECOLOR: TracingModeType;
			/** Grayscale tracing mode. */
			public static readonly TRACINGMODEGRAY: TracingModeType;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}