/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class StrokeFillProxyOptions extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for FILL. Fill proxy is active. */
			public static readonly fill: Adobe.Indesign.StrokeFillProxyOptions;
			/** Fill proxy is active. */
			public static readonly FILL: Adobe.Indesign.StrokeFillProxyOptions;
			/** Alias for STROKE. Stroke proxy is active. */
			public static readonly stroke: Adobe.Indesign.StrokeFillProxyOptions;
			/** Stroke proxy is active. */
			public static readonly STROKE: Adobe.Indesign.StrokeFillProxyOptions;
			/** Constructor */
			public constructor();
		}
	}
}