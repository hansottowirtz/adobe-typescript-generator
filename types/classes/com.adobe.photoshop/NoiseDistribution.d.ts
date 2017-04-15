/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class NoiseDistribution extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Distributes color values of noise along a bell-shaped curve, 
			 * creating a speckled effect.
			 */
			public static readonly GAUSSIAN: Adobe.Photoshop.NoiseDistribution;
			/**
			 * Distributes color values of noise using random numbers 
			 * between 0 and plus or minus the specified value, creating a 
			 * subtle effect.
			 */
			public static readonly UNIFORM: Adobe.Photoshop.NoiseDistribution;
			/** Constructor */
			public constructor();
		}
	}
}