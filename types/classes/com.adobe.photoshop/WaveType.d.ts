/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class WaveType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly SINE: Adobe.Photoshop.WaveType;
			public static readonly SQUARE: Adobe.Photoshop.WaveType;
			public static readonly TRIANGULAR: Adobe.Photoshop.WaveType;
			/** Constructor */
			public constructor();
		}
	}
}