/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/**
		 * The distribution method to use when applying an Add Noise 
		 * filter.
		 */
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