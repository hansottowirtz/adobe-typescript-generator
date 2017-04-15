/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The type of wave. */
		class WaveType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Rolling. */
			public static readonly SINE: Adobe.Photoshop.WaveType;
			/** Square. */
			public static readonly SQUARE: Adobe.Photoshop.WaveType;
			/** Triangular. */
			public static readonly TRIANGULAR: Adobe.Photoshop.WaveType;
			/** Constructor */
			public constructor();
		}
	}
}