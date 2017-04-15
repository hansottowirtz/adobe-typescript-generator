/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
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