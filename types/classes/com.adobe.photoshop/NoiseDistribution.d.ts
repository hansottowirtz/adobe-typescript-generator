/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class NoiseDistribution extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly GAUSSIAN: Adobe.Photoshop.NoiseDistribution;
			public static readonly UNIFORM: Adobe.Photoshop.NoiseDistribution;
			/** Constructor */
			public constructor();
		}
	}
}